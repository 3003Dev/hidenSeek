import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { logger } from '../lib/logger';
import SettingsModal from './SettingsModal';
import InboxModal from './InboxModal';
import ApiAccessModal from './ApiAccessModal';

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

// Son de notification
const NOTIFICATION_SOUND =
  'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleVQHAIve/NzFsKN+WjM5Z5Olr5h7WDgxQ1hufomEeWJNPD1MXGZ0eXhsXkxFRUlUX2dscW9pYltXWFxiZ2xua2hjX19hZWpucHBsZ2ViYmRnam1wb2xoZWNjZGdqbXBwbWpmZGRlZ2ptcG9saGVjY2RnZ2ptbmxnZGJhYmVnam1ubGhlY2JjZWdpbG5saGViYmJkZmlsbm1rZ2RiYmNlZ2lrbW1qZ2RiYmNlZ2lrbGxqZ2RhYGFjZWdqbG1qZ2RhYGFjZWdqbGxqZ2RhYGFjZWdqbGxqZ2RhYGBiZGZpamxrZ2RhYF9gYmRnaWtsaWdjYF9fYWNlaGpramdkYWBfYGJkZmhqamdkYWBfYGJkZmhqamdjYF9fYWNlaGlqaGViYF9fYGJkZmhpamdjYF5eX2BjZWdpamdhYF5dXmBiZGZoaGdjYF5dXmBiZGZoaGdhX15dXV9hY2VnaGhlYl9dXVxeYGJkZmhoZWFfXVtcXmBiZGZnZmNhXl1cXF5gYmRlZ2ZjYF5cW1xeYGJkZWdmY2BdXFtbXWBiZGVmZmNgXVtaWltdYGJjZWZlYl9cWllZW11fYWNlZWVjYF1bWVlZW15gYmNkZGNgXltaWFlaXF5gYWNkY2JgXVtZWFhaXF5gYWJjYmFfXFpZV1haXF1fYWJiYmFfXFpYV1hZW11fYGFiYmFfXFpYV1dZWl1eYGBhYWBfXVtZV1dYWlxdX2BhYWBfXFtZV1dYWVtdXmBgYGBfXFtZV1dYWVtcXl9gYGBfXFtZV1dYWVtcXl9fX19fXFtZV1ZXWFpbXV5fX19fXlxaWFdWV1haXF1eX19fXl1bWVhWVldYWlxdXl9fXl1bWldWVldYWltcXl5fXl1bWldWVldYWVtcXl5eXl1bWVdWVVdYWVtcXV5eXl1cWldWVVZXWFpbXF1eXl1cWldVVVZXWFpbXF1dXl1cWldVVFVWV1laW1xdXV1cW1dVVFRVV1hZWlxcXV1cW1lXVVRUVVdYWVpbXFxcW1pYVlRTU1RWV1hZW1tbXFtaWFZUUlNTVVZYWVpbW1tbWlhXVVNSUlNVVlhZWltbW1taWFdVU1JSU1VWV1lZW1tbW1pYVlVTUVJTVVZXWVpbW1taWlhWVFNRUVNUVldYWVpbW1taWVdVVFJRUVJUVVdYWVpaW1pZWFZUU1FRUlNUVldYWVpaWllYVlRTUVBRUlNVVldYWVlZWVhWVVNSUFBRUlNVVldYWVlZWFdVVFJRUFBRUlNVVldYWFlZWFdVU1JQUFBRU1RVVldYWFhYV1ZUU1FPT1BSU1RWVldYWFhYVlVTUVBPT1BSU1RVVldXWFhXVlRTUU9PT1BSU1RVVldXV1dWVVNSUE9OT1BSU1RVVlZXV1dWVVNSUE9OT1BRUlRVVlZXV1dWVFNRUE5OT1BSU1RVVlZWVlVUU1FQTU5OUFBRUlRVVVVWVlVUU1FQTU5OT1BRUlNUVVVWVlVUU1FPTk1NT09QUVJTVFVVVVVUUlFPTk1NTk9QUVJTVFVVVVRTUlBPTU1NTk9QUVJTVFRVVFRTUVBOTUxMTU5PUFFSUlNUVFRTUVBOTUxMTE1OT1BRUlJTU1NTUVBPTU1MTExNTk9QUVJSUlNTUlFPTk1MTExMTU5PUFBRUlJSUlFPTk1MTEtLTE1OT1BRUVFRUVFPTk1MS0tLTE1OT09QUVFRUVBPTUxLS0tLTE1OTk9QUFBQT09OTUxLS0tLTE1OTk9PT1BQT05NTExLS0tLTE1OTk9PT09PTk1NTExLS0tMTE1OTk5PT09OTk1MTEtLSktLTE1NTk5OTk5NTUxMS0tKSkpLTE1NTU5OTk1NTExLS0pKSktLTE1NTU5OTU1MTEtLSkpKSktLTE1NTU1NTUxMS0tKSkpKSktLTE1NTU1NTExLS0pKSkpKSktMTExMTExMTEtLSkpKSkpKSktMTExMTExMS0tKSkpKSkpKSktMTExMTEtLS0tKSkpKSkpKSktLTExMTEtLSkpKSkpKSkpKS0tMTExLS0tKSkpKSkpKSkpKSkpLS0tKSkpJSklKSkpKSkpKSkpKS0pKSkpJSUlKSkpKSkpKSkpKSkpKSkpJSUlJSkpKSkpKSkpKSkpKSkpJSUlJSUlKSkpKSkpKSkpKSkpJSUlJSUlJSUlKSkpKSkpKSklJSUlJSUlJSUlJSkpKSkpKSklJSUlJSUlJSUlJSkpKSklJSUlJSUlJSUlJSUlJSkpJSUlJSUlJSUlJSUlJSUlJSklJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSQ==';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showInbox, setShowInbox] = useState(false);
  const [showApiAccess, setShowApiAccess] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [canSeeApi, setCanSeeApi] = useState(false);
  const [, setActiveUsers] = useState(0);
  const presenceChannelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);
  

  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { language, setLanguage, t } = useLanguage();
  const isOwner = !!user && OWNER_IDS.includes(user.id);


// Présence temps réel (compte tous les visiteurs, connectés ou non)
useEffect(() => {
  // ✅ empêche double subscribe (StrictMode + re-render)
  if (presenceChannelRef.current) return;

  const visitKey = (() => {
    const stored = localStorage.getItem('seek_presence_id');
    if (stored) return stored;
    const newKey = `visit_${crypto.randomUUID?.() ?? Math.random().toString(36).slice(2)}`;
    localStorage.setItem('seek_presence_id', newKey);
    return newKey;
  })();

  const channel = supabase.channel('site_presence', {
    config: { presence: { key: visitKey } }
  });

  presenceChannelRef.current = channel;

  const syncPresence = () => {
    const state = channel.presenceState();
    const total = Object.values(state).reduce(
      (acc, users) => acc + (Array.isArray(users) ? users.length : 0),
      0
    );
    setActiveUsers(total > 0 ? total : 1);
  };

  channel
    .on('presence', { event: 'sync' }, syncPresence)
    .subscribe((status) => {
      if (status === 'SUBSCRIBED') {
        // visiteur initial
        channel.track({ user_id: null, ts: Date.now() });
        syncPresence();
      }
    });

  return () => {
    supabase.removeChannel(channel);
    presenceChannelRef.current = null;
  };
}, []);

// Update presence quand user change (login/logout)
useEffect(() => {
  const ch = presenceChannelRef.current;
  if (!ch) return;
  ch.track({ user_id: user?.id ?? null, ts: Date.now() });
}, [user?.id]);


// Vérifier si l'utilisateur est premium
useEffect(() => {
  const checkPremiumStatus = async () => {
    if (!user) {
      setCanSeeApi(false);
      return;
    }

    try {
      setCanSeeApi(true); // tous les utilisateurs connectés
    } catch {
      setCanSeeApi(true);
    }
  };

  checkPremiumStatus();
}, [user]);
// Charger le nombre de notifications non lues
useEffect(() => {
  if (!user) {
    setUnreadCount(0);
    return;
  }

  const loadUnreadCount = async () => {
    try {
      const readNotifsKey = `read_notifications_${user.id}`;
      const readNotifs = localStorage.getItem(readNotifsKey) || '[]';

      let readIds: string[] = [];
      try {
        readIds = JSON.parse(readNotifs);
      } catch {
        readIds = [];
      }

      let count = 0;

      if (isOwner) {
        const { data: tickets } = await supabase
          .from('tickets')
          .select('id')
          .order('created_at', { ascending: false })
          .limit(20);

        if (tickets) {
          for (const ticket of tickets) {
            if (!readIds.includes(`ticket-${ticket.id}`)) count++;
          }
        }

        const { data: messages } = await supabase
          .from('ticket_messages')
          .select('id')
          .eq('is_owner', false)
          .order('created_at', { ascending: false })
          .limit(30);

        if (messages) {
          for (const msg of messages) {
            if (!readIds.includes(`msg-${msg.id}`)) count++;
          }
        }
      } else {
        const { data: userTickets } = await supabase
          .from('tickets')
          .select('id')
          .eq('user_id', user.id);

        if (userTickets) {
          for (const ticket of userTickets) {
            const { data: messages } = await supabase
              .from('ticket_messages')
              .select('id')
              .eq('ticket_id', ticket.id)
              .eq('is_owner', true);

            if (messages) {
              for (const msg of messages) {
                if (!readIds.includes(`msg-${msg.id}`)) count++;
              }
            }
          }
        }
      }

      setUnreadCount(count);
    } catch (err) {
      logger.error('Error loading unread count:', err);
    }
  };

  loadUnreadCount();
  const interval = window.setInterval(loadUnreadCount, 1000);

  const playSound = () => {
    const audio = new Audio(NOTIFICATION_SOUND);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  const ticketsChannel = supabase
    .channel('navbar-tickets')
    .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'tickets' }, () => {
      if (isOwner) {
        playSound();
        loadUnreadCount();
      }
    })
    .subscribe();

  const messagesChannel = supabase
    .channel('navbar-messages')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'ticket_messages' },
      (payload) => {
        const msg = payload.new as { is_owner: boolean; user_id: string };
        if ((isOwner && !msg.is_owner) || (!isOwner && msg.is_owner)) {
          playSound();
          loadUnreadCount();
        }
      }
    )
    .subscribe();

  return () => {
    window.clearInterval(interval);
    supabase.removeChannel(ticketsChannel);
    supabase.removeChannel(messagesChannel);
  };
}, [user?.id, isOwner]);


  const isActive = (path: string) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      logger.error('Logout error:', err);
    } finally {
      setMobileMenuOpen(false);
      navigate('/');
    }
  };

  return (
    <>
      {/* Wrapper pour centrer la navbar */}
      <div style={{ padding: '12px 20px 0 20px' }}>
        <nav
          style={{
            background: '#000000',
            border: '1px solid #333',
            borderRadius: '12px',
            padding: '0 24px',
            position: 'sticky',
            top: '12px',
            zIndex: 1000,
            maxWidth: '1200px',
            margin: '0 auto',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '50px'
            }}
          >
            {/* Logo à gauche */}
            <Link
              to="/"
              className="navbar-logo"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span
                  className="logo-title"
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1
                  }}
                >
                  Dbs
                </span>
              </div>
            </Link>

            {/* Navigation centrale */}
            <ul
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                listStyle: 'none',
                margin: 0,
                padding: 0
              }}
              className="desktop-nav"
            >
              <li>
                <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/features" className={`nav-link ${isActive('/features') ? 'active' : ''}`}>
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'active' : ''}`}>
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  {t('nav.contact')}
                </Link>
              </li>
              {user && canSeeApi && (
                <li>
                  <Link to="/tickets" className={`nav-link ${isActive('/tickets') ? 'active' : ''}`}>
                    {t('nav.tickets')}
                  </Link>
                </li>
              )}
              {user && canSeeApi && (
                <li>
                  <Link to="/api-docs" className={`nav-link ${isActive('/api-docs') ? 'active' : ''}`}>
                    {t('nav.api')}
                  </Link>
                </li>
              )}
            </ul>

            {/* Boutons à droite */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              className="desktop-nav"
            >
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                style={{
                  background: 'transparent',
                  border: '1px solid #444',
                  color: '#ffffff',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                className="language-toggle"
              >
                <i className={`fas fa-globe`}></i>
                {language === 'fr' ? 'EN' : 'FR'}
              </button>

              {user ? (
                <>
                  {/* Bouton API Access pour premium */}
                  {user && canSeeApi && (
                    <button
                      onClick={() => setShowApiAccess(true)}
                      style={{
                        background: 'transparent',
                        border: '1px solid #444',
                        color: '#ffffff',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        transition: 'all 0.2s'
                      }}
                      title={t('nav.apiAccess')}
                    >
                      &lt;/&gt;
                    </button>
                  )}

                  {/* Settings */}
                  <button
                    className="icon-btn"
                    onClick={() => setShowSettings(true)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#888888',
                      padding: '8px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'color 0.2s ease'
                    }}
                    title={t('nav.settings')}
                  >
                    <i className="fas fa-cog"></i>
                  </button>

                  {/* Inbox */}
                  <button
                    className="icon-btn"
                    onClick={() => setShowInbox(true)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#888888',
                      padding: '8px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      position: 'relative',
                      transition: 'color 0.2s ease'
                    }}
                    title={t('nav.inbox')}
                  >
                    <i className="fas fa-inbox"></i>
                    {unreadCount > 0 && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '0',
                          right: '0',
                          background: '#ff4757',
                          color: 'white',
                          borderRadius: '50%',
                          width: '15px',
                          height: '15px',
                          fontSize: '0.6rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          animation: 'pulse 2s infinite'
                        }}
                      >
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </span>
                    )}
                  </button>


                  <button
                    onClick={handleLogout}
                    style={{
                      background: '#ffffff',
                      border: 'none',
                      color: '#000000',
                      padding: '7px 14px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                  >
                    {t('nav.logout')}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    style={{
                      color: '#888888',
                      textDecoration: 'none',
                      padding: '7px 14px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      transition: 'all 0.2s'
                    }}
                  >
                    {t('nav.login')}
                  </Link>
                  <Link
                    to="/register"
                    style={{
                      background: '#ffffff',
                      color: '#000000',
                      textDecoration: 'none',
                      padding: '7px 14px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      transition: 'all 0.2s'
                    }}
                  >
                    {t('nav.register')}
                  </Link>
                </>
              )}
            </div>

            {/* Menu burger mobile */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                color: 'white',
                fontSize: '1.3rem',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </nav>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
            zIndex: 2000,
            padding: '80px 16px 24px 16px',
            boxSizing: 'border-box',
          }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            style={{
              background: '#000000',
              border: '1px solid #333',
              borderRadius: '12px',
              padding: '16px',
              maxHeight: 'calc(100vh - 120px)',
              overflowY: 'auto',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              pointerEvents: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <li>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  color: isActive('/') ? '#ffffff' : '#888888',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  background: isActive('/') ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                }}
              >
                {t('nav.home')}
              </Link>
            </li>

            <li>
              <Link
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  color: isActive('/features') ? '#ffffff' : '#888888',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  background: isActive('/features') ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                }}
              >
                {t('nav.features')}
              </Link>
            </li>

            <li>
              <Link
                to="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  color: isActive('/pricing') ? '#ffffff' : '#888888',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  background: isActive('/pricing') ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                }}
              >
                {t('nav.pricing')}
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  color: isActive('/about') ? '#ffffff' : '#888888',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  background: isActive('/about') ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                }}
              >
                {t('nav.about')}
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  color: isActive('/contact') ? '#ffffff' : '#888888',
                  textDecoration: 'none',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  background: isActive('/contact') ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                }}
              >
                {t('nav.contact')}
              </Link>
            </li>

            {user && canSeeApi && (
              <>
                <li>
                  <Link
                    to="/tickets"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      color: isActive('/tickets') ? '#ffffff' : '#888888',
                      textDecoration: 'none',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      background: isActive('/tickets') ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                    }}
                  >
                    {t('nav.tickets')}
                  </Link>
                </li>

                {user && canSeeApi && (
                  <>
                    <li>
                      <Link
                        to="/api-docs"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: 'block',
                          color: isActive('/api-docs') ? '#ffffff' : '#888888',
                          textDecoration: 'none',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          background: isActive('/api-docs') ? 'rgba(255, 255, 255, 0.05)' : 'transparent'
                        }}
                      >
                        {t('nav.apidocs')}
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setShowApiAccess(true);
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          color: '#888888',
                          background: 'transparent',
                          border: 'none',
                          padding: '10px 14px',
                          borderRadius: '6px',
                          fontSize: '0.9rem',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ color: '#ffffff', fontWeight: 600 }}>&lt;/&gt;</span> {t('nav.apiAccess')}
                      </button>
                    </li>
                  </>
                )}

                <li style={{ borderTop: '1px solid #222', marginTop: '8px', paddingTop: '8px' }}>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowInbox(true);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      textAlign: 'left',
                      color: '#888888',
                      background: 'transparent',
                      border: 'none',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fas fa-inbox"></i> {t('nav.inbox')}
                    {unreadCount > 0 && (
                      <span
                        style={{
                          background: '#ff4757',
                          color: 'white',
                          borderRadius: '10px',
                          padding: '2px 8px',
                          fontSize: '0.7rem',
                          fontWeight: 600
                        }}
                      >
                        {unreadCount}
                      </span>
                    )}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setShowSettings(true);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      width: '100%',
                      textAlign: 'left',
                      color: '#888888',
                      background: 'transparent',
                      border: 'none',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      cursor: 'pointer'
                    }}
                  >
                    <i className="fas fa-cog"></i> {t('nav.settings')}
                  </button>
                </li>


                <li>
                  <button
                    onClick={handleLogout}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'center',
                      color: '#000000',
                      background: '#ffffff',
                      border: 'none',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      marginTop: '4px'
                    }}
                  >
                    {t('nav.logout')}
                  </button>
                </li>
              </>
            )}

            {!user && (
              <>
                <li style={{ borderTop: '1px solid #222', marginTop: '8px', paddingTop: '8px' }}>
                  <Link
                    to="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      color: '#888888',
                      textDecoration: 'none',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '0.9rem'
                    }}
                  >
                    {t('nav.login')}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block',
                      background: '#ffffff',
                      color: '#000000',
                      textDecoration: 'none',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      textAlign: 'center',
                      fontWeight: 600
                    }}
                  >
                    {t('nav.register')}
                  </Link>
                </li>
              </>
            )}
          </ul>
          </div>
        </div>
      )}

      {showSettings && <SettingsModal onClose={() => setShowSettings(false)} />}
      {showInbox && <InboxModal onClose={() => setShowInbox(false)} />}
      {showApiAccess && <ApiAccessModal onClose={() => setShowApiAccess(false)} />}

      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0.7); }
          70% { box-shadow: 0 0 0 6px rgba(255, 107, 107, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 107, 107, 0); }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.8);
          }
        }

        .desktop-nav {
          display: flex !important;
        }

        .mobile-menu-btn {
          display: none !important;
        }

        /* Animation de survol pour les liens de navigation */
        .nav-link {
          position: relative;
          color: #888888;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 12px;
          right: 12px;
          height: 2px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-link.active {
          color: #ffffff;
        }

        .nav-link.active::after {
          transform: scaleX(1);
        }

        /* Hover pour les boutons icônes */
        .icon-btn:hover {
          color: #ffffff !important;
        }

        .users-mobile {
          display: none;
        }

        .users-desktop {
          display: inline;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .logo-title {
            font-size: 1.1rem !important;
          }
          .logo-status {
            font-size: 0.6rem !important;
            gap: 3px !important;
          }
          .logo-status span:first-child {
            width: 5px !important;
            height: 5px !important;
          }
          .users-desktop {
            display: none !important;
          }
          .users-mobile {
            display: inline !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
