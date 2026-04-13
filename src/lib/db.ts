// Database client wrapper
import { supabase as client } from './supabase';

// Export obfuscated client
export const db = client;

// Re-export types with obfuscated names
export type { UserProfile as Profile } from './supabase';
export {
  signIn as authenticate,
  signUp as register,
  sendOTP as sendRecoveryCode,
  verifyOTP as verifyRecoveryCode,
  getDatabaseApiKey as getApiKey
} from './supabase';
