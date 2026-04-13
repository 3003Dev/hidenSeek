-- ============================================================================
-- FIX COMPLET - Supprimer TOUTES les policies et recreer proprement
-- ============================================================================

-- ============================================================================
-- 1. AJOUTER COLONNES MANQUANTES
-- ============================================================================
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

-- ============================================================================
-- 2. SUPPRIMER TOUTES LES POLICIES SUR TOUTES LES TABLES
-- ============================================================================
DO $$
DECLARE
    pol RECORD;
BEGIN
    -- tickets
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'tickets' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.tickets', pol.policyname);
    END LOOP;

    -- ticket_messages
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'ticket_messages' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.ticket_messages', pol.policyname);
    END LOOP;

    -- admin_users
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'admin_users' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.admin_users', pol.policyname);
    END LOOP;
END $$;

-- ============================================================================
-- 3. DESACTIVER RLS TEMPORAIREMENT POUR NETTOYER
-- ============================================================================
ALTER TABLE public.tickets DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users DISABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 4. GRANTS COMPLETS POUR SERVICE_ROLE (BYPASS RLS)
-- ============================================================================
GRANT ALL ON public.tickets TO service_role;
GRANT ALL ON public.ticket_messages TO service_role;
GRANT ALL ON public.admin_users TO service_role;

-- Grants pour authenticated
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tickets TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ticket_messages TO authenticated;

-- ============================================================================
-- 5. REACTIVER RLS
-- ============================================================================
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- 6. NOUVELLES POLICIES SIMPLES - TICKETS
-- user_id est UUID, auth.uid() retourne UUID
-- ============================================================================
CREATE POLICY "tickets_select_policy" ON public.tickets
    FOR SELECT TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "tickets_insert_policy" ON public.tickets
    FOR INSERT TO authenticated
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "tickets_update_policy" ON public.tickets
    FOR UPDATE TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "tickets_delete_policy" ON public.tickets
    FOR DELETE TO authenticated
    USING (user_id = auth.uid());

-- ============================================================================
-- 7. NOUVELLES POLICIES SIMPLES - TICKET_MESSAGES
-- ============================================================================
CREATE POLICY "messages_select_policy" ON public.ticket_messages
    FOR SELECT TO authenticated
    USING (
        ticket_id IN (
            SELECT id FROM public.tickets WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "messages_insert_policy" ON public.ticket_messages
    FOR INSERT TO authenticated
    WITH CHECK (
        user_id = auth.uid() AND
        ticket_id IN (
            SELECT id FROM public.tickets WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "messages_update_policy" ON public.ticket_messages
    FOR UPDATE TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "messages_delete_policy" ON public.ticket_messages
    FOR DELETE TO authenticated
    USING (user_id = auth.uid());

-- ============================================================================
-- 8. POLICY ADMIN_USERS - Personne ne peut y acceder via authenticated
-- ============================================================================
CREATE POLICY "admin_users_none" ON public.admin_users
    FOR ALL TO authenticated
    USING (false);

-- ============================================================================
-- VERIFICATION
-- ============================================================================
SELECT 'Policies sur tickets:' as table_name, policyname, cmd FROM pg_policies WHERE tablename = 'tickets';
SELECT 'Policies sur ticket_messages:' as table_name, policyname, cmd FROM pg_policies WHERE tablename = 'ticket_messages';

SELECT 'FIX COMPLET TERMINE!' as result;
