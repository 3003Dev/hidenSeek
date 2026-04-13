-- ============================================================================
-- Dbs - SECURITE RLS COMPLETE POUR TOUTES LES TABLES
-- ============================================================================
-- Tables: tickets, ticket_messages, profiles, user_plans, user_credits,
--         user_sessions, api_keys, admin_users, chat_messages, chat_mutes,
--         user_badges, search_history
-- ============================================================================

-- ============================================================================
-- ETAPE 1: SUPPRIMER TOUTES LES POLICIES EXISTANTES
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
-- ETAPE 2: AJOUTER COLONNES MANQUANTES
-- ============================================================================
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

-- ============================================================================
-- ETAPE 3: ACTIVER RLS SUR TOUTES LES TABLES
-- ============================================================================
ALTER TABLE IF EXISTS public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.chat_mutes ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.search_history ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- ETAPE 4: GRANTS SERVICE_ROLE (BYPASS RLS)
-- ============================================================================
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- ============================================================================
-- ETAPE 5: TICKETS - Propres donnees seulement
-- ============================================================================
CREATE POLICY "tickets_sel" ON public.tickets FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "tickets_ins" ON public.tickets FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "tickets_upd" ON public.tickets FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 6: TICKET_MESSAGES - Messages de ses tickets
-- ============================================================================
CREATE POLICY "tmsg_sel" ON public.ticket_messages FOR SELECT TO authenticated
    USING ((ticket_id)::text IN (SELECT (id)::text FROM public.tickets WHERE (user_id)::text = (auth.uid())::text));
CREATE POLICY "tmsg_ins" ON public.ticket_messages FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text AND (ticket_id)::text IN (SELECT (id)::text FROM public.tickets WHERE (user_id)::text = (auth.uid())::text));

-- ============================================================================
-- ETAPE 7: PROFILES - Lecture tous, update propre
-- ============================================================================
CREATE POLICY "prof_sel" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "prof_upd" ON public.profiles FOR UPDATE TO authenticated
    USING ((id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 8: USER_PLANS - Propres donnees
-- ============================================================================
CREATE POLICY "plans_sel" ON public.user_plans FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "plans_ins" ON public.user_plans FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "plans_upd" ON public.user_plans FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 9: USER_CREDITS - Propres donnees
-- ============================================================================
CREATE POLICY "cred_sel" ON public.user_credits FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "cred_ins" ON public.user_credits FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "cred_upd" ON public.user_credits FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 10: USER_SESSIONS - Propres donnees
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
-- ETAPE 11: API_KEYS - Propres donnees
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
-- ETAPE 12: CHAT_MESSAGES - Lecture tous, insert/delete propre
-- ============================================================================
CREATE POLICY "chat_sel" ON public.chat_messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "chat_ins" ON public.chat_messages FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "chat_del" ON public.chat_messages FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 13: CHAT_MUTES - Propres donnees
-- ============================================================================
CREATE POLICY "mute_sel" ON public.chat_mutes FOR SELECT TO authenticated
    USING ((muted_by)::text = (auth.uid())::text);
CREATE POLICY "mute_ins" ON public.chat_mutes FOR INSERT TO authenticated
    WITH CHECK ((muted_by)::text = (auth.uid())::text);
CREATE POLICY "mute_del" ON public.chat_mutes FOR DELETE TO authenticated
    USING ((muted_by)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 14: USER_BADGES - Propres donnees
-- ============================================================================
CREATE POLICY "badge_sel" ON public.user_badges FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "badge_ins" ON public.user_badges FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "badge_upd" ON public.user_badges FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 15: SEARCH_HISTORY - Propres donnees
-- ============================================================================
CREATE POLICY "hist_sel" ON public.search_history FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "hist_ins" ON public.search_history FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 16: ADMIN_USERS - Bloque pour authenticated
-- ============================================================================
CREATE POLICY "admin_deny" ON public.admin_users FOR ALL TO authenticated
    USING (false) WITH CHECK (false);

-- ============================================================================
-- ETAPE 17: GRANTS POUR AUTHENTICATED
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
SELECT 'POLICIES CREEES:' as info;
SELECT tablename, policyname FROM pg_policies WHERE schemaname = 'public' ORDER BY tablename;

SELECT '✅ TOUTES LES TABLES SECURISEES!' as result;
