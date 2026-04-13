import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const BrowserNotice = () => {
  const { t } = useLanguage();
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fermé la notification
    const dismissed = localStorage.getItem('librewolf_notice_dismissed');
    if (dismissed) return;

    // Détecter si le navigateur est LibreWolf
    const userAgent = navigator.userAgent.toLowerCase();
    const isLibreWolf = userAgent.includes('librewolf');

    // Afficher la notification uniquement si ce n'est PAS LibreWolf
    if (!isLibreWolf) {
      // Petit délai pour ne pas afficher immédiatement
      setTimeout(() => {
        setShowNotice(true);
      }, 2000);
    }
  }, []);

  const handleDismiss = () => {
    setShowNotice(false);
    localStorage.setItem('librewolf_notice_dismissed', 'true');
  };

  if (!showNotice) return null;

  return (
    <>
      <div className="browser-notice" style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        maxWidth: '400px',
        background: '#000',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '16px',
        padding: '20px',
        zIndex: 9998,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.1)',
        animation: 'slideInNotice 0.5s ease-out'
      }}>
        {/* Header avec icône et bouton fermer */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            {/* Icône LibreWolf */}
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#111',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)'
            }}>
              <i className="fas fa-globe" style={{
                fontSize: '1.3rem',
                color: '#fff'
              }}></i>
            </div>
            <div>
              <h4 style={{
                margin: 0,
                fontSize: '1rem',
                fontWeight: 700,
                color: '#fff'
              }}>
                {t('browser.notice.title')}
              </h4>
              <span style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.5)'
              }}>
                {t('browser.notice.subtitle')}
              </span>
            </div>
          </div>

          {/* Bouton fermer */}
          <button
            onClick={handleDismiss}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'rgba(255, 255, 255, 0.6)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
            }}
          >
            <i className="fas fa-times" style={{ fontSize: '0.9rem' }}></i>
          </button>
        </div>

        {/* Message */}
        <p style={{
          margin: '0 0 16px 0',
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: 1.6
        }}>
          {t('browser.notice.message')} <strong style={{ color: '#fff' }}>LibreWolf</strong>
        </p>

        {/* Bouton d'installation */}
        <a
          href="https://librewolf.net/installation/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '100%',
            padding: '12px 20px',
            background: '#fff',
            border: 'none',
            borderRadius: '10px',
            color: '#000',
            fontSize: '0.9rem',
            fontWeight: 600,
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.3)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.2)';
          }}
        >
          <i className="fas fa-download"></i>
          {t('browser.notice.button')}
        </a>

        {/* Lien pour ignorer */}
        <button
          onClick={handleDismiss}
          style={{
            display: 'block',
            width: '100%',
            marginTop: '12px',
            padding: '8px',
            background: 'transparent',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '0.8rem',
            cursor: 'pointer',
            transition: 'color 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)';
          }}
        >
          {t('browser.notice.dismiss')}
        </button>
      </div>

      <style>{`
        @keyframes slideInNotice {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 480px) {
          .browser-notice {
            left: 16px !important;
            right: 16px !important;
            bottom: 16px !important;
            max-width: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default BrowserNotice;
