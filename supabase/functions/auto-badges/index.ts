import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

/**
 * CORS
 */
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

serve(async (req) => {
  // ✅ Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    /**
     * Auth
     */
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized - missing authorization header" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const jwt = authHeader.replace("Bearer ", "").trim();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(jwt);

    if (authError || !user) {
      console.error("Auth error:", authError?.message);
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const userId = user.id;

    /**
     * Body
     */
    const { action } = await req.json();
    if (!action) {
      return new Response(
        JSON.stringify({ error: "action is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const badgesToGrant: string[] = [];

    /**
     * 1. Early user (first 100)
     */
    if (action === "check_early_user") {
      const { count } = await supabase
        .from("user_badges")
        .select("*", { count: "exact", head: true })
        .eq("badge", "early");

      if (count !== null && count < 100) {
        const { data } = await supabase
          .from("user_badges")
          .select("badge")
          .eq("user_id", userId)
          .eq("badge", "early")
          .maybeSingle();

        if (!data) badgesToGrant.push("early");
      }
    }

    /**
     * 2. Beta tester
     */
    if (action === "check_beta_tester") {
      const { data: plan } = await supabase
        .from("user_plans")
        .select("plan")
        .eq("user_id", userId)
        .maybeSingle();

      if (plan?.plan === "beta") {
        const { data } = await supabase
          .from("user_badges")
          .select("badge")
          .eq("user_id", userId)
          .eq("badge", "bug_hunter")
          .maybeSingle();

        if (!data) badgesToGrant.push("bug_hunter");
      }
    }

    /**
     * 3. Buyer
     */
    if (action === "check_buyer") {
      const { data: plan } = await supabase
        .from("user_plans")
        .select("plan")
        .eq("user_id", userId)
        .maybeSingle();

      if (["beginner", "pro", "premium"].includes(plan?.plan)) {
        const { data } = await supabase
          .from("user_badges")
          .select("badge")
          .eq("user_id", userId)
          .eq("badge", "buyer")
          .maybeSingle();

        if (!data) badgesToGrant.push("buyer");
      }
    }

    /**
     * 4. Premium
     */
    if (action === "check_premium") {
      const { data: plan } = await supabase
        .from("user_plans")
        .select("plan")
        .eq("user_id", userId)
        .maybeSingle();

      if (plan?.plan === "premium") {
        const { data } = await supabase
          .from("user_badges")
          .select("badge")
          .eq("user_id", userId)
          .eq("badge", "premium")
          .maybeSingle();

        if (!data) badgesToGrant.push("premium");
      }
    }

    /**
     * 5. VIP (100 searches)
     */
    if (action === "check_vip") {
      const { count } = await supabase
        .from("search_history")
        .select("*", { count: "exact", head: true })
        .eq("user_id", userId);

      if (count !== null && count >= 100) {
        const { data } = await supabase
          .from("user_badges")
          .select("badge")
          .eq("user_id", userId)
          .eq("badge", "vip")
          .maybeSingle();

        if (!data) badgesToGrant.push("vip");
      }
    }

    /**
     * Grant badges
     */
    if (badgesToGrant.length > 0) {
      await supabase.from("user_badges").upsert(
        badgesToGrant.map((badge) => ({
          user_id: userId,
          badge,
          granted_at: new Date().toISOString(),
          granted_by: userId,
        })),
        { onConflict: "user_id,badge" }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        badgesGranted: badgesToGrant,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
