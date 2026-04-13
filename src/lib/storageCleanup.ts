/**
 * Secure localStorage cleanup script
 * Removes any sensitive data from localStorage on build
 */

// Keys that should NOT be stored in localStorage
const SENSITIVE_KEYS = [
  'token',
  'access_token',
  'refresh_token',
  'api_key',
  'apiKey',
  'secret',
  'password',
  'credentials',
  'auth',
  'session',
  'jwt',
  'supabase',
  'user_data',
];

/**
 * Check if a key is sensitive
 */
export function isSensitiveKey(key: string): boolean {
  return SENSITIVE_KEYS.some(
    sensitive => key.toLowerCase().includes(sensitive.toLowerCase())
  );
}

/**
 * Clean localStorage from sensitive data
 */
export function cleanLocalStorage(): void {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return;
  }

  try {
    const keysToRemove: string[] = [];
    
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      if (key && isSensitiveKey(key)) {
        keysToRemove.push(key);
      }
    }

    keysToRemove.forEach(key => {
      window.localStorage.removeItem(key);
    });
  } catch (e) {
    // Silent fail if localStorage is not accessible
  }
}

// Clean localStorage on app initialization
if (typeof window !== 'undefined') {
  cleanLocalStorage();
}
