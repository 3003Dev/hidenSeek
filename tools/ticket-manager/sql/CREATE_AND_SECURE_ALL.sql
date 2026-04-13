-- ============================================================================
-- Dbs - CREATION DES TABLES MANQUANTES + SECURITE RLS
-- ============================================================================

-- ============================================================================
-- ETAPE 1: CREER LES TABLES MANQUANTES
-- ============================================================================

-- Table chat_messages
CREATE TABLE IF NOT EXISTS public.chat_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    username VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table chat_mutes (existe deja avec created_by au lieu de muted_by)
-- Colonnes: id, user_id, created_by, expires_at, reason, created_at

-- Table user_badges
CREATE TABLE IF NOT EXISTS public.user_badges (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    badge_type VARCHAR(50) NOT NULL,
    badge_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, badge_type)
);

-- Table search_history
CREATE TABLE IF NOT EXISTS public.search_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    query TEXT NOT NULL,
    results_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table admin_users (si pas existe)
CREATE TABLE IF NOT EXISTS public.admin_users (
    user_id UUID PRIMARY KEY,
    role VARCHAR(20) NOT NULL DEFAULT 'support',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Colonnes manquantes ticket_messages
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

-- Index
CREATE INDEX IF NOT EXISTS idx_chat_messages_created ON public.chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_mutes_user ON public.chat_mutes(user_id);
CREATE INDEX IF NOT EXISTS idx_user_badges_user ON public.user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_search_history_user ON public.search_history(user_id);

-- ============================================================================
-- ETAPE 2: SUPPRIMER TOUTES LES POLICIES
-- ============================================================================
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT DISTINCT tablename, policyname FROM pg_policies WHERE schemaname = 'public')
    LOOP
        BEGIN
            EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', r.policyname, r.tablename);
        EXCEPTION WHEN OTHERS THEN
            NULL;
        END;
    END LOOP;
END $$;

-- ============================================================================
-- ETAPE 3: ACTIVER RLS
-- ============================================================================
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_mutes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_history ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- ETAPE 4: GRANTS SERVICE_ROLE
-- ============================================================================
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- ============================================================================
-- ETAPE 5: POLICIES - TICKETS
-- ============================================================================
CREATE POLICY "tickets_sel" ON public.tickets FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "tickets_ins" ON public.tickets FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "tickets_upd" ON public.tickets FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 6: POLICIES - TICKET_MESSAGES
-- Simplifie: user peut voir/inserer si c'est son user_id
-- ============================================================================
CREATE POLICY "tmsg_sel" ON public.ticket_messages FOR SELECT TO authenticated
    USING (true);
CREATE POLICY "tmsg_ins" ON public.ticket_messages FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 7: POLICIES - PROFILES
-- ============================================================================
CREATE POLICY "prof_sel" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "prof_upd" ON public.profiles FOR UPDATE TO authenticated
    USING ((id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 8: POLICIES - USER_PLANS
-- ============================================================================
CREATE POLICY "plans_sel" ON public.user_plans FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "plans_ins" ON public.user_plans FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "plans_upd" ON public.user_plans FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 9: POLICIES - USER_CREDITS
-- ============================================================================
CREATE POLICY "cred_sel" ON public.user_credits FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "cred_ins" ON public.user_credits FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "cred_upd" ON public.user_credits FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 10: POLICIES - USER_SESSIONS
-- ============================================================================
CREATE POLICY "sess_sel" ON public.user_sessions FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "sess_ins" ON public.user_sessions FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "sess_upd" ON public.user_sessions FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "sess_del" ON public.user_sessions FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 11: POLICIES - API_KEYS
-- ============================================================================
CREATE POLICY "api_sel" ON public.api_keys FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "api_ins" ON public.api_keys FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "api_upd" ON public.api_keys FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "api_del" ON public.api_keys FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 12: POLICIES - CHAT_MESSAGES (public chat)
-- ============================================================================
CREATE POLICY "chat_sel" ON public.chat_messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "chat_ins" ON public.chat_messages FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "chat_del" ON public.chat_messages FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 13: POLICIES - CHAT_MUTES (colonne created_by)
-- ============================================================================
CREATE POLICY "mute_sel" ON public.chat_mutes FOR SELECT TO authenticated
    USING ((created_by)::text = (auth.uid())::text);
CREATE POLICY "mute_ins" ON public.chat_mutes FOR INSERT TO authenticated
    WITH CHECK ((created_by)::text = (auth.uid())::text);
CREATE POLICY "mute_del" ON public.chat_mutes FOR DELETE TO authenticated
    USING ((created_by)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 14: POLICIES - USER_BADGES
-- ============================================================================
CREATE POLICY "badge_sel" ON public.user_badges FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "badge_ins" ON public.user_badges FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "badge_upd" ON public.user_badges FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 15: POLICIES - SEARCH_HISTORY
-- ============================================================================
CREATE POLICY "hist_sel" ON public.search_history FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "hist_ins" ON public.search_history FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 16: POLICIES - ADMIN_USERS (bloque)
-- ============================================================================
CREATE POLICY "admin_deny" ON public.admin_users FOR ALL TO authenticated
    USING (false) WITH CHECK (false);

-- ============================================================================
-- ETAPE 17: GRANTS AUTHENTICATED
-- ============================================================================
GRANT SELECT, INSERT, UPDATE ON public.tickets TO authenticated;
GRANT SELECT, INSERT ON public.ticket_messages TO authenticated;
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_plans TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_credits TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_keys TO authenticated;
GRANT SELECT, INSERT, DELETE ON public.chat_messages TO authenticated;
GRANT SELECT, INSERT, DELETE ON public.chat_mutes TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_badges TO authenticated;
GRANT SELECT, INSERT ON public.search_history TO authenticated;

-- ============================================================================
-- VERIFICATION
-- ============================================================================
SELECT 'TABLES:' as info;
SELECT tablename FROM pg_tables WHERE schemaname = 'public' ORDER BY tablename;

SELECT 'POLICIES:' as info;
SELECT tablename, policyname FROM pg_policies WHERE schemaname = 'public' ORDER BY tablename;

SELECT '✅ CREATION ET SECURISATION TERMINEES!' as result;
