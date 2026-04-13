// API client configuration
// This file abstracts the underlying backend implementation

const API_CONFIG = {
  // Obfuscated endpoint - actual URL is loaded from environment
  endpoint: import.meta.env.VITE_DB_ENDPOINT || import.meta.env.VITE_SUPABASE_URL,
  key: import.meta.env.VITE_DB_PUBLIC_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY,
} as const;

// Export configuration with obfuscated names
export const getApiEndpoint = () => API_CONFIG.endpoint;
export const getApiKey = () => API_CONFIG.key;

// Validate configuration
export const validateApiConfig = (): boolean => {
  return !!(API_CONFIG.endpoint && API_CONFIG.key);
};
