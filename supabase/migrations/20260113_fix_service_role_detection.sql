-- ============================================================================
-- Dbs - FIX SERVICE_ROLE DETECTION IN TRIGGERS
-- Date: 2026-01-13
-- Description: Corriger la détection du service_role dans les triggers de protection
-- ============================================================================

-- Le problème: Les Edge Functions utilisent SUPABASE_SERVICE_ROLE_KEY directement,
-- ce qui ne génère pas de JWT. Les triggers vérifiaient request.jwt.claims qui est NULL.
-- Solution: Vérifier aussi le current_user PostgreSQL et utiliser auth.role() si disponible.

-- ======================== HELPER FUNCTION ========================
-- Fonction pour vérifier si la connexion actuelle est privilégiée (service_role)

CREATE OR REPLACE FUNCTION is_service_role_connection()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  jwt_role TEXT;
  pg_user TEXT;
BEGIN
  -- Méthode 1: Vérifier le JWT claims (pour les appels avec JWT)
  BEGIN
    jwt_role := current_setting('request.jwt.claims', true)::json->>'role';
    IF jwt_role = 'service_role' THEN
      RETURN true;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    -- Ignorer les erreurs
  END;

  -- Méthode 2: Vérifier le current_user PostgreSQL
  -- Quand une Edge Function utilise service_role_key, le user est généralement
  -- 'service_role', 'postgres', ou 'supabase_admin'
  pg_user := current_user;
  IF pg_user IN ('service_role', 'postgres', 'supabase_admin', 'supabase_functions_admin') THEN
    RETURN true;
  END IF;

  -- Méthode 3: Vérifier via auth.role() si disponible (Supabase spécifique)
  BEGIN
    IF auth.role() = 'service_role' THEN
      RETURN true;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    -- Ignorer si auth.role() n'existe pas
  END;

  RETURN false;
END;
$$;

-- ======================== USER_CREDITS ========================
-- Corriger le trigger pour utiliser la nouvelle fonction

CREATE OR REPLACE FUNCTION prevent_user_credits_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Autoriser si c'est une connexion service_role
  IF is_service_role_connection() THEN
    IF TG_OP = 'DELETE' THEN
      RETURN OLD;
    END IF;
    RETURN NEW;
  END IF;

  -- Sinon, bloquer et logger
  BEGIN
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
  EXCEPTION WHEN OTHERS THEN
    -- Ignorer les erreurs de logging
  END;

  RAISE EXCEPTION 'Modification des crédits non autorisée. Cette tentative a été enregistrée.';
END;
$$;

-- ======================== USER_PLANS ========================
-- Corriger le trigger pour utiliser la nouvelle fonction

CREATE OR REPLACE FUNCTION prevent_user_plans_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Autoriser si c'est une connexion service_role
  IF is_service_role_connection() THEN
    IF TG_OP = 'DELETE' THEN
      RETURN OLD;
    END IF;
    RETURN NEW;
  END IF;

  -- Sinon, bloquer et logger
  BEGIN
    INSERT INTO public.security_audit_log (user_id, action, details)
    VALUES (
      auth.uid(),
      'BLOCKED_PLAN_MODIFICATION',
      jsonb_build_object(
        'operation', TG_OP,
        'target_user_id', COALESCE(NEW.user_id, OLD.user_id),
        'attempted_plan', COALESCE(NEW.plan, OLD.plan)
      )
    );
  EXCEPTION WHEN OTHERS THEN
    -- Ignorer les erreurs de logging
  END;

  RAISE EXCEPTION 'Modification du plan non autorisée. Cette tentative a été enregistrée.';
END;
$$;

-- ======================== USER_BADGES ========================
-- Corriger le trigger pour utiliser la nouvelle fonction

CREATE OR REPLACE FUNCTION prevent_user_badges_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Autoriser si c'est une connexion service_role
  IF is_service_role_connection() THEN
    IF TG_OP = 'DELETE' THEN
      RETURN OLD;
    END IF;
    RETURN NEW;
  END IF;

  -- Sinon, bloquer et logger
  BEGIN
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
  EXCEPTION WHEN OTHERS THEN
    -- Ignorer les erreurs de logging
  END;

  RAISE EXCEPTION 'Modification des badges non autorisée. Cette tentative a été enregistrée.';
END;
$$;

-- ======================== PROFILES (is_admin) ========================
-- Corriger le trigger pour utiliser la nouvelle fonction

CREATE OR REPLACE FUNCTION prevent_admin_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Si is_admin ne change pas, autoriser
  IF OLD.is_admin IS NOT DISTINCT FROM NEW.is_admin THEN
    RETURN NEW;
  END IF;

  -- Autoriser si c'est une connexion service_role
  IF is_service_role_connection() THEN
    RETURN NEW;
  END IF;

  -- Sinon, bloquer
  RAISE EXCEPTION 'Modification du statut admin non autorisée';
END;
$$;

-- ======================== PROFILES (email) ========================
-- Corriger le trigger pour utiliser la nouvelle fonction

CREATE OR REPLACE FUNCTION prevent_email_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Si email ne change pas, autoriser
  IF OLD.email IS NOT DISTINCT FROM NEW.email THEN
    RETURN NEW;
  END IF;

  -- Autoriser si c'est une connexion service_role
  IF is_service_role_connection() THEN
    RETURN NEW;
  END IF;

  -- Sinon, bloquer
  RAISE EXCEPTION 'Modification de l''email non autorisée. Utilisez les paramètres du compte.';
END;
$$;

-- ======================== CHAT_MUTES ========================
-- Corriger le trigger pour utiliser la nouvelle fonction

CREATE OR REPLACE FUNCTION prevent_chat_mutes_modification()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Autoriser si c'est une connexion service_role
  IF is_service_role_connection() THEN
    IF TG_OP = 'DELETE' THEN
      RETURN OLD;
    END IF;
    RETURN NEW;
  END IF;

  -- Sinon, bloquer et logger
  BEGIN
    INSERT INTO public.security_audit_log (user_id, action, details)
    VALUES (
      auth.uid(),
      'BLOCKED_MUTE_MODIFICATION',
      jsonb_build_object(
        'operation', TG_OP,
        'target_user_id', COALESCE(NEW.user_id, OLD.user_id)
      )
    );
  EXCEPTION WHEN OTHERS THEN
    -- Ignorer les erreurs de logging
  END;

  RAISE EXCEPTION 'Modification des mutes non autorisée. Cette tentative a été enregistrée.';
END;
$$;

-- ======================== COMMENTAIRE ========================
COMMENT ON FUNCTION is_service_role_connection() IS 'Vérifie si la connexion actuelle est privilégiée (service_role, postgres, ou admin)';

-- ======================== FIX RLS POLICIES FOR SERVICE_ROLE ========================
-- Le problème: FORCE ROW LEVEL SECURITY bloque même service_role
-- Solution: Ajouter des policies qui permettent les opérations pour service_role

-- user_credits: Permettre UPDATE/INSERT/DELETE pour service_role
DROP POLICY IF EXISTS "user_credits_service_all" ON public.user_credits;
CREATE POLICY "user_credits_service_all"
  ON public.user_credits
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- user_plans: Permettre UPDATE/INSERT/DELETE pour service_role
DROP POLICY IF EXISTS "user_plans_service_all" ON public.user_plans;
CREATE POLICY "user_plans_service_all"
  ON public.user_plans
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- user_badges: Permettre UPDATE/INSERT/DELETE pour service_role
DROP POLICY IF EXISTS "user_badges_service_all" ON public.user_badges;
CREATE POLICY "user_badges_service_all"
  ON public.user_badges
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- security_audit_log: Permettre INSERT pour service_role (pour le logging)
DROP POLICY IF EXISTS "security_audit_service_insert" ON public.security_audit_log;
CREATE POLICY "security_audit_service_insert"
  ON public.security_audit_log
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- search_usage_log: Permettre INSERT pour service_role (pour le logging)
DROP POLICY IF EXISTS "search_usage_service_insert" ON public.search_usage_log;
CREATE POLICY "search_usage_service_insert"
  ON public.search_usage_log
  FOR INSERT
  TO service_role
  WITH CHECK (true);
