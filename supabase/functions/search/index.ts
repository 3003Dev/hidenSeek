import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const BREACHHUB_BASE_URL = "https://breachhub.org";
const BREACHHUB_API_KEY = Deno.env.get("BREACHHUB_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-api-key",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface SearchRequest {
  query: string;
}

// ==================== SECURITY: Input Sanitization ====================
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  const maxLength = 256;
  let sanitized = input.slice(0, maxLength);
  sanitized = sanitized
    .replace(/[\x00-\x1F\x7F]/g, '')
    .replace(/[<>]/g, '')
    .trim();
  return sanitized;
}

function isValidQuery(query: string): boolean {
  if (!query || query.length < 1 || query.length > 256) return false;
  const dangerousPatterns = [
    /(\$where|\$ne|\$gt|\$lt|\$regex)/i,
    /(union\s+select|insert\s+into|delete\s+from|drop\s+table)/i,
    /(<script|javascript:|data:text\/html)/i,
    /(\.\.\/|\.\.\\)/i,
  ];
  for (const pattern of dangerousPatterns) {
    if (pattern.test(query)) return false;
  }
  return true;
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
  } catch {
    return { userId: '', error: 'Token verification failed' };
  }
}

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    if (!BREACHHUB_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing API configuration" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ==================== SECURITY: Verify JWT ====================
    const { userId, error: authError } = await verifyJWTAndGetUser(req);
    if (authError || !userId) {
      return new Response(JSON.stringify({ error: authError || "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Parse body
    let payload: SearchRequest;
    try {
      payload = (await req.json()) as SearchRequest;
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON in request body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { query } = payload ?? ({} as any);

    if (!query || typeof query !== "string") {
      return new Response(JSON.stringify({ error: "query is required in request body" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // ==================== SECURITY: Sanitize and validate query ====================
    const sanitizedQuery = sanitizeInput(query);
    if (!isValidQuery(sanitizedQuery)) {
      return new Response(JSON.stringify({ error: "Invalid query format" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Call breachhub with sanitized query
    const url = new URL("/api/leakosint", BREACHHUB_BASE_URL);
    url.searchParams.set("query", sanitizedQuery);
    url.searchParams.set("key", BREACHHUB_API_KEY);

    // Timeout (avoid frontend timeout)
    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 12000);

    let r: Response;
    try {
      r = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent": "Dbs/1.0 (Supabase Edge Function)",
        },
        signal: controller.signal,
      });
    } finally {
      clearTimeout(tid);
    }

    const text = await r.text();

    // return raw response (usually JSON)
    return new Response(text, {
      status: r.status,
      headers: {
        ...corsHeaders,
        "Content-Type": r.headers.get("content-type") ?? "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
