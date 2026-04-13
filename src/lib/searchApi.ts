import { supabase } from './supabase';
import { sanitizeSearchQuery } from './security';

/* ===================== TYPES ===================== */

export interface SearchResult {
  database: string;
  infoLeak: string;
  data: Record<string, string>[];
}

export interface SearchResponse {
  success: boolean;
  results?: SearchResult[];
  breaches?: SearchResult[];
  stealers?: SearchResult[];
  error?: string;
  errorCode?:
    | 'NO_CREDITS'
    | 'INVALID_PLAN'
    | 'SERVER_ERROR'
    | 'API_BALANCE_INSUFFICIENT'
    | 'BLOCKED';
  creditsRemaining?: number;
}

type PlanName = 'free' | 'beginner' | 'pro' | 'premium' | 'beta' | 'blocked';

/* ===================== UTILS ===================== */

const getTodayDateString = (): string => new Date().toISOString().split('T')[0];
const shouldResetCredits = (lastReset: string): boolean => lastReset !== getTodayDateString();

/* ===================== CREDITS ===================== */

const normalizePlanName = (plan?: string): PlanName => {
  switch (plan?.toLowerCase()) {
    case 'beginner':
      return 'beginner';
    case 'pro':
      return 'pro';
    case 'premium':
      return 'premium';
    case 'beta':
      return 'beta';
    case 'blocked':
      return 'blocked';
    default:
      return 'free';
  }
};

const getMaxCreditsByPlan = (plan?: string): number => {
  switch (normalizePlanName(plan)) {
    case 'free':
      return 10;
    case 'beginner':
      return 100;
    case 'pro':
      return 500;
    case 'premium':
      return 5000;
    case 'beta':
      return 30;
    case 'blocked':
      return 0;
    default:
      return 10;
  }
};

const resolvePlanInfo = (plan?: string, creditsPerDay?: number): { plan: PlanName; creditsPerDay: number } => {
  const normalizedPlan = normalizePlanName(plan);
  const mappedCredits = getMaxCreditsByPlan(normalizedPlan);
  const safeCredits = typeof creditsPerDay === 'number' && creditsPerDay > 0 ? creditsPerDay : mappedCredits;
  return { plan: normalizedPlan, creditsPerDay: safeCredits };
};

const getUserPlanInfo = async (userId: string): Promise<{ plan: PlanName; creditsPerDay: number }> => {
  try {
    const { data: plan } = await supabase
      .from('user_plans')
      .select('plan, credits_per_day')
      .eq('user_id', userId)
      .maybeSingle();

    if (!plan) {
      try {
        await supabase.from('user_plans').insert({
          user_id: userId,
          plan: 'free',
          credits_per_day: 10
        });
      } catch {
        // ignore
      }
      return resolvePlanInfo('free', 10);
    }

    return resolvePlanInfo(plan.plan, plan.credits_per_day);
  } catch {
    return resolvePlanInfo('free', 10);
  }
};

const getOrInitCredits = async (
  userId: string
): Promise<{ remaining: number; max: number; plan: PlanName }> => {
  const { plan, creditsPerDay } = await getUserPlanInfo(userId);

  // Lecture seule des crédits - les modifications sont gérées par l'Edge Function (service_role)
  const { data } = await supabase
    .from('user_credits')
    .select('credits_remaining, last_reset')
    .eq('user_id', userId)
    .maybeSingle();

  if (!data) {
    // Les crédits seront initialisés par l'Edge Function lors de la première recherche
    return { remaining: creditsPerDay, max: creditsPerDay, plan };
  }

  // Si reset nécessaire, l'Edge Function le fera automatiquement
  if (shouldResetCredits(data.last_reset)) {
    return { remaining: creditsPerDay, max: creditsPerDay, plan };
  }

  return { remaining: data.credits_remaining, max: creditsPerDay, plan };
};


const EXTERNAL_API_URL = 'https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search';
const EXTERNAL_API_KEY = 'sk_live_jwgK9iWt5FjCEHQj36S15yvZBaSHkxmB7e7ujff3ZSwUnTPR';

const callLeakOsintAPI = async (rawQuery: string, _userId: string): Promise<{
  results: SearchResult[];
  breaches: SearchResult[];
  stealers: SearchResult[];
  creditsRemaining?: number;
}> => {
  const query = String(sanitizeSearchQuery(rawQuery) ?? '').trim();
  if (!query) throw new Error('Requête invalide');

  const response = await fetch(EXTERNAL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': EXTERNAL_API_KEY,
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API error ${response.status}: ${errorText}`);
  }

  const data = await response.json();

  const breaches: SearchResult[] = Array.isArray(data?.breaches) ? data.breaches : [];
  const stealers: SearchResult[] = Array.isArray(data?.stealers) ? data.stealers : [];
  const results: SearchResult[] = Array.isArray(data?.results) ? data.results : [];
  const creditsRemaining = data?.credits_remaining ?? data?.creditsRemaining ?? undefined;

  return { results, breaches, stealers, creditsRemaining };
};



/* ===================== MAIN SEARCH ===================== */

export const performSearch = async (query: string, userId: string): Promise<SearchResponse> => {
  try {
    // 1) crédits
    const { remaining, plan } = await getOrInitCredits(userId);

    if (plan === 'blocked') {
      return {
        success: false,
        error: 'Your account is blocked. Contact support.',
        errorCode: 'BLOCKED',
        creditsRemaining: 0
      };
    }

    if (remaining <= 0) {
      return {
        success: false,
        error: 'You have exhausted your daily searches.',
        errorCode: 'NO_CREDITS',
        creditsRemaining: 0
      };
    }

    // 2) appel backend
    const apiResponse = await callLeakOsintAPI(query, userId);

    // Support du nouveau format avec breaches et stealers
    const breaches = apiResponse.breaches || [];
    const stealers = apiResponse.stealers || [];
    const results = apiResponse.results || []; // Fallback pour l'ancien format

    // Les crédits sont gérés par l'Edge Function (service_role)
    // On utilise la valeur retournée par le backend
    const newCredits = typeof apiResponse.creditsRemaining === 'number'
      ? apiResponse.creditsRemaining
      : remaining - 1;

    return {
      success: true,
      results,
      breaches,
      stealers,
      creditsRemaining: newCredits
    };
  } catch (err: any) {
    const msg = err?.message || 'Erreur serveur';
    const isApiBalanceError =
      msg.includes('not enough money') || msg.includes('bot balance') || msg.toLowerCase().includes('balance');

    return {
      success: false,
      error: msg,
      errorCode: isApiBalanceError ? 'API_BALANCE_INSUFFICIENT' : 'SERVER_ERROR',
      creditsRemaining: 0
    };
  }
};

export const getCreditsRemaining = async (userId: string): Promise<number> => {
  try {
    const { creditsPerDay, plan } = await getUserPlanInfo(userId);

    if (plan === 'blocked') return 0;

    const { data, error } = await supabase
      .from('user_credits')
      .select('credits_remaining, last_reset')
      .eq('user_id', userId)
      .single();

    if (error || !data) return creditsPerDay;

    // Si reset nécessaire, l'Edge Function le fera lors de la prochaine recherche
    if (shouldResetCredits(data.last_reset)) {
      return creditsPerDay;
    }

    return data.credits_remaining;
  } catch {
    return 0;
  }
};