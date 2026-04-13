/**
 * Dbs API Search - Edge Function
 *
 * Cette fonction interroge les APIs de BreachHub en parallèle pour fournir
 * des résultats complets sur les breaches et stealers.
 *
 * TOUTES LES APIS SONT APPELÉES POUR TOUTES LES RECHERCHES (email, IP, Discord, username, phone, etc.)
 * Si une API ne peut pas traiter le type de requête, elle retourne simplement vide et on continue.
 *
 * APIS BREACHHUB INTERROGÉES (58 au total) :
 *
 * ═══════════════════════════════════════════════════════════════════
 * BREACH APIs (35) :
 * ═══════════════════════════════════════════════════════════════════
 * 1.  LeakOSINT           - /api/leakosint ★★
 * 2.  Snusbase            - /api/snusbase ★★★
 * 3.  LeakCheck V2        - /api/leakcheck/v2 ★★
 * 4.  BreachDirectory     - /api/breachdirectory ★
 * 5.  Breach.vip          - /api/breachvip ★★
 * 6.  BreachBase          - /api/breachbase ★
 * 7.  BreachLookup        - /api/breachlookup ★
 * 8.  Cord.cat            - /api/cordcat ★
 * 9.  Cord.cat IP         - /api/cordcat/ip ★
 * 10. IntelVault          - /api/intelvault ★
 * 11. HackCheck           - /api/hackcheck ★
 * 12. INF0SEC Leaks       - /api/inf0sec?module=leaks ★★
 * 13. INF0SEC CFX         - /api/inf0sec?module=cfx ★★
 * 14. INF0SEC CFX Discord - /api/inf0sec?module=cfx (discord:ID) ★★
 * 15. INF0SEC Discord     - /api/inf0sec?module=discord ★★
 * 16. INF0SEC Username    - /api/inf0sec?module=username ★★
 * 17. BreachHub Multi     - /api/breachhub/search ★★
 * 18. xOsint Searcher     - /api/xosint/search ★★
 * 19. Breach.rip Amazon   - /api/breachrip/amazon ★★
 * 20. Breach.rip DB       - /api/breachrip/db ★★
 * 21. Breach.rip Discord  - /api/breachrip/discord ★★
 * 22. Breach.rip Crypto   - /api/breachrip/cryptobreach ★★
 * 23. Melissa             - /api/melissa ★★
 * 24. IntelBase Phone     - /api/intelbase/phone ★★★
 * 25. IntelBase GitHub    - /api/intelbase/github ★★★
 * 26. IntelBase Email     - /api/intelbase/email/check ★★★
 * 27. IntelBase IP        - /api/intelbase/ip/lookup ★★★
 * 28. IntelBase Minecraft - /api/intelbase/minecraft ★★★
 * 29. IntelBase BMW       - /api/intelbase/bmw ★★★
 * 30. IntelBase Doxbin    - /api/intelbase/doxbin ★★★
 * 31. LeakSight           - /api/leaksight ★★
 * 32. Oathnet Breach      - /api/oathnet/breach ★★
 * 33. OsintCat DB         - /api/osintcat/database-search ★★
 * 34. Memory.lol          - /api/memory ★
 * 35. Reddit              - /api/reddit ★
 *
 * ═══════════════════════════════════════════════════════════════════
 * STEALER APIs (7) :
 * ═══════════════════════════════════════════════════════════════════
 * 36. StealerLogs.gs      - /api/stealerlogs/search ★★
 * 37. HudsonRock          - /api/hudsonrock ★★★
 * 38. Akula               - /api/akula ★★
 * 39. Wentyn              - /api/wentyn ★
 * 40. OsintKit            - /api/osintkit ★
 * 41. Oathnet Stealer     - /api/oathnet/stealer ★★
 * 42. Oathnet D2R         - /api/oathnet/discordtoroblox ★
 *
 * ═══════════════════════════════════════════════════════════════════
 * INTEL/OSINT APIs (16) :
 * ═══════════════════════════════════════════════════════════════════
 * 43. SEON Email/Phone    - /api/seon/* ★★
 * 44. IntelFetch Discord  - /api/intelfetch/discord ★★
 * 45. IntelFetch GitHub   - /api/intelfetch/github ★★
 * 46. IntelFetch IP       - /api/intelfetch/ip-lookup ★★
 * 47. IntelFetch Fetchbase- /api/intelfetch/fetchbase ★★
 * 48. IntelFetch Domain   - /api/intelfetch/domain ★★
 * 49. Indicia Email       - /api/indicia/email ★★
 * 50. Indicia Phone       - /api/indicia/phone ★★
 * 51. Crowsint Minecraft  - /api/crowsint ★★
 * 52. Crowsint Social     - /api/crowsint/social ★★
 * 53. Crowsint GitHub     - /api/crowsint/github ★★
 * 54. Crowsint Discord    - /api/crowsint/discord ★★
 * 55. Truecaller          - /api/truecaller ★★
 * 56. IPinfo              - /api/ipinfo ★★
 * 57. GitHub OSINT        - /api/github ★★
 * 58. Steam Lookup        - /api/steam ★
 *
 * Légende : ★ = Bon, ★★ = Excellent, ★★★ = Exceptionnel
 */

import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const BASE = "https://breachhub.org"; // (serveur côté backend uniquement)
const API_KEY = Deno.env.get("BREACHHUB_API_KEY"); // clé unique pour tous les modules
const DISCORD_KEY = Deno.env.get("DISCORD_OSINT_API_KEY") ?? API_KEY;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// ==================== SECURITY: Input Sanitization ====================
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';

  // Limiter la longueur (protection DoS)
  const maxLength = 256;
  let sanitized = input.slice(0, maxLength);

  // Supprimer les caractères de contrôle, null bytes et caractères dangereux
  sanitized = sanitized
    .replace(/[\x00-\x1F\x7F\x80-\x9F]/g, '') // Caractères de contrôle (ASCII + extended)
    .replace(/\0/g, '') // Null bytes
    .replace(/[<>"'`]/g, '') // Prévention XSS
    .replace(/\\[xu][0-9a-fA-F]+/g, '') // Encoded characters
    .trim();

  // Normalize Unicode to prevent homograph attacks
  try {
    sanitized = sanitized.normalize('NFC');
  } catch {
    // If normalization fails, return empty
    return '';
  }

  return sanitized;
}

// Valider que la query ne contient pas de patterns dangereux
function isValidQuery(query: string): boolean {
  if (!query || query.length < 1 || query.length > 256) return false;

  // Normalize before checking
  let normalized: string;
  try {
    normalized = query.normalize('NFC').toLowerCase();
  } catch {
    return false;
  }

  // Bloquer les tentatives d'injection SQL/NoSQL (avec variations Unicode)
  const dangerousPatterns = [
    // NoSQL injection patterns
    /\$(?:where|ne|gt|lt|gte|lte|in|nin|regex|exists|type|mod|all|size|elemMatch|or|and|not|nor)/i,
    /\{\s*\$[a-z]+/i, // MongoDB operator syntax
    // SQL injection patterns (with common bypasses)
    /(?:union|select|insert|update|delete|drop|truncate|alter|create|exec|execute)\s+/i,
    /(?:--|#|\/\*|\*\/)/i, // SQL comments
    /(?:chr|char|ascii|concat|substring|substr|left|right)\s*\(/i, // SQL functions
    /(?:or|and)\s+(?:'|"|1|true|false)/i, // Boolean injection
    /(?:sleep|benchmark|waitfor|pg_sleep)\s*\(/i, // Time-based injection
    // XSS patterns
    /(?:<|%3c)(?:script|img|svg|iframe|object|embed|link|style|meta|base)/i,
    /(?:javascript|vbscript|data):/i,
    /on(?:load|error|click|mouse|focus|blur|key|submit|change|input)\s*=/i,
    // Path traversal
    /(?:\.\.\/|\.\.\\|%2e%2e%2f|%2e%2e\/|\.\.%2f|%2e%2e%5c)/i,
  ];

  for (const pattern of dangerousPatterns) {
    if (pattern.test(normalized)) return false;
  }

  // Additional check: reject if contains too many special characters (possible injection attempt)
  const specialCharCount = (query.match(/[^a-zA-Z0-9@._\-+: ]/g) || []).length;
  if (specialCharCount > query.length * 0.4) return false; // More than 40% special chars is suspicious

  return true;
}

// ==================== FILTER: Detect API Error Responses ====================
function isErrorResponse(json: any): boolean {
  if (!json || (typeof json === 'object' && Object.keys(json).length === 0)) {
    return true;
  }

  // Vérifier success: false
  if (json?.success === false) return true;

  // Vérifier status: "failed" ou similaire
  const status = json?.status ?? json?.STATUS ?? '';
  if (typeof status === 'string' && ['failed', 'error', 'failure'].includes(status.toLowerCase())) {
    return true;
  }

  // Vérifier http_status >= 400
  const httpStatus = json?.http_status ?? json?.httpStatus ?? json?.HTTP_STATUS ?? json?.statusCode ?? 0;
  if (typeof httpStatus === 'number' && httpStatus >= 400) {
    return true;
  }

  // Vérifier error présent et non-null (incluant les codes comme 0x06)
  if (json?.error !== undefined && json.error !== null && json.error !== '' && json.error !== false && json.error !== 0) {
    return true;
  }
  if (json?.Error !== undefined && json.Error !== null && json.Error !== '' && json.Error !== false && json.Error !== 0) {
    return true;
  }
  if (json?.ERROR !== undefined && json.ERROR !== null && json.ERROR !== '' && json.ERROR !== false && json.ERROR !== 0) {
    return true;
  }

  // Vérifier les messages d'erreur courants dans tous les champs texte
  const errorFields = ['message', 'MESSAGE', 'msg', 'error', 'ERROR', 'detail', 'details', 'Message', 'Msg'];
  for (const field of errorFields) {
    const value = json?.[field];
    if (typeof value === 'string' && value.length > 0) {
      const valueLower = value.toLowerCase();
      // Liste étendue de patterns d'erreur
      const errorPatterns = [
        'invalid', 'not found', 'error', 'failed', 'unauthorized', 'forbidden',
        'no results', 'no data', 'not valid', 'bad request', 'timeout',
        'rate limit', 'quota exceeded', 'access denied', 'not allowed',
        'format', 'required', 'missing', 'incorrect', 'wrong', 'does not exist'
      ];
      for (const pattern of errorPatterns) {
        if (valueLower.includes(pattern)) {
          return true;
        }
      }
    }
  }

  return false;
}

// ==================== FILTER: Remove error entries from data arrays ====================
// Filtre les entrées individuelles qui sont des erreurs (Invalid CFX ID, Invalid Discord ID, etc.)
function isErrorDataEntry(entry: Record<string, string>): boolean {
  if (!entry || typeof entry !== 'object') return false;

  // Vérifier SUCCESS: false ou success: false
  const successVal = entry['SUCCESS'] ?? entry['success'] ?? entry['Success'];
  if (successVal === 'false' || successVal === 'FALSE' || String(successVal) === 'false') return true;

  // Vérifier ERROR avec codes spécifiques (0x06, 0x101, etc.)
  const errorVal = entry['ERROR'] ?? entry['error'] ?? entry['Error'];
  if (errorVal && errorVal !== '' && errorVal !== '0' && errorVal !== 'false') return true;

  // Vérifier MESSAGE contenant "Invalid" + "ID" (Invalid CFX ID, Invalid Discord ID, etc.)
  const msgVal = entry['MESSAGE'] ?? entry['message'] ?? entry['Message'] ?? entry['msg'] ?? entry['Msg'];
  if (typeof msgVal === 'string') {
    const msgLower = msgVal.toLowerCase();
    if (msgLower.includes('invalid') && msgLower.includes('id')) return true;
    if (msgLower.includes('not found')) return true;
    if (msgLower.includes('no results')) return true;
  }

  return false;
}

// Filtrer les résultats pour enlever les entrées d'erreur du tableau data
function filterErrorEntries(results: UnifiedResult[]): UnifiedResult[] {
  return results
    .map(result => ({
      ...result,
      data: result.data.filter(entry => !isErrorDataEntry(entry))
    }))
    .filter(result => result.data.length > 0); // Enlever les résultats vides
}


// ==================== SECURITY: JWT Verification ====================
async function verifyJWTAndGetUser(req: Request): Promise<{ userId: string; error?: string }> {
  const authHeader = req.headers.get("authorization");

  if (!authHeader) {
    return { userId: '', error: 'Missing authorization header' };
  }

  const jwt = authHeader.replace("Bearer ", "").trim();

  if (!jwt || jwt.length < 10) {
    return { userId: '', error: 'Invalid token format' };
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { data: { user }, error: authError } = await supabase.auth.getUser(jwt);

    if (authError || !user) {
      return { userId: '', error: 'Invalid or expired token' };
    }

    return { userId: user.id };
  } catch (err: any) {
    return { userId: '', error: 'Token verification failed' };
  }
}

// ==================== SECURITY: Rate Limiting Check ====================
async function checkRateLimit(userId: string): Promise<{ allowed: boolean; remainingCredits: number; error?: string }> {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Vérifier les crédits de l'utilisateur
    const { data: credits, error: creditsError } = await supabase
      .from('user_credits')
      .select('credits_remaining, last_reset')
      .eq('user_id', userId)
      .maybeSingle();

    if (creditsError) {
      return { allowed: false, remainingCredits: 0, error: 'Failed to check credits' };
    }

    if (!credits) {
      return { allowed: false, remainingCredits: 0, error: 'User credits not found' };
    }

    // Vérifier si reset quotidien nécessaire
    const today = new Date().toISOString().split('T')[0];
    const lastReset = credits.last_reset?.split('T')[0];

    if (lastReset !== today) {
      // Récupérer le plan pour connaître les crédits max
      const { data: plan } = await supabase
        .from('user_plans')
        .select('credits_per_day')
        .eq('user_id', userId)
        .maybeSingle();

      const dailyCredits = plan?.credits_per_day ?? 10;

      // Reset les crédits (via service_role, donc le trigger ne bloquera pas)
      await supabase
        .from('user_credits')
        .update({
          credits_remaining: dailyCredits,
          last_reset: today
        })
        .eq('user_id', userId);

      return { allowed: true, remainingCredits: dailyCredits - 1 };
    }

    if (credits.credits_remaining <= 0) {
      return { allowed: false, remainingCredits: 0, error: 'No credits remaining' };
    }

    return { allowed: true, remainingCredits: credits.credits_remaining - 1 };
  } catch (err: any) {
    return { allowed: false, remainingCredits: 0, error: 'Rate limit check failed' };
  }
}

// ==================== SECURITY: Deduct Credit ====================
async function deductCredit(userId: string): Promise<void> {
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Décrémenter les crédits (via service_role)
    await supabase.rpc('decrement_user_credits', { p_user_id: userId });
  } catch (err: any) {
    console.error('[Security] Failed to deduct credit:', err.message);
  }
}

// Timeouts pour 58 APIs en parallèle (Equilibré: résultats stables)
const GLOBAL_TIMEOUT = 12000; // 12 secondes max pour tout
const API_TIMEOUT = 10000;    // 10 secondes par API

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-api-key, x-requested-with",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

type SearchRequest = {
  query?: string;
  userId?: string;
  searchType?: string;
  storageId?: string;
  bucket?: string;
};

type UnifiedResult = {
  database: string; // affichage UI
  infoLeak: string;
  data: Record<string, string>[];
};

type SearchResponseWithCategories = {
  breaches: UnifiedResult[];
  stealers: UnifiedResult[];
  meta: {
    source: string;
    query: string;
    totalBreaches: number;
    totalStealers: number;
  };
};

function isObject(v: any): v is Record<string, any> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function isDiscordId(q: string): boolean {
  return /^\d{17,20}$/.test(q.trim());
}

// ==================== INTELLIGENT QUERY TYPE DETECTION ====================
type QueryType =
  | 'email'
  | 'phone'
  | 'discord_id'
  | 'ip'
  | 'domain'
  | 'cfx'
  | 'username'
  | 'uuid'
  | 'unknown';

interface QueryAnalysis {
  type: QueryType;
  query: string;
  confidence: number;
}

function detectQueryType(query: string): QueryAnalysis {
  const q = query.trim();

  // Email detection (high confidence)
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(q)) {
    return { type: 'email', query: q, confidence: 1.0 };
  }

  // Phone detection (international format or digits only)
  if (/^[\+\d\s\-\(\)]{10,20}$/.test(q) && /\d{8,}/.test(q.replace(/[\s\-\(\)]/g, ''))) {
    return { type: 'phone', query: q.replace(/[\s\-\(\)]/g, ''), confidence: 0.95 };
  }

  // Discord ID (17-20 digits)
  if (/^\d{17,20}$/.test(q)) {
    return { type: 'discord_id', query: q, confidence: 1.0 };
  }

  // CFX/FiveM ID detection (format: cfx:xxxxx or fivem:xxxxx or steam:xxxxx)
  if (/^(cfx|fivem|steam|license|xbl|live|discord|ip):[a-zA-Z0-9]+$/i.test(q)) {
    return { type: 'cfx', query: q, confidence: 1.0 };
  }

  // IP Address (IPv4)
  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(q)) {
    const parts = q.split('.').map(Number);
    if (parts.every(p => p >= 0 && p <= 255)) {
      return { type: 'ip', query: q, confidence: 1.0 };
    }
  }

  // UUID detection (with or without dashes)
  if (/^[0-9a-fA-F]{8}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{4}-?[0-9a-fA-F]{12}$/.test(q)) {
    return { type: 'uuid', query: q, confidence: 0.9 };
  }

  // Domain detection (no @ but has dots and valid TLD)
  if (/^[a-zA-Z0-9][a-zA-Z0-9\-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(q)) {
    return { type: 'domain', query: q, confidence: 0.85 };
  }

  // Username (alphanumeric with underscores/dashes)
  if (/^[a-zA-Z0-9_\-\.]{3,32}$/.test(q)) {
    return { type: 'username', query: q, confidence: 0.7 };
  }

  // Unknown type
  return { type: 'unknown', query: q, confidence: 0.5 };
}

// Determine which APIs should be called based on query type
interface APICallStrategy {
  callBreachAPIs: boolean;
  callStealerAPIs: boolean;
  callInf0secLeaks: boolean;
  callInf0secCFX: boolean;
  callDiscordAPIs: boolean;
  callPhoneAPIs: boolean;
  callEmailAPIs: boolean;
  callDomainAPIs: boolean;
  callIPAPIs: boolean;
  callUsernameAPIs: boolean;
  callEnrichmentAPIs: boolean;
}

function getAPICallStrategy(analysis: QueryAnalysis): APICallStrategy {
  // ==================== APPELER TOUTES LES APIs ====================
  // On appelle TOUTES les APIs pour maximiser les résultats
  // Chaque API gère elle-même si elle peut traiter la requête ou non
  // Si une API ne supporte pas le type de requête, elle retourne simplement vide
  //
  // Cette approche garantit qu'on ne rate jamais de résultats à cause
  // d'une mauvaise détection du type de requête

  const strategy: APICallStrategy = {
    callBreachAPIs: true,
    callStealerAPIs: true,
    callInf0secLeaks: true,
    callInf0secCFX: true,
    callDiscordAPIs: true,
    callPhoneAPIs: true,
    callEmailAPIs: true,
    callDomainAPIs: true,
    callIPAPIs: true,
    callUsernameAPIs: true,
    callEnrichmentAPIs: true
  };

  // Log pour debug - on garde l'analyse mais on appelle tout
  console.log(`[Query Analysis] Detected type: ${analysis.type}, but calling ALL APIs for maximum results`);

  return strategy;
}

async function fetchJsonGET(url: URL, signal: AbortSignal) {
  // PAS DE RETRY - Une seule tentative pour rapidité maximale (3-5 secondes)
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), API_TIMEOUT);

  // Vérifier si le signal global est déjà annulé
  if (signal.aborted) {
    clearTimeout(timeoutId);
    return { ok: false, status: 408, json: {} };
  }

  try {
    const r = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "Dbs/1.0 (Edge Function)",
      },
      signal: timeoutController.signal,
    });

    const text = await r.text();
    let json: any;
    try {
      json = JSON.parse(text);
    } catch {
      json = { raw: text };
    }

    clearTimeout(timeoutId);
    return { ok: r.ok, status: r.status, json };
  } catch {
    clearTimeout(timeoutId);
    // Timeout ou erreur - retourner vide immédiatement
    return { ok: false, status: 408, json: {} };
  }
}

// LeakOSINT normalize -> UnifiedResult[]
function normalizeLeakOsint(json: any): UnifiedResult[] {
  const out: UnifiedResult[] = [];

  const list = json?.List ?? json?.list;
  if (isObject(list)) {
    for (const [dbName, dbBlock] of Object.entries<any>(list)) {
      if (!dbName || dbName === "No results found") continue;
      out.push({
        database: `Dbs Database • ${String(dbName)}`,
        infoLeak: String(dbBlock?.InfoLeak ?? dbBlock?.infoLeak ?? ""),
        data: Array.isArray(dbBlock?.Data) ? dbBlock.Data : Array.isArray(dbBlock?.data) ? dbBlock.data : [],
      });
    }
    return out;
  }

  const r = json?.results ?? json?.Results;
  if (isObject(r)) {
    for (const [dbName, dbBlock] of Object.entries<any>(r)) {
      if (!dbName || dbName === "No results found") continue;
      out.push({
        database: `Dbs Database • ${String(dbName)}`,
        infoLeak: String(dbBlock?.InfoLeak ?? dbBlock?.infoLeak ?? ""),
        data: Array.isArray(dbBlock?.Data) ? dbBlock.Data : Array.isArray(dbBlock?.data) ? dbBlock.data : [],
      });
    }
    return out;
  }

  if (Array.isArray(r)) {
    return r.map((item: any) => ({
      database: `Dbs Database • ${String(item?.database ?? item?.Database ?? "Breach")}`,
      infoLeak: String(item?.infoLeak ?? item?.InfoLeak ?? ""),
      data: Array.isArray(item?.data ?? item?.Data) ? (item.data ?? item.Data) : [],
    }));
  }

  return out;
}

// INF0SEC normalize -> UnifiedResult[]
function normalizeInf0sec(json: any, _tag: string): UnifiedResult[] {
  // Utiliser la fonction centralisée de détection d'erreurs
  if (isErrorResponse(json)) {
    return [];
  }

  // Nettoyer les métadonnées techniques uniquement
  const cleanJson: any = {};
  if (isObject(json)) {
    for (const [key, value] of Object.entries(json)) {
      const keyLower = key.toLowerCase();
      // Exclure seulement les champs de métadonnées (garder TOUTES les données)
      if (!['count', 'quota_remaining', 'quota_max', 'execution_time_ms', 'success', 'error', 'message', 'msg', 'status'].includes(keyLower)) {
        cleanJson[key] = value;
      }
    }
  } else if (Array.isArray(json)) {
    // Si c'est directement un tableau, le traiter
    return [{
      database: `Dbs Database`,
      infoLeak: `Dbs Intelligence`,
      data: json.map((x: any) => (isObject(x) ? x : { value: String(x) })) as any,
    }];
  } else {
    return [];
  }

  // Si après nettoyage il ne reste rien, retourner vide
  if (Object.keys(cleanJson).length === 0) {
    return [];
  }

  const r = cleanJson?.results ?? cleanJson?.Results ?? cleanJson?.data ?? cleanJson;

  // Si c'est un tableau
  if (Array.isArray(r) && r.length > 0) {
    return [{
      database: `Dbs Database`,
      infoLeak: `Dbs Intelligence`,
      data: r.map((x: any) => (isObject(x) ? x : { value: String(x) })) as any,
    }];
  }

  // Si c'est un objet
  if (isObject(r)) {
    const out: UnifiedResult[] = [];

    for (const [key, value] of Object.entries(r)) {
      // Ignorer les métadonnées
      if (['count', 'quota_remaining', 'quota_max', 'execution_time_ms'].includes(key)) {
        continue;
      }

      if (Array.isArray(value) && value.length > 0) {
        out.push({
          database: `Dbs Database • ${key}`,
          infoLeak: `Dbs Intelligence`,
          data: value.map((x: any) => (isObject(x) ? x : { value: String(x) })) as any,
        });
      } else if (isObject(value)) {
        out.push({
          database: `Dbs Database • ${key}`,
          infoLeak: `Dbs Intelligence`,
          data: [value as any],
        });
      }
    }

    // Si on a trouvé des résultats structurés
    if (out.length > 0) return out;

    // Sinon, retourner l'objet tel quel s'il contient des données
    const hasData = Object.keys(r).length > 0;
    if (hasData) {
      return [{
        database: `Dbs Database`,
        infoLeak: `Dbs Intelligence`,
        data: [r as any],
      }];
    }
  }

  return [];
}

// Multi search normalize -> UnifiedResult[]
function normalizeMulti(json: any): UnifiedResult[] {
  // Utiliser la fonction centralisée de détection d'erreurs
  if (isErrorResponse(json)) {
    return [];
  }

  // Nettoyer les métadonnées techniques
  const cleanJson: any = {};
  if (isObject(json)) {
    for (const [key, value] of Object.entries(json)) {
      const keyLower = key.toLowerCase();
      if (!['count', 'quota_remaining', 'quota_max', 'execution_time_ms', 'success', 'error', 'message', 'msg', 'status', 'http_status', 'statusCode'].includes(keyLower)) {
        cleanJson[key] = value;
      }
    }
  } else {
    return [];
  }

  // Si après nettoyage il ne reste rien, retourner vide
  if (Object.keys(cleanJson).length === 0) {
    return [];
  }

  const r = cleanJson?.results ?? cleanJson?.Results ?? cleanJson?.data ?? cleanJson;

  // Si c'est un tableau
  if (Array.isArray(r) && r.length > 0) {
    return [{
      database: "Dbs Database",
      infoLeak: "Dbs Intelligence",
      data: r.map((x: any) => (isObject(x) ? x : { value: String(x) })) as any,
    }];
  }

  // Si c'est un objet
  if (isObject(r)) {
    const out: UnifiedResult[] = [];

    for (const [key, value] of Object.entries(r)) {
      // Ignorer les métadonnées
      if (['count', 'quota_remaining', 'quota_max', 'execution_time_ms'].includes(key)) {
        continue;
      }

      if (Array.isArray(value) && value.length > 0) {
        out.push({
          database: `Dbs Database • ${key}`,
          infoLeak: "Dbs Intelligence",
          data: value.map((x: any) => (isObject(x) ? x : { value: String(x) })) as any,
        });
      } else if (isObject(value)) {
        out.push({
          database: `Dbs Database • ${key}`,
          infoLeak: "Dbs Intelligence",
          data: [value as any],
        });
      }
    }

    // Si on a trouvé des résultats structurés
    if (out.length > 0) return out;

    // Sinon, retourner l'objet tel quel s'il contient des données
    const hasData = Object.keys(r).length > 0;
    if (hasData) {
      return [{
        database: "Dbs Database",
        infoLeak: "Dbs Intelligence",
        data: [r as any],
      }];
    }
  }

  return [];
}

// Stealer Logs normalize -> UnifiedResult[]
function normalizeStealerLogs(json: any): UnifiedResult[] {
  // Utiliser la fonction centralisée de détection d'erreurs
  if (isErrorResponse(json)) {
    return [];
  }

  // Nettoyer les métadonnées techniques
  const cleanJson: any = {};
  if (isObject(json)) {
    for (const [key, value] of Object.entries(json)) {
      const keyLower = key.toLowerCase();
      // Exclure les champs de métadonnées et d'erreur
      if (!['count', 'quota_remaining', 'quota_max', 'execution_time_ms', 'success', 'error', 'message', 'msg', 'status', 'http_status', 'statusCode'].includes(keyLower)) {
        cleanJson[key] = value;
      }
    }
  } else {
    return [];
  }

  // Si après nettoyage il ne reste rien, retourner vide
  if (Object.keys(cleanJson).length === 0) {
    return [];
  }

  const r = cleanJson?.results ?? cleanJson?.Results ?? cleanJson?.data ?? cleanJson;

  // Helper pour convertir les objets en format plat lisible
  const flattenObject = (obj: any, prefix = ''): Record<string, string> => {
    const flattened: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}_${key}` : key;

      if (value === null || value === undefined) {
        flattened[newKey] = '';
      } else if (Array.isArray(value)) {
        flattened[newKey] = value.join(', ');
      } else if (typeof value === 'object') {
        // Récursif pour les objets imbriqués
        Object.assign(flattened, flattenObject(value, newKey));
      } else {
        flattened[newKey] = String(value);
      }
    }

    return flattened;
  };

  // Si c'est un tableau
  if (Array.isArray(r) && r.length > 0) {
    return [{
      database: "Dbs Stealer Database",
      infoLeak: "Dbs Intelligence",
      data: r.map((x: any) => (isObject(x) ? flattenObject(x) : { value: String(x) })),
    }];
  }

  // Si c'est un objet
  if (isObject(r)) {
    const out: UnifiedResult[] = [];

    for (const [key, value] of Object.entries(r)) {
      // Ignorer les métadonnées
      if (['count', 'quota_remaining', 'quota_max', 'execution_time_ms'].includes(key)) {
        continue;
      }

      if (Array.isArray(value) && value.length > 0) {
        out.push({
          database: `Dbs Stealer Database • ${key}`,
          infoLeak: "Dbs Intelligence",
          data: value.map((x: any) => (isObject(x) ? flattenObject(x) : { value: String(x) })),
        });
      } else if (isObject(value)) {
        out.push({
          database: `Dbs Stealer Database • ${key}`,
          infoLeak: "Dbs Intelligence",
          data: [flattenObject(value)],
        });
      }
    }

    // Si on a trouvé des résultats structurés
    if (out.length > 0) return out;

    // Sinon, retourner l'objet aplati
    const hasData = Object.keys(r).length > 0;
    if (hasData) {
      return [{
        database: "Dbs Stealer Database",
        infoLeak: "Dbs Intelligence",
        data: [flattenObject(r)],
      }];
    }
  }

  return [];
}

// Détecter le type de recherche pour l'API stealer logs
function detectStealerSearchType(query: string): string {
  // Email
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(query)) return 'email';

  // IP
  if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(query)) return 'IP';

  // UUID (32 hex chars avec ou sans tirets)
  if (/^[0-9a-fA-F]{32}$/.test(query.replace(/-/g, ''))) return 'UUID';

  // Phone (commence par + ou chiffres uniquement)
  if (/^[\+\d]{10,15}$/.test(query)) return 'phone';

  // Domain (contient un point mais pas @)
  if (/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/.test(query)) return 'domain';

  // Par défaut: username
  return 'username';
}

// Détecter le type de recherche pour l'API SEON (email ou phone uniquement)
function detectSeonType(query: string): 'email' | 'phone' | null {
  // Email
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(query)) return 'email';

  // Phone (commence par + ou chiffres uniquement, 10-15 caractères)
  if (/^[\+\d]{10,15}$/.test(query)) return 'phone';

  // SEON ne supporte que email et phone
  return null;
}

// Akula normalize -> UnifiedResult[]
function normalizeAkula(json: any): UnifiedResult[] {
  // Utiliser la fonction centralisée de détection d'erreurs
  if (isErrorResponse(json)) {
    return [];
  }

  // Nettoyer les métadonnées techniques
  const cleanJson: any = {};
  if (isObject(json)) {
    for (const [key, value] of Object.entries(json)) {
      const keyLower = key.toLowerCase();
      // Exclure les champs de métadonnées et d'erreur
      if (!['count', 'quota_remaining', 'quota_max', 'execution_time_ms', 'success', 'error', 'message', 'msg', 'status', 'http_status', 'statusCode'].includes(keyLower)) {
        cleanJson[key] = value;
      }
    }
  } else {
    return [];
  }

  // Si après nettoyage il ne reste rien, retourner vide
  if (Object.keys(cleanJson).length === 0) {
    return [];
  }

  const r = cleanJson?.results ?? cleanJson?.Results ?? cleanJson?.data ?? cleanJson;

  // Helper pour convertir les objets en format plat lisible
  const flattenObject = (obj: any, prefix = ''): Record<string, string> => {
    const flattened: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}_${key}` : key;

      if (value === null || value === undefined) {
        flattened[newKey] = '';
      } else if (Array.isArray(value)) {
        flattened[newKey] = value.join(', ');
      } else if (typeof value === 'object') {
        // Récursif pour les objets imbriqués
        Object.assign(flattened, flattenObject(value, newKey));
      } else {
        flattened[newKey] = String(value);
      }
    }

    return flattened;
  };

  // Si c'est un tableau
  if (Array.isArray(r) && r.length > 0) {
    return [{
      database: "Dbs Stealer Database",
      infoLeak: "Dbs Intelligence",
      data: r.map((x: any) => (isObject(x) ? flattenObject(x) : { value: String(x) })),
    }];
  }

  // Si c'est un objet
  if (isObject(r)) {
    const out: UnifiedResult[] = [];

    for (const [key, value] of Object.entries(r)) {
      // Ignorer les métadonnées
      if (['count', 'quota_remaining', 'quota_max', 'execution_time_ms'].includes(key)) {
        continue;
      }

      if (Array.isArray(value) && value.length > 0) {
        out.push({
          database: `Dbs Stealer Database • ${key}`,
          infoLeak: "Dbs Intelligence",
          data: value.map((x: any) => (isObject(x) ? flattenObject(x) : { value: String(x) })),
        });
      } else if (isObject(value)) {
        out.push({
          database: `Dbs Stealer Database • ${key}`,
          infoLeak: "Dbs Intelligence",
          data: [flattenObject(value)],
        });
      }
    }

    // Si on a trouvé des résultats structurés
    if (out.length > 0) return out;

    // Sinon, retourner l'objet aplati
    const hasData = Object.keys(r).length > 0;
    if (hasData) {
      return [{
        database: "Dbs Stealer Database",
        infoLeak: "Dbs Intelligence",
        data: [flattenObject(r)],
      }];
    }
  }

  return [];
}

// SEON normalize -> UnifiedResult[]
function normalizeSeon(json: any, type: 'email' | 'phone'): UnifiedResult[] {
  // Utiliser la fonction centralisée de détection d'erreurs
  if (isErrorResponse(json)) {
    return [];
  }

  // Nettoyer les métadonnées techniques
  const cleanJson: any = {};
  if (isObject(json)) {
    for (const [key, value] of Object.entries(json)) {
      const keyLower = key.toLowerCase();
      if (!['count', 'quota_remaining', 'quota_max', 'execution_time_ms', 'success', 'error', 'message', 'msg', 'status', 'http_status', 'statusCode'].includes(keyLower)) {
        cleanJson[key] = value;
      }
    }
  } else {
    return [];
  }

  // Si après nettoyage il ne reste rien, retourner vide
  if (Object.keys(cleanJson).length === 0) {
    return [];
  }

  const r = cleanJson?.data ?? cleanJson?.results ?? cleanJson?.Results ?? cleanJson;

  // Helper pour convertir les objets en format plat lisible
  const flattenObject = (obj: any, prefix = ''): Record<string, string> => {
    const flattened: Record<string, string> = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}_${key}` : key;

      if (value === null || value === undefined) {
        flattened[newKey] = '';
      } else if (Array.isArray(value)) {
        flattened[newKey] = value.join(', ');
      } else if (typeof value === 'object') {
        // Récursif pour les objets imbriqués
        Object.assign(flattened, flattenObject(value, newKey));
      } else {
        flattened[newKey] = String(value);
      }
    }

    return flattened;
  };

  // Si c'est un tableau
  if (Array.isArray(r) && r.length > 0) {
    return [{
      database: `Dbs ${type === 'email' ? 'Email' : 'Phone'} Intelligence`,
      infoLeak: `Dbs Intelligence`,
      data: r.map((x: any) => (isObject(x) ? flattenObject(x) : { value: String(x) })),
    }];
  }

  // Si c'est un objet
  if (isObject(r)) {
    const hasData = Object.keys(r).length > 0;
    if (hasData) {
      return [{
        database: `Dbs ${type === 'email' ? 'Email' : 'Phone'} Intelligence`,
        infoLeak: `Dbs Intelligence`,
        data: [flattenObject(r)],
      }];
    }
  }

  return [];
}

// IntelX normalize -> UnifiedResult[]
function normalizeIntelX(json: any): UnifiedResult[] {
  // Helper function to decode HTML entities
  const decodeHtml = (html: string): string => {
    return html
      .replace(/&#x2F;/g, '/')
      .replace(/&#x3A;/g, ':')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'");
  };

  // Helper function to parse credential format
  const parseCredentials = (text: string): Record<string, string>[] => {
    const credentials: Record<string, string>[] = [];

    // Pattern: SOFT: [software] URL: [url] USER: [username] PASS: [password]
    const pattern = /SOFT:\s*([^\s]+(?:\s+[^\s]+)*?)\s+URL:\s*(\S+)\s+USER:\s*(\S+)\s+PASS:\s*(\S+)/gi;
    let match;

    while ((match = pattern.exec(text)) !== null) {
      credentials.push({
        software: decodeHtml(match[1].trim()),
        url: decodeHtml(match[2].trim()),
        username: decodeHtml(match[3].trim()),
        password: decodeHtml(match[4].trim())
      });
    }

    return credentials;
  };

  const flattenObject = (obj: any, prefix = ''): Record<string, string> => {
    const flattened: Record<string, string> = {};
    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}_${key}` : key;
      if (value === null || value === undefined) {
        flattened[newKey] = '';
      } else if (Array.isArray(value)) {
        flattened[newKey] = value.join(', ');
      } else if (typeof value === 'object') {
        Object.assign(flattened, flattenObject(value, newKey));
      } else {
        flattened[newKey] = String(value);
      }
    }
    return flattened;
  };

  // Parse raw string data if present
  const parseRawData = (data: any[]): any[] => {
    const parsed: any[] = [];

    for (const item of data) {
      // Check if this is a raw string containing credential patterns
      if (typeof item === 'object' && item.raw && typeof item.raw === 'string') {
        const credentials = parseCredentials(item.raw);

        if (credentials.length > 0) {
          // If we found credentials, add them as separate entries
          parsed.push(...credentials);
        } else {
          // Otherwise, keep the original flattened object
          parsed.push(item);
        }
      } else {
        parsed.push(item);
      }
    }

    return parsed;
  };

  // Si c'est un tableau de résultats
  if (Array.isArray(json)) {
    if (json.length > 0) {
      const flattened = json.map((x: any) => (isObject(x) ? flattenObject(x) : { value: String(x) }));
      const parsedData = parseRawData(flattened);

      return [{
        database: "Dbs Database",
        infoLeak: "Dbs Intelligence",
        data: parsedData,
      }];
    }
    return [];
  }

  // Si c'est un objet avec un champ results
  const r = json?.results ?? json?.data;
  if (Array.isArray(r) && r.length > 0) {
    const flattened = r.map((x: any) => (isObject(x) ? flattenObject(x) : { value: String(x) }));
    const parsedData = parseRawData(flattened);

    return [{
      database: "Dbs Database",
      infoLeak: "Dbs Intelligence",
      data: parsedData,
    }];
  }

  // Si c'est un objet unique
  if (isObject(json) && Object.keys(json).length > 0) {
    const flattened = [flattenObject(json)];
    const parsedData = parseRawData(flattened);

    return [{
      database: "Dbs Database",
      infoLeak: "Dbs Intelligence",
      data: parsedData,
    }];
  }

  return [];
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    if (!API_KEY) {
      return new Response(JSON.stringify({ error: "Server configuration error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ==================== SECURITY: Verify JWT ====================
    const { userId: authenticatedUserId, error: authError } = await verifyJWTAndGetUser(req);

    if (authError || !authenticatedUserId) {
      return new Response(JSON.stringify({ error: authError || "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let payload: SearchRequest;
    try {
      payload = (await req.json()) as SearchRequest;
    } catch {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { query, searchType, storageId, bucket } = payload ?? ({} as any);

    // ==================== SECURITY: Use authenticated userId, ignore payload userId ====================
    const userId = authenticatedUserId; // IGNORE le userId du payload, utiliser celui du JWT

    // Handle IntelX search
    if (searchType === 'intelx') {
      if (!storageId || typeof storageId !== "string") {
        return new Response(JSON.stringify({ error: "storageId is required for IntelX search" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (!bucket || typeof bucket !== "string") {
        return new Response(JSON.stringify({ error: "bucket is required for IntelX search" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const controller = new AbortController();
      const tid = setTimeout(() => controller.abort(), GLOBAL_TIMEOUT);

      try {
        const url = new URL("/api/intelx", BASE);
        url.searchParams.set("storage_id", storageId);
        url.searchParams.set("bucket", bucket);
        url.searchParams.set("key", API_KEY);

        const { ok, json } = await fetchJsonGET(url, controller.signal);

        // Si l'API retourne une erreur ou clé invalide
        if (!ok || json?.error || json?.message?.includes('Invalid') || json?.message?.includes('not found')) {
          return new Response(JSON.stringify({
            results: [],
            meta: { source: "intelx", storageId, bucket, total: 0, message: json?.message || "Invalid API credentials or storage ID not found" }
          }), {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-store" }
          });
        }

        const results = normalizeIntelX(json);

        // Vérifier si on a des résultats valides
        if (results.length === 0) {
          return new Response(JSON.stringify({
            results: [],
            meta: { source: "intelx", storageId, bucket, total: 0, message: "No results found" }
          }), {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-store" }
          });
        }

        return new Response(JSON.stringify({
          results,
          meta: { source: "intelx", storageId, bucket, total: results.length }
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-store" }
        });
      } catch (err: any) {
        // Retourner un résultat vide au lieu d'une erreur 500
        return new Response(JSON.stringify({
          results: [],
          meta: { source: "intelx", storageId, bucket, total: 0, message: "IntelX search failed. Please check your credentials." }
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-store" }
        });
      } finally {
        clearTimeout(tid);
      }
    }

    // Regular search requires query (userId already verified via JWT)
    if (!query || typeof query !== "string") {
      return new Response(JSON.stringify({ error: "query is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ==================== SECURITY: Sanitize and validate query ====================
    const q = sanitizeInput(query);

    if (!isValidQuery(q)) {
      return new Response(JSON.stringify({ error: "Invalid query format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ==================== SECURITY: Rate limiting ====================
    const { allowed, remainingCredits, error: rateLimitError } = await checkRateLimit(userId);

    if (!allowed) {
      return new Response(JSON.stringify({
        error: rateLimitError || "Rate limit exceeded",
        remainingCredits: 0
      }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Déduire un crédit après validation
    await deductCredit(userId);

    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), GLOBAL_TIMEOUT);

    try {
      // 1) Discord ID - recherche Discord lookup + TOUTES les APIs gaming
      // On récupère d'abord les résultats Discord lookup si c'est un Discord ID
      let discordLookupResults: UnifiedResult[] = [];

      if (isDiscordId(q) && DISCORD_KEY) {
        try {
          const url = new URL("/api/discord/discord-lookup", BASE);
          url.searchParams.set("query", q);
          url.searchParams.set("key", DISCORD_KEY);

          const { ok, json } = await fetchJsonGET(url, controller.signal);

          // Si l'API retourne des données valides
          if (ok && !json?.error && !json?.message?.includes('Invalid') && !json?.message?.includes('not found')) {
            // Nettoyer les métadonnées techniques
            const cleanData: any = {};
            if (isObject(json)) {
              for (const [key, value] of Object.entries(json)) {
                if (!['count', 'quota_remaining', 'quota_max', 'execution_time_ms', 'success', 'error'].includes(key)) {
                  cleanData[key] = value;
                }
              }
            }

            const discordData = cleanData.results || cleanData;

            // Vérifier si on a des données valides
            if (discordData && !(isObject(discordData) && Object.keys(discordData).length === 0)) {
              discordLookupResults.push({
                database: "Dbs Discord Intelligence",
                infoLeak: "Dbs Intelligence",
                data: [isObject(discordData) ? discordData : { value: String(discordData) }] as any,
              });
            }
          }
        } catch (err: any) {
          // Silencieusement ignorer les erreurs Discord lookup, on continue avec les autres APIs
          console.log("[Discord Lookup] Error:", err.message);
        }
      }
      // IMPORTANT: On ne fait PAS de return ici, on continue vers les autres APIs gaming

      // 2) Pour toutes les recherches: interroger TOUTES les sources en parallèle
      const breachResults: UnifiedResult[] = [];
      const stealerResults: UnifiedResult[] = [];

      // Détecter le type de recherche pour stealer logs et SEON
      const stealerType = detectStealerSearchType(q);
      const seonType = detectSeonType(q);

      // ==================== INTELLIGENT QUERY DETECTION ====================
      // Analyser le type de requête et déterminer quelles APIs appeler
      const queryAnalysis = detectQueryType(q);
      const strategy = getAPICallStrategy(queryAnalysis);
      console.log(`[Query Analysis] Type: ${queryAnalysis.type}, Confidence: ${queryAnalysis.confidence}, Strategy:`, JSON.stringify(strategy));

      // ALL APIs are called unconditionally for maximum results
      // IMPORTANT: L'ordre des variables DOIT correspondre EXACTEMENT à l'ordre des appels API ci-dessous
      const [
        leakRes,                    // 1. LeakOSINT
        infosecLeaksRes,            // 2. INF0SEC module LEAKS
        infosecCfxRes,              // 3. INF0SEC module CFX
        infosecCfxDiscordRes,       // 4. INF0SEC module CFX discord:ID
        multiRes,                   // 5. BreachHub Multi
        xosintRes,                  // 6. xOsint Searcher
        breachripAmazonRes,         // 7. Breach.rip Amazon
        breachripDbRes,             // 8. Breach.rip DB
        breachripDiscordRes,        // 9. Breach.rip Discord
        breachripCryptobreachRes,   // 10. Breach.rip Cryptobreach
        melissaRes,                 // 11. Melissa
        intelbasePhoneRes,          // 12. IntelBase Phone
        intelbaseGithubRes,         // 13. IntelBase GitHub
        intelbaseEmailCheckRes,     // 14. IntelBase Email Check
        intelbaseIpLookupRes,       // 15. IntelBase IP Lookup
        intelbaseMinecraftRes,      // 16. IntelBase Minecraft
        intelbaseBmwRes,            // 17. IntelBase BMW
        intelbaseDoxbinRes,         // 18. IntelBase Doxbin
        leaksightRes,               // 19. LeakSight
        stealerRes,                 // 20. Stealer Logs
        akulaRes,                   // 21. Akula
        snusbaseRes,                // 22. Snusbase
        leakCheckV2Res,             // 23. LeakCheck V2
        breachDirectoryRes,         // 24. BreachDirectory
        breachVIPRes,               // 25. BreachVIP
        breachBaseRes,              // 26. BreachBase
        breachLookupRes,            // 27. BreachLookup
        cordcatRes,                 // 28. Cord.cat
        intelvaultRes,              // 29. IntelVault
        hackcheckRes,               // 30. HackCheck
        hudsonRockRes,              // 31. HudsonRock
        wentynRes,                  // 32. Wentyn
        seonRes,                    // 33. SEON
        osintKitRes,                // 34. OsintKit
        infosecDiscordRes,          // 35. INF0SEC module Discord
        infosecUsernameRes,         // 36. INF0SEC module Username
        cordcatIpRes,               // 37. Cord.cat IP lookup
        oathnetBreachRes,           // 38. Oathnet Breach
        oathnetStealerRes,          // 39. Oathnet Stealer
        oathnetDiscordToRobloxRes,  // 40. Oathnet Discord to Roblox
        memoryRes,                  // 41. Memory.lol
        osintcatDbRes,              // 42. OsintCat database
        intelfetchDiscordRes,       // 43. IntelFetch Discord
        intelfetchGithubRes,        // 44. IntelFetch GitHub
        intelfetchIpRes,            // 45. IntelFetch IP
        intelfetchFetchbaseRes,     // 46. IntelFetch Fetchbase
        intelfetchDomainRes,        // 47. IntelFetch Domain
        indiciaEmailRes,            // 48. Indicia Email
        indiciaPhoneRes,            // 49. Indicia Phone
        crowsintRes,                // 50. Crowsint Minecraft
        crowsintSocialRes,          // 51. Crowsint Social
        crowsintGithubRes,          // 52. Crowsint GitHub
        crowsintDiscordRes,         // 53. Crowsint Discord
        redditRes,                  // 54. Reddit
        truecallerRes,              // 55. Truecaller
        ipinfoRes,                  // 56. IPinfo
        githubRes,                  // 57. GitHub OSINT
        steamRes                    // 58. Steam Lookup
      ] = await Promise.all([
        // ==================== BREACH APIs (ALL APIs called unconditionally) ====================
        // LeakOSINT
        (async () => {
          try {
            const url = new URL("/api/leakosint", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // INF0SEC module LEAKS
        (async () => {
          try {
            const url = new URL("/api/inf0sec", BASE);
            url.searchParams.set("module", "leaks");
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // INF0SEC module CFX (FiveM) - recherche normale
        (async () => {
          try {
            const url = new URL("/api/inf0sec", BASE);
            url.searchParams.set("module", "cfx");
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // INF0SEC module CFX (FiveM) - recherche avec discord:ID
        (async () => {
          try {
            const url = new URL("/api/inf0sec", BASE);
            url.searchParams.set("module", "cfx");
            url.searchParams.set("query", `discord:${q}`);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // BreachHub Multi
        (async () => {
          try {
            const url = new URL("/api/breachhub/search", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // xOsint Searcher
        (async () => {
          try {
            const url = new URL("/api/xosint/search", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Breach.rip Amazon (Email/Breach API)
        (async () => {
          try {
            const url = new URL("/api/breachrip/amazon", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Breach.rip DB (Breach API)
        (async () => {
          try {
            const url = new URL("/api/breachrip/db", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Breach.rip Discord (Discord API)
        (async () => {
          try {
            const url = new URL("/api/breachrip/discord", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Breach.rip Cryptobreach (Breach API)
        (async () => {
          try {
            const url = new URL("/api/breachrip/cryptobreach", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Melissa (Enrichment API)
        (async () => {
          try {
            const url = new URL("/api/melissa", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelBase Phone (Phone API)
        (async () => {
          try {
            const url = new URL("/api/intelbase/phone", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelBase GitHub (Username API)
        (async () => {
          try {
            const url = new URL("/api/intelbase/github", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelBase Email Check (Email API)
        (async () => {
          try {
            const url = new URL("/api/intelbase/email/check", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelBase IP Lookup (IP API)
        (async () => {
          try {
            const url = new URL("/api/intelbase/ip/lookup", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelBase Minecraft (Username API)
        (async () => {
          try {
            const url = new URL("/api/intelbase/minecraft", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelBase BMW (Breach API)
        (async () => {
          try {
            const url = new URL("/api/intelbase/bmw", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelBase Doxbin (Breach API)
        (async () => {
          try {
            const url = new URL("/api/intelbase/doxbin", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // LeakSight (Breach API)
        (async () => {
          try {
            const url = new URL("/api/leaksight", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Stealer Logs (Stealer API)
        (async () => {
          try {
            const url = new URL("/api/stealerlogs/search", BASE);
            url.searchParams.set("type", stealerType);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Akula (Stealer API)
        (async () => {
          try {
            const url = new URL("/api/akula", BASE);
            url.searchParams.set("category", "auto");
            url.searchParams.set("term", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Snusbase (Breach API)
        (async () => {
          try {
            const url = new URL("/api/snusbase", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // LeakCheck V2 (Breach API)
        (async () => {
          try {
            const url = new URL("/api/leakcheck/v2", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // BreachDirectory (Breach API)
        (async () => {
          try {
            const url = new URL("/api/breachdirectory", BASE);
            url.searchParams.set("type", "auto");
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // BreachVIP (Breach API)
        (async () => {
          try {
            const url = new URL("/api/breachvip", BASE);
            url.searchParams.set("category", "auto");
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // BreachBase (Breach API)
        (async () => {
          try {
            const url = new URL("/api/breachbase", BASE);
            url.searchParams.set("category", "auto");
            url.searchParams.set("term", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // BreachLookup (Breach API)
        (async () => {
          try {
            const url = new URL("/api/breachlookup", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Cord.cat (Discord API)
        (async () => {
          try {
            const url = new URL("/api/cordcat", BASE);
            url.searchParams.set("id", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelVault (Breach API)
        (async () => {
          try {
            const url = new URL("/api/intelvault", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // HackCheck (Breach API)
        (async () => {
          try {
            const url = new URL("/api/hackcheck", BASE);
            url.searchParams.set("category", "auto");
            url.searchParams.set("term", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // HudsonRock (Stealer API)
        (async () => {
          try {
            const url = new URL("/api/hudsonrock", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Wentyn (Stealer API)
        (async () => {
          try {
            const url = new URL("/api/wentyn", BASE);
            url.searchParams.set("category", "auto");
            url.searchParams.set("term", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // SEON (Email/Phone API)
        (async () => {
          try {
            const type = seonType || "email";
            const url = new URL(`/api/seon/${type}`, BASE);
            url.searchParams.set(type === 'email' ? 'email' : 'phone', q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // OsintKit (Stealer API)
        (async () => {
          try {
            const url = new URL("/api/osintkit", BASE);
            url.searchParams.set("category", "auto");
            url.searchParams.set("term", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // ==================== ADDITIONAL APIs (ALL called unconditionally) ====================
        // INF0SEC module Discord (Discord API)
        (async () => {
          try {
            const url = new URL("/api/inf0sec", BASE);
            url.searchParams.set("module", "discord");
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // INF0SEC module Username (Username API)
        (async () => {
          try {
            const url = new URL("/api/inf0sec", BASE);
            url.searchParams.set("module", "username");
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Cord.cat IP lookup (IP API)
        (async () => {
          try {
            const url = new URL("/api/cordcat/ip", BASE);
            url.searchParams.set("ip", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Oathnet Breach (Breach API)
        (async () => {
          try {
            const url = new URL("/api/oathnet/breach", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Oathnet Stealer (Stealer API)
        (async () => {
          try {
            const url = new URL("/api/oathnet/stealer", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Oathnet Discord to Roblox (Discord API)
        (async () => {
          try {
            const url = new URL("/api/oathnet/discordtoroblox", BASE);
            url.searchParams.set("discord_id", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Memory.lol - username history (Username API)
        (async () => {
          try {
            const url = new URL("/api/memory", BASE);
            url.searchParams.set("username", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // OsintCat database search (Breach API)
        (async () => {
          try {
            const url = new URL("/api/osintcat/database-search", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelFetch Discord (Discord API)
        (async () => {
          try {
            const url = new URL("/api/intelfetch/discord", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelFetch GitHub (Username API)
        (async () => {
          try {
            const url = new URL("/api/intelfetch/github", BASE);
            url.searchParams.set("username", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelFetch IP Lookup (IP API)
        (async () => {
          try {
            const url = new URL("/api/intelfetch/ip-lookup", BASE);
            url.searchParams.set("ip", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelFetch Fetchbase (Breach API)
        (async () => {
          try {
            const url = new URL("/api/intelfetch/fetchbase", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IntelFetch Domain (Domain API)
        (async () => {
          try {
            const url = new URL("/api/intelfetch/domain", BASE);
            url.searchParams.set("domain", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Indicia Email (Email API)
        (async () => {
          try {
            const url = new URL("/api/indicia/email", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Indicia Phone (Phone API)
        (async () => {
          try {
            const url = new URL("/api/indicia/phone", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Crowsint Minecraft (Username API)
        (async () => {
          try {
            const url = new URL("/api/crowsint", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Crowsint Social (Username API)
        (async () => {
          try {
            const url = new URL("/api/crowsint/social", BASE);
            url.searchParams.set("username", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Crowsint GitHub (Username API)
        (async () => {
          try {
            const url = new URL("/api/crowsint/github", BASE);
            url.searchParams.set("username", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Crowsint Discord (Discord API)
        (async () => {
          try {
            const url = new URL("/api/crowsint/discord", BASE);
            url.searchParams.set("query", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Reddit (Username API)
        (async () => {
          try {
            const url = new URL("/api/reddit", BASE);
            url.searchParams.set("username", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Truecaller (Phone API)
        (async () => {
          try {
            const url = new URL("/api/truecaller", BASE);
            url.searchParams.set("phone", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // IPinfo (IP API)
        (async () => {
          try {
            const url = new URL("/api/ipinfo", BASE);
            url.searchParams.set("ip", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // GitHub OSINT (Email/Username API)
        (async () => {
          try {
            const url = new URL("/api/github", BASE);
            url.searchParams.set("email", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })(),
        // Steam Lookup (CFX/Username API)
        (async () => {
          try {
            const url = new URL("/api/steam", BASE);
            url.searchParams.set("steam_id", q);
            url.searchParams.set("key", API_KEY);
            return await fetchJsonGET(url, controller.signal);
          } catch {
            return { ok: false, status: 500, json: {} };
          }
        })()
      ]);

      // ==================== TRAITEMENT DES RÉSULTATS ====================
      // LeakOSINT
      if (leakRes.ok) {
        breachResults.push(...normalizeLeakOsint(leakRes.json));
      }

      // INF0SEC leaks
      if (infosecLeaksRes.ok) {
        breachResults.push(...normalizeInf0sec(infosecLeaksRes.json, "leaks"));
      }

      // INF0SEC CFX (FiveM)
      if (infosecCfxRes.ok) {
        breachResults.push(...normalizeInf0sec(infosecCfxRes.json, "cfx"));
      }

      // INF0SEC CFX avec discord:ID (pour trouver les licenses associées à un Discord ID)
      if (infosecCfxDiscordRes.ok) {
        breachResults.push(...normalizeInf0sec(infosecCfxDiscordRes.json, "cfx-discord"));
      }

      // Traiter BreachHub Multi (breaches)
      if (multiRes.ok) {
        const multiResults = normalizeMulti(multiRes.json);
        breachResults.push(...multiResults);
      }

      // Traiter Snusbase (breaches)
      if (snusbaseRes.ok) {
        const snusbaseResults = normalizeInf0sec(snusbaseRes.json, "Snusbase");
        breachResults.push(...snusbaseResults);
      }

      // Traiter LeakCheck V2 (breaches)
      if (leakCheckV2Res.ok) {
        const leakCheckResults = normalizeInf0sec(leakCheckV2Res.json, "LeakCheck V2");
        breachResults.push(...leakCheckResults);
      }

      // Traiter BreachDirectory (breaches)
      if (breachDirectoryRes.ok) {
        const breachDirectoryResults = normalizeInf0sec(breachDirectoryRes.json, "BreachDirectory");
        breachResults.push(...breachDirectoryResults);
      }

      // Traiter BreachVIP (breaches)
      if (breachVIPRes.ok) {
        const breachVIPResults = normalizeInf0sec(breachVIPRes.json, "Breach.vip");
        breachResults.push(...breachVIPResults);
      }

      // Traiter BreachBase (breaches)
      if (breachBaseRes.ok) {
        const breachBaseResults = normalizeInf0sec(breachBaseRes.json, "BreachBase");
        breachResults.push(...breachBaseResults);
      }

      // Traiter BreachLookup (breaches)
      if (breachLookupRes.ok) {
        const breachLookupResults = normalizeInf0sec(breachLookupRes.json, "BreachLookup");
        breachResults.push(...breachLookupResults);
      }

      // Traiter xOsint Searcher (breaches)
      if (xosintRes.ok) {
        const xosintResults = normalizeInf0sec(xosintRes.json, "xOsint");
        breachResults.push(...xosintResults);
      }

      // Traiter Breach.rip Amazon (breaches)
      if (breachripAmazonRes.ok) {
        const breachripAmazonResults = normalizeInf0sec(breachripAmazonRes.json, "Breach.rip Amazon");
        breachResults.push(...breachripAmazonResults);
      }

      // Traiter Breach.rip DB (breaches)
      if (breachripDbRes.ok) {
        const breachripDbResults = normalizeInf0sec(breachripDbRes.json, "Breach.rip DB");
        breachResults.push(...breachripDbResults);
      }

      // Traiter Breach.rip Discord (breaches)
      if (breachripDiscordRes.ok) {
        const breachripDiscordResults = normalizeInf0sec(breachripDiscordRes.json, "Breach.rip Discord");
        breachResults.push(...breachripDiscordResults);
      }

      // Traiter Breach.rip Cryptobreach (breaches)
      if (breachripCryptobreachRes.ok) {
        const breachripCryptobreachResults = normalizeInf0sec(breachripCryptobreachRes.json, "Breach.rip Cryptobreach");
        breachResults.push(...breachripCryptobreachResults);
      }

      // Traiter Melissa (breaches/enrichment)
      if (melissaRes.ok) {
        const melissaResults = normalizeInf0sec(melissaRes.json, "Melissa");
        breachResults.push(...melissaResults);
      }

      // Traiter IntelBase Phone (breaches)
      if (intelbasePhoneRes.ok) {
        const intelbasePhoneResults = normalizeInf0sec(intelbasePhoneRes.json, "IntelBase Phone");
        breachResults.push(...intelbasePhoneResults);
      }

      // Traiter IntelBase GitHub (breaches)
      if (intelbaseGithubRes.ok) {
        const intelbaseGithubResults = normalizeInf0sec(intelbaseGithubRes.json, "IntelBase GitHub");
        breachResults.push(...intelbaseGithubResults);
      }

      // Traiter IntelBase Email Check (breaches)
      if (intelbaseEmailCheckRes.ok) {
        const intelbaseEmailCheckResults = normalizeInf0sec(intelbaseEmailCheckRes.json, "IntelBase Email");
        breachResults.push(...intelbaseEmailCheckResults);
      }

      // Traiter IntelBase IP Lookup (breaches)
      if (intelbaseIpLookupRes.ok) {
        const intelbaseIpLookupResults = normalizeInf0sec(intelbaseIpLookupRes.json, "IntelBase IP");
        breachResults.push(...intelbaseIpLookupResults);
      }

      // Traiter IntelBase Minecraft (breaches)
      if (intelbaseMinecraftRes.ok) {
        const intelbaseMinecraftResults = normalizeInf0sec(intelbaseMinecraftRes.json, "IntelBase Minecraft");
        breachResults.push(...intelbaseMinecraftResults);
      }

      // Traiter IntelBase BMW (breaches)
      if (intelbaseBmwRes.ok) {
        const intelbaseBmwResults = normalizeInf0sec(intelbaseBmwRes.json, "IntelBase BMW");
        breachResults.push(...intelbaseBmwResults);
      }

      // Traiter IntelBase Doxbin (breaches)
      if (intelbaseDoxbinRes.ok) {
        const intelbaseDoxbinResults = normalizeInf0sec(intelbaseDoxbinRes.json, "IntelBase Doxbin");
        breachResults.push(...intelbaseDoxbinResults);
      }

      // Traiter LeakSight (breaches)
      if (leaksightRes.ok) {
        const leaksightResults = normalizeInf0sec(leaksightRes.json, "LeakSight");
        breachResults.push(...leaksightResults);
      }

      // ==================== TRAITEMENT DES STEALER APIs ====================
      // Traiter Stealer Logs (séparé)
      if (stealerRes.ok) {
        const stealerLogsResults = normalizeStealerLogs(stealerRes.json);
        stealerResults.push(...stealerLogsResults);
      }

      // Traiter Akula (séparé - stealers)
      if (akulaRes.ok) {
        const akulaResults = normalizeAkula(akulaRes.json);
        stealerResults.push(...akulaResults);
      }

      // Traiter OsintKit (stealers)
      if (osintKitRes.ok) {
        const osintKitResults = normalizeStealerLogs(osintKitRes.json);
        stealerResults.push(...osintKitResults);
      }

      // ==================== TRAITEMENT DES ENRICHMENT APIs ====================
      // Traiter SEON (enrichment - ajouté aux breaches pour visibilité)
      // Toujours essayer de traiter SEON, même sans type détecté
      if (seonRes.ok) {
        const seonResults = normalizeSeon(seonRes.json, seonType || 'email');
        breachResults.push(...seonResults);
      }

      // ==================== TRAITEMENT DES PREMIUM BREACH APIs ====================
      // Traiter HudsonRock (stealers premium)
      if (hudsonRockRes.ok) {
        const hudsonRockResults = normalizeStealerLogs(hudsonRockRes.json);
        stealerResults.push(...hudsonRockResults);
      }

      // Traiter Cord.cat (breaches/discord)
      if (cordcatRes.ok) {
        const cordcatResults = normalizeInf0sec(cordcatRes.json, "Cord.cat");
        breachResults.push(...cordcatResults);
      }

      // Traiter IntelVault (breaches)
      if (intelvaultRes.ok) {
        const intelvaultResults = normalizeInf0sec(intelvaultRes.json, "IntelVault");
        breachResults.push(...intelvaultResults);
      }

      // Traiter HackCheck (breaches)
      if (hackcheckRes.ok) {
        const hackcheckResults = normalizeInf0sec(hackcheckRes.json, "HackCheck");
        breachResults.push(...hackcheckResults);
      }

      // ==================== TRAITEMENT DES STEALER APIs ====================
      // Traiter Wentyn (stealers)
      if (wentynRes.ok) {
        const wentynResults = normalizeStealerLogs(wentynRes.json);
        stealerResults.push(...wentynResults);
      }

      // ==================== TRAITEMENT DES NOUVELLES APIs ====================
      // INF0SEC Discord
      if (infosecDiscordRes.ok) {
        breachResults.push(...normalizeInf0sec(infosecDiscordRes.json, "INF0SEC Discord"));
      }

      // INF0SEC Username
      if (infosecUsernameRes.ok) {
        breachResults.push(...normalizeInf0sec(infosecUsernameRes.json, "INF0SEC Username"));
      }

      // Cord.cat IP
      if (cordcatIpRes.ok) {
        breachResults.push(...normalizeInf0sec(cordcatIpRes.json, "Cord.cat IP"));
      }

      // Oathnet Breach
      if (oathnetBreachRes.ok) {
        breachResults.push(...normalizeInf0sec(oathnetBreachRes.json, "Oathnet Breach"));
      }

      // Oathnet Stealer
      if (oathnetStealerRes.ok) {
        stealerResults.push(...normalizeStealerLogs(oathnetStealerRes.json));
      }

      // Oathnet Discord to Roblox
      if (oathnetDiscordToRobloxRes.ok) {
        breachResults.push(...normalizeInf0sec(oathnetDiscordToRobloxRes.json, "Discord to Roblox"));
      }

      // Memory.lol
      if (memoryRes.ok) {
        breachResults.push(...normalizeInf0sec(memoryRes.json, "Memory.lol"));
      }

      // OsintCat DB
      if (osintcatDbRes.ok) {
        breachResults.push(...normalizeInf0sec(osintcatDbRes.json, "OsintCat"));
      }

      // IntelFetch Discord
      if (intelfetchDiscordRes.ok) {
        breachResults.push(...normalizeInf0sec(intelfetchDiscordRes.json, "IntelFetch Discord"));
      }

      // IntelFetch GitHub
      if (intelfetchGithubRes.ok) {
        breachResults.push(...normalizeInf0sec(intelfetchGithubRes.json, "IntelFetch GitHub"));
      }

      // IntelFetch IP
      if (intelfetchIpRes.ok) {
        breachResults.push(...normalizeInf0sec(intelfetchIpRes.json, "IntelFetch IP"));
      }

      // IntelFetch Fetchbase
      if (intelfetchFetchbaseRes.ok) {
        breachResults.push(...normalizeInf0sec(intelfetchFetchbaseRes.json, "IntelFetch Fetchbase"));
      }

      // IntelFetch Domain
      if (intelfetchDomainRes.ok) {
        breachResults.push(...normalizeInf0sec(intelfetchDomainRes.json, "IntelFetch Domain"));
      }

      // Indicia Email
      if (indiciaEmailRes.ok) {
        breachResults.push(...normalizeInf0sec(indiciaEmailRes.json, "Indicia Email"));
      }

      // Indicia Phone
      if (indiciaPhoneRes.ok) {
        breachResults.push(...normalizeInf0sec(indiciaPhoneRes.json, "Indicia Phone"));
      }

      // Crowsint Minecraft
      if (crowsintRes.ok) {
        breachResults.push(...normalizeInf0sec(crowsintRes.json, "Crowsint Minecraft"));
      }

      // Crowsint Social
      if (crowsintSocialRes.ok) {
        breachResults.push(...normalizeInf0sec(crowsintSocialRes.json, "Crowsint Social"));
      }

      // Crowsint GitHub
      if (crowsintGithubRes.ok) {
        breachResults.push(...normalizeInf0sec(crowsintGithubRes.json, "Crowsint GitHub"));
      }

      // Crowsint Discord
      if (crowsintDiscordRes.ok) {
        breachResults.push(...normalizeInf0sec(crowsintDiscordRes.json, "Crowsint Discord"));
      }

      // Reddit
      if (redditRes.ok) {
        breachResults.push(...normalizeInf0sec(redditRes.json, "Reddit"));
      }

      // Truecaller
      if (truecallerRes.ok) {
        breachResults.push(...normalizeInf0sec(truecallerRes.json, "Truecaller"));
      }

      // IPinfo
      if (ipinfoRes.ok) {
        breachResults.push(...normalizeInf0sec(ipinfoRes.json, "IPinfo"));
      }

      // GitHub OSINT
      if (githubRes.ok) {
        breachResults.push(...normalizeInf0sec(githubRes.json, "GitHub OSINT"));
      }

      // Steam Lookup
      if (steamRes.ok) {
        breachResults.push(...normalizeInf0sec(steamRes.json, "Steam"));
      }

      // Ajouter les résultats Discord Lookup au début (si présents)
      const allBreachResults = [...discordLookupResults, ...breachResults];

      // Filtrer les entrées d'erreur (Invalid CFX ID, Invalid Discord ID, etc.)
      const filteredBreaches = filterErrorEntries(allBreachResults);
      const filteredStealers = filterErrorEntries(stealerResults);

      // Retourner les deux catégories séparément
      return new Response(JSON.stringify({
        breaches: filteredBreaches,
        stealers: filteredStealers,
        meta: {
          source: "Dbs-combined",
          query: q,
          totalBreaches: filteredBreaches.length,
          totalStealers: filteredStealers.length,
          totalAPIs: 58, // Nombre total d'APIs BreachHub interrogées
          isDiscordId: isDiscordId(q) // Indique si la recherche était un Discord ID
        }
      }), { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json", "Cache-Control": "no-store" } });
    } finally {
      clearTimeout(tid);
    }
  } catch {
    // message volontairement neutre
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
  