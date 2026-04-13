-- ============================================================================
-- Dbs SECURITY - CONFIGURATION RLS COMPLETE ET SECURISEE
-- ============================================================================
-- Ce script configure la securite RLS pour TOUTES les tables
-- Chaque utilisateur ne peut acceder qu'a SES propres donnees
-- Service_role bypass RLS (pour le backend admin)
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
-- ETAPE 2: AJOUTER COLONNES MANQUANTES A TICKET_MESSAGES
-- ============================================================================
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

-- ============================================================================
-- ETAPE 3: ACTIVER RLS SUR TOUTES LES TABLES
-- ============================================================================
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- ETAPE 4: GRANTS - SERVICE_ROLE A ACCES TOTAL (BYPASS RLS)
-- ============================================================================
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- ============================================================================
-- ETAPE 5: POLICIES SECURISEES - TICKETS
-- Un utilisateur ne voit que SES tickets
-- Note: Cast en TEXT pour compatibilite UUID/TEXT
-- ============================================================================
CREATE POLICY "tickets_select_own" ON public.tickets
    FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "tickets_insert_own" ON public.tickets
    FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "tickets_update_own" ON public.tickets
    FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text)
    WITH CHECK ((user_id)::text = (auth.uid())::text);

-- Pas de DELETE pour les users normaux (seul admin peut supprimer)

-- ============================================================================
-- ETAPE 6: POLICIES SECURISEES - TICKET_MESSAGES
-- Un utilisateur ne voit que les messages de SES tickets
-- Note: Cast en TEXT pour compatibilite UUID/TEXT
-- ============================================================================
CREATE POLICY "messages_select_own_tickets" ON public.ticket_messages
    FOR SELECT TO authenticated
    USING (
        (ticket_id)::text IN (
            SELECT (id)::text FROM public.tickets WHERE (user_id)::text = (auth.uid())::text
        )
    );

CREATE POLICY "messages_insert_own_tickets" ON public.ticket_messages
    FOR INSERT TO authenticated
    WITH CHECK (
        (user_id)::text = (auth.uid())::text AND
        (ticket_id)::text IN (
            SELECT (id)::text FROM public.tickets WHERE (user_id)::text = (auth.uid())::text
        )
    );

-- Pas de UPDATE/DELETE pour les messages (immutables)

-- ============================================================================
-- ETAPE 7: POLICIES SECURISEES - PROFILES
-- Tout le monde peut voir les profils (username public)
-- Seul le proprietaire peut modifier
-- ============================================================================
CREATE POLICY "profiles_select_all" ON public.profiles
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "profiles_update_own" ON public.profiles
    FOR UPDATE TO authenticated
    USING ((id)::text = (auth.uid())::text)
    WITH CHECK ((id)::text = (auth.uid())::text);

-- Pas d'INSERT (cree automatiquement par trigger)
-- Pas de DELETE (on ne supprime pas les profils)

-- ============================================================================
-- ETAPE 8: POLICIES SECURISEES - USER_PLANS
-- Un utilisateur ne voit que SON plan
-- ============================================================================
CREATE POLICY "plans_select_own" ON public.user_plans
    FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "plans_insert_own" ON public.user_plans
    FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "plans_update_own" ON public.user_plans
    FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text)
    WITH CHECK ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 9: POLICIES SECURISEES - USER_CREDITS
-- Un utilisateur ne voit que SES credits
-- ============================================================================
CREATE POLICY "credits_select_own" ON public.user_credits
    FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "credits_insert_own" ON public.user_credits
    FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "credits_update_own" ON public.user_credits
    FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text)
    WITH CHECK ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 10: POLICIES SECURISEES - USER_SESSIONS
-- Un utilisateur ne voit que SES sessions
-- ============================================================================
CREATE POLICY "sessions_select_own" ON public.user_sessions
    FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "sessions_insert_own" ON public.user_sessions
    FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "sessions_update_own" ON public.user_sessions
    FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text)
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "sessions_delete_own" ON public.user_sessions
    FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 11: POLICIES SECURISEES - API_KEYS
-- Un utilisateur ne voit que SES cles API
-- ============================================================================
CREATE POLICY "apikeys_select_own" ON public.api_keys
    FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "apikeys_insert_own" ON public.api_keys
    FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "apikeys_update_own" ON public.api_keys
    FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text)
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "apikeys_delete_own" ON public.api_keys
    FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ============================================================================
-- ETAPE 12: POLICIES SECURISEES - ADMIN_USERS
-- PERSONNE ne peut acceder via authenticated (gestion via service_role)
-- ============================================================================
CREATE POLICY "admin_users_deny_all" ON public.admin_users
    FOR ALL TO authenticated
    USING (false)
    WITH CHECK (false);

-- ============================================================================
-- ETAPE 13: GRANTS POUR AUTHENTICATED (limites par RLS)
-- ============================================================================
GRANT SELECT, INSERT, UPDATE ON public.tickets TO authenticated;
GRANT SELECT, INSERT ON public.ticket_messages TO authenticated;
GRANT SELECT, UPDATE ON public.profiles TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_plans TO authenticated;
GRANT SELECT, INSERT, UPDATE ON public.user_credits TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.api_keys TO authenticated;
-- Pas de GRANT sur admin_users pour authenticated

-- ============================================================================
-- VERIFICATION FINALE
-- ============================================================================
SELECT 'TABLES AVEC RLS ACTIVE:' as info;
SELECT tablename, rowsecurity FROM pg_tables
WHERE schemaname = 'public' AND rowsecurity = true
ORDER BY tablename;

SELECT 'POLICIES CREEES:' as info;
SELECT tablename, policyname, cmd, permissive FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

SELECT '✅ SECURITE RLS CONFIGUREE AVEC SUCCES!' as result;
