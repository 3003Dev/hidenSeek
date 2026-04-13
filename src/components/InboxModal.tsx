import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { logger } from '../lib/logger';
import { useNavigate } from 'react-router-dom';

interface InboxModalProps {
  onClose: () => void;
}

interface Notification {
  id: string;
  type: 'new_ticket' | 'new_message';
  ticket_id?: string;
  ticket_subject?: string;
  from_username: string;
  from_user_id: string;
  message_preview: string;
  created_at: string;
  read: boolean;
}

// IDs des owners qui reçoivent les notifications de tous les tickets
const OWNER_IDS = [
  'deee5dc2-e37e-48ba-8da2-1fb5945cd235',
  '3e45559e-299c-4d49-9fe8-b2c77237d2c9',
  'aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96',
  'f479668f-4129-4c67-91bb-decba5a0e804',
  '46eea62a-4835-4b54-a23e-c20aee355760',
  '946f8b8b-6057-4dc9-9615-e1cfa8eb9c9f',
  'c5ac1d65-40ac-4b53-85b3-8cea8fdfe491',
];

// Son de notification (base64 encoded short beep)
const NOTIFICATION_SOUND = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleVQHAIve/NzFsKN+WjM5Z5Olr5h7WDgxQ1hufomEeWJNPD1MXGZ0eXhsXkxFRUlUX2dscW9pYltXWFxiZ2xua2hjX19hZWpucHBsZ2ViYmRnam1wb2xoZWNjZGdqbXBwbWpmZGRlZ2ptcG9saGVjY2RnaW1vb2xoZWNjZGdpbW9ubGhlY2NkZ2ltb25sZ2VjY2RnZ2ptbmxnZGJhYmVnam1ubGhlY2JjZWdpbG5saGViYmJkZmlsbm1rZ2RiYmNlZ2lrbW1qZ2RiYmNlZ2lrbG1qZ2RiYWJkZmhrbG1qZ2RhYGFjZWdqbG1qZ2RhYGFjZWdqbGxqZ2RhYGFjZWdqbGxqZ2RhYGBiZGZpamxrZ2RhYF9gYmRnaWtsaWdjYF9fYWNlaGpramdkYWBfYGJkZmhqamdkYWBfYGJkZmhqamdjYF9fYWNlaGlqaGViYF9fYGJkZmhpamdjYF9eX2BjZWdpamdhYF5dXmBiZGZoaGdjYF5dXmBiZGZoaGdhX15dXV9hY2VnaGhlYl9dXVxeYGJkZmhoZWFfXVtcXmBiZGZnZmNhXl1cXF5gYmRlZ2ZjYF5cW1xeYGJkZWdmY2BdXFtbXWBiZGVmZmNgXVtaWltdYGJjZWZlYl9cWllZW11fYWNlZWVjYF1bWVlZW15gYmNkZGNgXltaWFlaXF5gYmNkY2JgXVtZWFhaXF5gYWNjY2FfXFpZWFlaXF5gYWJjYmFfXFpZV1haXF1fYWJiYmFfXFpYV1hZW11fYGFiYmFfXFpYV1dZWl1eYGBhYWBfXVtZV1dYWlxdX2BhYWBfXFtZV1dYWVtdXmBgYGBfXFtZV1dYWVtcXl9gYGBfXFtZV1dYWVtcXl9fX19fXFtZV1ZXWFpbXV5fX19fXlxaWFdWV1haXF1eX19fXl1bWVhWVldYWlxdXl9fXl1bWldWVldYWltcXl5fXl1bWldWVldYWVtcXl5eXl1bWVdWVVdYWVtcXV5eXl1cWldWVVZXWFpbXF1eXl1cWldVVVZXWFpbXF1dXl1cWldVVFVWV1laW1xdXV1cWldVVFRVV1hZWlxcXV1cW1lXVVRUVVdYWVpbXF1dXFtZV1VUU1RVV1hZW1tcXFxbWVdVVFNUVVdYWVpbXFxcW1pYVlRTU1RWV1hZW1tbXFtaWFZUUlNTVVZYWVpbW1tbWlhXVVNSUlNVVlhZWltbW1taWFdVU1JSU1VWV1lZW1tbW1pYVlVTUVJTVVZXWVpbW1taWlhWVFNRUVNUVldYWVpbW1taWVdVVFJRUVJUVVdYWVpaW1pZWFZUU1FRUlNUVldYWVpaWllYVlRTUVBRUlNVVldYWVlZWVhWVVNSUFBRUlNVVldYWVlZWFdVVFJRUFBRUlNVVldYWFlZWFdVU1JQUFBRU1RVVldYWFhYV1ZUU1FPT1BSU1RWVldYWFhYVlVTUVBPT1BSU1RVVldXWFhXVlRTUU9PT1BSU1RVVldXV1dWVVNSUE9OT1BSU1RVVlZXV1dWVVNSUE9OT1BRUlRVVlZXV1dWVFNRUE5OT1BSU1RVVlZWVlVUU1FQTU5OUFBRUlRVVVVWVlVUU1FQTU5OT1BRUlNUVVVWVlVUU1FPTk1NT09QUVJTVFVVVVVUUlFPTk1NTk9QUVJTVFVVVVRTUlBPTU1NTk9QUVJTVFRVVFRTUVBOTUxMTU5PUFFSUlNUVFRTUVBOTUxMTE1OT1BRUlJTU1NTUVBPTU1MTExNTk9QUVJSUlNTUlFPTk1MTExMTU5PUFBRUlJSUlFPTk1MTExMTE1OT1BRUVJSUlFQTk1MTEtLTE1OT1BRUVFRUVFPTk1MS0tLTE1OT09QUVFRUVBPTUxLS0tLTE1OTk9QUFBQT09OTUxLS0tLTE1OTk9PT1BQT05NTExLS0tLTE1OTk9PT09PTk1NTExLS0tMTE1OTk5PT09OTk1MTEtLSktLTE1NTk5OTk5NTUxMS0tKSkpLTE1NTU5OTk1NTExLS0pKSktLTE1NTU5OTU1MTEtLSkpKSktLTE1NTU1NTUxMS0tKSkpKSktLTE1NTU1NTExLS0pKSkpKSktMTE1NTUxMTEtLSkpKSkpKSktMTExMTExMTEtLSkpKSkpKSktMTExMTExMS0tKSkpKSkpKSktMTExMTEtLS0tKSkpKSkpKSktLTExMTEtLSkpKSkpKSkpKS0tMTExLS0tKSkpKSkpKSkpKS0tLTEtLSklKSkpKSkpKSkpLS0tLSklJSkpKSkpKSkpKSkpLS0tKSkpJSklKSkpKSkpKSkpKS0pKSkpJSUlKSkpKSkpKSkpKSkpKSkpJSUlJSkpKSkpKSkpKSkpKSkpJSUlJSUlKSkpKSkpKSkpKSkpJSUlJSUlJSUlKSkpKSkpKSklJSUlJSUlJSUlJSkpKSkpKSklJSUlJSUlJSUlJSkpKSklJSUlJSUlJSUlJSUlJSkpJSUlJSUlJSUlJSUlJSUlJSklJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSQ==';

const InboxModal = ({ onClose }: InboxModalProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, _setLoading] = useState(false); // Plus de loading visible
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastNotificationCountRef = useRef(0);

  const isOwner = user && OWNER_IDS.includes(user.id);

  // Initialiser l'audio
  useEffect(() => {
    audioRef.current = new Audio(NOTIFICATION_SOUND);
    audioRef.current.volume = 0.5;
  }, []);

  // Jouer le son de notification
  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignorer les erreurs audio (autoplay policy)
      });
    }
  };

  // Charger les notifications - polling rapide pour temps réel
  const loadNotifications = async () => {
    if (!user) return;

    try {
      const notifs: Notification[] = [];

      // Récupérer tous les tickets
      const { data: tickets, error: ticketsError } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(30);

      if (ticketsError) {
        logger.error('Error fetching tickets for inbox:', ticketsError.message);
      }

      if (tickets && tickets.length > 0) {
        // Pour les owners: afficher tous les tickets
        // Pour les users: afficher seulement leurs tickets
        const relevantTickets = isOwner ? tickets : tickets.filter(t => t.user_id === user.id);

        for (const ticket of relevantTickets) {
          notifs.push({
            id: `ticket-${ticket.id}`,
            type: 'new_ticket',
            ticket_id: ticket.id,
            ticket_subject: ticket.subject,
            from_username: ticket.username,
            from_user_id: ticket.user_id,
            message_preview: ticket.message.substring(0, 100) + (ticket.message.length > 100 ? '...' : ''),
            created_at: ticket.created_at,
            read: isNotificationRead(`ticket-${ticket.id}`)
          });
        }
      }

      // Récupérer les messages récents
      const { data: allMessages, error: messagesError } = await supabase
        .from('ticket_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (messagesError) {
        logger.error('Error fetching messages for inbox:', messagesError.message);
      }

      if (allMessages && allMessages.length > 0) {
        // Filtrer les messages pertinents
        let relevantMessages = allMessages;

        if (isOwner) {
          // Owners voient les messages des users (pas des owners)
          relevantMessages = allMessages.filter(msg => !msg.is_owner);
        } else {
          // Users voient les réponses des owners sur leurs tickets
          const userTicketIds = tickets?.filter(t => t.user_id === user.id).map(t => t.id) || [];
          relevantMessages = allMessages.filter(msg => msg.is_owner && userTicketIds.includes(msg.ticket_id));
        }

        // Grouper par ticket pour éviter les doublons
        const ticketMessages = new Map<string, typeof allMessages[0]>();
        for (const msg of relevantMessages) {
          if (!ticketMessages.has(msg.ticket_id)) {
            ticketMessages.set(msg.ticket_id, msg);
          }
        }

        for (const [, msg] of ticketMessages) {
          // Ne pas ajouter si déjà dans les tickets
          if (!notifs.find(n => n.id === `ticket-${msg.ticket_id}`)) {
            const ticket = tickets?.find(t => t.id === msg.ticket_id);
            notifs.push({
              id: `msg-${msg.id}`,
              type: 'new_message',
              ticket_id: msg.ticket_id,
              ticket_subject: ticket?.subject || 'Nouveau message',
              from_username: msg.username,
              from_user_id: msg.user_id,
              message_preview: msg.message.substring(0, 100) + (msg.message.length > 100 ? '...' : ''),
              created_at: msg.created_at,
              read: isNotificationRead(`msg-${msg.id}`)
            });
          }
        }
      }


      // Trier par date (plus récent en premier)
      notifs.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

      // Jouer le son si nouvelles notifications
      const unreadCount = notifs.filter(n => !n.read).length;
      if (unreadCount > lastNotificationCountRef.current && lastNotificationCountRef.current > 0) {
        playNotificationSound();
      }
      lastNotificationCountRef.current = unreadCount;

      // Mettre à jour seulement si les données ont changé
      setNotifications(prevNotifs => {
        if (JSON.stringify(prevNotifs) !== JSON.stringify(notifs)) {
          return notifs;
        }
        return prevNotifs;
      });
    } catch (err) {
      logger.error('Error loading notifications:', err);
    }
  };

  // Vérifier si une notification a été lue
  const isNotificationRead = (notifId: string): boolean => {
    const readNotifs = localStorage.getItem(`read_notifications_${user?.id}`) || '[]';
    try {
      const parsed = JSON.parse(readNotifs);
      return parsed.includes(notifId);
    } catch {
      return false;
    }
  };

  // Marquer une notification comme lue
  const markAsRead = (notifId: string) => {
    if (!user) return;

    const key = `read_notifications_${user.id}`;
    const readNotifs = localStorage.getItem(key) || '[]';
    try {
      const parsed = JSON.parse(readNotifs);
      if (!parsed.includes(notifId)) {
        parsed.push(notifId);
        // Garder seulement les 100 dernières notifications lues
        if (parsed.length > 100) {
          parsed.shift();
        }
        localStorage.setItem(key, JSON.stringify(parsed));
      }
    } catch {
      localStorage.setItem(key, JSON.stringify([notifId]));
    }

    setNotifications(prev =>
      prev.map(n => n.id === notifId ? { ...n, read: true } : n)
    );
  };

  // Marquer tout comme lu
  const markAllAsRead = () => {
    if (!user) return;

    const key = `read_notifications_${user.id}`;
    const allIds = notifications.map(n => n.id);
    localStorage.setItem(key, JSON.stringify(allIds.slice(-100)));

    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Naviguer vers le ticket
  const goToTicket = (notification: Notification) => {
    markAsRead(notification.id);
    onClose();
    navigate('/tickets');
  };

  useEffect(() => {
    // Fetch immédiat au montage
    loadNotifications();

    // Polling TRÈS rapide - toutes les 500ms pour temps réel instantané
    const interval = setInterval(loadNotifications, 500);

    // Supabase Realtime comme backup
    const ticketsChannel = supabase
      .channel('inbox-tickets-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'tickets' }, () => {
        loadNotifications();
      })
      .subscribe();

    const messagesChannel = supabase
      .channel('inbox-messages-live')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'ticket_messages' }, () => {
        loadNotifications();
      })
      .subscribe();

    return () => {
      clearInterval(interval);
      supabase.removeChannel(ticketsChannel);
      supabase.removeChannel(messagesChannel);
    };
  }, [user?.id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();

    if (diff < 60000) return 'À l\'instant';
    if (diff < 3600000) return `Il y a ${Math.floor(diff / 60000)} min`;
    if (diff < 86400000) return `Il y a ${Math.floor(diff / 3600000)}h`;

    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div
        className="settings-modal"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '500px', maxHeight: '80vh' }}
      >
        <div className="settings-header">
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-inbox"></i>
            Inbox
            {unreadCount > 0 && (
              <span style={{
                background: '#ff6b6b',
                color: 'white',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                {unreadCount}
              </span>
            )}
          </h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  cursor: 'pointer',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
                title="Tout marquer comme lu"
              >
                <i className="fas fa-check-double"></i>
              </button>
            )}
            <button className="settings-close" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        <div className="settings-content" style={{ padding: '0', maxHeight: '60vh', overflowY: 'auto' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <span className="spinner" style={{ width: '32px', height: '32px' }}></span>
              <p style={{ marginTop: '15px', color: 'var(--text-secondary)' }}>Chargement...</p>
            </div>
          ) : notifications.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
              <i className="fas fa-inbox" style={{ fontSize: '3rem', marginBottom: '15px', opacity: 0.5 }}></i>
              <p>Aucune notification</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  onClick={() => goToTicket(notif)}
                  style={{
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--border-color)',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                    background: notif.read ? 'transparent' : 'rgba(77, 171, 247, 0.08)',
                    display: 'flex',
                    gap: '12px',
                    alignItems: 'flex-start'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = notif.read ? 'transparent' : 'rgba(77, 171, 247, 0.08)'}
                >
                  {/* Indicateur non lu */}
                  {!notif.read && (
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#4dabf7',
                      flexShrink: 0,
                      marginTop: '6px'
                    }} />
                  )}

                  {/* Icône */}
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background:
                      notif.type === 'new_ticket'
                        ? 'rgba(81, 207, 102, 0.2)'
                        : 'rgba(77, 171, 247, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i
                      className={`fas ${
                        notif.type === 'new_ticket'
                          ? 'fa-ticket-alt'
                          : 'fa-comment'
                      }`}
                      style={{
                        color: notif.type === 'new_ticket'
                          ? '#51cf66'
                          : '#4dabf7',
                        fontSize: '1rem'
                      }}
                    ></i>
                  </div>

                  {/* Contenu */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '4px'
                    }}>
                      <span style={{
                        fontWeight: notif.read ? 500 : 600,
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem'
                      }}>
                        {notif.type === 'new_ticket'
                          ? 'Nouveau ticket'
                          : 'Nouvelle réponse'}
                      </span>
                      <span style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-muted)',
                        flexShrink: 0
                      }}>
                        {formatDate(notif.created_at)}
                      </span>
                    </div>
                    <p style={{
                      margin: '0 0 4px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}>
                      <i className="fas fa-user" style={{ marginRight: '6px', opacity: 0.7 }}></i>
                      {notif.from_username}
                    </p>
                    <p style={{
                      margin: 0,
                      color: 'var(--text-muted)',
                      fontSize: '0.85rem',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {notif.message_preview}
                    </p>
                  </div>

                  {/* Flèche */}
                  <i className="fas fa-chevron-right" style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    alignSelf: 'center'
                  }}></i>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="settings-footer" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            {notifications.length} notification{notifications.length !== 1 ? 's' : ''}
          </span>
          <button className="btn btn-outline" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default InboxModal;
