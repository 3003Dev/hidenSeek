import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';

interface SecurityContextType {
  isSecure: boolean;
  sessionFingerprint: string | null;
  lastActivity: number;
  reportSuspiciousActivity: (type: string, details?: string) => void;
  refreshSession: () => Promise<boolean>;
}

const SecurityContext = createContext<SecurityContextType | null>(null);

// Session timeout: 30 minutes d'inactivité
const SESSION_TIMEOUT = 30 * 60 * 1000;
// Vérification de session toutes les 5 minutes
const SESSION_CHECK_INTERVAL = 5 * 60 * 1000;

// Générer une empreinte de session basée sur le navigateur
const generateSessionFingerprint = (): string => {
  const data = [
    navigator.userAgent,
    navigator.language,
    screen.width,
    screen.height,
    screen.colorDepth,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency || 0,
  ].join('|');

  // Simple hash
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
};

export const SecurityProvider = ({ children }: { children: ReactNode }) => {
  const [isSecure, setIsSecure] = useState(true);
  const [sessionFingerprint, setSessionFingerprint] = useState<string | null>(null);
  const [lastActivity, setLastActivity] = useState(Date.now());

  // Initialiser l'empreinte de session
  useEffect(() => {
    const fingerprint = generateSessionFingerprint();
    setSessionFingerprint(fingerprint);

    // Stocker l'empreinte pour comparaison
    const storedFingerprint = sessionStorage.getItem('sn-fp');
    if (storedFingerprint && storedFingerprint !== fingerprint) {
      // Empreinte différente = possible session hijacking
      console.warn('[Security] Session fingerprint mismatch detected');
      setIsSecure(false);
    } else {
      sessionStorage.setItem('sn-fp', fingerprint);
    }
  }, []);

  // Tracker l'activité utilisateur
  useEffect(() => {
    const updateActivity = () => {
      setLastActivity(Date.now());
    };

    const events = ['mousedown', 'keydown', 'touchstart', 'scroll'];
    events.forEach(event => {
      window.addEventListener(event, updateActivity, { passive: true });
    });

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, updateActivity);
      });
    };
  }, []);

  // Vérifier le timeout de session
  useEffect(() => {
    const checkSessionTimeout = async () => {
      const now = Date.now();
      const inactive = now - lastActivity;

      if (inactive > SESSION_TIMEOUT) {
        console.warn('[Security] Session timeout - logging out');
        await supabase.auth.signOut();
        window.location.href = '/login?reason=timeout';
      }
    };

    const interval = setInterval(checkSessionTimeout, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [lastActivity]);

  // Vérifier la validité de la session périodiquement
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();

        if (error || !session) {
          setIsSecure(false);
          return;
        }

        // Vérifier si le token est sur le point d'expirer
        const expiresAt = session.expires_at;
        if (expiresAt) {
          const expiresIn = expiresAt * 1000 - Date.now();
          if (expiresIn < 5 * 60 * 1000) { // Moins de 5 minutes
            await supabase.auth.refreshSession();
          }
        }

        setIsSecure(true);
      } catch {
        setIsSecure(false);
      }
    };

    checkSession();
    const interval = setInterval(checkSession, SESSION_CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Détecter les tentatives de manipulation du DOM
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            // Détecter les scripts injectés
            if (node.tagName === 'SCRIPT' && !node.hasAttribute('data-safe')) {
              console.warn('[Security] Unauthorized script injection detected');
              node.remove();
            }
            // Détecter les iframes non autorisés
            if (node.tagName === 'IFRAME') {
              const src = node.getAttribute('src') || '';
              const allowedFrames = ['challenges.cloudflare.com'];
              if (!allowedFrames.some(domain => src.includes(domain))) {
                console.warn('[Security] Unauthorized iframe detected');
                node.remove();
              }
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  // Bloquer les raccourcis de développeur en production
  useEffect(() => {
    if (import.meta.env.PROD) {
      const blockDevTools = (e: KeyboardEvent) => {
        // F12
        if (e.key === 'F12') {
          e.preventDefault();
          return false;
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
          e.preventDefault();
          return false;
        }
        // Ctrl+U (view source)
        if (e.ctrlKey && e.key.toUpperCase() === 'U') {
          e.preventDefault();
          return false;
        }
      };

      window.addEventListener('keydown', blockDevTools);
      return () => window.removeEventListener('keydown', blockDevTools);
    }
  }, []);

  // Détecter les outils de développeur ouverts
  useEffect(() => {
    if (import.meta.env.PROD) {
      const detectDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > 160;
        const heightThreshold = window.outerHeight - window.innerHeight > 160;

        if (widthThreshold || heightThreshold) {
          console.warn('[Security] DevTools may be open');
        }
      };

      const interval = setInterval(detectDevTools, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const reportSuspiciousActivity = useCallback((type: string, details?: string) => {
    console.warn(`[Security] Suspicious activity: ${type}`, details);
    // Ici on pourrait envoyer à un endpoint de logging
  }, []);

  const refreshSession = useCallback(async (): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.refreshSession();
      if (error) {
        setIsSecure(false);
        return false;
      }
      setIsSecure(true);
      return true;
    } catch {
      setIsSecure(false);
      return false;
    }
  }, []);

  return (
    <SecurityContext.Provider
      value={{
        isSecure,
        sessionFingerprint,
        lastActivity,
        reportSuspiciousActivity,
        refreshSession,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = () => {
  const context = useContext(SecurityContext);
  if (!context) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

export default SecurityContext;
