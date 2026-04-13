import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { supabase, type UserProfile } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  showLoginPopup: boolean;
  setShowLoginPopup: (show: boolean) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
};

async function loadProfile(user: User): Promise<UserProfile | null> {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', user.id).maybeSingle();
  if (error) {
    return null;
  }
  return data ?? null;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  // ✅ ref (évite boucles)
  const sessionIdRef = useRef<string | null>(null);
  const heartbeatRef = useRef<number | null>(null);
  const lastRefreshRef = useRef<number>(0);
  const refreshTimeoutRef = useRef<number | null>(null);
  const isRefreshingRef = useRef<boolean>(false); // Éviter les refreshs multiples en parallèle

  useEffect(() => {
    let alive = true;

    const init = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();

        // If there's an error getting the session, try to refresh it
        if (error) {
          console.log('Session error on init, attempting refresh');
          const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();

          if (!refreshError && refreshData.session) {
            const u = refreshData.session.user;
            if (!alive) return;
            setUser(u);

            if (u) {
              const p = await loadProfile(u);
              if (!alive) return;
              setProfile(p);
            }
          } else {
            // Clear corrupted session
            console.log('Clearing corrupted session');
            await supabase.auth.signOut();
            if (!alive) return;
            setUser(null);
            setProfile(null);
          }
        } else {
          const u = data.session?.user ?? null;
          if (!alive) return;

          setUser(u);

          if (u) {
            const p = await loadProfile(u);
            if (!alive) return;
            setProfile(p);
          } else {
            setProfile(null);
          }
        }
      } catch (err) {
        console.log('Init error:', err);
        // Try to clear potentially corrupted session data
        try {
          await supabase.auth.signOut();
        } catch {
          // Force clear localStorage if signOut fails
          try {
            localStorage.removeItem('sn-session');
            Object.keys(localStorage).forEach(key => {
              if (key.startsWith('sb-') || key.startsWith('supabase')) {
                localStorage.removeItem(key);
              }
            });
          } catch {
            // Silent fail if localStorage is not accessible
          }
        }

        if (!alive) return;
        setUser(null);
        setProfile(null);
      } finally {
        if (alive) setLoading(false);
      }
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!alive) return;

      if (event === 'SIGNED_OUT') {
        setUser(null);
        setProfile(null);
        return;
      }

      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        const u = session?.user ?? null;
        setUser(u);

        if (u) {
          const p = await loadProfile(u);
          if (!alive) return;
          setProfile(p);

          if (event === 'SIGNED_IN') {
            setShowLoginPopup(true);
            window.setTimeout(() => setShowLoginPopup(false), 2500);
          }
        } else {
          setProfile(null);
        }
      }
    });

    // ✅ Handle tab visibility change - always refresh session when user returns
    const refreshSessionIfNeeded = async () => {
      if (!alive) return;

      // Éviter les refreshs multiples en parallèle
      if (isRefreshingRef.current) {
        return;
      }
      isRefreshingRef.current = true;

      try {
        // First try to get the existing session
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

        // If there's a session error or no session, don't clear the user state immediately
        // This prevents the infinite loading issue when switching tabs
        if (sessionError || !sessionData.session) {
          // Try to refresh the session instead of giving up
          try {
            const { data: { session }, error: refreshError } = await supabase.auth.refreshSession();

            if (!refreshError && session && alive) {
              const u = session.user;
              setUser(u);
              const p = await loadProfile(u);
              if (alive) {
                setProfile(p);
              }
              return;
            }
          } catch {
            // Refresh failed silently - keep existing session state
            // Ne PAS déconnecter l'utilisateur si le refresh échoue
            console.log('Session refresh failed, keeping existing state');
            return;
          }

          // Ne déconnecter QUE si l'utilisateur n'est plus connecté du tout
          // et qu'il n'y avait pas de session avant
          if (alive && !user) {
            setUser(null);
            setProfile(null);
          }
          return;
        }

        const now = Math.floor(Date.now() / 1000);
        const expiresAt = sessionData.session.expires_at || 0;
        const timeUntilExpiry = expiresAt - now;

        // If session expires in less than 5 minutes, refresh it
        if (timeUntilExpiry < 300) {
          try {
            const { data: { session }, error } = await supabase.auth.refreshSession();

            if (!error && session) {
              const u = session.user;
              if (alive && u) {
                setUser(u);
                const p = await loadProfile(u);
                if (alive) {
                  setProfile(p);
                }
              }
            }
          } catch {
            // Refresh failed - keep existing session
            console.log('Token refresh failed, keeping existing session');
          }
        } else {
          // Session is still valid, just update state if needed
          const u = sessionData.session.user;
          if (alive && u) {
            // Only update if user changed (prevents unnecessary re-renders)
            if (!user || user.id !== u.id) {
              setUser(u);
              const p = await loadProfile(u);
              if (alive) {
                setProfile(p);
              }
            }
          }
        }
      } catch (err) {
        // Don't clear the session on errors, just log them
        console.log('Session check failed, keeping existing session');
      } finally {
        isRefreshingRef.current = false;
      }
    };

    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        // Clear any pending refresh
        if (refreshTimeoutRef.current) {
          window.clearTimeout(refreshTimeoutRef.current);
        }

        // Debounce: only refresh if at least 1 second passed since last refresh
        const now = Date.now();
        const timeSinceLastRefresh = now - lastRefreshRef.current;

        if (timeSinceLastRefresh < 1000) {
          // Too soon, schedule for later
          refreshTimeoutRef.current = window.setTimeout(() => {
            lastRefreshRef.current = Date.now();
            refreshSessionIfNeeded();
          }, 1000);
        } else {
          // OK to refresh now
          lastRefreshRef.current = now;
          await refreshSessionIfNeeded();
        }
      }
    };

    const handleFocus = async () => {
      // Clear any pending refresh
      if (refreshTimeoutRef.current) {
        window.clearTimeout(refreshTimeoutRef.current);
      }

      // Same debounce logic
      const now = Date.now();
      const timeSinceLastRefresh = now - lastRefreshRef.current;

      if (timeSinceLastRefresh < 1000) {
        refreshTimeoutRef.current = window.setTimeout(() => {
          lastRefreshRef.current = Date.now();
          refreshSessionIfNeeded();
        }, 1000);
      } else {
        lastRefreshRef.current = now;
        await refreshSessionIfNeeded();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    // Periodic session check every 2 minutes to ensure session stays alive
    const sessionCheckInterval = window.setInterval(async () => {
      if (!alive) return;

      try {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          const now = Math.floor(Date.now() / 1000);
          const expiresAt = data.session.expires_at || 0;
          const timeUntilExpiry = expiresAt - now;

          // Auto-refresh if session expires in less than 5 minutes
          if (timeUntilExpiry < 300 && timeUntilExpiry > 0) {
            await supabase.auth.refreshSession();
          }
        }
      } catch {
        // Silent fail
      }
    }, 120000); // Check every 2 minutes

    return () => {
      alive = false;
      listener.subscription.unsubscribe();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.clearInterval(sessionCheckInterval);
      if (refreshTimeoutRef.current) {
        window.clearTimeout(refreshTimeoutRef.current);
      }
    };
  }, []);

  // ✅ user_sessions sans boucle
  useEffect(() => {
    // stop heartbeat
    if (heartbeatRef.current) {
      window.clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    }

    const cleanup = async () => {
      const sid = sessionIdRef.current;
      if (sid) {
        sessionIdRef.current = null;
        await supabase.from('user_sessions').delete().eq('session_id', sid);
      }
    };

    if (!user) {
      void cleanup();
      return;
    }

    let alive = true;

    const createSession = async () => {
      try {
        const sid = `${user.id}_${Date.now()}`;

        // ✅ pas de user_id envoyé (trigger SQL)
        const { error } = await supabase.from('user_sessions').insert({
          user_id: user.id,
          session_id: sid,
          last_seen: new Date().toISOString(),
        });

        if (!alive) return;

        if (error) {
          return;
        }

        sessionIdRef.current = sid;

        heartbeatRef.current = window.setInterval(() => {
          const cur = sessionIdRef.current;
          if (!cur) return;
          supabase.from('user_sessions').update({ last_seen: new Date().toISOString() }).eq('session_id', cur);
        }, 30000);
      } catch (err) {
        // Silent fail
      }
    };

    void createSession();

    return () => {
      alive = false;
    if (heartbeatRef.current) {
      window.clearInterval(heartbeatRef.current);
      heartbeatRef.current = null;
    };
    };
  }, [user?.id]);

  const logout = async () => {
    try {
      if (heartbeatRef.current) {
        window.clearInterval(heartbeatRef.current);
        heartbeatRef.current = null;
      }

      const sid = sessionIdRef.current;
      sessionIdRef.current = null;

      if (sid) {
        await supabase.from('user_sessions').delete().eq('session_id', sid);
      }

      await supabase.auth.signOut();
    } catch (err) {
      // Silent fail
    } finally {
      setUser(null);
      setProfile(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, showLoginPopup, setShowLoginPopup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};