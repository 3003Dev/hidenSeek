-- ============================================================================
-- FIX FINAL - Tout en TEXT pour eviter les problemes de type
-- ============================================================================

-- 1. COLONNES MANQUANTES
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

-- 2. SUPPRIMER TOUTES LES POLICIES
DO $$
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'tickets' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.tickets', pol.policyname);
    END LOOP;

    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'ticket_messages' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.ticket_messages', pol.policyname);
    END LOOP;

    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'admin_users' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.admin_users', pol.policyname);
    END LOOP;
END $$;

-- 3. GRANTS
GRANT ALL ON public.tickets TO service_role;
GRANT ALL ON public.ticket_messages TO service_role;
GRANT ALL ON public.admin_users TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tickets TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.ticket_messages TO authenticated;

-- 4. RLS
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- 5. POLICIES TICKETS - TOUT CAST EN TEXT
CREATE POLICY "tix_sel" ON public.tickets
    FOR SELECT TO authenticated
    USING (user_id::text = (auth.uid())::text);

CREATE POLICY "tix_ins" ON public.tickets
    FOR INSERT TO authenticated
    WITH CHECK (user_id::text = (auth.uid())::text);

CREATE POLICY "tix_upd" ON public.tickets
    FOR UPDATE TO authenticated
    USING (user_id::text = (auth.uid())::text);

CREATE POLICY "tix_del" ON public.tickets
    FOR DELETE TO authenticated
    USING (user_id::text = (auth.uid())::text);

-- 6. POLICIES MESSAGES - TOUT CAST EN TEXT
CREATE POLICY "msg_sel" ON public.ticket_messages
    FOR SELECT TO authenticated
    USING (
        ticket_id::text IN (
            SELECT id::text FROM public.tickets WHERE user_id::text = (auth.uid())::text
        )
    );

CREATE POLICY "msg_ins" ON public.ticket_messages
    FOR INSERT TO authenticated
    WITH CHECK (
        user_id::text = (auth.uid())::text AND
        ticket_id::text IN (
            SELECT id::text FROM public.tickets WHERE user_id::text = (auth.uid())::text
        )
    );

CREATE POLICY "msg_upd" ON public.ticket_messages
    FOR UPDATE TO authenticated
    USING (user_id::text = (auth.uid())::text);

CREATE POLICY "msg_del" ON public.ticket_messages
    FOR DELETE TO authenticated
    USING (user_id::text = (auth.uid())::text);

-- 7. ADMIN_USERS
CREATE POLICY "adm_none" ON public.admin_users
    FOR ALL TO authenticated
    USING (false);

SELECT 'OK!' as result;
