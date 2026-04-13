-- ============================================================================
-- DESACTIVER RLS TEMPORAIREMENT POUR TESTER
-- ============================================================================

-- Desactiver RLS sur toutes les tables
ALTER TABLE IF EXISTS public.tickets DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.ticket_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.profiles DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_credits DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_sessions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.api_keys DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.admin_users DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.chat_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.chat_mutes DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_badges DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.search_history DISABLE ROW LEVEL SECURITY;

-- Grants pour authenticated
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- Ajouter colonnes manquantes
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS username VARCHAR(255);
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_owner BOOLEAN DEFAULT FALSE;
ALTER TABLE public.ticket_messages ADD COLUMN IF NOT EXISTS is_admin_reply BOOLEAN DEFAULT FALSE;

SELECT 'RLS DESACTIVE - TEST MODE!' as result;
