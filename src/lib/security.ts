export const escapeHtml = (text: string | null | undefined): string => {
  if (text === null || text === undefined) return '';
  const str = String(text);

  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return str.replace(/[&<>"'/]/g, (char) => htmlEscapeMap[char] || char);
};

export const decodeHtml = (text: string | null | undefined): string => {
  if (text === null || text === undefined) return '';
  let current = String(text);

  const decodeOnce = (value: string): string => {
    // In browser, use DOMParser for full entity decoding
    if (typeof DOMParser !== 'undefined') {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(value, 'text/html');
        return doc.documentElement.textContent || '';
      } catch {
        // fallback below
      }
    }

    // Minimal fallback for server-side / parser errors
    return value
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, '&');
  };

  // Some strings are double-encodées (ex: &amp;#x27;). Decode jusqu'à stabilisation (limite 3 passes).
  for (let i = 0; i < 3; i++) {
    const next = decodeOnce(current);
    if (next === current) break;
    current = next;
  }

  return current;
};

export const stripHtml = (html: string | null | undefined): string => {
  if (html === null || html === undefined) return '';
  return String(html).replace(/<[^>]*>/g, '');
};

export const sanitizeUrl = (url: string | null | undefined): string => {
  if (url === null || url === undefined) return '';
  const urlStr = String(url).trim().toLowerCase();

  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];
  if (dangerousProtocols.some(proto => urlStr.startsWith(proto))) {
    return '';
  }

  if (!urlStr.startsWith('http://') &&
      !urlStr.startsWith('https://') &&
      !urlStr.startsWith('mailto:') &&
      !urlStr.startsWith('/') &&
      !urlStr.startsWith('#')) {
    return '';
  }

  return String(url).trim();
};

export const isValidEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const isValidUsername = (username: string): boolean => {
  if (!username || typeof username !== 'string') return false;
  const usernameRegex = /^[a-zA-Z0-9_-]{3,30}$/;
  return usernameRegex.test(username);
};

export const isValidPassword = (password: string): boolean => {
  if (!password || typeof password !== 'string') return false;

  // Length requirements
  if (password.length < 8 || password.length > 128) return false;

  // Complexity requirements
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  // Require at least 3 out of 4 criteria
  const criteriaCount = [hasUppercase, hasLowercase, hasNumber, hasSpecial].filter(Boolean).length;

  return criteriaCount >= 3;
};

export const isValidUUID = (uuid: string): boolean => {
  if (!uuid || typeof uuid !== 'string') return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export const sanitizeSearchQuery = (query: string): string => {
  if (!query || typeof query !== 'string') return '';

  let sanitized = query
    .replace(/[<>'"`;\\]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .trim()
    .slice(0, 500);

  return sanitized;
};

export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

export const setCSRFToken = (): string => {
  const token = generateCSRFToken();
  sessionStorage.setItem('csrf_token', token);
  return token;
};

export const getCSRFToken = (): string | null => {
  return sessionStorage.getItem('csrf_token');
};

export const validateCSRFToken = (token: string): boolean => {
  const storedToken = getCSRFToken();
  return storedToken !== null && storedToken === token;
};

// ==================== SECURE API KEY ENCRYPTION (AES-GCM) ====================
// Uses Web Crypto API for secure encryption - keys are derived per-user

const deriveKey = async (userId: string): Promise<CryptoKey> => {
  const encoder = new TextEncoder();
  const salt = encoder.encode('Dbs_Salt_2024_' + userId.slice(0, 8));

  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(userId),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
};

export const encryptApiKey = async (apiKey: string, userId: string): Promise<string> => {
  if (!apiKey || !userId) return '';

  try {
    const key = await deriveKey(userId);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const encoder = new TextEncoder();

    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv },
      key,
      encoder.encode(apiKey)
    );

    // Combine IV + encrypted data
    const combined = new Uint8Array(iv.length + encrypted.byteLength);
    combined.set(iv);
    combined.set(new Uint8Array(encrypted), iv.length);

    return btoa(String.fromCharCode(...combined));
  } catch {
    return '';
  }
};

export const decryptApiKey = async (encryptedKey: string, userId: string): Promise<string> => {
  if (!encryptedKey || !userId) return '';

  try {
    const combined = Uint8Array.from(atob(encryptedKey), c => c.charCodeAt(0));
    const iv = combined.slice(0, 12);
    const data = combined.slice(12);

    const key = await deriveKey(userId);

    const decrypted = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv },
      key,
      data
    );

    return new TextDecoder().decode(decrypted);
  } catch {
    return '';
  }
};

export const storeApiKey = async (userId: string, apiKey: string): Promise<void> => {
  if (!userId || !apiKey) return;

  const encrypted = await encryptApiKey(apiKey, userId);
  if (encrypted) {
    sessionStorage.setItem(`api_key_encrypted_${userId}`, encrypted);
    // Clean up old insecure storage
    localStorage.removeItem(`api_key_${userId}`);
    localStorage.removeItem(`api_key_encrypted_${userId}`);
  }
};

export const getStoredApiKey = async (userId: string): Promise<string | null> => {
  if (!userId) return null;

  // Try sessionStorage first (more secure)
  const encrypted = sessionStorage.getItem(`api_key_encrypted_${userId}`);
  if (encrypted) {
    return await decryptApiKey(encrypted, userId);
  }

  // Migrate from old localStorage if exists
  const oldEncrypted = localStorage.getItem(`api_key_encrypted_${userId}`);
  if (oldEncrypted) {
    // Old format - try to migrate (will fail gracefully)
    localStorage.removeItem(`api_key_encrypted_${userId}`);
  }

  const plainKey = localStorage.getItem(`api_key_${userId}`);
  if (plainKey) {
    await storeApiKey(userId, plainKey);
    localStorage.removeItem(`api_key_${userId}`);
    return plainKey;
  }

  return null;
};

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export const checkRateLimit = (
  key: string,
  maxAttempts: number = 5,
  windowMs: number = 15 * 60 * 1000
): boolean => {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs
    });
    return true;
  }

  if (entry.count >= maxAttempts) {
    return false;
  }

  entry.count++;
  return true;
};

export const resetRateLimit = (key: string): void => {
  rateLimitStore.delete(key);
};

export const escapeSqlString = (str: string): string => {
  if (!str || typeof str !== 'string') return '';

  return str.replace(/'/g, "''").replace(/;/g, '').replace(/--/g, '');
};

export const getSecurityHeaders = (): Record<string, string> => {
  // Generate nonce for inline scripts (should be generated per-request in production)
  const nonce = crypto.getRandomValues(new Uint8Array(16));
  const nonceStr = btoa(String.fromCharCode(...nonce));

  return {
    'Content-Security-Policy':
      "default-src 'self'; " +
      `script-src 'self' 'nonce-${nonceStr}' https://challenges.cloudflare.com; ` +
      "style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com; " +
      "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; " +
      "img-src 'self' data: https://cdn.discordapp.com https://i.pravatar.cc; " +
      "connect-src 'self' https://supabase-proxy.tiny-wave-2fa1.workers.dev https://challenges.cloudflare.com; " +
      "frame-src 'self' https://challenges.cloudflare.com; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "frame-ancestors 'none'; " +
      "upgrade-insecure-requests;",
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '0', // Disabled - CSP is the modern replacement
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Resource-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
  };
};

export const sanitizeObject = <T extends Record<string, unknown>>(obj: T): Record<string, string> => {
  const sanitized: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    const sanitizedKey = escapeHtml(String(key));

    // Handle different types of values
    let sanitizedValue: string;
    if (value === null || value === undefined) {
      sanitizedValue = '';
    } else if (Array.isArray(value)) {
      // Convert array to readable format
      sanitizedValue = value.map(v => {
        if (typeof v === 'object' && v !== null) {
          return JSON.stringify(v);
        }
        return String(v);
      }).join(', ');
    } else if (typeof value === 'object') {
      // Convert object to JSON string
      sanitizedValue = JSON.stringify(value);
    } else {
      sanitizedValue = String(value);
    }

    sanitized[sanitizedKey] = escapeHtml(sanitizedValue);
  }

  return sanitized;
};

export const containsSuspiciousContent = (str: string): boolean => {
  if (!str || typeof str !== 'string') return false;

  const suspiciousPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /eval\s*\(/gi,
    /expression\s*\(/gi,
  ];

  return suspiciousPatterns.some(pattern => pattern.test(str));
};

// ==================== CHAT SECURITY ====================

export interface ChatValidationResult {
  isValid: boolean;
  sanitizedMessage: string;
  error?: string;
  errorCode?: 'BLOCKED_LINK' | 'BLOCKED_DISCORD' | 'SPAM_DETECTED' | 'XSS_DETECTED' | 'TOO_LONG' | 'EMPTY' | 'RATE_LIMITED';
}

// Patterns pour détecter les URLs et liens
const URL_PATTERNS = [
  /https?:\/\/[^\s]+/gi,
  /www\.[^\s]+/gi,
  /[a-zA-Z0-9-]+\.(com|net|org|io|gg|me|co|fr|de|uk|ru|cn|xyz|info|biz|tv|cc|ws|tk|ml|ga|cf|gq|link|click|online|site|website|space|fun|top|live|shop|store|app|dev|tech|cloud|pro|zone|host|email|page|rocks|world|today|life|network|solutions|agency|digital|media|social|group|team|club|chat|community|forum|blog|news|wiki|support|help|center|zone|services|business|company|corp|inc|ltd|llc|gmbh)[^\s]*/gi,
  /[a-zA-Z0-9-]+\s*\.\s*(com|net|org|io|gg|me|co|fr)/gi, // Espaces autour du point
  /[a-zA-Z0-9-]+\s*\[\s*\.\s*\]\s*(com|net|org|io|gg|me|co|fr)/gi, // Format [.] anti-detection
  /[a-zA-Z0-9-]+\s*\(\s*\.\s*\)\s*(com|net|org|io|gg|me|co|fr)/gi, // Format (.) anti-detection
  /bit\.ly|tinyurl|t\.co|goo\.gl|shorturl|rebrand\.ly|cutt\.ly|ow\.ly/gi, // URL shorteners
];

// Patterns pour détecter les invitations Discord
const DISCORD_PATTERNS = [
  /discord\.gg\/[a-zA-Z0-9]+/gi,
  /discord\.com\/invite\/[a-zA-Z0-9]+/gi,
  /discordapp\.com\/invite\/[a-zA-Z0-9]+/gi,
  /discord\s*\.\s*gg\s*\/\s*[a-zA-Z0-9]+/gi, // Espaces
  /discord\s*\[\s*\.\s*\]\s*gg/gi, // Format [.]
  /discord\s*\(\s*\.\s*\)\s*gg/gi, // Format (.)
  /dsc\.gg\/[a-zA-Z0-9]+/gi,
  /invite\s*:?\s*[a-zA-Z0-9]{6,}/gi, // Code d'invitation brut
];

// Patterns pour détecter le spam
const SPAM_PATTERNS = [
  /(.)\1{5,}/g, // Caractère répété 5+ fois
  /(\b\w+\b)(\s+\1){3,}/gi, // Mot répété 3+ fois
  /(free|gratuit|giveaway|nitro|gift|cadeau|money|argent|crypto|bitcoin|earn|gagner)\s*(discord|server|serveur|join|rejoins)/gi,
  /join\s*(my|our|mon|notre)\s*(server|serveur|discord|channel)/gi,
  /check\s*(out|my|this)\s*(link|server|discord)/gi,
  /dm\s*(me|moi)\s*(for|pour)/gi,
  /(buy|sell|achet|vend)\s*(account|compte|nitro|boost)/gi,
];

// Patterns XSS et injection
const XSS_PATTERNS = [
  /<script[^>]*>/gi,
  /<\/script>/gi,
  /javascript\s*:/gi,
  /on\w+\s*=/gi,
  /<iframe/gi,
  /<object/gi,
  /<embed/gi,
  /<svg[^>]*onload/gi,
  /data\s*:/gi,
  /vbscript\s*:/gi,
  /expression\s*\(/gi,
  /eval\s*\(/gi,
  /document\s*\./gi,
  /window\s*\./gi,
  /\$\s*\(/gi, // jQuery
  /innerHTML/gi,
  /outerHTML/gi,
];

const chatRateLimitStore = new Map<string, { timestamps: number[]; lastMessage: string; repeatCount: number }>();

/**
 * Valide et sanitize un message de chat
 */
export const validateChatMessage = (
  message: string,
  userId: string,
  options: {
    maxLength?: number;
    rateLimit?: { maxMessages: number; windowMs: number };
    allowLinks?: boolean;
    allowDiscord?: boolean;
  } = {}
): ChatValidationResult => {
  const {
    maxLength = 500,
    rateLimit = { maxMessages: 5, windowMs: 10000 }, // 5 messages per 10 seconds
    allowLinks = false,
    allowDiscord = false,
  } = options;

  // Vérification vide
  if (!message || typeof message !== 'string') {
    return { isValid: false, sanitizedMessage: '', error: 'Message vide', errorCode: 'EMPTY' };
  }

  const trimmed = message.trim();

  if (!trimmed) {
    return { isValid: false, sanitizedMessage: '', error: 'Message vide', errorCode: 'EMPTY' };
  }

  // Vérification longueur
  if (trimmed.length > maxLength) {
    return {
      isValid: false,
      sanitizedMessage: '',
      error: `Message trop long (max ${maxLength} caractères)`,
      errorCode: 'TOO_LONG',
    };
  }

  // Rate limiting
  const now = Date.now();
  const userRateData = chatRateLimitStore.get(userId) || { timestamps: [], lastMessage: '', repeatCount: 0 };

  // Nettoyer les anciennes entrées
  userRateData.timestamps = userRateData.timestamps.filter(t => now - t < rateLimit.windowMs);

  if (userRateData.timestamps.length >= rateLimit.maxMessages) {
    return {
      isValid: false,
      sanitizedMessage: '',
      error: 'Trop de messages. Attendez quelques secondes.',
      errorCode: 'RATE_LIMITED',
    };
  }

  // Détection spam par répétition du même message
  if (userRateData.lastMessage === trimmed.toLowerCase()) {
    userRateData.repeatCount++;
    if (userRateData.repeatCount >= 3) {
      return {
        isValid: false,
        sanitizedMessage: '',
        error: 'Message répétitif détecté',
        errorCode: 'SPAM_DETECTED',
      };
    }
  } else {
    userRateData.repeatCount = 0;
  }

  // Détection XSS
  for (const pattern of XSS_PATTERNS) {
    if (pattern.test(trimmed)) {
      return {
        isValid: false,
        sanitizedMessage: '',
        error: 'Contenu non autorisé détecté',
        errorCode: 'XSS_DETECTED',
      };
    }
  }

  // Détection liens Discord (sauf si autorisé)
  if (!allowDiscord) {
    for (const pattern of DISCORD_PATTERNS) {
      if (pattern.test(trimmed)) {
        return {
          isValid: false,
          sanitizedMessage: '',
          error: 'Les invitations Discord ne sont pas autorisées',
          errorCode: 'BLOCKED_DISCORD',
        };
      }
    }
  }

  // Détection URLs (sauf si autorisé)
  if (!allowLinks) {
    for (const pattern of URL_PATTERNS) {
      if (pattern.test(trimmed)) {
        return {
          isValid: false,
          sanitizedMessage: '',
          error: 'Les liens ne sont pas autorisés',
          errorCode: 'BLOCKED_LINK',
        };
      }
    }
  }

  // Détection spam patterns
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(trimmed)) {
      return {
        isValid: false,
        sanitizedMessage: '',
        error: 'Message détecté comme spam',
        errorCode: 'SPAM_DETECTED',
      };
    }
  }

  // Sanitize le message
  let sanitized = trimmed
    .replace(/[<>]/g, '') // Retire < et >
    .replace(/\\/g, '') // Retire backslash
    .slice(0, maxLength);

  // Mettre à jour le rate limit store
  userRateData.timestamps.push(now);
  userRateData.lastMessage = trimmed.toLowerCase();
  chatRateLimitStore.set(userId, userRateData);

  return {
    isValid: true,
    sanitizedMessage: sanitized,
  };
};

/**
 * Réinitialise le rate limit du chat pour un utilisateur
 */
export const resetChatRateLimit = (userId: string): void => {
  chatRateLimitStore.delete(userId);
};

/**
 * Vérifie si un message contient des liens
 */
export const containsLinks = (message: string): boolean => {
  if (!message) return false;
  return URL_PATTERNS.some(pattern => pattern.test(message));
};

/**
 * Vérifie si un message contient des invitations Discord
 */
export const containsDiscordInvite = (message: string): boolean => {
  if (!message) return false;
  return DISCORD_PATTERNS.some(pattern => pattern.test(message));
};

// ==================== SEARCH QUERY TYPE DETECTION ====================

export type SearchQueryType =
  | 'email'
  | 'ip_v4'
  | 'ip_v6'
  | 'domain'
  | 'phone'
  | 'discord_id'
  | 'username'
  | 'hash_md5'
  | 'hash_sha1'
  | 'hash_sha256'
  | 'bitcoin_address'
  | 'ethereum_address'
  | 'url'
  | 'steam_id'
  | 'cfx_license'
  | 'fivem_license'
  | 'minecraft_uuid'
  | 'minecraft_username'
  | 'hwid'
  | 'vin'
  | 'bin'
  | 'ssn'
  | 'cpf'
  | 'twitter_username'
  | 'github_username'
  | 'reddit_username'
  | 'tiktok_username'
  | 'roblox_id'
  | 'subnet'
  | 'name'
  | 'password'
  | 'unknown';

export interface DetectedQueryType {
  type: SearchQueryType;
  confidence: number;
  sanitizedQuery: string;
  icon: string;
  iconClass: 'fas' | 'fab'; // fas = solid, fab = brands
  label: string;
  suggestedApis: string[];
}

// Liste des API modules disponibles par type de recherche (basé sur doc BreachHub complète)
export const API_MODULES_BY_TYPE: Record<SearchQueryType, string[]> = {
  // Email: TOUTES les APIs qui supportent email (breaches + stealers + enrichment)
  email: [
    // Breach APIs
    'snusbase', 'leakosint', 'leakcheck', 'breachbase', 'intelvault', 'breachdirectory',
    'hackcheck', 'osintkit', 'breachvip', 'breachlookup', 'xosint', 'melissa', 'breachrip',
    // Stealer APIs
    'hudsonrock', 'wentyn', 'akula', 'stealerlogs', 'oathnet',
    // Enrichment APIs
    'seon', 'github', 'indicia',
    // Intelligence APIs
    'osintcat', 'leaksight', 'inf0sec', 'intelbase', 'intelfetch'
  ],
  // IP: APIs qui supportent recherche par IP
  ip_v4: [
    'ipinfo', 'shodan', 'breachdirectory', 'breachvip', 'breachbase',
    'stealerlogs', 'leaksight', 'cordcat', 'intelbase', 'intelfetch', 'crowsint'
  ],
  ip_v6: ['ipinfo', 'shodan', 'intelbase'],
  // Domain
  domain: [
    'wentyn', 'akula', 'osintcat', 'breachdirectory', 'intelfetch', 'leaksight',
    'stealerlogs', 'oathnet', 'inf0sec'
  ],
  // Phone
  phone: [
    'truecaller', 'seon', 'osintkit', 'breachvip', 'breachbase', 'melissa',
    'stealerlogs', 'intelbase', 'indicia', 'leaksight', 'inf0sec'
  ],
  // Discord ID
  discord_id: [
    'cordcat', 'crowsint', 'intelfetch', 'oathnet', 'breachvip', 'breachrip',
    'inf0sec', 'breachhub'
  ],
  // Username
  username: [
    'snusbase', 'leakosint', 'memory', 'breachbase', 'breachdirectory', 'hackcheck',
    'breachvip', 'leaksight', 'stealerlogs', 'crowsint', 'inf0sec', 'breachrip',
    'breachlookup', 'xosint'
  ],
  hash_md5: ['snusbase', 'leakosint', 'breachbase'],
  hash_sha1: ['snusbase', 'leakosint', 'breachbase'],
  hash_sha256: ['snusbase', 'leakosint', 'breachbase'],
  bitcoin_address: ['crypto'],
  ethereum_address: ['crypto'],
  url: ['leaksight', 'intelbase'],
  steam_id: ['steam', 'breachhub', 'crowsint', 'breachvip'],
  cfx_license: ['breachhub', 'inf0sec'],
  fivem_license: ['breachhub', 'inf0sec'],
  minecraft_uuid: ['crowsint', 'intelbase'],
  minecraft_username: ['crowsint', 'intelbase'],
  hwid: ['breachhub', 'leaksight', 'stealerlogs'],
  vin: ['vindecoder'],
  bin: ['binlist'],
  ssn: ['idleakcheck', 'inf0sec'],
  cpf: ['leaksight'],
  twitter_username: ['osintcat', 'leaksight'],
  github_username: ['github', 'intelfetch', 'crowsint', 'intelbase'],
  reddit_username: ['reddit'],
  tiktok_username: ['tiktok'],
  roblox_id: ['oathnet'],
  subnet: ['leaksight', 'shodan'],
  name: ['osintkit', 'melissa', 'idleakcheck', 'indicia', 'breachvip', 'inf0sec', 'stealerlogs'],
  password: ['hackcheck', 'breachbase', 'breachrip', 'leaksight', 'stealerlogs'],
  unknown: ['snusbase', 'leakosint', 'leakcheck', 'breachhub', 'xosint'],
};

const SEARCH_TYPE_PATTERNS: { type: SearchQueryType; pattern: RegExp; icon: string; iconClass: 'fas' | 'fab'; label: string; priority: number }[] = [
  // Email (Gmail et autres - tous traités comme email)
  { type: 'email', pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, icon: 'fa-envelope', iconClass: 'fas', label: 'Email', priority: 100 },
  // CFX/FiveM License (avec ou sans préfixe - 40 caractères hex)
  { type: 'fivem_license', pattern: /^license:[a-f0-9]{40}$/i, icon: 'fa-gamepad', iconClass: 'fas', label: 'FiveM License', priority: 99 },
  { type: 'cfx_license', pattern: /^[a-f0-9]{40}$/i, icon: 'fa-gamepad', iconClass: 'fas', label: 'CFX License', priority: 98 },
  // Steam ID
  { type: 'steam_id', pattern: /^7656119\d{10}$/, icon: 'fa-steam', iconClass: 'fab', label: 'Steam ID', priority: 91 },
  { type: 'steam_id', pattern: /^STEAM_[0-5]:[01]:\d+$/, icon: 'fa-steam', iconClass: 'fab', label: 'Steam ID', priority: 91 },
  // Minecraft UUID
  { type: 'minecraft_uuid', pattern: /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i, icon: 'fa-cube', iconClass: 'fas', label: 'MC UUID', priority: 90 },
  // HWID
  { type: 'hwid', pattern: /^[A-F0-9]{32}$/i, icon: 'fa-microchip', iconClass: 'fas', label: 'HWID', priority: 89 },
  // VIN (Vehicle Identification Number)
  { type: 'vin', pattern: /^[A-HJ-NPR-Z0-9]{17}$/i, icon: 'fa-car', iconClass: 'fas', label: 'VIN', priority: 88 },
  // BIN (Bank Identification Number)
  { type: 'bin', pattern: /^\d{6,8}$/, icon: 'fa-credit-card', iconClass: 'fas', label: 'BIN', priority: 50 },
  // SSN (Social Security Number)
  { type: 'ssn', pattern: /^\d{3}-?\d{2}-?\d{4}$/, icon: 'fa-id-card', iconClass: 'fas', label: 'SSN', priority: 87 },
  // CPF (Brazil)
  { type: 'cpf', pattern: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, icon: 'fa-id-card', iconClass: 'fas', label: 'CPF', priority: 86 },
  // IP addresses
  { type: 'ip_v4', pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/, icon: 'fa-network-wired', iconClass: 'fas', label: 'IPv4', priority: 95 },
  { type: 'ip_v6', pattern: /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$|^::$|^(?:[0-9a-fA-F]{1,4}:){1,7}:$/, icon: 'fa-network-wired', iconClass: 'fas', label: 'IPv6', priority: 94 },
  { type: 'subnet', pattern: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/\d{1,2}$/, icon: 'fa-project-diagram', iconClass: 'fas', label: 'Subnet', priority: 93 },
  // URL
  { type: 'url', pattern: /^https?:\/\/[^\s]+$/i, icon: 'fa-link', iconClass: 'fas', label: 'URL', priority: 85 },
  // Domain
  { type: 'domain', pattern: /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, icon: 'fa-globe', iconClass: 'fas', label: 'Domain', priority: 80 },
  // Phone (avec ou sans +, accepte format français 06/07, international, etc.)
  { type: 'phone', pattern: /^\+\d{7,15}$/, icon: 'fa-phone', iconClass: 'fas', label: 'Phone', priority: 92 },
  { type: 'phone', pattern: /^0[1-9]\d{8}$/, icon: 'fa-phone', iconClass: 'fas', label: 'Phone', priority: 91 }, // Format français 10 chiffres
  { type: 'phone', pattern: /^[1-9]\d{9,14}$/, icon: 'fa-phone', iconClass: 'fas', label: 'Phone', priority: 88 }, // International sans +
  // Discord ID (17-19 chiffres - très spécifique)
  { type: 'discord_id', pattern: /^\d{17,19}$/, icon: 'fa-discord', iconClass: 'fab', label: 'Discord ID', priority: 95 },
  // Roblox ID (7-12 chiffres mais priorité basse car trop générique)
  { type: 'roblox_id', pattern: /^\d{7,9}$/, icon: 'fa-gamepad', iconClass: 'fas', label: 'Roblox ID', priority: 40 },
  // Crypto addresses
  { type: 'bitcoin_address', pattern: /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/, icon: 'fa-bitcoin', iconClass: 'fab', label: 'Bitcoin', priority: 90 },
  { type: 'ethereum_address', pattern: /^0x[a-fA-F0-9]{40}$/, icon: 'fa-ethereum', iconClass: 'fab', label: 'Ethereum', priority: 90 },
  // Hashes
  { type: 'hash_md5', pattern: /^[a-fA-F0-9]{32}$/, icon: 'fa-key', iconClass: 'fas', label: 'MD5', priority: 70 },
  { type: 'hash_sha1', pattern: /^[a-fA-F0-9]{40}$/, icon: 'fa-key', iconClass: 'fas', label: 'SHA1', priority: 70 },
  { type: 'hash_sha256', pattern: /^[a-fA-F0-9]{64}$/, icon: 'fa-key', iconClass: 'fas', label: 'SHA256', priority: 70 },
  // Social media usernames (avec préfixes)
  { type: 'twitter_username', pattern: /^@[a-zA-Z0-9_]{1,15}$/, icon: 'fa-twitter', iconClass: 'fab', label: 'Twitter', priority: 75 },
  { type: 'github_username', pattern: /^gh:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,37}[a-zA-Z0-9])?$/, icon: 'fa-github', iconClass: 'fab', label: 'GitHub', priority: 75 },
  { type: 'reddit_username', pattern: /^u\/[a-zA-Z0-9_-]{3,20}$/, icon: 'fa-reddit', iconClass: 'fab', label: 'Reddit', priority: 75 },
  { type: 'tiktok_username', pattern: /^@[a-zA-Z0-9_.]{2,24}$/, icon: 'fa-tiktok', iconClass: 'fab', label: 'TikTok', priority: 74 },
  // Minecraft username (sans UUID)
  { type: 'minecraft_username', pattern: /^mc:[a-zA-Z0-9_]{3,16}$/, icon: 'fa-cube', iconClass: 'fas', label: 'Minecraft', priority: 73 },
  // Name (prénom nom)
  { type: 'name', pattern: /^[A-Za-zÀ-ÿ]{2,}\s+[A-Za-zÀ-ÿ]{2,}(\s+[A-Za-zÀ-ÿ]{2,})?$/, icon: 'fa-user-tag', iconClass: 'fas', label: 'Name', priority: 60 },
  // Username générique (fallback)
  { type: 'username', pattern: /^[a-zA-Z0-9_.-]{3,32}$/, icon: 'fa-user', iconClass: 'fas', label: 'Username', priority: 50 },
];

export const detectSearchQueryType = (query: string): DetectedQueryType => {
  if (!query || typeof query !== 'string') {
    return { type: 'unknown', confidence: 0, sanitizedQuery: '', icon: 'fa-search', iconClass: 'fas', label: 'Search', suggestedApis: [] };
  }

  const trimmed = query.trim();
  const sanitized = sanitizeSearchQuery(trimmed);

  if (!sanitized) {
    return { type: 'unknown', confidence: 0, sanitizedQuery: '', icon: 'fa-search', iconClass: 'fas', label: 'Search', suggestedApis: [] };
  }

  // Trier les patterns par priorité (plus haute = testé en premier)
  const sortedPatterns = [...SEARCH_TYPE_PATTERNS].sort((a, b) => b.priority - a.priority);

  for (const { type, pattern, icon, iconClass, label, priority } of sortedPatterns) {
    if (pattern.test(sanitized)) {
      const suggestedApis = API_MODULES_BY_TYPE[type] || [];
      return {
        type,
        confidence: priority,
        sanitizedQuery: sanitized,
        icon,
        iconClass,
        label,
        suggestedApis
      };
    }
  }

  return {
    type: 'unknown',
    confidence: 50,
    sanitizedQuery: sanitized,
    icon: 'fa-search',
    iconClass: 'fas',
    label: 'Search',
    suggestedApis: API_MODULES_BY_TYPE.unknown
  };
};

// Fonction utilitaire pour obtenir les APIs recommandées pour un type
export const getRecommendedApis = (type: SearchQueryType): string[] => {
  return API_MODULES_BY_TYPE[type] || API_MODULES_BY_TYPE.unknown;
};

export const isSearchQuerySafe = (query: string): { safe: boolean; reason?: string } => {
  if (!query || typeof query !== 'string') return { safe: false, reason: 'Requête vide' };
  const trimmed = query.trim();
  if (trimmed.length < 3) return { safe: false, reason: 'Requête trop courte (min 3 caractères)' };
  if (trimmed.length > 500) return { safe: false, reason: 'Requête trop longue (max 500 caractères)' };
  if (containsSuspiciousContent(trimmed)) return { safe: false, reason: 'Contenu suspect détecté' };
  if (/[<>'"`;\\]/.test(trimmed)) return { safe: false, reason: 'Caractères non autorisés' };
  return { safe: true };
};

export const sanitizeForLog = (data: unknown): string => {
  if (typeof data === 'string') {
    return data
      .replace(/Bearer\s+[^\s]+/gi, 'Bearer [REDACTED]')
      .replace(/api[_-]?key['":\s]+[^\s,}]+/gi, 'api_key: [REDACTED]')
      .replace(/password['":\s]+[^\s,}]+/gi, 'password: [REDACTED]')
      .replace(/token['":\s]+[^\s,}]+/gi, 'token: [REDACTED]');
  }

  if (typeof data === 'object' && data !== null) {
    return JSON.stringify(data, (key, value) => {
      const sensitiveKeys = ['password', 'token', 'api_key', 'apiKey', 'secret', 'apiToken'];
      if (sensitiveKeys.some(k => key.toLowerCase().includes(k.toLowerCase()))) {
        return '[REDACTED]';
      }
      return value;
    });
  }

  return String(data);
};

export default {
  escapeHtml,
  stripHtml,
  sanitizeUrl,
  isValidEmail,
  isValidUsername,
  isValidPassword,
  isValidUUID,
  sanitizeSearchQuery,
  generateCSRFToken,
  setCSRFToken,
  getCSRFToken,
  validateCSRFToken,
  encryptApiKey,
  decryptApiKey,
  storeApiKey,
  getStoredApiKey,
  checkRateLimit,
  resetRateLimit,
  escapeSqlString,
  getSecurityHeaders,
  sanitizeObject,
  containsSuspiciousContent,
  sanitizeForLog,
  // Chat security
  validateChatMessage,
  resetChatRateLimit,
  containsLinks,
  containsDiscordInvite,
  // Search query detection
  detectSearchQueryType,
  isSearchQuerySafe,
  getRecommendedApis,
  API_MODULES_BY_TYPE,
};
