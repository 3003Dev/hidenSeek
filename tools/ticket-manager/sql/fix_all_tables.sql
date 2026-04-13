-- ============================================================================
-- FIX ALL TABLES - Corriger RLS sur TOUTES les tables
-- ============================================================================

-- ETAPE 1: Lister toutes les tables avec RLS
SELECT 'TABLES AVEC RLS:' as info;
SELECT tablename FROM pg_tables WHERE schemaname = 'public';

-- ETAPE 2: Supprimer TOUTES les policies de TOUTES les tables
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

-- ETAPE 3: Desactiver RLS sur toutes les tables problematiques
ALTER TABLE IF EXISTS public.tickets DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.ticket_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admin_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_credits DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.api_keys DISABLE ROW LEVEL SECURITY;

-- ETAPE 4: Grants pour service_role sur tout
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- ETAPE 5: Ajouter colonnes manquantes a ticket_messages
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

-- ETAPE 6: Reactiver RLS
ALTER TABLE IF EXISTS public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.api_keys ENABLE ROW LEVEL SECURITY;

-- ETAPE 7: Policies SIMPLES pour tickets
CREATE POLICY "tickets_sel" ON public.tickets FOR SELECT TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "tickets_ins" ON public.tickets FOR INSERT TO authenticated WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "tickets_upd" ON public.tickets FOR UPDATE TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "tickets_del" ON public.tickets FOR DELETE TO authenticated USING ((user_id)::text = (auth.uid())::text);

-- ETAPE 8: Policies pour ticket_messages
CREATE POLICY "messages_sel" ON public.ticket_messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "messages_ins" ON public.ticket_messages FOR INSERT TO authenticated WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "messages_upd" ON public.ticket_messages FOR UPDATE TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "messages_del" ON public.ticket_messages FOR DELETE TO authenticated USING ((user_id)::text = (auth.uid())::text);

-- ETAPE 9: Policies pour profiles
CREATE POLICY "profiles_sel" ON public.profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "profiles_upd" ON public.profiles FOR UPDATE TO authenticated USING ((id)::text = (auth.uid())::text);

-- ETAPE 10: Policies pour user_plans
CREATE POLICY "plans_sel" ON public.user_plans FOR SELECT TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "plans_ins" ON public.user_plans FOR INSERT TO authenticated WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "plans_upd" ON public.user_plans FOR UPDATE TO authenticated USING ((user_id)::text = (auth.uid())::text);

-- ETAPE 11: Policies pour user_credits
CREATE POLICY "credits_sel" ON public.user_credits FOR SELECT TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "credits_ins" ON public.user_credits FOR INSERT TO authenticated WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "credits_upd" ON public.user_credits FOR UPDATE TO authenticated USING ((user_id)::text = (auth.uid())::text);

-- ETAPE 12: Policies pour user_sessions
CREATE POLICY "sessions_sel" ON public.user_sessions FOR SELECT TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "sessions_ins" ON public.user_sessions FOR INSERT TO authenticated WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "sessions_upd" ON public.user_sessions FOR UPDATE TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "sessions_del" ON public.user_sessions FOR DELETE TO authenticated USING ((user_id)::text = (auth.uid())::text);

-- ETAPE 13: Policies pour api_keys
CREATE POLICY "apikeys_sel" ON public.api_keys FOR SELECT TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "apikeys_ins" ON public.api_keys FOR INSERT TO authenticated WITH CHECK ((user_id)::text = (auth.uid())::text);
CREATE POLICY "apikeys_upd" ON public.api_keys FOR UPDATE TO authenticated USING ((user_id)::text = (auth.uid())::text);
CREATE POLICY "apikeys_del" ON public.api_keys FOR DELETE TO authenticated USING ((user_id)::text = (auth.uid())::text);

-- ETAPE 14: admin_users - personne
CREATE POLICY "admin_none" ON public.admin_users FOR ALL TO authenticated USING (false);

-- Grants pour authenticated
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tickets TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ticket_messages TO authenticated;
GRANT SELECT ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_plans TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_credits TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_keys TO authenticated;

-- VERIFICATION
SELECT 'POLICIES APRES FIX:' as info;
SELECT tablename, policyname FROM pg_policies WHERE schemaname = 'public' ORDER BY tablename;

SELECT 'FIX ALL TABLES TERMINE!' as result;
