-- ============================================================================
-- Dbs Ticket System - Database Schema
-- ============================================================================
-- Ce fichier contient le schema complet pour le systeme de tickets
-- avec toutes les policies RLS pour la securite
-- ============================================================================

-- ============================================================================
-- TABLE: tickets
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.tickets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    subject VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL DEFAULT 'general',
    priority VARCHAR(20) NOT NULL DEFAULT 'normal',
    status VARCHAR(20) NOT NULL DEFAULT 'open',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    closed_at TIMESTAMP WITH TIME ZONE,
    closed_by UUID REFERENCES auth.users(id),

    CONSTRAINT tickets_category_check CHECK (category IN ('general', 'billing', 'technical', 'bug', 'feature', 'account', 'other')),
    CONSTRAINT tickets_priority_check CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    CONSTRAINT tickets_status_check CHECK (status IN ('open', 'pending', 'in_progress', 'resolved', 'closed'))
);

-- Index pour les requetes frequentes
CREATE INDEX IF NOT EXISTS idx_tickets_user_id ON public.tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status ON public.tickets(status);
CREATE INDEX IF NOT EXISTS idx_tickets_created_at ON public.tickets(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tickets_priority ON public.tickets(priority);

-- ============================================================================
-- TABLE: ticket_messages
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.ticket_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ticket_id UUID NOT NULL REFERENCES public.tickets(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    is_admin_reply BOOLEAN DEFAULT FALSE,
    attachments JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour les requetes frequentes
CREATE INDEX IF NOT EXISTS idx_ticket_messages_ticket_id ON public.ticket_messages(ticket_id);
CREATE INDEX IF NOT EXISTS idx_ticket_messages_created_at ON public.ticket_messages(created_at);

-- ============================================================================
-- TABLE: admin_users (pour identifier les admins)
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.admin_users (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role VARCHAR(20) NOT NULL DEFAULT 'support',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

    CONSTRAINT admin_role_check CHECK (role IN ('support', 'admin', 'super_admin'))
);

-- ============================================================================
-- FUNCTION: Verifier si un utilisateur est admin
-- ============================================================================
CREATE OR REPLACE FUNCTION public.is_admin(check_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.admin_users WHERE user_id = check_user_id
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- FUNCTION: Mise a jour automatique de updated_at
-- ============================================================================
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

-- ============================================================================
-- FUNCTION: Mettre a jour le ticket quand un message est ajoute
-- ============================================================================
CREATE OR REPLACE FUNCTION public.update_ticket_on_message()
RETURNS TRIGGER AS $$
BEGIN
    -- Mettre a jour updated_at du ticket
    UPDATE public.tickets
    SET updated_at = NOW()
    WHERE id = NEW.ticket_id;

    -- Si c'est une reponse admin et le ticket etait "open", le passer en "in_progress"
    IF NEW.is_admin_reply = TRUE THEN
        UPDATE public.tickets
        SET status = 'in_progress'
        WHERE id = NEW.ticket_id AND status = 'open';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour les messages
DROP TRIGGER IF EXISTS trigger_update_ticket_on_message ON public.ticket_messages;
CREATE TRIGGER trigger_update_ticket_on_message
    AFTER INSERT ON public.ticket_messages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_ticket_on_message();

-- ============================================================================
-- RLS (Row Level Security) - TICKETS
-- ============================================================================
ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;

-- Policy: Les utilisateurs peuvent voir leurs propres tickets
CREATE POLICY "Users can view own tickets" ON public.tickets
    FOR SELECT
    USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

-- Policy: Les utilisateurs peuvent creer des tickets
CREATE POLICY "Users can create tickets" ON public.tickets
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Policy: Les utilisateurs peuvent mettre a jour leurs tickets (seulement certains champs)
CREATE POLICY "Users can update own tickets" ON public.tickets
    FOR UPDATE
    USING (auth.uid() = user_id OR public.is_admin(auth.uid()));

-- Policy: Seuls les admins peuvent supprimer des tickets
CREATE POLICY "Only admins can delete tickets" ON public.tickets
    FOR DELETE
    USING (public.is_admin(auth.uid()));

-- ============================================================================
-- RLS (Row Level Security) - TICKET_MESSAGES
-- ============================================================================
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Les utilisateurs peuvent voir les messages de leurs tickets
CREATE POLICY "Users can view messages of own tickets" ON public.ticket_messages
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.tickets
            WHERE id = ticket_messages.ticket_id
            AND (user_id = auth.uid() OR public.is_admin(auth.uid()))
        )
    );

-- Policy: Les utilisateurs peuvent ajouter des messages a leurs tickets
CREATE POLICY "Users can add messages to own tickets" ON public.ticket_messages
    FOR INSERT
    WITH CHECK (
        auth.uid() = user_id AND
        EXISTS (
            SELECT 1 FROM public.tickets
            WHERE id = ticket_messages.ticket_id
            AND (user_id = auth.uid() OR public.is_admin(auth.uid()))
        )
    );

-- Policy: Seuls les admins peuvent supprimer des messages
CREATE POLICY "Only admins can delete messages" ON public.ticket_messages
    FOR DELETE
    USING (public.is_admin(auth.uid()));

-- ============================================================================
-- RLS (Row Level Security) - ADMIN_USERS
-- ============================================================================
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Policy: Seuls les super_admins peuvent voir la liste des admins
CREATE POLICY "Only super admins can view admin list" ON public.admin_users
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.admin_users
            WHERE user_id = auth.uid() AND role = 'super_admin'
        )
    );

-- Policy: Seuls les super_admins peuvent ajouter des admins
CREATE POLICY "Only super admins can add admins" ON public.admin_users
    FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.admin_users
            WHERE user_id = auth.uid() AND role = 'super_admin'
        )
    );

-- Policy: Seuls les super_admins peuvent supprimer des admins
CREATE POLICY "Only super admins can delete admins" ON public.admin_users
    FOR DELETE
    USING (
        EXISTS (
            SELECT 1 FROM public.admin_users
            WHERE user_id = auth.uid() AND role = 'super_admin'
        )
    );

-- ============================================================================
-- VIEW: tickets_with_user_info (pour l'interface admin)
-- ============================================================================
CREATE OR REPLACE VIEW public.tickets_with_user_info AS
SELECT
    t.id,
    t.user_id,
    t.subject,
    t.category,
    t.priority,
    t.status,
    t.created_at,
    t.updated_at,
    t.closed_at,
    t.closed_by,
    p.email as user_email,
    p.username as user_username,
    (SELECT COUNT(*) FROM public.ticket_messages tm WHERE tm.ticket_id = t.id) as message_count,
    (SELECT tm.created_at FROM public.ticket_messages tm WHERE tm.ticket_id = t.id ORDER BY tm.created_at DESC LIMIT 1) as last_message_at
FROM public.tickets t
LEFT JOIN public.profiles p ON t.user_id = p.id;

-- ============================================================================
-- FUNCTION: Fermer un ticket (admin only)
-- ============================================================================
CREATE OR REPLACE FUNCTION public.close_ticket(
    p_ticket_id UUID,
    p_admin_id UUID
)
RETURNS BOOLEAN AS $$
BEGIN
    -- Verifier que l'utilisateur est admin
    IF NOT public.is_admin(p_admin_id) THEN
        RAISE EXCEPTION 'Unauthorized: Only admins can close tickets';
    END IF;

    UPDATE public.tickets
    SET
        status = 'closed',
        closed_at = NOW(),
        closed_by = p_admin_id
    WHERE id = p_ticket_id;

    RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- FUNCTION: Repondre a un ticket (admin)
-- ============================================================================
CREATE OR REPLACE FUNCTION public.admin_reply_ticket(
    p_ticket_id UUID,
    p_admin_id UUID,
    p_message TEXT
)
RETURNS UUID AS $$
DECLARE
    v_message_id UUID;
BEGIN
    -- Verifier que l'utilisateur est admin
    IF NOT public.is_admin(p_admin_id) THEN
        RAISE EXCEPTION 'Unauthorized: Only admins can use this function';
    END IF;

    -- Inserer le message
    INSERT INTO public.ticket_messages (ticket_id, user_id, message, is_admin_reply)
    VALUES (p_ticket_id, p_admin_id, p_message, TRUE)
    RETURNING id INTO v_message_id;

    RETURN v_message_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- FUNCTION: Obtenir les statistiques des tickets (admin)
-- ============================================================================
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
        COUNT(*)::BIGINT as total_tickets,
        COUNT(*) FILTER (WHERE status = 'open')::BIGINT as open_tickets,
        COUNT(*) FILTER (WHERE status = 'pending')::BIGINT as pending_tickets,
        COUNT(*) FILTER (WHERE status = 'in_progress')::BIGINT as in_progress_tickets,
        COUNT(*) FILTER (WHERE status = 'resolved')::BIGINT as resolved_tickets,
        COUNT(*) FILTER (WHERE status = 'closed')::BIGINT as closed_tickets,
        COUNT(*) FILTER (WHERE priority = 'urgent' AND status NOT IN ('resolved', 'closed'))::BIGINT as urgent_tickets,
        COUNT(*) FILTER (WHERE DATE(created_at) = CURRENT_DATE)::BIGINT as tickets_today
    FROM public.tickets;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- GRANTS (permissions pour le service role)
-- ============================================================================
GRANT ALL ON public.tickets TO service_role;
GRANT ALL ON public.ticket_messages TO service_role;
GRANT ALL ON public.admin_users TO service_role;
GRANT SELECT ON public.tickets_with_user_info TO service_role;
GRANT EXECUTE ON FUNCTION public.is_admin TO service_role;
GRANT EXECUTE ON FUNCTION public.close_ticket TO service_role;
GRANT EXECUTE ON FUNCTION public.admin_reply_ticket TO service_role;
GRANT EXECUTE ON FUNCTION public.get_ticket_stats TO service_role;

-- ============================================================================
-- AJOUTER UN SUPER ADMIN (remplacer l'UUID par celui de l'admin)
-- ============================================================================
-- INSERT INTO public.admin_users (user_id, role) VALUES ('YOUR-ADMIN-UUID-HERE', 'super_admin');

COMMENT ON TABLE public.tickets IS 'Table principale des tickets de support Dbs';
COMMENT ON TABLE public.ticket_messages IS 'Messages/reponses dans les tickets';
COMMENT ON TABLE public.admin_users IS 'Liste des utilisateurs avec acces admin aux tickets';
