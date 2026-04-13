-- ============================================================================
-- FIX PROFILES RLS - La table profiles peut avoir des policies cassees
-- ============================================================================

-- Voir toutes les policies sur profiles
SELECT 'POLICIES SUR PROFILES:' as info;
SELECT policyname, qual FROM pg_policies WHERE tablename = 'profiles' AND schemaname = 'public';

-- Supprimer les policies problematiques sur profiles
DO $$
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'profiles' AND schemaname = 'public')
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON public.profiles', r.policyname);
    END LOOP;
END $$;

-- Desactiver RLS sur profiles pour service_role
ALTER TABLE public.profiles DISABLE ROW LEVEL SECURITY;

-- Grants pour service_role
GRANT ALL ON public.profiles TO service_role;
GRANT SELECT ON public.profiles TO authenticated;

-- Reactiver RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policy simple pour profiles - tout le monde peut lire
CREATE POLICY "profiles_select_all" ON public.profiles
    FOR SELECT TO authenticated
    USING (true);

-- Policy pour update son propre profil
CREATE POLICY "profiles_update_own" ON public.profiles
    FOR UPDATE TO authenticated
    USING ((id)::text = (auth.uid())::text);

SELECT 'FIX PROFILES TERMINE!' as result;
