-- ============================================================================
-- Dbs - BLOCK is_admin MODIFICATION
-- Date: 2026-01-13
-- Description: Empêcher les utilisateurs de modifier le champ is_admin
-- ============================================================================

-- 1. Supprimer l'ancienne policy d'update sur profiles
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;

-- 2. La policy sera créée plus bas (section 8) avec le nom "profiles_update_own_strict"
-- Ne pas créer ici pour éviter les doublons

-- 3. Créer un trigger pour une protection supplémentaire (defense in depth)
CREATE OR REPLACE FUNCTION prevent_admin_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Si is_admin change et que ce n'est pas un service_role
  IF OLD.is_admin IS DISTINCT FROM NEW.is_admin THEN
    -- Vérifier si c'est le service_role (qui peut tout faire)
    IF current_setting('request.jwt.claims', true)::json->>'role' != 'service_role' THEN
      RAISE EXCEPTION 'Modification du statut admin non autorisée';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

-- Supprimer le trigger s'il existe déjà
DROP TRIGGER IF EXISTS trigger_prevent_admin_modification ON public.profiles;

-- Créer le trigger
CREATE TRIGGER trigger_prevent_admin_modification
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION prevent_admin_modification();

-- 4. Bloquer aussi la modification de l'email (pour éviter les account takeovers)
CREATE OR REPLACE FUNCTION prevent_email_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Si email change
  IF OLD.email IS DISTINCT FROM NEW.email THEN
    -- Seul le service_role peut changer l'email
    IF current_setting('request.jwt.claims', true)::json->>'role' != 'service_role' THEN
      RAISE EXCEPTION 'Modification de l''email non autorisée';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_prevent_email_modification ON public.profiles;

CREATE TRIGGER trigger_prevent_email_modification
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION prevent_email_modification();

-- 5. Bloquer la modification de created_at
CREATE OR REPLACE FUNCTION prevent_created_at_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- created_at ne doit jamais changer
  IF OLD.created_at IS DISTINCT FROM NEW.created_at THEN
    NEW.created_at := OLD.created_at;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_prevent_created_at_modification ON public.profiles;

CREATE TRIGGER trigger_prevent_created_at_modification
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION prevent_created_at_modification();

-- 6. Audit log pour les tentatives de modification admin
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  details JSONB,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS sur la table d'audit - personne ne peut lire/écrire sauf service_role
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.security_audit_log FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "security_audit_no_access" ON public.security_audit_log;

CREATE POLICY "security_audit_no_access"
  ON public.security_audit_log
  FOR ALL
  USING (false)
  WITH CHECK (false);

-- Fonction pour logger les tentatives suspectes
CREATE OR REPLACE FUNCTION log_suspicious_activity(
  p_user_id UUID,
  p_action TEXT,
  p_details JSONB
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.security_audit_log (user_id, action, details)
  VALUES (p_user_id, p_action, p_details);
END;
$$;

-- ============================================================================
-- VÉRIFICATION
-- ============================================================================

-- La vérification se fera à la fin du script (section 10)

-- ============================================================================
-- COMMENTAIRES
-- ============================================================================

COMMENT ON FUNCTION prevent_admin_modification() IS 'Empêche la modification du champ is_admin par les utilisateurs';
COMMENT ON FUNCTION prevent_email_modification() IS 'Empêche la modification de l''email par les utilisateurs';
COMMENT ON TABLE public.security_audit_log IS 'Log des tentatives d''activités suspectes';

-- ============================================================================
-- 7. SÉCURISATION DES TABLES SENSIBLES - TRIGGERS DE PROTECTION
-- ============================================================================

-- ======================== USER_PLANS ========================
-- Empêcher TOUTE modification côté client (INSERT, UPDATE, DELETE)

CREATE OR REPLACE FUNCTION prevent_user_plans_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  jwt_role TEXT;
BEGIN
  -- Récupérer le rôle du JWT
  BEGIN
    jwt_role := current_setting('request.jwt.claims', true)::json->>'role';
  EXCEPTION WHEN OTHERS THEN
    jwt_role := NULL;
  END;

  -- Seul service_role peut modifier
  IF jwt_role IS NULL OR jwt_role != 'service_role' THEN
    -- Logger la tentative
    INSERT INTO public.security_audit_log (user_id, action, details)
    VALUES (
      auth.uid(),
      'BLOCKED_PLAN_MODIFICATION',
      jsonb_build_object(
        'operation', TG_OP,
        'target_user_id', COALESCE(NEW.user_id, OLD.user_id),
        'attempted_plan', COALESCE(NEW.plan_type, OLD.plan_type)
      )
    );

    RAISE EXCEPTION 'Modification des plans non autorisée. Cette tentative a été enregistrée.';
  END IF;

  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_protect_user_plans ON public.user_plans;
CREATE TRIGGER trigger_protect_user_plans
  BEFORE INSERT OR UPDATE OR DELETE ON public.user_plans
  FOR EACH ROW
  EXECUTE FUNCTION prevent_user_plans_modification();

-- ======================== USER_CREDITS ========================
-- Empêcher TOUTE modification côté client

CREATE OR REPLACE FUNCTION prevent_user_credits_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  jwt_role TEXT;
BEGIN
  BEGIN
    jwt_role := current_setting('request.jwt.claims', true)::json->>'role';
  EXCEPTION WHEN OTHERS THEN
    jwt_role := NULL;
  END;

  IF jwt_role IS NULL OR jwt_role != 'service_role' THEN
    INSERT INTO public.security_audit_log (user_id, action, details)
    VALUES (
      auth.uid(),
      'BLOCKED_CREDITS_MODIFICATION',
      jsonb_build_object(
        'operation', TG_OP,
        'target_user_id', COALESCE(NEW.user_id, OLD.user_id),
        'attempted_credits', COALESCE(NEW.credits_remaining, OLD.credits_remaining)
      )
    );

    RAISE EXCEPTION 'Modification des crédits non autorisée. Cette tentative a été enregistrée.';
  END IF;

  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_protect_user_credits ON public.user_credits;
CREATE TRIGGER trigger_protect_user_credits
  BEFORE INSERT OR UPDATE OR DELETE ON public.user_credits
  FOR EACH ROW
  EXECUTE FUNCTION prevent_user_credits_modification();

-- ======================== USER_BADGES ========================
-- Empêcher TOUTE modification côté client

CREATE OR REPLACE FUNCTION prevent_user_badges_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  jwt_role TEXT;
BEGIN
  BEGIN
    jwt_role := current_setting('request.jwt.claims', true)::json->>'role';
  EXCEPTION WHEN OTHERS THEN
    jwt_role := NULL;
  END;

  IF jwt_role IS NULL OR jwt_role != 'service_role' THEN
    INSERT INTO public.security_audit_log (user_id, action, details)
    VALUES (
      auth.uid(),
      'BLOCKED_BADGE_MODIFICATION',
      jsonb_build_object(
        'operation', TG_OP,
        'target_user_id', COALESCE(NEW.user_id, OLD.user_id),
        'attempted_badge', COALESCE(NEW.badge, OLD.badge)
      )
    );

    RAISE EXCEPTION 'Modification des badges non autorisée. Cette tentative a été enregistrée.';
  END IF;

  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_protect_user_badges ON public.user_badges;
CREATE TRIGGER trigger_protect_user_badges
  BEFORE INSERT OR UPDATE OR DELETE ON public.user_badges
  FOR EACH ROW
  EXECUTE FUNCTION prevent_user_badges_modification();

-- ======================== CHAT_MUTES ========================
-- Empêcher les utilisateurs de se unmute eux-mêmes

CREATE OR REPLACE FUNCTION prevent_chat_mutes_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  jwt_role TEXT;
BEGIN
  BEGIN
    jwt_role := current_setting('request.jwt.claims', true)::json->>'role';
  EXCEPTION WHEN OTHERS THEN
    jwt_role := NULL;
  END;

  IF jwt_role IS NULL OR jwt_role != 'service_role' THEN
    INSERT INTO public.security_audit_log (user_id, action, details)
    VALUES (
      auth.uid(),
      'BLOCKED_MUTE_MODIFICATION',
      jsonb_build_object(
        'operation', TG_OP,
        'target_user_id', COALESCE(NEW.user_id, OLD.user_id)
      )
    );

    RAISE EXCEPTION 'Modification des mutes non autorisée. Cette tentative a été enregistrée.';
  END IF;

  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_protect_chat_mutes ON public.chat_mutes;
CREATE TRIGGER trigger_protect_chat_mutes
  BEFORE INSERT OR UPDATE OR DELETE ON public.chat_mutes
  FOR EACH ROW
  EXECUTE FUNCTION prevent_chat_mutes_modification();

-- ======================== TICKETS ========================
-- Empêcher la modification du status par les utilisateurs (sauf création)

CREATE OR REPLACE FUNCTION prevent_ticket_status_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  jwt_role TEXT;
BEGIN
  BEGIN
    jwt_role := current_setting('request.jwt.claims', true)::json->>'role';
  EXCEPTION WHEN OTHERS THEN
    jwt_role := NULL;
  END;

  -- Pour UPDATE, vérifier que status ne change pas (sauf service_role)
  IF TG_OP = 'UPDATE' THEN
    IF OLD.status IS DISTINCT FROM NEW.status THEN
      IF jwt_role IS NULL OR jwt_role != 'service_role' THEN
        INSERT INTO public.security_audit_log (user_id, action, details)
        VALUES (
          auth.uid(),
          'BLOCKED_TICKET_STATUS_CHANGE',
          jsonb_build_object(
            'ticket_id', OLD.id,
            'old_status', OLD.status,
            'attempted_status', NEW.status
          )
        );

        RAISE EXCEPTION 'Modification du statut du ticket non autorisée.';
      END IF;
    END IF;

    -- Empêcher la modification de closed_at et closed_by
    IF OLD.closed_at IS DISTINCT FROM NEW.closed_at OR OLD.closed_by IS DISTINCT FROM NEW.closed_by THEN
      IF jwt_role IS NULL OR jwt_role != 'service_role' THEN
        RAISE EXCEPTION 'Modification des champs de fermeture non autorisée.';
      END IF;
    END IF;

    -- Empêcher la modification de user_id (voler un ticket)
    IF OLD.user_id IS DISTINCT FROM NEW.user_id THEN
      RAISE EXCEPTION 'Modification du propriétaire du ticket non autorisée.';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_protect_ticket_status ON public.tickets;
CREATE TRIGGER trigger_protect_ticket_status
  BEFORE UPDATE ON public.tickets
  FOR EACH ROW
  EXECUTE FUNCTION prevent_ticket_status_modification();

-- ======================== TICKET_MESSAGES ========================
-- Empêcher les utilisateurs de se faire passer pour staff (is_owner)

CREATE OR REPLACE FUNCTION prevent_ticket_message_impersonation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  jwt_role TEXT;
BEGIN
  BEGIN
    jwt_role := current_setting('request.jwt.claims', true)::json->>'role';
  EXCEPTION WHEN OTHERS THEN
    jwt_role := NULL;
  END;

  -- Empêcher les utilisateurs de mettre is_owner = true
  IF NEW.is_owner = true THEN
    IF jwt_role IS NULL OR jwt_role != 'service_role' THEN
      INSERT INTO public.security_audit_log (user_id, action, details)
      VALUES (
        auth.uid(),
        'BLOCKED_STAFF_IMPERSONATION',
        jsonb_build_object(
          'ticket_id', NEW.ticket_id,
          'message', LEFT(NEW.message, 100)
        )
      );

      RAISE EXCEPTION 'Usurpation d''identité staff non autorisée. Cette tentative a été enregistrée.';
    END IF;
  END IF;

  -- Empêcher la modification du user_id
  IF TG_OP = 'UPDATE' AND OLD.user_id IS DISTINCT FROM NEW.user_id THEN
    RAISE EXCEPTION 'Modification de l''auteur du message non autorisée.';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_protect_ticket_messages ON public.ticket_messages;
CREATE TRIGGER trigger_protect_ticket_messages
  BEFORE INSERT OR UPDATE ON public.ticket_messages
  FOR EACH ROW
  EXECUTE FUNCTION prevent_ticket_message_impersonation();

-- ======================== PROFILES - PROTECTION SUPPLÉMENTAIRE ========================
-- Empêcher la modification de l'ID (usurpation totale)

CREATE OR REPLACE FUNCTION prevent_profile_id_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF TG_OP = 'UPDATE' AND OLD.id IS DISTINCT FROM NEW.id THEN
    INSERT INTO public.security_audit_log (user_id, action, details)
    VALUES (
      auth.uid(),
      'BLOCKED_PROFILE_ID_CHANGE',
      jsonb_build_object(
        'old_id', OLD.id,
        'attempted_new_id', NEW.id
      )
    );

    RAISE EXCEPTION 'Modification de l''ID du profil non autorisée.';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trigger_protect_profile_id ON public.profiles;
CREATE TRIGGER trigger_protect_profile_id
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION prevent_profile_id_modification();

-- ============================================================================
-- 8. BLOQUER LES REQUÊTES DIRECTES SUR D'AUTRES PROFILS
-- ============================================================================

-- Cette policy bloque les tentatives de PATCH sur un profil
-- qui n'appartient pas à l'utilisateur connecté

-- Supprimer TOUTES les anciennes policies d'update sur profiles
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own_no_admin" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own_strict" ON public.profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;

CREATE POLICY "profiles_update_own_strict"
  ON public.profiles
  FOR UPDATE
  USING (
    -- L'utilisateur ne peut QUE mettre à jour son propre profil
    auth.uid() = id
  )
  WITH CHECK (
    -- Vérifications strictes
    auth.uid() = id
    AND auth.uid() IS NOT NULL
    -- is_admin doit rester identique
    AND is_admin = (SELECT p.is_admin FROM public.profiles p WHERE p.id = auth.uid())
    -- email doit rester identique
    AND email = (SELECT p.email FROM public.profiles p WHERE p.id = auth.uid())
  );

-- ============================================================================
-- 9. INDEX POUR PERFORMANCE DES VÉRIFICATIONS
-- ============================================================================

CREATE INDEX IF NOT EXISTS idx_security_audit_user_id ON public.security_audit_log(user_id);
CREATE INDEX IF NOT EXISTS idx_security_audit_action ON public.security_audit_log(action);
CREATE INDEX IF NOT EXISTS idx_security_audit_created_at ON public.security_audit_log(created_at DESC);

-- ============================================================================
-- 10. FONCTION POUR VÉRIFIER LA SÉCURITÉ
-- ============================================================================

CREATE OR REPLACE FUNCTION check_security_status()
RETURNS TABLE (
  table_name TEXT,
  rls_enabled BOOLEAN,
  has_triggers BOOLEAN,
  trigger_count INTEGER
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT
    t.tablename::TEXT,
    t.rowsecurity,
    EXISTS(SELECT 1 FROM pg_trigger tr WHERE tr.tgrelid = (t.schemaname || '.' || t.tablename)::regclass),
    (SELECT COUNT(*)::INTEGER FROM pg_trigger tr WHERE tr.tgrelid = (t.schemaname || '.' || t.tablename)::regclass AND NOT tr.tgisinternal)
  FROM pg_tables t
  WHERE t.schemaname = 'public'
  AND t.tablename IN ('profiles', 'user_plans', 'user_credits', 'user_badges', 'chat_mutes', 'tickets', 'ticket_messages')
  ORDER BY t.tablename;
$$;

-- Révoquer l'accès public à cette fonction
REVOKE ALL ON FUNCTION check_security_status() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION check_security_status() TO service_role;

-- ============================================================================
-- COMMENTAIRES FINAUX
-- ============================================================================

COMMENT ON FUNCTION prevent_user_plans_modification() IS 'Bloque toute modification des plans par les utilisateurs';
COMMENT ON FUNCTION prevent_user_credits_modification() IS 'Bloque toute modification des crédits par les utilisateurs';
COMMENT ON FUNCTION prevent_user_badges_modification() IS 'Bloque toute modification des badges par les utilisateurs';
COMMENT ON FUNCTION prevent_chat_mutes_modification() IS 'Empêche les utilisateurs de se unmute';
COMMENT ON FUNCTION prevent_ticket_status_modification() IS 'Empêche les utilisateurs de changer le statut des tickets';
COMMENT ON FUNCTION prevent_ticket_message_impersonation() IS 'Empêche l''usurpation d''identité staff';
COMMENT ON FUNCTION check_security_status() IS 'Vérifie le statut de sécurité des tables';
