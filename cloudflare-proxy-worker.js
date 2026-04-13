/**
 * Cloudflare Worker - Supabase proxy (HTTP + WebSocket Realtime)
 * Route example: api.see-know.eu/* -> this worker
 *
 * SECURITY: All secrets MUST be stored in Cloudflare Worker Environment Variables
 * Go to Workers > Settings > Variables to configure:
 * - SUPABASE_URL
 * - SUPABASE_ANON_KEY
 */

// These will be injected from Cloudflare Worker Environment Variables
// DO NOT hardcode secrets here - configure them in Cloudflare Dashboard
const SUPABASE_URL = typeof SUPABASE_URL_ENV !== 'undefined' ? SUPABASE_URL_ENV : '';
const SUPABASE_ANON_KEY = typeof SUPABASE_ANON_KEY_ENV !== 'undefined' ? SUPABASE_ANON_KEY_ENV : '';
const FAKE_PUBLIC_TOKEN = 'sk_live_prod_2024_Dbs_public_access_token_v1';

// Rate limiting store (in-memory, resets on worker restart)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 100; // 100 requests per minute per IP

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

function rewriteSupabaseUrl(incomingUrl) {
  const url = new URL(incomingUrl);
  const target = new URL(url.pathname + url.search, SUPABASE_URL);

  const apikey = target.searchParams.get('apikey');
  if (apikey && apikey.includes(FAKE_PUBLIC_TOKEN)) {
    target.searchParams.set('apikey', SUPABASE_ANON_KEY);
  }

  return target;
}

// Check rate limit for an IP
function checkRateLimit(ip) {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, retryAfter: Math.ceil((entry.resetTime - now) / 1000) };
  }

  entry.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
}

// Security headers to add to all responses
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
};

async function handleRequest(request) {
  // Validate environment configuration
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    return new Response(JSON.stringify({
      error: 'Server configuration error',
      message: 'Backend not properly configured'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...securityHeaders }
    });
  }

  const origin = request.headers.get('Origin');
  const allowedOrigins = ['https://see-know.eu', 'https://www.see-know.eu', 'http://localhost:5174', 'http://localhost:5173'];

  // Strict origin validation - reject unknown origins
  if (origin && !allowedOrigins.includes(origin)) {
    return new Response(JSON.stringify({ error: 'Origin not allowed' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json', ...securityHeaders }
    });
  }

  const corsOrigin = origin && allowedOrigins.includes(origin) ? origin : 'https://see-know.eu';

  // Rate limiting
  const clientIP = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'unknown';
  const rateLimit = checkRateLimit(clientIP);

  if (!rateLimit.allowed) {
    return new Response(JSON.stringify({
      error: 'Rate limit exceeded',
      message: `Too many requests. Try again in ${rateLimit.retryAfter} seconds.`
    }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'Retry-After': String(rateLimit.retryAfter),
        'X-RateLimit-Remaining': '0',
        ...securityHeaders
      }
    });
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': corsOrigin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key, prefer, x-supabase-api-version, accept-profile, content-profile, x-upsert',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin',
        'X-RateLimit-Remaining': String(rateLimit.remaining),
        ...securityHeaders
      }
    });
  }

  try {
    const url = new URL(request.url);
    const supabaseUrl = rewriteSupabaseUrl(url.toString());

    const headers = new Headers(request.headers);

    const authHeader = headers.get('authorization');
    if (authHeader && authHeader.includes(FAKE_PUBLIC_TOKEN)) {
      headers.set('authorization', `Bearer ${SUPABASE_ANON_KEY}`);
    }

    headers.set('apikey', SUPABASE_ANON_KEY);
    if (!headers.get('accept')) {
      headers.set('accept', 'application/json');
    }

    const upgradeHeader = headers.get('upgrade') || headers.get('Upgrade') || '';
    const isWebSocket = upgradeHeader.toLowerCase() === 'websocket';

    if (isWebSocket) {
      headers.delete('host');
      headers.delete('cf-connecting-ip');
      headers.delete('cf-ray');

      return fetch(supabaseUrl.toString(), {
        method: request.method,
        headers: headers,
        body: undefined
      });
    }

    // Retirer les headers potentiellement invalides pour un forward
    headers.delete('host');
    headers.delete('cf-connecting-ip');
    headers.delete('cf-ray');
    headers.delete('content-length');
    headers.delete('content-encoding');

    const body = request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined;

    const response = await fetch(supabaseUrl.toString(), {
      method: request.method,
      headers,
      body,
      redirect: 'follow',
    });

    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', corsOrigin);
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', 'authorization, x-client-info, apikey, content-type, x-api-key, prefer, x-supabase-api-version, content-profile, accept-profile, x-upsert');
    newResponse.headers.set('Access-Control-Allow-Credentials', 'true');
    newResponse.headers.set('Vary', 'Origin');

    newResponse.headers.delete('sb-gateway-version');
    newResponse.headers.delete('sb-project-ref');

    return newResponse;
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Proxy error',
      message: error.message || 'Unknown error',
      details: error.toString()
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': corsOrigin,
        'Access-Control-Allow-Credentials': 'true',
        'Vary': 'Origin',
      }
    });
  }
}
