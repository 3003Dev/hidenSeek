import { createClient } from '@supabase/supabase-js';

// Try multiple environment variable names with obfuscation
const getDbUrl = (): string => {
  const encoded = import.meta.env.VITE_DB_ENDPOINT || import.meta.env.VITE_SUPABASE_URL;
  return encoded || '';
};

const getDbKey = (): string => {
  const encoded = import.meta.env.VITE_DB_PUBLIC_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
  return encoded || '';
};

const dbUrl = getDbUrl();
const dbKey = getDbKey();

if (!dbUrl || !dbKey) {
  throw new Error('Missing authentication configuration');
}

// Custom storage wrapper with better error handling
const customStorage = {
  getItem: (key: string) => {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {
      // Silent fail
    }
  },
  removeItem: (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      // Silent fail
    }
  },
};

// Check if Realtime should be disabled
const REALTIME_DISABLED = import.meta.env.VITE_DISABLE_REALTIME === 'true';

// Créer l'objet de configuration
const clientConfig: any = {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: customStorage,
    storageKey: 'sn-session',
    detectSessionInUrl: false,
    flowType: 'pkce',
  },
  global: {
    headers: {
      'X-Client-Info': 'Dbs-web',
    },
  },
};

// N'ajouter realtime que si pas désactivé
if (!REALTIME_DISABLED) {
  clientConfig.realtime = {
    params: {
      eventsPerSecond: 10,
    },
    log_level: 'error',
  };
}

export const supabase = createClient(dbUrl, dbKey, clientConfig);

// Suppress WebSocket connection errors and hide external service URLs
if (typeof window !== 'undefined') {
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalLog = console.log;

  const shouldSuppress = (message: string): boolean => {
    return message.includes('WebSocket connection') ||
           message.includes('realtime') ||
           message.includes('wss://') ||
           message.includes('breachhub.org') ||
           message.includes('breachhub');
  };

  const maskSensitiveUrls = (message: string): string => {
    return message
      .replace(/supabase-proxy\.tiny-wave-2fa1\.workers\.dev/gi, 'api.see-know.eu')
      .replace(/supabase/gi, 'backend')
      .replace(/mwkamemnxhwmxpkmjief/gi, '[hidden]')
      .replace(/ipify\.org/gi, '[hidden]');
  };

  console.error = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (shouldSuppress(message)) return;

    // Mask sensitive URLs in error messages
    const maskedArgs = args.map(arg => {
      if (typeof arg === 'string') {
        return maskSensitiveUrls(arg);
      }
      return arg;
    });

    originalError.apply(console, maskedArgs);
  };

  console.warn = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (shouldSuppress(message)) return;

    // Mask sensitive URLs in warning messages
    const maskedArgs = args.map(arg => {
      if (typeof arg === 'string') {
        return maskSensitiveUrls(arg);
      }
      return arg;
    });

    originalWarn.apply(console, maskedArgs);
  };

  console.log = (...args: any[]) => {
    const message = args[0]?.toString() || '';
    if (shouldSuppress(message)) return;

    // Mask sensitive URLs in log messages
    const maskedArgs = args.map(arg => {
      if (typeof arg === 'string') {
        return maskSensitiveUrls(arg);
      }
      return arg;
    });

    originalLog.apply(console, maskedArgs);
  };
}

export interface UserProfile {
  id: string;
  username?: string;
  email?: string;
  created_at?: string;
  [key: string]: any;
}

export async function getDatabaseApiKey(userId: string): Promise<string | null> {
  if (!userId) return null;

  try {
    const { data, error } = await supabase
      .from('api_keys')
      .select('api_key')
      .eq('user_id', userId)
      .maybeSingle();

    if (error || !data) {
      return null;
    }

    return data.api_key ?? null;
  } catch (e) {
    return null;
  }
}


export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return { user: data.user, session: data.session };
}

export async function signUp(email: string, password: string, username?: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username || email.split('@')[0],
      },
      emailRedirectTo: undefined,
    },
  });

  if (error) throw error;

  // Si l'utilisateur est créé mais pas de session = email de confirmation envoyé
  // On connecte directement sans vérification
  if (data.user && !data.session) {
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signInError) throw signInError;
    return { user: signInData.user, session: signInData.session };
  }

  return { user: data.user, session: data.session };
}

export async function sendOTP(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/reset-password`,
  });

  if (error) throw error;
}

export async function verifyOTP(email: string, token: string, newPassword: string) {
  const { error } = await supabase.auth.verifyOtp({
    email,
    token,
    type: 'recovery',
  });

  if (error) throw error;

  const { error: updateError } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (updateError) throw updateError;
}