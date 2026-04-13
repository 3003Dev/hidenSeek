import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';
import TurnstileGate from '../components/TurnstileGate';
import { validateChatMessage, escapeHtml, containsSuspiciousContent } from '../lib/security';

interface Ticket {
  id: string;
  user_id: string;
  username: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  status: 'open' | 'closed';
  created_at: string;
  closed_at: string | null;
  closed_by: string | null;
}

interface TicketMessage {
  id: string;
  ticket_id: string;
  user_id: string;
  username: string;
  message: string;
  image_url: string | null;
  is_owner: boolean;
  created_at: string;
}

// IDs des owners qui peuvent voir tous les tickets
const OWNER_IDS = [
  'deee5dc2-e37e-48ba-8da2-1fb5945cd235',
  '3e45559e-299c-4d49-9fe8-b2c77237d2c9',
  'aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96',
  'f479668f-4129-4c67-91bb-decba5a0e804',
  '46eea62a-4835-4b54-a23e-c20aee355760',
  '946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f',
  'c5ac1d65-40ac-4b53-85b3-8cea8fdfe491',
];

const Tickets = () => {
  const { user, profile } = useAuth();
  const { t } = useLanguage();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false); // Track si les données initiales sont chargées
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [filter, setFilter] = useState<'all' | 'open' | 'closed'>('all');

  // Chat state
  const [messages, setMessages] = useState<TicketMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number; messageId: string } | null>(null);
  const [infoContextMenu, setInfoContextMenu] = useState<{ x: number; y: number; value: string; label: string } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isOwner = user && OWNER_IDS.includes(user.id);

  // Fonction de fetch des tickets - appelée en boucle pour temps réel
  const fetchTicketsData = async () => {
    if (!user) return;

    try {
      let query = supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });

      // Si l'utilisateur n'est PAS un admin, filtrer pour ne voir que SES tickets
      if (!OWNER_IDS.includes(user.id)) {
        query = query.eq('user_id', user.id);
      }

      const { data, error } = await query;

      if (error) {
        return;
      }

      // Mettre à jour seulement si les données ont changé
      if (data) {
        setTickets(prevTickets => {
          // Comparer pour éviter re-renders inutiles
          if (JSON.stringify(prevTickets) !== JSON.stringify(data)) {
            return data;
          }
          return prevTickets;
        });
      }

      if (!initialDataLoaded) {
        setInitialDataLoaded(true);
      }
    } catch (err) {
      if (!initialDataLoaded) {
        setInitialDataLoaded(true);
      }
    }
  };

  // Charger les tickets immédiatement au montage + polling ultra rapide
  useEffect(() => {
    if (!user) return;

    // Fetch immédiat au montage
    fetchTicketsData();

    // Polling TRÈS rapide - toutes les 500ms (0.5 seconde) pour temps réel
    const interval = setInterval(fetchTicketsData, 500);

    // Aussi utiliser Supabase Realtime comme backup
    const ticketsChannel = supabase
      .channel('tickets-live-' + user.id)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tickets' }, () => {
        fetchTicketsData();
      })
      .subscribe();

    return () => {
      clearInterval(interval);
      supabase.removeChannel(ticketsChannel);
    };
  }, [user]);

  // Charger les messages quand un ticket est sélectionné
  useEffect(() => {
    if (selectedTicket) {
      fetchMessages(selectedTicket.id);
    }
  }, [selectedTicket]);

  // Auto-refresh: Rafraîchir les messages toutes les 500ms pour chat temps réel
  useEffect(() => {
    if (!selectedTicket) return;

    // Polling TRÈS rapide - toutes les 500ms pour chat instantané
    const interval = setInterval(() => {
      fetchMessages(selectedTicket.id);
    }, 500);

    // Supabase Realtime comme backup
    const messagesChannel = supabase
      .channel('messages-live-' + selectedTicket.id)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'ticket_messages' }, (payload) => {
        const msg = payload.new as { ticket_id?: string };
        if (msg.ticket_id === selectedTicket.id) {
          fetchMessages(selectedTicket.id);
        }
      })
      .subscribe();

    return () => {
      clearInterval(interval);
      supabase.removeChannel(messagesChannel);
    };
  }, [selectedTicket?.id]);

  // Scroll vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchMessages = async (ticketId: string) => {
    // Plus de loading visible - tout charge en arrière-plan silencieusement
    try {
      const { data, error } = await supabase
        .from('ticket_messages')
        .select('*')
        .eq('ticket_id', ticketId)
        .order('created_at', { ascending: true });

      if (!error && data) {
        setMessages(data);
      }
    } catch (err) {
      // Silent fail
    }
  };

  const [messageError, setMessageError] = useState<string | null>(null);

  const sendMessage = async (imageUrl?: string) => {
    if (!user || !selectedTicket || (!newMessage.trim() && !imageUrl)) return;

    // Validation du message avec la sécurité du chat
    if (newMessage.trim() && !imageUrl) {
      const validation = validateChatMessage(newMessage, user.id, {
        maxLength: 2000,
        rateLimit: { maxMessages: isOwner ? 30 : 10, windowMs: 60000 },
        allowLinks: isOwner ?? false,
        allowDiscord: isOwner ?? false,
      });

      if (!validation.isValid) {
        setMessageError(validation.error || 'Message non valide');
        setTimeout(() => setMessageError(null), 4000);
        return;
      }

      // Vérification supplémentaire XSS
      if (containsSuspiciousContent(newMessage)) {
        setMessageError('Contenu suspect détecté');
        setTimeout(() => setMessageError(null), 4000);
        return;
      }
    }

    setMessageError(null);
    setSendingMessage(true);
    try {
      const username = profile?.username || user.user_metadata?.username || 'Utilisateur';
      const sanitizedMessage = escapeHtml(newMessage.trim()) || (imageUrl ? '📷 Image' : '');

      const { error } = await supabase
        .from('ticket_messages')
        .insert({
          ticket_id: selectedTicket.id,
          user_id: user.id,
          username: escapeHtml(username),
          message: sanitizedMessage,
          image_url: imageUrl || null,
          is_owner: isOwner
        });

      if (error) {
        setMessageError('Erreur lors de l\'envoi');
        setTimeout(() => setMessageError(null), 3000);
      } else {
        setNewMessage('');
        fetchMessages(selectedTicket.id);
      }
    } catch (err) {
      setMessageError('Erreur lors de l\'envoi');
      setTimeout(() => setMessageError(null), 3000);
    } finally {
      setSendingMessage(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedTicket) return;

    // Vérifier la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessageError('Image trop volumineuse (max 5MB)');
      setTimeout(() => setMessageError(null), 3000);
      return;
    }

    // Vérifier le type MIME
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setMessageError('Type de fichier non autorisé (JPG, PNG, GIF, WEBP uniquement)');
      setTimeout(() => setMessageError(null), 3000);
      return;
    }

    // Vérifier l'extension
    const fileExt = file.name.split('.').pop()?.toLowerCase();
    const allowedExts = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    if (!fileExt || !allowedExts.includes(fileExt)) {
      setMessageError('Extension de fichier non autorisée');
      setTimeout(() => setMessageError(null), 3000);
      return;
    }

    setUploadingImage(true);
    try {
      const safeFileName = `${selectedTicket.id}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('ticket-images')
        .upload(safeFileName, file);

      if (uploadError) {
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('ticket-images')
        .getPublicUrl(safeFileName);

      await sendMessage(publicUrl);
    } catch (err) {
      // Silent fail
    } finally {
      setUploadingImage(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };





  const filteredTickets = tickets.filter(ticket => {
    if (filter === 'all') return true;
    return ticket.status === filter;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'contact': return t('tickets.category.contact');
      case 'acces_payant': return t('tickets.category.acces_payant');
      default: return category;
    }
  };

  // Parser les messages BOT
  const parseBotMessage = (message: string) => {
    const match = message.match(/__BOT_INFO__(.+)__BOT_INFO__/);
    if (match) {
      try {
        return JSON.parse(match[1]);
      } catch {
        return null;
      }
    }
    return null;
  };

  // State pour tracker si l'animation initiale a été jouée
  const [hasAnimated, setHasAnimated] = useState(false);

  // Marquer l'animation comme jouée quand le ticket est sélectionné
  useEffect(() => {
    if (selectedTicket) {
      setHasAnimated(false);
      const timer = setTimeout(() => setHasAnimated(true), 500);
      return () => clearTimeout(timer);
    }
  }, [selectedTicket?.id]);

  // Composant pour afficher les infos BOT avec animation
  const BotInfoCard = ({ info }: { info: { username: string; email: string; user_id: string; created_at: string } }) => {
    const infoItems = [
      { icon: 'fa-user', label: 'Username', value: info.username, fullValue: info.username },
      { icon: 'fa-envelope', label: 'Email', value: info.email, fullValue: info.email },
      { icon: 'fa-fingerprint', label: 'User ID', value: isOwner ? info.user_id : `${info.user_id.slice(0, 8)}...`, fullValue: info.user_id, mono: true, isUserId: true },
      { icon: 'fa-calendar', label: 'Date', value: formatDate(info.created_at), fullValue: info.created_at }
    ];

    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%'
      }}>
        {infoItems.map((item, index) => (
          <div
            key={item.label}
            onContextMenu={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setInfoContextMenu({ x: e.clientX, y: e.clientY, value: item.fullValue, label: item.label });
            }}
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              position: 'relative',
              overflow: 'hidden',
              animation: hasAnimated ? 'none' : `slideIn 0.3s ease ${index * 0.1}s both`,
              cursor: 'context-menu'
            }}
          >
            {/* Animated border */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: '10px',
              padding: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
              backgroundSize: '200% 100%',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              animation: 'borderGlow 3s linear infinite',
              pointerEvents: 'none'
            }} />

            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <i className={`fas ${item.icon}`} style={{ color: '#ffffff', fontSize: '0.9rem' }}></i>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 600 }}>
                {item.label}
              </div>
              <div style={{
                fontSize: item.mono ? '0.8rem' : '0.9rem',
                color: '#ffffff',
                fontWeight: 500,
                fontFamily: item.mono ? 'monospace' : 'inherit',
                wordBreak: 'break-all',
                lineHeight: 1.3
              }}>
                {item.value}
              </div>
            </div>
          </div>
        ))}
        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes borderGlow {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}</style>
      </div>
    );
  };

  if (!user) {
    return (
      <TurnstileGate>
      <section className="content-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <i className="fas fa-lock" style={{ fontSize: '4rem', color: 'var(--text-muted)', marginBottom: '20px' }}></i>
          <h2>{t('contact.login.title')}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            {t('tickets.nologin')}
          </p>
          <Link to="/login" className="btn btn-primary">{t('contact.login.button')}</Link>
        </div>
      </section>
      </TurnstileGate>
    );
  }

  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('tickets.header.badge')}</span>
          <h1>{t('tickets.header.title')}</h1>
          <p>{isOwner ? t('tickets.header.owner') : t('tickets.header.user')}</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          {/* Filtres et actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setFilter('all')}
              >
                {t('tickets.filter.all')} ({tickets.length})
              </button>
              <button
                className={`btn ${filter === 'open' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setFilter('open')}
              >
                {t('tickets.filter.open')} ({tickets.filter(t => t.status === 'open').length})
              </button>
              <button
                className={`btn ${filter === 'closed' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setFilter('closed')}
              >
                {t('tickets.filter.closed')} ({tickets.filter(t => t.status === 'closed').length})
              </button>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <Link to="/contact" className="btn btn-primary">
                <i className="fas fa-plus"></i> {t('tickets.filter.newticket')}
              </Link>
            </div>
          </div>

          {!initialDataLoaded ? (
            // Pendant le chargement initial, on affiche une liste vide (pas de spinner, pas de message)
            // Les données arrivent très vite, donc pas besoin de loading state
            <div style={{ minHeight: '200px' }}></div>
          ) : filteredTickets.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)'
            }}>
              <i className="fas fa-ticket-alt" style={{ fontSize: '4rem', color: 'var(--text-muted)', marginBottom: '20px' }}></i>
              <h3>{t('tickets.empty.title')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {filter === 'all'
                  ? t('tickets.empty.all')
                  : filter === 'open'
                  ? t('tickets.empty.open')
                  : t('tickets.empty.closed')
                }
              </p>
              <Link to="/contact" className="btn btn-primary">{t('tickets.empty.button')}</Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '15px' }}>
              {filteredTickets.map(ticket => (
                <div
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket)}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '20px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    borderLeft: `4px solid ${ticket.status === 'open' ? '#51cf66' : '#868e96'}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{ticket.subject}</h3>
                      {isOwner && (
                        <p style={{ margin: '5px 0 0', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                          <i className="fas fa-user"></i> {ticket.username} • {ticket.email}
                        </p>
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: ticket.category === 'contact' ? 'rgba(0, 123, 255, 0.2)' : 'rgba(255, 193, 7, 0.2)',
                        color: ticket.category === 'contact' ? '#4dabf7' : '#ffd43b'
                      }}>
                        {getCategoryLabel(ticket.category)}
                      </span>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: ticket.status === 'open' ? 'rgba(81, 207, 102, 0.2)' : 'rgba(134, 142, 150, 0.2)',
                        color: ticket.status === 'open' ? '#51cf66' : '#868e96'
                      }}>
                        {ticket.status === 'open' ? t('tickets.filter.open') : t('tickets.filter.closed')}
                      </span>
                    </div>
                  </div>
                  <p style={{
                    margin: 0,
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {ticket.message}
                  </p>
                  <p style={{ margin: '10px 0 0', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    <i className="fas fa-clock"></i> {formatDate(ticket.created_at)}
                    {isOwner && <span style={{ marginLeft: '15px' }}><i className="fas fa-fingerprint"></i> {ticket.user_id.slice(0, 8)}...</span>}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal preview image */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out'
          }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setPreviewImage(null); }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              cursor: 'pointer',
              color: 'white',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s'
            }}
          >
            <i className="fas fa-times"></i>
          </button>
          <img
            src={previewImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '8px',
              cursor: 'default'
            }}
          />
        </div>
      )}

      {/* Modal détail du ticket avec chat */}
      {selectedTicket && (
        <div
          className="settings-overlay"
          onClick={() => { setSelectedTicket(null); setMessages([]); setIsFullscreen(false); }}
          style={{ zIndex: 1000 }}
        >
          <div
            className="settings-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: isFullscreen ? '100vw' : '700px',
              width: isFullscreen ? '100vw' : undefined,
              height: isFullscreen ? '100vh' : '85vh',
              margin: isFullscreen ? 0 : undefined,
              borderRadius: isFullscreen ? 0 : undefined,
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease'
            }}
          >
            <div className="settings-header">
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-ticket-alt"></i>
                Ticket #{selectedTicket.id.slice(0, 8)}
              </h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    width: '36px',
                    height: '36px',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                  title={isFullscreen ? 'Réduire' : 'Plein écran'}
                >
                  <i className={`fas fa-${isFullscreen ? 'compress' : 'expand'}`}></i>
                </button>
                <button className="settings-close" onClick={() => { setSelectedTicket(null); setMessages([]); setIsFullscreen(false); }}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div className="settings-content" style={{ padding: isFullscreen ? '0' : '20px', flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }} onClick={() => { setContextMenu(null); setInfoContextMenu(null); }}>
              {/* Zone de chat */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(0, 0, 0, 0.2)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden'
              }}>
                {/* Messages */}
                <div style={{
                  flex: 1,
                  overflowY: 'auto',
                  padding: '15px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  {/* Infos utilisateur au début du chat */}
                  <div style={{ maxWidth: '450px', marginBottom: '10px' }} onClick={(e) => e.stopPropagation()}>
                    <BotInfoCard info={{
                      username: selectedTicket.username,
                      email: selectedTicket.email,
                      user_id: selectedTicket.user_id,
                      created_at: selectedTicket.created_at
                    }} />
                  </div>

                  {/* Sujet du ticket */}
                  <div style={{
                    background: 'rgba(77, 171, 247, 0.1)',
                    border: '1px solid rgba(77, 171, 247, 0.3)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    marginBottom: '10px'
                  }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: selectedTicket.status === 'open' ? 'rgba(81, 207, 102, 0.2)' : 'rgba(134, 142, 150, 0.2)',
                        color: selectedTicket.status === 'open' ? '#51cf66' : '#868e96'
                      }}>
                        {selectedTicket.status === 'open' ? 'Ouvert' : 'Fermé'}
                      </span>
                      <span style={{
                        padding: '4px 10px',
                        borderRadius: '12px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        background: selectedTicket.category === 'contact' ? 'rgba(0, 123, 255, 0.2)' : 'rgba(255, 193, 7, 0.2)',
                        color: selectedTicket.category === 'contact' ? '#4dabf7' : '#ffd43b'
                      }}>
                        {getCategoryLabel(selectedTicket.category)}
                      </span>
                    </div>
                    <h3 style={{ margin: '0 0 8px', fontSize: '1rem', color: '#4dabf7' }}>
                      <i className="fas fa-tag" style={{ marginRight: '8px' }}></i>
                      {selectedTicket.subject}
                    </h3>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>
                      {selectedTicket.message}
                    </p>
                  </div>

                  {messages
                    .filter((msg) => {
                      // Filtrer les messages BOT (ne pas les afficher dans le chat)
                      const isBotMessage = msg.username === 'Dbs BOT' && parseBotMessage(msg.message);
                      return !isBotMessage;
                    })
                    .map((msg) => (
                        <div
                          key={msg.id}
                          onContextMenu={(e) => {
                            if (isOwner && msg.is_owner) {
                              e.preventDefault();
                              setContextMenu({ x: e.clientX, y: e.clientY, messageId: msg.id });
                            }
                          }}
                          style={{
                            alignSelf: msg.is_owner ? 'flex-end' : 'flex-start',
                            maxWidth: '80%',
                            background: msg.is_owner ? 'rgba(77, 171, 247, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                            borderRadius: msg.is_owner ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                            padding: '12px 16px',
                            position: 'relative',
                            cursor: isOwner ? 'context-menu' : 'default'
                          }}
                        >
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                            <span style={{
                              fontWeight: 600,
                              color: msg.is_owner ? '#4dabf7' : 'var(--accent-primary)'
                            }}>
                              {msg.username} {msg.is_owner && <i className="fas fa-shield-alt" title="Support"></i>}
                            </span>
                            <span style={{ marginLeft: '8px' }}>{formatDate(msg.created_at)}</span>
                          </div>
                          {msg.image_url && (
                            <img
                              src={msg.image_url}
                              alt="Image"
                              onClick={() => setPreviewImage(msg.image_url)}
                              style={{
                                maxWidth: '100%',
                                maxHeight: '200px',
                                borderRadius: '8px',
                                marginBottom: msg.message && msg.message !== '📷 Image' ? '8px' : 0,
                                cursor: 'zoom-in'
                              }}
                            />
                          )}
                          {msg.message && msg.message !== '📷 Image' && (
                            <p style={{ margin: 0, whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>{msg.message}</p>
                          )}
                        </div>
                    ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Zone de saisie (seulement si ticket ouvert) */}
                {selectedTicket.status === 'open' && (
                  <div style={{
                    padding: '12px',
                    borderTop: '1px solid var(--border-color)',
                    background: 'rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        accept="image/*"
                        style={{ display: 'none' }}
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploadingImage || sendingMessage}
                        style={{
                          padding: '10px 14px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          color: 'var(--text-secondary)',
                          transition: 'all 0.2s ease'
                        }}
                        title="Envoyer une image"
                      >
                        {uploadingImage ? <span className="spinner" style={{ width: '16px', height: '16px' }}></span> : <i className="fas fa-image"></i>}
                      </button>
                      <textarea
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Écrivez votre message..."
                        disabled={sendingMessage}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                          }
                        }}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-md)',
                          resize: 'none',
                          minHeight: '42px',
                          maxHeight: '100px',
                          color: 'var(--text-primary)',
                          fontFamily: 'inherit'
                        }}
                        rows={1}
                      />
                      <button
                        onClick={() => sendMessage()}
                        disabled={sendingMessage || !newMessage.trim()}
                        className="btn btn-primary"
                        style={{ padding: '10px 16px' }}
                      >
                        {sendingMessage ? <span className="spinner" style={{ width: '16px', height: '16px' }}></span> : <i className="fas fa-paper-plane"></i>}
                      </button>
                    </div>
                    {messageError && (
                      <p style={{ margin: '8px 0 0', fontSize: '0.8rem', color: '#ff6b6b', fontWeight: 500 }}>
                        <i className="fas fa-exclamation-circle" style={{ marginRight: '6px' }}></i>
                        {messageError}
                      </p>
                    )}
                    <p style={{ margin: '8px 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Appuyez sur Entrée pour envoyer, Maj+Entrée pour un retour à la ligne
                    </p>
                  </div>
                )}

                {selectedTicket.status === 'closed' && (
                  <div style={{
                    padding: '15px',
                    textAlign: 'center',
                    background: 'rgba(134, 142, 150, 0.1)',
                    borderTop: '1px solid var(--border-color)',
                    color: 'var(--text-muted)'
                  }}>
                    <i className="fas fa-lock"></i> Ce ticket est fermé
                  </div>
                )}
              </div>
            </div>

            <div className="settings-footer" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSelectedTicket(null);
                  setMessages([]);
                  setIsFullscreen(false);
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

 {contextMenu && (
  <div onClick={(e) => e.stopPropagation()}>
  </div>
)}

      {/* Menu contextuel pour copier les infos */}
      {infoContextMenu && (
        <div
          style={{
            position: 'fixed',
            top: infoContextMenu.y,
            left: infoContextMenu.x,
            background: 'rgba(30, 30, 40, 0.98)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            padding: '4px',
            zIndex: 3000,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            minWidth: '180px'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              const textToCopy = infoContextMenu.value;
              navigator.clipboard.writeText(textToCopy)
                .then(() => setInfoContextMenu(null))
                .catch(() => setInfoContextMenu(null));
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              padding: '10px 14px',
              background: 'transparent',
              border: 'none',
              borderRadius: '6px',
              color: '#4dabf7',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(77, 171, 247, 0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <i className="fas fa-copy"></i>
            Copier {infoContextMenu.label}
          </button>
        </div>
      )}

    </TurnstileGate>
  );
};

export default Tickets;
