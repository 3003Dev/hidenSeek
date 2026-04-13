import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

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
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // ==================== SECURITY: Verify JWT ====================
    const { userId: authenticatedUserId, error: authError } = await verifyJWTAndGetUser(req);

    if (authError || !authenticatedUserId) {
      return new Response(
        JSON.stringify({ error: authError || 'Unauthorized' }),
        { status: 401, headers: corsHeaders }
      )
    }

    // ==================== SECURITY: Use authenticated userId ONLY ====================
    // IGNORE any userId from the request body - use only the JWT authenticated user
    const userId = authenticatedUserId;

    console.log(`Initializing user ${userId}...`)

    /* =====================================================
       ✅ NOUVEAU — vérifier si une clé API existe déjà
    ===================================================== */
    const { data: existingKey, error: existingKeyError } = await supabase
      .from('api_keys')
      .select('api_key')
      .eq('user_id', userId)
      .maybeSingle()

    if (existingKeyError) {
      console.error('Error checking existing API key:', existingKeyError)
      return new Response(
        JSON.stringify({ error: 'Failed to check existing API key' }),
        { status: 500, headers: corsHeaders }
      )
    }

    let apiKey = existingKey?.api_key ?? null

    /* =====================================================
       ✅ Génération UNIQUEMENT si absente
    ===================================================== */
    if (!apiKey) {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      apiKey = 'sk_live_'
      for (let i = 0; i < 48; i++) {
        apiKey += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      console.log('Creating API key for user:', userId)
      console.log('API key to create:', apiKey)

      const { data: apiKeyData, error: apiKeyError } = await supabase
        .from('api_keys')
        .insert({
          user_id: userId,
          api_key: apiKey,
          is_active: true,
          requests_total: 0
        })
        .select()

      console.log('API key insert response:', { data: apiKeyData, error: apiKeyError })

      if (apiKeyError) {
        console.error('API Key error full:', JSON.stringify(apiKeyError))
        return new Response(
          JSON.stringify({ error: `API key creation failed: ${apiKeyError.message}`, details: apiKeyError }),
          { status: 500, headers: corsHeaders }
        )
      }

      console.log('✅ API key created:', apiKeyData)
    } else {
      console.log('✅ Existing API key found, reuse:', apiKey)
    }

    /* =====================================================
       User plan
    ===================================================== */
    const { error: planError } = await supabase
      .from('user_plans')
      .insert({
        user_id: userId,
        plan: 'free',
        credits_per_day: 10
      })

    if (planError) {
      console.error('Plan error:', planError)
      return new Response(
        JSON.stringify({ error: `Plan creation failed: ${planError.message}` }),
        { status: 500, headers: corsHeaders }
      )
    }

    console.log('✅ Plan created')

    /* =====================================================
       User credits
    ===================================================== */
    const today = new Date().toISOString().split('T')[0]
    const { error: creditsError } = await supabase
      .from('user_credits')
      .insert({
        user_id: userId,
        credits_remaining: 10,
        last_reset: today
      })

    if (creditsError) {
      console.error('Credits error:', creditsError)
      return new Response(
        JSON.stringify({ error: `Credits creation failed: ${creditsError.message}` }),
        { status: 500, headers: corsHeaders }
      )
    }

    console.log('✅ Credits created')

    return new Response(
      JSON.stringify({
        success: true,
        message: 'User initialized successfully',
        api_key: apiKey
      }),
      { status: 200, headers: corsHeaders }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: corsHeaders }
    )
  }
})