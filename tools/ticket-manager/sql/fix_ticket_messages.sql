-- ============================================================================
-- FIX ticket_messages - Ajouter les colonnes manquantes pour le frontend
-- ============================================================================
-- Le frontend Tickets.tsx utilise des colonnes differentes du schema initial
-- Ce script ajoute les colonnes manquantes
-- ============================================================================

-- ============================================================================
-- COLONNES MANQUANTES POUR ticket_messages
-- ============================================================================
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;

-- ============================================================================
-- INDEX POUR LES NOUVELLES COLONNES
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_ticket_messages_is_owner ON public.ticket_messages(is_owner);

-- ============================================================================
-- GRANTS POUR SERVICE_ROLE ET AUTHENTICATED
-- ============================================================================
GRANT ALL ON public.ticket_messages TO service_role;
GRANT SELECT, INSERT ON public.ticket_messages TO authenticated;

-- ============================================================================
-- MISE A JOUR DES POLICIES RLS
-- ============================================================================
ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;

-- Supprimer les anciennes policies si elles existent
DO $$
DECLARE
    pol RECORD;
BEGIN
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'ticket_messages' AND schemaname = 'public'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.ticket_messages', pol.policyname);
    END LOOP;
END $$;

-- Policy: Les utilisateurs peuvent voir les messages de leurs tickets
CREATE POLICY "messages_select_own" ON public.ticket_messages
    FOR SELECT TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM public.tickets t
            WHERE t.id = ticket_messages.ticket_id
            AND t.user_id::text = auth.uid()::text
        )
    );

-- Policy: Les utilisateurs peuvent ajouter des messages a leurs tickets
CREATE POLICY "messages_insert_own" ON public.ticket_messages
    FOR INSERT TO authenticated
    WITH CHECK (
        user_id::text = auth.uid()::text AND
        EXISTS (
            SELECT 1 FROM public.tickets t
            WHERE t.id = ticket_messages.ticket_id
            AND t.user_id::text = auth.uid()::text
        )
    );

-- ============================================================================
-- VERIFICATION
-- ============================================================================
SELECT
    'ticket_messages columns:' as info,
    column_name,
    data_type
FROM information_schema.columns
WHERE table_name = 'ticket_messages'
AND table_schema = 'public'
ORDER BY ordinal_position;

SELECT 'Fix ticket_messages termine!' as result;
