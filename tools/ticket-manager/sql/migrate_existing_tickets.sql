-- ============================================================================
-- Dbs Ticket System - MIGRATION pour tables existantes
-- VERSION SIMPLIFIEE - Compatible avec service_role
-- ============================================================================

-- ============================================================================
-- AJOUTER LES COLONNES MANQUANTES A LA TABLE TICKETS
-- ============================================================================

ALTER TABLE public.tickets ADD COLUMN IF NOT EXISTS priority VARCHAR(20) DEFAULT 'normal';
ALTER TABLE public.tickets ADD COLUMN IF NOT EXISTS category VARCHAR(50) DEFAULT 'general';
ALTER TABLE public.tickets ADD COLUMN IF NOT EXISTS closed_at TIMESTAMP WITH TIME ZONE;
ALTER TABLE public.tickets ADD COLUMN IF NOT EXISTS closed_by UUID;
ALTER TABLE public.tickets ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- ============================================================================
-- AJOUTER LES COLONNES MANQUANTES A LA TABLE TICKET_MESSAGES
-- ============================================================================

ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS attachments JSONB DEFAULT '[]'::jsonb;

-- ============================================================================
-- CREER LA TABLE ADMIN_USERS SI ELLE N'EXISTE PAS
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.admin_users (
    user_id UUID PRIMARY KEY,
    role VARCHAR(20) NOT NULL DEFAULT 'support',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================================================
-- AJOUTER LES INDEX MANQUANTS
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_tickets_priority ON public.tickets(priority);
CREATE INDEX IF NOT EXISTS idx_tickets_category ON public.tickets(category);
CREATE INDEX IF NOT EXISTS idx_tickets_updated_at ON public.tickets(updated_at DESC);

-- ============================================================================
-- CREER LES FONCTIONS UTILITAIRES
-- ============================================================================

-- Fonction is_admin (avec UUID)
CREATE OR REPLACE FUNCTION public.is_admin_check(check_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_users WHERE user_id = check_user_id
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Fonction update_ticket_timestamp
CREATE OR REPLACE FUNCTION public.update_ticket_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger pour updated_at
DROP TRIGGER IF EXISTS trigger_update_ticket_timestamp ON public.tickets;
CREATE TRIGGER trigger_update_ticket_timestamp
    BEFORE UPDATE ON public.tickets
    FOR EACH ROW
    EXECUTE FUNCTION public.update_ticket_timestamp();

-- Fonction get_ticket_stats
CREATE OR REPLACE FUNCTION public.get_ticket_stats()
RETURNS TABLE (
    total_tickets BIGINT,
    open_tickets BIGINT,
    pending_tickets BIGINT,
    in_progress_tickets BIGINT,
    resolved_tickets BIGINT,
    closed_tickets BIGINT,
    urgent_tickets BIGINT,
    tickets_today BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        COUNT(*)::BIGINT,
        COUNT(*) FILTER (WHERE status = 'open')::BIGINT,
        COUNT(*) FILTER (WHERE status = 'pending')::BIGINT,
        COUNT(*) FILTER (WHERE status = 'in_progress')::BIGINT,
        COUNT(*) FILTER (WHERE status = 'resolved')::BIGINT,
        COUNT(*) FILTER (WHERE status = 'closed')::BIGINT,
        COUNT(*) FILTER (WHERE priority = 'urgent' AND status NOT IN ('resolved', 'closed'))::BIGINT,
        COUNT(*) FILTER (WHERE DATE(created_at) = CURRENT_DATE)::BIGINT
    FROM public.tickets;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- RLS - GARDER ACTIVE MAIS AJOUTER BYPASS POUR SERVICE_ROLE
-- ============================================================================
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- SUPPRIMER TOUTES LES ANCIENNES POLICIES
-- ============================================================================
DO $$
DECLARE
    pol RECORD;
BEGIN
    -- Supprimer policies sur tickets
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'tickets' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.tickets', pol.policyname);
    END LOOP;

    -- Supprimer policies sur ticket_messages
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'ticket_messages' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.ticket_messages', pol.policyname);
    END LOOP;

    -- Supprimer policies sur admin_users
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'admin_users' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.admin_users', pol.policyname);
    END LOOP;
END $$;

-- ============================================================================
-- NOUVELLES POLICIES - TICKETS
-- Utilisateurs peuvent voir/modifier leurs propres tickets
-- Service role peut tout faire (bypass implicite)
-- ============================================================================
CREATE POLICY "tickets_select" ON public.tickets
    FOR SELECT TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "tickets_insert" ON public.tickets
    FOR INSERT TO authenticated
    WITH CHECK (user_id = auth.uid());

CREATE POLICY "tickets_update" ON public.tickets
    FOR UPDATE TO authenticated
    USING (user_id = auth.uid());

CREATE POLICY "tickets_delete" ON public.tickets
    FOR DELETE TO authenticated
    USING (user_id = auth.uid());

-- ============================================================================
-- NOUVELLES POLICIES - TICKET_MESSAGES
-- ============================================================================
CREATE POLICY "messages_select" ON public.ticket_messages
    FOR SELECT TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.tickets t
            WHERE t.id = ticket_messages.ticket_id
            AND t.user_id = auth.uid()
        )
    );

CREATE POLICY "messages_insert" ON public.ticket_messages
    FOR INSERT TO authenticated
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.tickets t
            WHERE t.id = ticket_messages.ticket_id
            AND t.user_id = auth.uid()
        )
    );

-- ============================================================================
-- NOUVELLES POLICIES - ADMIN_USERS (personne via authenticated)
-- ============================================================================
CREATE POLICY "admin_none" ON public.admin_users
    FOR ALL TO authenticated
    USING (false);

-- ============================================================================
-- GRANTS COMPLETS POUR SERVICE_ROLE
-- ============================================================================
GRANT ALL ON public.tickets TO service_role;
GRANT ALL ON public.ticket_messages TO service_role;
GRANT ALL ON public.admin_users TO service_role;
GRANT EXECUTE ON FUNCTION public.is_admin_check(UUID) TO service_role;
GRANT EXECUTE ON FUNCTION public.get_ticket_stats TO service_role;

-- Grants pour authenticated (acces limite par RLS)
GRANT SELECT, INSERT, UPDATE, DELETE ON public.tickets TO authenticated;
GRANT SELECT, INSERT ON public.ticket_messages TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin_check(UUID) TO authenticated;

-- ============================================================================
-- METTRE A JOUR LES TICKETS EXISTANTS
-- ============================================================================
UPDATE public.tickets SET priority = 'normal' WHERE priority IS NULL;
UPDATE public.tickets SET category = 'general' WHERE category IS NULL;
UPDATE public.tickets SET updated_at = created_at WHERE updated_at IS NULL;

SELECT 'Migration terminee avec succes!' as result;
