-- ============================================================================
-- Dbs - SECURE SEARCH FUNCTIONS & RATE LIMITING
-- Date: 2026-01-13
-- Description: Fonctions sécurisées pour le rate limiting et la déduction de crédits
-- ============================================================================

-- ============================================================================
-- 1. FONCTION POUR DÉCRÉMENTER LES CRÉDITS (appelée par les Edge Functions)
-- ============================================================================

CREATE OR REPLACE FUNCTION decrement_user_credits(p_user_id UUID)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Décrémenter les crédits
  UPDATE user_credits
  SET credits_remaining = GREATEST(credits_remaining - 1, 0)
  WHERE user_id = p_user_id;

  -- Logger l'utilisation
  INSERT INTO search_usage_log (user_id, action, created_at)
  VALUES (p_user_id, 'SEARCH', NOW())
  ON CONFLICT DO NOTHING;
END;
$$;

-- Seul service_role peut appeler cette fonction
REVOKE ALL ON FUNCTION decrement_user_credits(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION decrement_user_credits(UUID) TO service_role;

-- ============================================================================
-- 2. TABLE DE LOG D'UTILISATION DES RECHERCHES
-- ============================================================================

CREATE TABLE IF NOT EXISTS public.search_usage_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL DEFAULT 'SEARCH',
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les requêtes de rate limiting
CREATE INDEX IF NOT EXISTS idx_search_usage_user_id ON public.search_usage_log(user_id);
CREATE INDEX IF NOT EXISTS idx_search_usage_created_at ON public.search_usage_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_search_usage_user_time ON public.search_usage_log(user_id, created_at DESC);

-- RLS sur la table de log
ALTER TABLE public.search_usage_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.search_usage_log FORCE ROW LEVEL SECURITY;

-- Personne ne peut lire/écrire sauf service_role
DROP POLICY IF EXISTS "search_usage_no_access" ON public.search_usage_log;
CREATE POLICY "search_usage_no_access"
  ON public.search_usage_log
  FOR ALL
  USING (false)
  WITH CHECK (false);

-- ============================================================================
-- 3. FONCTION DE VÉRIFICATION DU RATE LIMIT (appelée par les Edge Functions)
-- ============================================================================

CREATE OR REPLACE FUNCTION check_user_rate_limit(p_user_id UUID)
RETURNS TABLE (
  allowed BOOLEAN,
  credits_remaining INTEGER,
  daily_limit INTEGER,
  error_message TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_credits INTEGER;
  v_daily_limit INTEGER;
  v_last_reset DATE;
BEGIN
  -- Récupérer les crédits actuels
  SELECT uc.credits_remaining, uc.last_reset::DATE
  INTO v_credits, v_last_reset
  FROM user_credits uc
  WHERE uc.user_id = p_user_id;

  -- Si pas de crédits trouvés
  IF v_credits IS NULL THEN
    RETURN QUERY SELECT false, 0, 0, 'User credits not found'::TEXT;
    RETURN;
  END IF;

  -- Récupérer le plan
  SELECT up.credits_per_day
  INTO v_daily_limit
  FROM user_plans up
  WHERE up.user_id = p_user_id;

  v_daily_limit := COALESCE(v_daily_limit, 10);

  -- Vérifier si reset quotidien nécessaire
  IF v_last_reset < CURRENT_DATE THEN
    -- Reset les crédits
    UPDATE user_credits
    SET credits_remaining = v_daily_limit, last_reset = CURRENT_DATE
    WHERE user_id = p_user_id;

    v_credits := v_daily_limit;
  END IF;

  -- Vérifier les crédits
  IF v_credits <= 0 THEN
    RETURN QUERY SELECT false, 0, v_daily_limit, 'No credits remaining'::TEXT;
    RETURN;
  END IF;

  RETURN QUERY SELECT true, v_credits, v_daily_limit, NULL::TEXT;
END;
$$;

REVOKE ALL ON FUNCTION check_user_rate_limit(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION check_user_rate_limit(UUID) TO service_role;

-- ============================================================================
-- 4. PROTECTION ANTI-BRUTE FORCE SUR LES RECHERCHES
-- ============================================================================

CREATE OR REPLACE FUNCTION check_search_abuse(p_user_id UUID)
RETURNS TABLE (
  is_abusive BOOLEAN,
  searches_last_minute INTEGER,
  searches_last_hour INTEGER
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_minute_count INTEGER;
  v_hour_count INTEGER;
BEGIN
  -- Compter les recherches dans la dernière minute
  SELECT COUNT(*)
  INTO v_minute_count
  FROM search_usage_log
  WHERE user_id = p_user_id
  AND created_at > NOW() - INTERVAL '1 minute';

  -- Compter les recherches dans la dernière heure
  SELECT COUNT(*)
  INTO v_hour_count
  FROM search_usage_log
  WHERE user_id = p_user_id
  AND created_at > NOW() - INTERVAL '1 hour';

  -- Limites: 10/minute, 100/heure
  IF v_minute_count > 10 OR v_hour_count > 100 THEN
    -- Logger l'abus
    INSERT INTO security_audit_log (user_id, action, details)
    VALUES (
      p_user_id,
      'SEARCH_ABUSE_DETECTED',
      jsonb_build_object(
        'searches_last_minute', v_minute_count,
        'searches_last_hour', v_hour_count
      )
    );

    RETURN QUERY SELECT true, v_minute_count, v_hour_count;
    RETURN;
  END IF;

  RETURN QUERY SELECT false, v_minute_count, v_hour_count;
END;
$$;

REVOKE ALL ON FUNCTION check_search_abuse(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION check_search_abuse(UUID) TO service_role;

-- ============================================================================
-- 5. NETTOYAGE AUTOMATIQUE DES VIEUX LOGS (à exécuter via cron)
-- ============================================================================

CREATE OR REPLACE FUNCTION cleanup_old_logs()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_deleted INTEGER;
BEGIN
  -- Supprimer les logs de recherche de plus de 30 jours
  DELETE FROM search_usage_log
  WHERE created_at < NOW() - INTERVAL '30 days';

  GET DIAGNOSTICS v_deleted = ROW_COUNT;

  -- Supprimer les logs de sécurité de plus de 90 jours
  DELETE FROM security_audit_log
  WHERE created_at < NOW() - INTERVAL '90 days';

  RETURN v_deleted;
END;
$$;

REVOKE ALL ON FUNCTION cleanup_old_logs() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION cleanup_old_logs() TO service_role;

-- ============================================================================
-- 6. COMMENTAIRES
-- ============================================================================

COMMENT ON FUNCTION decrement_user_credits(UUID) IS 'Décrémente les crédits utilisateur (appelé par Edge Functions)';
COMMENT ON FUNCTION check_user_rate_limit(UUID) IS 'Vérifie le rate limit utilisateur';
COMMENT ON FUNCTION check_search_abuse(UUID) IS 'Détecte les abus de recherche (brute force)';
COMMENT ON FUNCTION cleanup_old_logs() IS 'Nettoie les vieux logs (à exécuter via cron)';
COMMENT ON TABLE search_usage_log IS 'Log des recherches pour rate limiting et audit';
