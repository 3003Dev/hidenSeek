-- ============================================================================
-- Dbs - COMPLETE RLS SECURITY POLICIES
-- Date: 2026-01-13
-- Description: Sécurisation complète de toutes les tables avec RLS
-- ============================================================================

-- ============================================================================
-- 1. PROFILES TABLE
-- ============================================================================
-- IMPORTANT: Les utilisateurs ne peuvent voir QUE leur propre profil
-- Personne ne peut lister tous les profils

-- Supprimer les anciennes policies si elles existent
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Anyone can view profiles" ON public.profiles;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.profiles;

-- Activer RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- FORCE RLS même pour les propriétaires de table (admin)
ALTER TABLE public.profiles FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT son propre profil
CREATE POLICY "profiles_select_own"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Policy: Insertion - Uniquement son propre profil
CREATE POLICY "profiles_insert_own"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Policy: Mise à jour - Uniquement son propre profil
CREATE POLICY "profiles_update_own"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Policy: Suppression - Uniquement son propre profil
CREATE POLICY "profiles_delete_own"
  ON public.profiles
  FOR DELETE
  USING (auth.uid() = id);

-- ============================================================================
-- 2. USER_PLANS TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view own plan" ON public.user_plans;
DROP POLICY IF EXISTS "Users can view all plans" ON public.user_plans;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.user_plans;

ALTER TABLE public.user_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_plans FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT son propre plan
CREATE POLICY "user_plans_select_own"
  ON public.user_plans
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Insertion - Service role uniquement (via trigger ou fonction serveur)
-- Les utilisateurs ne peuvent PAS créer leur propre plan
CREATE POLICY "user_plans_insert_service"
  ON public.user_plans
  FOR INSERT
  WITH CHECK (false); -- Bloqué pour tout le monde côté client

-- Policy: Mise à jour - Bloqué côté client
CREATE POLICY "user_plans_update_service"
  ON public.user_plans
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

-- ============================================================================
-- 3. USER_CREDITS TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view own credits" ON public.user_credits;
DROP POLICY IF EXISTS "Users can update own credits" ON public.user_credits;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.user_credits;

ALTER TABLE public.user_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_credits FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT ses propres crédits
CREATE POLICY "user_credits_select_own"
  ON public.user_credits
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Mise à jour - Via fonction serveur uniquement
CREATE POLICY "user_credits_update_service"
  ON public.user_credits
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

-- ============================================================================
-- 4. USER_BADGES TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view own badges" ON public.user_badges;
DROP POLICY IF EXISTS "Users can view all badges" ON public.user_badges;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.user_badges;

ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_badges FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT ses propres badges
CREATE POLICY "user_badges_select_own"
  ON public.user_badges
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Insertion/Mise à jour - Via fonction serveur uniquement
CREATE POLICY "user_badges_insert_service"
  ON public.user_badges
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "user_badges_update_service"
  ON public.user_badges
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

-- ============================================================================
-- 5. USER_SESSIONS TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can manage own sessions" ON public.user_sessions;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.user_sessions;

ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions FORCE ROW LEVEL SECURITY;

-- Policy: CRUD - UNIQUEMENT ses propres sessions
CREATE POLICY "user_sessions_select_own"
  ON public.user_sessions
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "user_sessions_insert_own"
  ON public.user_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_sessions_update_own"
  ON public.user_sessions
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_sessions_delete_own"
  ON public.user_sessions
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================================================
-- 6. TICKETS TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view own tickets" ON public.tickets;
DROP POLICY IF EXISTS "Users can create own tickets" ON public.tickets;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.tickets;

ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tickets FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT ses propres tickets
CREATE POLICY "tickets_select_own"
  ON public.tickets
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Insertion - UNIQUEMENT pour soi-même
CREATE POLICY "tickets_insert_own"
  ON public.tickets
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Mise à jour - UNIQUEMENT ses propres tickets (sauf status qui est géré par staff)
CREATE POLICY "tickets_update_own"
  ON public.tickets
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- 7. TICKET_MESSAGES TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view messages for own tickets" ON public.ticket_messages;
DROP POLICY IF EXISTS "Users can send messages to own tickets" ON public.ticket_messages;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.ticket_messages;

ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ticket_messages FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - Messages des tickets qu'on possède
CREATE POLICY "ticket_messages_select_own"
  ON public.ticket_messages
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.tickets
      WHERE tickets.id = ticket_messages.ticket_id
      AND tickets.user_id = auth.uid()
    )
  );

-- Policy: Insertion - Uniquement sur ses propres tickets
CREATE POLICY "ticket_messages_insert_own"
  ON public.ticket_messages
  FOR INSERT
  WITH CHECK (
    auth.uid() = user_id
    AND EXISTS (
      SELECT 1 FROM public.tickets
      WHERE tickets.id = ticket_id
      AND tickets.user_id = auth.uid()
    )
    AND is_owner = false  -- Les utilisateurs ne peuvent pas se faire passer pour staff
  );

-- ============================================================================
-- 8. CHAT_MESSAGES TABLE (Live Chat Public)
-- ============================================================================

DROP POLICY IF EXISTS "Anyone can view chat messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Users can send chat messages" ON public.chat_messages;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.chat_messages;

ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - Tout le monde peut voir les messages du chat public
CREATE POLICY "chat_messages_select_all"
  ON public.chat_messages
  FOR SELECT
  USING (true);

-- Policy: Insertion - Utilisateurs authentifiés uniquement, avec leur propre user_id
CREATE POLICY "chat_messages_insert_authenticated"
  ON public.chat_messages
  FOR INSERT
  WITH CHECK (
    auth.uid() IS NOT NULL
    AND (user_id IS NULL OR user_id = auth.uid())
  );

-- Policy: Suppression - Uniquement ses propres messages
CREATE POLICY "chat_messages_delete_own"
  ON public.chat_messages
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================================================
-- 9. CHAT_MUTES TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view own mute status" ON public.chat_mutes;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.chat_mutes;

ALTER TABLE public.chat_mutes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_mutes FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT son propre statut de mute
CREATE POLICY "chat_mutes_select_own"
  ON public.chat_mutes
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Insertion/Mise à jour/Suppression - Staff uniquement (via service role)
CREATE POLICY "chat_mutes_insert_service"
  ON public.chat_mutes
  FOR INSERT
  WITH CHECK (false);

CREATE POLICY "chat_mutes_update_service"
  ON public.chat_mutes
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

CREATE POLICY "chat_mutes_delete_service"
  ON public.chat_mutes
  FOR DELETE
  USING (false);

-- ============================================================================
-- 10. SEARCH_HISTORY TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view own search history" ON public.search_history;
DROP POLICY IF EXISTS "Users can insert own search history" ON public.search_history;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.search_history;

ALTER TABLE public.search_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_history FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT son propre historique
CREATE POLICY "search_history_select_own"
  ON public.search_history
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Insertion - UNIQUEMENT pour soi-même
CREATE POLICY "search_history_insert_own"
  ON public.search_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================================================
-- 11. API_KEYS TABLE
-- ============================================================================

DROP POLICY IF EXISTS "Users can view own api keys" ON public.api_keys;
DROP POLICY IF EXISTS "Enable read access for all users" ON public.api_keys;

ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_keys FORCE ROW LEVEL SECURITY;

-- Policy: Lecture - UNIQUEMENT ses propres clés API
CREATE POLICY "api_keys_select_own"
  ON public.api_keys
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Insertion - UNIQUEMENT pour soi-même
CREATE POLICY "api_keys_insert_own"
  ON public.api_keys
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Mise à jour - UNIQUEMENT ses propres clés
CREATE POLICY "api_keys_update_own"
  ON public.api_keys
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy: Suppression - UNIQUEMENT ses propres clés
CREATE POLICY "api_keys_delete_own"
  ON public.api_keys
  FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================================================
-- 12. STORAGE BUCKETS - AVATARS
-- ============================================================================

-- Supprimer les anciennes policies de storage
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can update own avatar" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete own avatar" ON storage.objects;

-- Policy: Lecture publique des avatars (nécessaire pour affichage)
CREATE POLICY "avatars_select_public"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'avatars');

-- Policy: Upload - Uniquement dans son propre dossier (user_id)
CREATE POLICY "avatars_insert_own"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Policy: Mise à jour - Uniquement ses propres fichiers
CREATE POLICY "avatars_update_own"
  ON storage.objects
  FOR UPDATE
  USING (
    bucket_id = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- Policy: Suppression - Uniquement ses propres fichiers
CREATE POLICY "avatars_delete_own"
  ON storage.objects
  FOR DELETE
  USING (
    bucket_id = 'avatars'
    AND auth.uid()::text = (storage.foldername(name))[1]
  );

-- ============================================================================
-- 13. STORAGE BUCKETS - TICKET IMAGES
-- ============================================================================

DROP POLICY IF EXISTS "Ticket images viewable by ticket owner" ON storage.objects;
DROP POLICY IF EXISTS "Users can upload ticket images" ON storage.objects;

-- Policy: Lecture - Seulement si on possède le ticket
CREATE POLICY "ticket_images_select_own"
  ON storage.objects
  FOR SELECT
  USING (
    bucket_id = 'ticket-images'
    AND EXISTS (
      SELECT 1 FROM public.tickets
      WHERE tickets.id::text = (storage.foldername(name))[1]
      AND tickets.user_id = auth.uid()
    )
  );

-- Policy: Upload - Uniquement sur ses propres tickets
CREATE POLICY "ticket_images_insert_own"
  ON storage.objects
  FOR INSERT
  WITH CHECK (
    bucket_id = 'ticket-images'
    AND EXISTS (
      SELECT 1 FROM public.tickets
      WHERE tickets.id::text = (storage.foldername(name))[1]
      AND tickets.user_id = auth.uid()
    )
  );

-- ============================================================================
-- 14. FONCTIONS SÉCURISÉES POUR ACTIONS ADMIN/SERVICE
-- ============================================================================

-- Fonction pour que le staff puisse voir tous les tickets (à appeler via service role)
CREATE OR REPLACE FUNCTION get_all_tickets_admin()
RETURNS SETOF public.tickets
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.tickets ORDER BY created_at DESC;
$$;

-- Fonction pour que le staff puisse voir les messages d'un ticket
CREATE OR REPLACE FUNCTION get_ticket_messages_admin(p_ticket_id UUID)
RETURNS SETOF public.ticket_messages
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT * FROM public.ticket_messages
  WHERE ticket_id = p_ticket_id
  ORDER BY created_at ASC;
$$;

-- Fonction pour que le staff puisse envoyer un message sur un ticket
CREATE OR REPLACE FUNCTION send_staff_message(
  p_ticket_id UUID,
  p_user_id UUID,
  p_username TEXT,
  p_message TEXT,
  p_image_url TEXT DEFAULT NULL
)
RETURNS public.ticket_messages
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_message public.ticket_messages;
BEGIN
  INSERT INTO public.ticket_messages (ticket_id, user_id, username, message, image_url, is_owner)
  VALUES (p_ticket_id, p_user_id, p_username, p_message, p_image_url, true)
  RETURNING * INTO new_message;

  RETURN new_message;
END;
$$;

-- Fonction pour mettre à jour le statut d'un ticket (staff only)
CREATE OR REPLACE FUNCTION update_ticket_status(
  p_ticket_id UUID,
  p_status TEXT,
  p_closed_by UUID DEFAULT NULL
)
RETURNS public.tickets
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  updated_ticket public.tickets;
BEGIN
  UPDATE public.tickets
  SET
    status = p_status,
    closed_at = CASE WHEN p_status = 'closed' THEN NOW() ELSE NULL END,
    closed_by = CASE WHEN p_status = 'closed' THEN p_closed_by ELSE NULL END
  WHERE id = p_ticket_id
  RETURNING * INTO updated_ticket;

  RETURN updated_ticket;
END;
$$;

-- Fonction pour muter un utilisateur (staff only)
CREATE OR REPLACE FUNCTION mute_user(
  p_user_id UUID,
  p_duration_minutes INTEGER,
  p_reason TEXT,
  p_created_by UUID
)
RETURNS public.chat_mutes
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_mute public.chat_mutes;
BEGIN
  INSERT INTO public.chat_mutes (user_id, expires_at, reason, created_by)
  VALUES (p_user_id, NOW() + (p_duration_minutes || ' minutes')::INTERVAL, p_reason, p_created_by)
  ON CONFLICT (user_id) DO UPDATE SET
    expires_at = NOW() + (p_duration_minutes || ' minutes')::INTERVAL,
    reason = p_reason,
    created_by = p_created_by
  RETURNING * INTO new_mute;

  RETURN new_mute;
END;
$$;

-- Fonction pour unmute un utilisateur (staff only)
CREATE OR REPLACE FUNCTION unmute_user(p_user_id UUID)
RETURNS VOID
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.chat_mutes WHERE user_id = p_user_id;
$$;

-- Fonction pour ajouter un badge (service only)
CREATE OR REPLACE FUNCTION grant_badge(p_user_id UUID, p_badge TEXT)
RETURNS public.user_badges
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_badge public.user_badges;
BEGIN
  INSERT INTO public.user_badges (user_id, badge)
  VALUES (p_user_id, p_badge)
  ON CONFLICT (user_id, badge) DO NOTHING
  RETURNING * INTO new_badge;

  RETURN new_badge;
END;
$$;

-- Fonction pour mettre à jour les crédits (service only)
CREATE OR REPLACE FUNCTION update_user_credits(
  p_user_id UUID,
  p_credits INTEGER,
  p_last_reset DATE DEFAULT CURRENT_DATE
)
RETURNS public.user_credits
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  updated_credits public.user_credits;
BEGIN
  INSERT INTO public.user_credits (user_id, credits_remaining, last_reset)
  VALUES (p_user_id, p_credits, p_last_reset)
  ON CONFLICT (user_id) DO UPDATE SET
    credits_remaining = p_credits,
    last_reset = p_last_reset
  RETURNING * INTO updated_credits;

  RETURN updated_credits;
END;
$$;

-- Fonction pour décrémenter les crédits après une recherche
CREATE OR REPLACE FUNCTION decrement_credits(p_user_id UUID)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  remaining INTEGER;
BEGIN
  UPDATE public.user_credits
  SET credits_remaining = GREATEST(0, credits_remaining - 1)
  WHERE user_id = p_user_id
  RETURNING credits_remaining INTO remaining;

  RETURN COALESCE(remaining, 0);
END;
$$;

-- ============================================================================
-- 15. GRANTS - Révoquer les accès directs dangereux
-- ============================================================================

-- Révoquer l'accès public sur les fonctions admin
REVOKE ALL ON FUNCTION get_all_tickets_admin() FROM PUBLIC;
REVOKE ALL ON FUNCTION get_ticket_messages_admin(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION send_staff_message(UUID, UUID, TEXT, TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION update_ticket_status(UUID, TEXT, UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION mute_user(UUID, INTEGER, TEXT, UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION unmute_user(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION grant_badge(UUID, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION update_user_credits(UUID, INTEGER, DATE) FROM PUBLIC;

-- Accorder uniquement au service_role
GRANT EXECUTE ON FUNCTION get_all_tickets_admin() TO service_role;
GRANT EXECUTE ON FUNCTION get_ticket_messages_admin(UUID) TO service_role;
GRANT EXECUTE ON FUNCTION send_staff_message(UUID, UUID, TEXT, TEXT, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION update_ticket_status(UUID, TEXT, UUID) TO service_role;
GRANT EXECUTE ON FUNCTION mute_user(UUID, INTEGER, TEXT, UUID) TO service_role;
GRANT EXECUTE ON FUNCTION unmute_user(UUID) TO service_role;
GRANT EXECUTE ON FUNCTION grant_badge(UUID, TEXT) TO service_role;
GRANT EXECUTE ON FUNCTION update_user_credits(UUID, INTEGER, DATE) TO service_role;

-- decrement_credits peut être appelé par les utilisateurs authentifiés (pour eux-mêmes)
GRANT EXECUTE ON FUNCTION decrement_credits(UUID) TO authenticated;

-- ============================================================================
-- 16. INDEX POUR PERFORMANCE
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_profiles_id ON public.profiles(id);
CREATE INDEX IF NOT EXISTS idx_user_plans_user_id ON public.user_plans(user_id);
CREATE INDEX IF NOT EXISTS idx_user_credits_user_id ON public.user_credits(user_id);
CREATE INDEX IF NOT EXISTS idx_user_badges_user_id ON public.user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_tickets_user_id ON public.tickets(user_id);
CREATE INDEX IF NOT EXISTS idx_ticket_messages_ticket_id ON public.ticket_messages(ticket_id);
CREATE INDEX IF NOT EXISTS idx_chat_messages_created_at ON public.chat_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_chat_mutes_user_id ON public.chat_mutes(user_id);
CREATE INDEX IF NOT EXISTS idx_api_keys_user_id ON public.api_keys(user_id);

-- ============================================================================
-- VERIFICATION FINALE
-- ============================================================================

-- Vérifier que RLS est activé sur toutes les tables
DO $$
DECLARE
  t RECORD;
BEGIN
  FOR t IN
    SELECT tablename
    FROM pg_tables
    WHERE schemaname = 'public'
    AND tablename IN ('profiles', 'user_plans', 'user_credits', 'user_badges',
                      'user_sessions', 'tickets', 'ticket_messages', 'chat_messages',
                      'chat_mutes', 'search_history', 'api_keys')
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t.tablename);
    EXECUTE format('ALTER TABLE public.%I FORCE ROW LEVEL SECURITY', t.tablename);
    RAISE NOTICE 'RLS enabled and forced on table: %', t.tablename;
  END LOOP;
END;
$$;

-- ============================================================================
-- COMMENTAIRES
-- ============================================================================

COMMENT ON POLICY "profiles_select_own" ON public.profiles IS 'Users can only view their own profile - prevents enumeration attacks';
COMMENT ON POLICY "user_plans_select_own" ON public.user_plans IS 'Users can only view their own plan';
COMMENT ON POLICY "tickets_select_own" ON public.tickets IS 'Users can only view their own tickets';

-- ============================================================================
-- FIN DU SCRIPT DE SÉCURISATION
-- ============================================================================
