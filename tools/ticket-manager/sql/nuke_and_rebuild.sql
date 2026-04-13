-- ============================================================================
-- NUKE AND REBUILD - Suppression totale et reconstruction
-- ============================================================================

-- ETAPE 1: Desactiver RLS sur tout
ALTER TABLE IF EXISTS public.tickets DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.ticket_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admin_users DISABLE ROW LEVEL SECURITY;

-- ETAPE 2: Supprimer TOUTES les policies par nom explicite (au cas ou)
DROP POLICY IF EXISTS "tickets_select" ON public.tickets;
DROP POLICY IF EXISTS "tickets_insert" ON public.tickets;
DROP POLICY IF EXISTS "tickets_update" ON public.tickets;
DROP POLICY IF EXISTS "tickets_delete" ON public.tickets;
DROP POLICY IF EXISTS "tickets_select_policy" ON public.tickets;
DROP POLICY IF EXISTS "tickets_insert_policy" ON public.tickets;
DROP POLICY IF EXISTS "tickets_update_policy" ON public.tickets;
DROP POLICY IF EXISTS "tickets_delete_policy" ON public.tickets;
DROP POLICY IF EXISTS "tix_sel" ON public.tickets;
DROP POLICY IF EXISTS "tix_ins" ON public.tickets;
DROP POLICY IF EXISTS "tix_upd" ON public.tickets;
DROP POLICY IF EXISTS "tix_del" ON public.tickets;
DROP POLICY IF EXISTS "Users can view own tickets" ON public.tickets;
DROP POLICY IF EXISTS "Users can create tickets" ON public.tickets;
DROP POLICY IF EXISTS "Users can update own tickets" ON public.tickets;
DROP POLICY IF EXISTS "Only admins can delete tickets" ON public.tickets;

DROP POLICY IF EXISTS "messages_select" ON public.ticket_messages;
DROP POLICY IF EXISTS "messages_insert" ON public.ticket_messages;
DROP POLICY IF EXISTS "messages_select_own" ON public.ticket_messages;
DROP POLICY IF EXISTS "messages_insert_own" ON public.ticket_messages;
DROP POLICY IF EXISTS "messages_select_policy" ON public.ticket_messages;
DROP POLICY IF EXISTS "messages_insert_policy" ON public.ticket_messages;
DROP POLICY IF EXISTS "messages_update_policy" ON public.ticket_messages;
DROP POLICY IF EXISTS "messages_delete_policy" ON public.ticket_messages;
DROP POLICY IF EXISTS "msg_sel" ON public.ticket_messages;
DROP POLICY IF EXISTS "msg_ins" ON public.ticket_messages;
DROP POLICY IF EXISTS "msg_upd" ON public.ticket_messages;
DROP POLICY IF EXISTS "msg_del" ON public.ticket_messages;
DROP POLICY IF EXISTS "Users can view messages of own tickets" ON public.ticket_messages;
DROP POLICY IF EXISTS "Users can add messages to own tickets" ON public.ticket_messages;
DROP POLICY IF EXISTS "Only admins can delete messages" ON public.ticket_messages;

DROP POLICY IF EXISTS "admin_none" ON public.admin_users;
DROP POLICY IF EXISTS "adm_none" ON public.admin_users;
DROP POLICY IF EXISTS "admin_users_none" ON public.admin_users;
DROP POLICY IF EXISTS "Only super admins can view admin list" ON public.admin_users;
DROP POLICY IF EXISTS "Only super admins can add admins" ON public.admin_users;
DROP POLICY IF EXISTS "Only super admins can delete admins" ON public.admin_users;

-- ETAPE 3: Supprimer dynamiquement tout ce qui reste
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname, tablename FROM pg_policies WHERE schemaname = 'public')
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', r.policyname, r.tablename);
    END LOOP;
END $$;

-- ETAPE 4: Ajouter colonnes manquantes
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

-- ETAPE 5: Grants
GRANT ALL ON public.tickets TO service_role;
GRANT ALL ON public.ticket_messages TO service_role;
GRANT ALL ON public.admin_users TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tickets TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ticket_messages TO authenticated;

-- ETAPE 6: Reactiver RLS
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- ETAPE 7: Nouvelles policies SIMPLES
-- tickets
CREATE POLICY "pol_tickets_select" ON public.tickets FOR SELECT TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "pol_tickets_insert" ON public.tickets FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "pol_tickets_update" ON public.tickets FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "pol_tickets_delete" ON public.tickets FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- ticket_messages - VERSION SIMPLE sans subquery
CREATE POLICY "pol_messages_select" ON public.ticket_messages FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "pol_messages_insert" ON public.ticket_messages FOR INSERT TO authenticated
    WITH CHECK ((user_id)::text = (auth.uid())::text);

CREATE POLICY "pol_messages_update" ON public.ticket_messages FOR UPDATE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

CREATE POLICY "pol_messages_delete" ON public.ticket_messages FOR DELETE TO authenticated
    USING ((user_id)::text = (auth.uid())::text);

-- admin_users
CREATE POLICY "pol_admin_none" ON public.admin_users FOR ALL TO authenticated
    USING (false);

-- VERIFICATION
SELECT 'POLICIES ACTUELLES:' as info;
SELECT tablename, policyname FROM pg_policies WHERE schemaname = 'public';

SELECT 'NUKE AND REBUILD TERMINE!' as result;
