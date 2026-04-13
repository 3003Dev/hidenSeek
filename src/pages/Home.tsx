import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { performSearch, getCreditsRemaining, type SearchResult } from '../lib/searchApi';
import { supabase } from '../lib/supabase';
import { escapeHtml, decodeHtml, detectSearchQueryType, isSearchQuerySafe, type DetectedQueryType } from '../lib/security';
import { logger } from '../lib/logger';
import TurnstileGate from '../components/TurnstileGate';
import { checkAllAutoBadges, logSearchAndCheckVIP } from '../lib/autoBadges';

interface UserPlan {
  plan: 'free' | 'beginner' | 'pro' | 'premiumhq' | 'beta' | 'blocked';
  credits_per_day: number;
}

// Plus besoin de localStorage keys - les badges viennent du serveur uniquement

const isPaidPlan = (plan?: UserPlan['plan']) => plan === 'beginner' || plan === 'pro' || plan === 'premiumhq';

const normalizePlanName = (plan?: string): UserPlan['plan'] => {
  switch (plan?.toLowerCase()) {
    case 'beginner':
      return 'beginner';
    case 'pro':
      return 'pro';
    case 'premiumhq':
      return 'premiumhq';
    case 'beta':
      return 'beta';
    case 'blocked':
      return 'blocked';
    default:
      return 'free';
  }
};

const resolvePlanCredits = (plan: UserPlan['plan'], creditsPerDay?: number) => {
  if (typeof creditsPerDay === 'number' && creditsPerDay > 0) {
    return creditsPerDay;
  }

  switch (plan) {
    case 'beginner':
      return 100;
    case 'pro':
      return 500;
    case 'premiumhq':
      return 5000;
    case 'beta':
      return 30;
    case 'blocked':
      return 0;
    default:
      return 10;
  }
};

const Home = () => {
  const { user, showLoginPopup } = useAuth();
  const { t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null);
  const [searchError, setSearchError] = useState('');
  const [detectedType, setDetectedType] = useState<DetectedQueryType | null>(null);
  const [credits, setCredits] = useState<number | null>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [breachResults, setBreachResults] = useState<SearchResult[] | null>(null);
  const [stealerResults, setStealerResults] = useState<SearchResult[] | null>(null);
  const [resultView, setResultView] = useState<'breaches' | 'stealers'>('breaches');

  // IntelX modal state
  const [showIntelXModal, setShowIntelXModal] = useState(false);
  const [intelXStorageId, setIntelXStorageId] = useState('');
  const [intelXBucket, setIntelXBucket] = useState('leaks.logs');
  const [isIntelXSearching, setIsIntelXSearching] = useState(false);


  // ✅ Plan/credits ne viennent PLUS du localStorage
  const [userPlan, setUserPlan] = useState<UserPlan | null>(null);

  const [showBugHunterPopup, setShowBugHunterPopup] = useState(false);
  const [showBuyerPopup, setShowBuyerPopup] = useState(false);
  const [showEarlyPopup, setShowEarlyPopup] = useState(false);

  const [serverEarlyGranted, setServerEarlyGranted] = useState(false);
  const [serverBugHunterGranted, setServerBugHunterGranted] = useState(false);
  const [serverBuyerGranted, setServerBuyerGranted] = useState(false);

  const [genericBadgeQueue, setGenericBadgeQueue] = useState<string[]>([]);
  const [currentGenericBadge, setCurrentGenericBadge] = useState<string | null>(null);
  const [showGenericBadgePopup, setShowGenericBadgePopup] = useState(false);

  const [_isLoading, setIsLoading] = useState(false);

  const eyeRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const pupilRef = useRef<SVGCircleElement | null>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });


  const formatBadgeLabel = (badge: string) => {
    if (!badge) return 'Badge';
    return badge
      .split('_')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  const getPlanBadgeConfig = (plan: UserPlan['plan']) => {
    switch (plan) {
      case 'beginner':
        return {
          color: '#ffffff',
          background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(196, 69, 105, 0.2))',
          border: '#ffffff',
          icon: 'fas fa-rocket',
          label: 'Beginner'
        };
      case 'beta':
        return {
          color: '#ff0000',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))',
          border: '#ff0000',
          icon: 'fas fa-flask',
          label: 'Beta'
        };
      case 'pro':
        return {
          color: '#ffffff',
          background: 'linear-gradient(135deg, rgba(77, 171, 247, 0.2), rgba(34, 139, 230, 0.2))',
          border: '#ffffff',
          icon: 'fas fa-shield-alt',
          label: 'Pro'
        };
      default:
        return {
          color: '#ffffff',
          background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))',
          border: '#ffffff',
          icon: 'fas fa-crown',
          label: 'Premium'
        };
    }
  };

  useEffect(() => {
  const maxRadius = 11;

  const handleMouseMove = (e: MouseEvent) => {
    if (!eyeRef.current) return;

    const rect = eyeRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
    const distance = Math.min(Math.hypot(e.clientX - cx, e.clientY - cy) / 8, maxRadius);

    targetPos.current.x = Math.cos(angle) * distance;
    targetPos.current.y = Math.sin(angle) * distance;
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);


useEffect(() => {
  let rafId: number;

  const animate = () => {
    // smoothing (0.15 = smooth, 0.25 = plus rapide)
    const k = 0.2;

    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * k;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * k;

    const pupil = pupilRef.current;
    if (pupil) {
      pupil.setAttribute('cx', String(100 + currentPos.current.x));
      pupil.setAttribute('cy', String(50 + currentPos.current.y));
    }

    rafId = requestAnimationFrame(animate);
  };

  rafId = requestAnimationFrame(animate);
  return () => cancelAnimationFrame(rafId);
}, []);


  useEffect(() => {
    // Animation des compteurs
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-number[data-count]');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-count') || '0');
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString();
          }
        };

        updateCounter();
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    });

    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Charger plan + crédits depuis le serveur (pas de localStorage)
  useEffect(() => {
    if (!user) {
      setCredits(null);
      setUserPlan(null);
      return;
    }

    let cancelled = false;

    const loadCreditsAndPlan = async () => {
      if (!user) return;
      setIsLoading(true);

      try {
        // Plan
        const { data: planData, error: planError } = await supabase
          .from('user_plans')
          .select('plan, credits_per_day')
          .eq('user_id', user.id)
          .maybeSingle();

        if (planError) {
          // Silent fail
        }

        if (!cancelled) {
          if (planData?.plan) {
            const planName = normalizePlanName(planData.plan);
            const creditsPerDay = resolvePlanCredits(planName, planData?.credits_per_day);
            setUserPlan({ plan: planName, credits_per_day: creditsPerDay });
          } else {
            // pas de plan -> on laisse null, ou free par défaut si tu veux:
            setUserPlan({ plan: 'free', credits_per_day: resolvePlanCredits('free') });
          }
        }

        // Crédits restants (serveur)
        const remaining = await getCreditsRemaining(user.id);
        if (!cancelled) setCredits(remaining);
      } catch (err) {
        if (!cancelled) {
          // fallback minimal
          setUserPlan((prev) => prev ?? { plan: 'free', credits_per_day: resolvePlanCredits('free') });
          setCredits((prev) => prev ?? null);
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    void loadCreditsAndPlan();

    // refresh (si tu veux du "temps réel")
    const interval = setInterval(() => {
      void loadCreditsAndPlan();
    }, 5000);

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        void loadCreditsAndPlan();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelled = true;
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [user?.id]);

  // Charger les badges depuis le serveur UNIQUEMENT
useEffect(() => {
  if (!user?.id) {
    setShowBugHunterPopup(false);
    setShowEarlyPopup(false);
    setShowBuyerPopup(false);
    setServerEarlyGranted(false);
    setServerBugHunterGranted(false);
    setServerBuyerGranted(false);
    return;
  }

  const loadBadges = async () => {
    try {
      // Verify session before making badge checks
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        return;
      }

      // ✅ Appel sécurisé (JWT → backend → user.id)
      await checkAllAutoBadges();

      const { data, error } = await supabase
        .from("user_badges")
        .select("badge")
        .eq("user_id", user.id);

      if (error) throw error;

      const badges = (data ?? []).map(
        (b: { badge: string }) => b.badge
      );

      const hasEarly = badges.includes("early");
      const hasBug = badges.includes("bug_hunter");
      const hasBuyer = badges.includes("buyer");

      setServerEarlyGranted(hasEarly);
      setServerBugHunterGranted(hasBug);
      setServerBuyerGranted(hasBuyer);

      setGenericBadgeQueue([]);
    } catch (err) {
      logger.error("Error loading badges:", err);
    }
  };

  void loadBadges();
}, [user?.id]);


  useEffect(() => {
    if (!user?.id) {
      setShowBugHunterPopup(false);
      return;
    }
    // Ne montrer le popup que si le badge n'existe PAS côté serveur
    const eligible = (userPlan?.plan === 'beta') && !serverBugHunterGranted;
    setShowBugHunterPopup(Boolean(eligible));
  }, [user?.id, userPlan?.plan, serverBugHunterGranted]);

  useEffect(() => {
    if (!user?.id) {
      setShowGenericBadgePopup(false);
      setGenericBadgeQueue([]);
      setCurrentGenericBadge(null);
    }
  }, [user?.id]);

  useEffect(() => {
    if (!user?.id) {
      setShowEarlyPopup(false);
      return;
    }

    const checkEarlyUser = async () => {
      try {
        // Si le badge existe déjà côté serveur, ne pas proposer
        if (serverEarlyGranted) {
          setShowEarlyPopup(false);
          return;
        }

        const { data, error } = await supabase.from('profiles').select('id').order('created_at', { ascending: true }).limit(100);
        if (error) throw error;

        const inTop100 = (data || []).some((u: { id: string }) => u.id === user.id);
        setShowEarlyPopup(inTop100);
      } catch (err) {
        setShowEarlyPopup(false);
      }
    };

    void checkEarlyUser();
  }, [user?.id, serverEarlyGranted]);

  useEffect(() => {
    if (!user?.id) {
      setShowBuyerPopup(false);
      return;
    }
    // Ne montrer le popup que si le badge n'existe PAS côté serveur ET que l'user a un plan payant
    const paid = isPaidPlan(userPlan?.plan);
    const eligible = paid && !serverBuyerGranted;
    setShowBuyerPopup(Boolean(eligible));
  }, [user?.id, userPlan?.plan, serverBuyerGranted]);

useEffect(() => {
    const canShowGeneric = !showLoginPopup && !showBugHunterPopup && !showBuyerPopup && !showEarlyPopup;
    if (canShowGeneric && !currentGenericBadge && genericBadgeQueue.length > 0) {
      setCurrentGenericBadge(genericBadgeQueue[0]);
    }
    setShowGenericBadgePopup(canShowGeneric && genericBadgeQueue.length > 0);
  }, [genericBadgeQueue, showLoginPopup, showBugHunterPopup, showBuyerPopup, showEarlyPopup, currentGenericBadge]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    // Validation de sécurité de la requête
    const safetyCheck = isSearchQuerySafe(searchQuery);
    if (!safetyCheck.safe) {
      setSearchError(safetyCheck.reason || 'Requête invalide');
      return;
    }

    if (!user) {
      setShowLoginPrompt(true);
      setTimeout(() => setShowLoginPrompt(false), 3000);
      return;
    }

    // Vérifier/rafraîchir la session AVANT de lancer la recherche
    // Cela évite les erreurs si l'utilisateur a changé d'onglet
    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !sessionData.session) {
        // Essayer de refresh la session
        const { error: refreshError } = await supabase.auth.refreshSession();
        if (refreshError) {
          setSearchError('Session expirée. Veuillez vous reconnecter.');
          return;
        }
      }
    } catch {
      // Continuer quand même - performSearch gérera les erreurs d'auth
    }

    let effectivePlan = userPlan;
    if (!effectivePlan) {
      try {
        const { data: planData } = await supabase
          .from('user_plans')
          .select('plan, credits_per_day')
          .eq('user_id', user.id)
          .maybeSingle();

        if (planData?.plan) {
          const planName = planData.plan;
          effectivePlan = { plan: planName, credits_per_day: planData.credits_per_day };
          setUserPlan(effectivePlan);
        }
      } catch (err) { /* silent fail */ }
    }

    setIsSearching(true);
    setSearchError('');
    setSearchResults(null);
    setBreachResults(null);
    setStealerResults(null);

    try {
      // Appel à l'API (qui renvoie { breaches, stealers })
      const response = await performSearch(searchQuery, user.id);

      // Vérifier si la recherche a réussi
      if (!response.success) {
        setSearchError(response.error || t('home.error.generic'));
        setSearchResults(null);
        setBreachResults(null);
        setStealerResults(null);

        // Mettre à jour les crédits même en cas d'erreur
        if (response.creditsRemaining !== undefined) {
          setCredits(response.creditsRemaining);
        }
        return;
      }

      const bRes = response.breaches || [];
      const sRes = response.stealers || [];

      setBreachResults(bRes);
      setStealerResults(sRes);

      // Logique d'affichage par défaut
      if (bRes.length > 0) {
        setSearchResults(bRes);
        setResultView('breaches');
      } else if (sRes.length > 0) {
        setSearchResults(sRes);
        setResultView('stealers');
      } else {
        setSearchResults([]);
      }

      // Logger la recherche et vérifier le badge VIP (100 recherches)
      const totalResults = bRes.length + sRes.length;
      await logSearchAndCheckVIP(searchQuery, totalResults);

      // Mise à jour des crédits
      if (response.creditsRemaining !== undefined) {
        setCredits(response.creditsRemaining);
      } else {
        const remaining = await getCreditsRemaining(user.id);
        setCredits(remaining);
      }

      if (resultsRef.current) {
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } catch (err: any) {
      logger.error('Search error:', err);
      setSearchError(t('home.error.generic'));
      setSearchResults(null);
    } finally {
      setIsSearching(false);
    }
  };

  const handleIntelXSearch = async () => {
    if (!user) {
      setSearchError('Vous devez être connecté pour utiliser IntelX');
      return;
    }

    if (!intelXStorageId.trim()) {
      setSearchError('Veuillez entrer un Storage ID');
      return;
    }

    setIsIntelXSearching(true);
    setSearchError('');
    setSearchResults(null);
    setBreachResults(null);
    setStealerResults(null);

    try {
      // Get session for auth token
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData.session?.access_token;
      if (!accessToken) throw new Error('User not authenticated');

      // Call IntelX API via Edge Function
      const { data, error } = await supabase.functions.invoke('api-search', {
        body: {
          storageId: intelXStorageId,
          bucket: intelXBucket,
          searchType: 'intelx'
        },
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (error) {
        throw new Error(error.message || 'IntelX search error');
      }

      // Check for API error message in meta
      if (data?.meta?.message && data.meta.message !== 'No results found') {
        throw new Error(data.meta.message);
      }

      const results = Array.isArray(data?.results) ? data.results : [];

      // If no results and there's a message, show it
      if (results.length === 0 && data?.meta?.message) {
        setSearchError(data.meta.message);
        setShowIntelXModal(false);
        return;
      }

      setSearchResults(results);
      setBreachResults(results);
      setResultView('breaches');
      setShowIntelXModal(false);
      setIntelXStorageId('');

      if (resultsRef.current) {
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } catch (err: any) {
      logger.error('IntelX search error:', err);
      setSearchError(err.message || 'Error during IntelX search');
    } finally {
      setIsIntelXSearching(false);
    }
  };

  const handleClaimBugHunterBadge = async () => {
    if (!user?.id) return;
    setShowBugHunterPopup(false);

    const { error } = await supabase.from('user_badges').upsert(
      {
        user_id: user.id,
        badge: 'bug_hunter',
        granted_at: new Date().toISOString(),
        granted_by: user.id
      },
      { onConflict: 'user_id,badge' }
    );

    if (!error) {
      setServerBugHunterGranted(true);
    }
  };

  const handleDismissBugHunterPopup = () => {
    setShowBugHunterPopup(false);
  };

  const handleClaimEarlyBadge = async () => {
    if (!user?.id) return;
    setShowEarlyPopup(false);

    const { error } = await supabase.from('user_badges').upsert(
      {
        user_id: user.id,
        badge: 'early',
        granted_at: new Date().toISOString(),
        granted_by: user.id
      },
      { onConflict: 'user_id,badge' }
    );

    if (!error) {
      setServerEarlyGranted(true);
    }
  };

  const handleDismissEarlyPopup = () => {
    setShowEarlyPopup(false);
  };

  const handleClaimBuyerBadge = async () => {
    if (!user?.id) return;
    setShowBuyerPopup(false);

    const { error } = await supabase.from('user_badges').upsert(
      {
        user_id: user.id,
        badge: 'buyer',
        granted_at: new Date().toISOString(),
        granted_by: user.id
      },
      { onConflict: 'user_id,badge' }
    );

    if (!error) {
      setServerBuyerGranted(true);
    }
  };

  const handleDismissBuyerPopup = () => {
    setShowBuyerPopup(false);
  };

  const handleClaimGenericBadge = async () => {
    if (!user?.id || !currentGenericBadge) return;
    const badge = currentGenericBadge;

    setGenericBadgeQueue((prev) => {
      const updated = prev.filter((b) => b !== badge);
      const nextBadge = updated[0] || null;
      setCurrentGenericBadge(nextBadge);
      setShowGenericBadgePopup(Boolean(nextBadge));
      return updated;
    });

    await supabase.from('user_badges').upsert(
      {
        user_id: user.id,
        badge,
        granted_at: new Date().toISOString(),
        granted_by: user.id
      },
      { onConflict: 'user_id,badge' }
    );
  };

  const handleDismissGenericBadge = () => {
    if (!currentGenericBadge) return;
    const badge = currentGenericBadge;

    setGenericBadgeQueue((prev) => {
      const updated = prev.filter((b) => b !== badge);
      const nextBadge = updated[0] || null;
      setCurrentGenericBadge(nextBadge);
      setShowGenericBadgePopup(Boolean(nextBadge));
      return updated;
    });
  };

  const handleTagClick = (query: string) => {
    setSearchQuery(query);
  };

  // ==================== DOWNLOAD RESULTS AS TXT ====================
  const generateDownloadFile = () => {
    const allResults = [...(breachResults || []), ...(stealerResults || [])];
    if (allResults.length === 0) return;

    // Helper to decode HTML entities
    const decodeHtmlEntities = (str: string): string => {
      return str
        .replace(/&#x2F;/g, '/')
        .replace(/&#x3A;/g, ':')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec));
    };

    // Extract IP addresses from text (for Events field, etc.)
    const extractIPs = (text: string): string[] => {
      const ipRegex = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g;
      const matches = text.match(ipRegex);
      return matches ? [...new Set(matches)] : [];
    };

    // Keys to ignore (junk data)
    const junkKeys = [
      '$oid', 'oid', '_id', 'id', 'uuid', 'guid', 'objectid',
      '__v', '_v', 'version', 'v',
      'salt', 'nonce', 'iv',
      'metadata', 'meta',
      'internalsource', 'sourcetype', 'dataclass'
    ];

    const isJunkKey = (key: string): boolean => {
      const k = key.toLowerCase().replace(/[_\-\s]/g, '');
      return junkKeys.some(junk => k === junk || k.startsWith('$'));
    };

    // ASCII Art Header
    const asciiArt = `                      __
  ______ ____   ____ |  | __ ____   ______  _  __
 /  ___// __ \\_/ __ \\|  |/ //    \\ /  _ \\ \\/ \\/ /
 \\___ \\\\  ___/\\  ___/|    <|   |  (  <_> )     /
/____  >\\___  >\\___  >__|_ \\___|  /\\____/ \\/\\_/
     \\/     \\/     \\/     \\/    \\/

            discord.gg/seeknow

================================================================================
                           SEARCH RESULTS EXPORT
================================================================================
Query: ${searchQuery}
Date: ${new Date().toLocaleString()}
Total Databases: ${allResults.length}
Total Entries: ${allResults.reduce((acc, r) => acc + (r.data?.length || 0), 0)}
================================================================================

`;

    // Contact Summary data (most important info)
    const contactSummary: {
      emails: Set<string>;
      phones: Set<string>;
      names: Set<string>;
      addresses: Set<string>;
      usernames: Set<string>;
      ips: Set<string>;
      passwords: Set<string>;
    } = {
      emails: new Set(),
      phones: new Set(),
      names: new Set(),
      addresses: new Set(),
      usernames: new Set(),
      ips: new Set(),
      passwords: new Set()
    };

    // Categories for organizing data
    const categories: Record<string, string[]> = {
      'EMAILS': [],
      'PASSWORDS / HASHES': [],
      'USERNAMES / LOGINS': [],
      'PHONE NUMBERS': [],
      'ADDRESSES / LOCATIONS': [],
      'NAMES': [],
      'IP ADDRESSES': [],
      'DISCORD': [],
      'URLS / DOMAINS / WEBSITES': [],
      'DATES / TIMESTAMPS': [],
      'ACCOUNTS / SERVICES': [],
      'OTHER DATA': []
    };

    // Helper to categorize a key (improved with space handling)
    const categorizeKey = (key: string): string => {
      // Normalize: remove spaces, underscores, dashes and lowercase
      const k = key.toLowerCase().replace(/[\s_\-]/g, '');

      // Emails
      if (k.includes('email') || k.includes('mail') || k.includes('courriel') || k === 'e') return 'EMAILS';

      // Passwords
      if (k.includes('password') || k.includes('pass') || k.includes('hash') || k.includes('pwd') || k.includes('secret') || k.includes('credential')) return 'PASSWORDS / HASHES';

      // Usernames - check before names
      if (k.includes('username') || k.includes('login') || k.includes('nickname') || k.includes('pseudo') || k.includes('handle') || k.includes('userid') || k.includes('accountid') || k === 'user') return 'USERNAMES / LOGINS';

      // Phone
      if (k.includes('phone') || k.includes('phonenumber') || k.includes('tel') || k.includes('mobile') || k.includes('cell') || k.includes('fax') || k.includes('whatsapp') || k.includes('numero')) return 'PHONE NUMBERS';

      // Address/Location - check for address1, address2, etc.
      if (k.includes('address') || k.match(/^address\d?$/) || k.includes('street') || k.includes('rue') || k.includes('city') || k.includes('ville') || k.includes('country') || k.includes('pays') || k.includes('zip') || k.includes('zipcode') || k.includes('postal') || k.includes('codepostal') || k.includes('state') || k.includes('location') || k.includes('region') || k.includes('province') || k.includes('geo') || k.includes('lat') || k.includes('lng') || k.includes('longitude') || k.includes('latitude')) return 'ADDRESSES / LOCATIONS';

      // Names - check for firstname, lastname, first name, last name
      if (k.includes('firstname') || k.includes('lastname') || k.includes('fullname') || k.includes('realname') || k.includes('displayname') || k.includes('prenom') || k.includes('nom') || k === 'first' || k === 'last' || (k.includes('name') && !k.includes('username') && !k.includes('hostname') && !k.includes('domainname') && !k.includes('filename'))) return 'NAMES';

      // IP - check for ip in value or Events field (which contains IPs)
      if ((k.includes('ip') && !k.includes('zip') && !k.includes('ship') && !k.includes('script') && !k.includes('descript')) || k.includes('ipaddress') || k === 'events') return 'IP ADDRESSES';

      // Discord
      if (k.includes('discord')) return 'DISCORD';

      // URLs/Domains
      if (k.includes('url') || k.includes('link') || k.includes('domain') || k.includes('website') || k.includes('site') || k.includes('host') || k.includes('server')) return 'URLS / DOMAINS / WEBSITES';

      // Dates
      if (k.includes('date') || k.includes('time') || k.includes('created') || k.includes('updated') || k.includes('born') || k.includes('dob') || k.includes('birthday') || k.includes('expire') || k.includes('end') || k.includes('start') || k.includes('registered') || k.includes('lastlogin') || k.includes('lastseen') || k.includes('createdon') || k.includes('svodenddate')) return 'DATES / TIMESTAMPS';

      // Accounts/Services
      if (k.includes('account') || k.includes('service') || k.includes('plan') || k.includes('subscription') || k.includes('status') || k.includes('substatus') || k.includes('type') || k.includes('accounttype') || k.includes('tier') || k.includes('level') || k.includes('role') || k.includes('premium') || k.includes('svod') || k.includes('vod')) return 'ACCOUNTS / SERVICES';

      return 'OTHER DATA';
    };

    // Format key for display (snake_case/camelCase -> Title Case)
    const formatKey = (key: string): string => {
      return key
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/[_\-]/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
        .trim();
    };

    // Check if value looks like an email
    const isEmail = (val: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

    // Check if value looks like a phone number
    const isPhone = (val: string): boolean => /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?[-\s\.]?[0-9]{3,10}$/.test(val.replace(/\s/g, ''));

    // Process a key-value pair and add to categories (recursive for nested objects)
    const processKeyValue = (key: string, value: unknown) => {
      // Skip junk keys
      if (isJunkKey(key)) return;

      if (value === null || value === undefined || value === '') return;

      // Handle arrays - process each element
      if (Array.isArray(value)) {
        value.forEach((item) => {
          if (typeof item === 'object' && item !== null) {
            // Array of objects - recurse into each
            Object.entries(item).forEach(([k, v]) => {
              processKeyValue(k, v);
            });
          } else if (item !== null && item !== undefined && item !== '') {
            // Array of primitives - use the parent key
            processKeyValue(key, item);
          }
        });
        return;
      }

      // Handle nested objects - recurse
      if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([k, v]) => {
          processKeyValue(k, v);
        });
        return;
      }

      // Now we have a primitive value
      let strValue = String(value).trim();
      if (strValue.length === 0 || strValue === 'true' || strValue === 'false' || strValue === 'null' || strValue === 'undefined' || strValue === '[object Object]') return;

      // Decode HTML entities
      strValue = decodeHtmlEntities(strValue);

      const category = categorizeKey(key);
      const formattedKey = formatKey(key);

      // Special handling for Events field - extract IPs
      if (key.toLowerCase() === 'events' || key.toLowerCase().includes('event')) {
        const extractedIPs = extractIPs(strValue);
        extractedIPs.forEach(ip => {
          contactSummary.ips.add(ip);
          const ipEntry = `IP: ${ip}`;
          if (!categories['IP ADDRESSES'].includes(ipEntry)) {
            categories['IP ADDRESSES'].push(ipEntry);
          }
        });
        return;
      }

      // Build contact summary based on category
      if (category === 'EMAILS' || isEmail(strValue)) {
        contactSummary.emails.add(strValue);
      } else if (category === 'PHONE NUMBERS' || isPhone(strValue)) {
        contactSummary.phones.add(strValue);
      } else if (category === 'NAMES') {
        contactSummary.names.add(`${formattedKey}: ${strValue}`);
      } else if (category === 'ADDRESSES / LOCATIONS') {
        contactSummary.addresses.add(`${formattedKey}: ${strValue}`);
      } else if (category === 'USERNAMES / LOGINS') {
        contactSummary.usernames.add(strValue);
      } else if (category === 'IP ADDRESSES') {
        const ips = extractIPs(strValue);
        if (ips.length > 0) {
          ips.forEach(ip => contactSummary.ips.add(ip));
        } else {
          contactSummary.ips.add(strValue);
        }
      } else if (category === 'PASSWORDS / HASHES') {
        contactSummary.passwords.add(strValue);
      }

      const formattedEntry = `${formattedKey}: ${strValue}`;

      // Avoid duplicates
      if (!categories[category].includes(formattedEntry)) {
        categories[category].push(formattedEntry);
      }
    };

    // Extract and categorize all data
    allResults.forEach(result => {
      if (!Array.isArray(result.data)) return;
      result.data.forEach(item => {
        if (typeof item !== 'object' || item === null) return;
        Object.entries(item).forEach(([key, value]) => {
          processKeyValue(key, value);
        });
      });
    });

    // Build the file content
    let fileContent = asciiArt;

    // ================== CONTACT SUMMARY (TOP) ==================
    const hasContactData = contactSummary.emails.size > 0 || contactSummary.phones.size > 0 ||
                           contactSummary.names.size > 0 || contactSummary.addresses.size > 0 ||
                           contactSummary.usernames.size > 0 || contactSummary.ips.size > 0 ||
                           contactSummary.passwords.size > 0;

    if (hasContactData) {
      fileContent += `\n${'*'.repeat(80)}\n`;
      fileContent += `${'*'.repeat(20)}    CONTACT SUMMARY (KEY DATA)    ${'*'.repeat(20)}\n`;
      fileContent += `${'*'.repeat(80)}\n\n`;

      if (contactSummary.emails.size > 0) {
        fileContent += `  EMAILS:\n`;
        contactSummary.emails.forEach(e => fileContent += `    -> ${e}\n`);
        fileContent += '\n';
      }

      if (contactSummary.usernames.size > 0) {
        fileContent += `  USERNAMES:\n`;
        contactSummary.usernames.forEach(u => fileContent += `    -> ${u}\n`);
        fileContent += '\n';
      }

      if (contactSummary.passwords.size > 0) {
        fileContent += `  PASSWORDS:\n`;
        contactSummary.passwords.forEach(p => fileContent += `    -> ${p}\n`);
        fileContent += '\n';
      }

      if (contactSummary.names.size > 0) {
        fileContent += `  NAMES:\n`;
        contactSummary.names.forEach(n => fileContent += `    -> ${n}\n`);
        fileContent += '\n';
      }

      if (contactSummary.phones.size > 0) {
        fileContent += `  PHONE NUMBERS:\n`;
        contactSummary.phones.forEach(p => fileContent += `    -> ${p}\n`);
        fileContent += '\n';
      }

      if (contactSummary.addresses.size > 0) {
        fileContent += `  ADDRESSES:\n`;
        contactSummary.addresses.forEach(a => fileContent += `    -> ${a}\n`);
        fileContent += '\n';
      }

      if (contactSummary.ips.size > 0) {
        fileContent += `  IP ADDRESSES:\n`;
        contactSummary.ips.forEach(ip => fileContent += `    -> ${ip}\n`);
        fileContent += '\n';
      }

      fileContent += `${'*'.repeat(80)}\n\n`;
    }

    // ================== DETAILED CATEGORIES ==================
    fileContent += `\n${'='.repeat(80)}\n`;
    fileContent += `                          DETAILED DATA BY CATEGORY\n`;
    fileContent += `${'='.repeat(80)}\n`;

    // Show categories with data (exclude OTHER DATA for now)
    Object.entries(categories).forEach(([category, entries]) => {
      if (entries.length === 0 || category === 'OTHER DATA') return;

      fileContent += `\n${'─'.repeat(80)}\n`;
      fileContent += `  ${category} (${entries.length} entries)\n`;
      fileContent += `${'─'.repeat(80)}\n\n`;

      entries.forEach(entry => {
        fileContent += `  • ${entry}\n`;
      });

      fileContent += '\n';
    });

    // Add OTHER DATA at the end (if any)
    if (categories['OTHER DATA'].length > 0) {
      fileContent += `\n${'─'.repeat(80)}\n`;
      fileContent += `  OTHER DATA (${categories['OTHER DATA'].length} entries)\n`;
      fileContent += `${'─'.repeat(80)}\n\n`;

      categories['OTHER DATA'].forEach(entry => {
        fileContent += `  • ${entry}\n`;
      });

      fileContent += '\n';
    }

    // Footer
    fileContent += `\n${'='.repeat(80)}\n`;
    fileContent += `                    Generated by SeekNow - OSINT Platform\n`;
    fileContent += `                         https://seeknow.io\n`;
    fileContent += `${'='.repeat(80)}\n`;

    // Create and download the file
    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `seeknow_results_${searchQuery.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <TurnstileGate>
      {showEarlyPopup && !showLoginPopup && !showBugHunterPopup && !showBuyerPopup && (
        <div className="login-popup" style={{ top: '90px', zIndex: 31 }}>
          <div
            className="login-popup-content"
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', minWidth: '340px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-star" style={{ color: '#f59e0b' }}></i>
              <span>Bravo ! Tu fais partie des 100 premiers</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleClaimEarlyBadge}
                style={{
                  minWidth: '150px',
                  fontWeight: 700,
                  background: '#f59e0b',
                  borderColor: '#d97706',
                  color: '#ffffff'
                }}
              >
                Claim badge Early
              </button>
              <button
                className="btn btn-outline btn-sm"
                onClick={handleDismissEarlyPopup}
                style={{
                  minWidth: '120px',
                  fontWeight: 700,
                  borderColor: '#d1d5db',
                  color: '#1a1a2e',
                  background: '#f7f7f9'
                }}
              >
                Ignorer
              </button>
            </div>
          </div>
        </div>
      )}

      {showGenericBadgePopup &&
        currentGenericBadge &&
        !showLoginPopup &&
        !showBugHunterPopup &&
        !showBuyerPopup &&
        !showEarlyPopup && (
          <div className="login-popup" style={{ top: '90px', zIndex: 30 }}>
            <div
              className="login-popup-content"
              style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', minWidth: '340px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-award" style={{ color: '#7c3aed' }}></i>
                <span>Bravo ! Tu as obtenu le badge {formatBadgeLabel(currentGenericBadge)}</span>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={handleClaimGenericBadge}
                  style={{
                    minWidth: '150px',
                    fontWeight: 700,
                    background: '#7c3aed',
                    borderColor: '#5b21b6',
                    color: '#ffffff'
                  }}
                >
                  Claim mon badge
                </button>
                <button
                  className="btn btn-outline btn-sm"
                  onClick={handleDismissGenericBadge}
                  style={{
                    minWidth: '120px',
                    fontWeight: 700,
                    borderColor: '#d1d5db',
                    color: '#1a1a2e',
                    background: '#f7f7f9'
                  }}
                >
                  Ignorer
                </button>
              </div>
            </div>
          </div>
        )}

      {showBugHunterPopup && !showLoginPopup && (
        <div className="login-popup" style={{ top: '90px', zIndex: 30 }}>
          <div
            className="login-popup-content"
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', minWidth: '320px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-bug" style={{ color: '#10b981' }}></i>
              <span>Bravo ! Tu as gagné un badge Bug Hunter</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleClaimBugHunterBadge}
                style={{
                  minWidth: '140px',
                  fontWeight: 700,
                  background: '#10b981',
                  borderColor: '#0ea971',
                  color: '#ffffff'
                }}
              >
                Claim mon badge
              </button>
              <button
                className="btn btn-outline btn-sm"
                onClick={handleDismissBugHunterPopup}
                style={{
                  minWidth: '120px',
                  fontWeight: 700,
                  borderColor: '#d1d5db',
                  color: '#1a1a2e',
                  background: '#f7f7f9'
                }}
              >
                Ignorer
              </button>
            </div>
          </div>
        </div>
      )}

      {showBuyerPopup && !showLoginPopup && !showBugHunterPopup && (
        <div className="login-popup" style={{ top: '90px', zIndex: 29 }}>
          <div
            className="login-popup-content"
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', minWidth: '320px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-money-bill-wave" style={{ color: '#ff6b9d' }}></i>
              <span>Bravo ! Tu as debloque le badge Buyer</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className="btn btn-primary btn-sm"
                onClick={handleClaimBuyerBadge}
                style={{
                  minWidth: '140px',
                  fontWeight: 700,
                  background: '#ff6b9d',
                  borderColor: '#ff6b9d',
                  color: '#ffffff'
                }}
              >
                Claim mon badge
              </button>
              <button
                className="btn btn-outline btn-sm"
                onClick={handleDismissBuyerPopup}
                style={{
                  minWidth: '120px',
                  fontWeight: 700,
                  borderColor: '#d1d5db',
                  color: '#1a1a2e',
                  background: '#f7f7f9'
                }}
              >
                Ignorer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-split">

            {/* LEFT — texte */}
            <div className="hero-left">
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                <span>{t('home.hero.badge')}</span>
              </div>

              <h1 className="hero-title">
                Next-Gen<br />
                <span className="hero-title-accent">OSINT</span><br />
                Platform
              </h1>

              <p className="hero-description">{t('home.hero.description')}</p>

              {/* Plan Badge & Credits */}
              {user && userPlan && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                  {userPlan.plan !== 'free' && userPlan.plan !== 'blocked' && (
                    (() => {
                      const badge = getPlanBadgeConfig(userPlan.plan);
                      return (
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '20px', background: badge.background, border: `1px solid ${badge.border}` }}>
                          <i className={badge.icon} style={{ color: badge.color }}></i>
                          <span style={{ fontWeight: 600, color: badge.color, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.5px' }}>{badge.label}</span>
                        </div>
                      );
                    })()
                  )}
                  {credits !== null && userPlan.plan !== 'blocked' && (
                    <div className="credits-display">
                      <i className="fas fa-coins"></i>
                      <span>{credits} / {userPlan.credits_per_day} {t('home.credits.title')}</span>
                    </div>
                  )}
                </div>
              )}

              {user && userPlan?.plan === 'blocked' && (
                <div className="search-error animate-fade-in" style={{ marginBottom: '12px' }}>
                  <i className="fas fa-ban"></i>
                  <span>Votre compte est bloqué. Contactez le support.</span>
                </div>
              )}

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">+740B</div>
                  <div className="stat-label">Entrées</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+160</div>
                  <div className="stat-label">Pays</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50To+</div>
                  <div className="stat-label">Données</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
              </div>
            </div>

            {/* RIGHT — terminal */}
            <div className="hero-right">
              <div className="terminal-window">
                <div className="terminal-bar">
                  <div className="terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <span className="terminal-title">_ OSINT Terminal</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line"><span className="terminal-prompt">&gt;</span> <span className="terminal-text">Initializing OSINT scanner...</span></div>
                  <div className="terminal-line terminal-delay-1"><span className="terminal-prompt">&gt;</span> <span className="terminal-text">Loading 58 data sources...</span></div>
                  <div className="terminal-line terminal-delay-2"><span className="terminal-prompt">&gt;</span> <span className="terminal-text">Connecting to breach databases...</span></div>
                  <div className="terminal-line terminal-delay-3"><span className="terminal-prompt">&gt;</span> <span className="terminal-text terminal-green">System ready. 740B+ entries indexed.</span></div>
                  <div className="terminal-cursor terminal-delay-4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Bar — pleine largeur */}
          <div className="hero-search-section">
            {showLoginPrompt && (
              <div className="login-prompt animate-shake" style={{ marginBottom: '12px' }}>
                <i className="fas fa-lock"></i>
                <span>{t('home.error.notloggedin')}</span>
                <button onClick={() => navigate('/login')} className="btn btn-sm">{t('nav.login')}</button>
              </div>
            )}

            <div className="search-box">
              <div className="search-input-wrapper">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder={user ? t('home.search.placeholder') : t('home.error.notloggedin')}
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchQuery(value);
                    if (value.trim().length >= 3) {
                      const detected = detectSearchQueryType(value);
                      setDetectedType(detected);
                    } else {
                      setDetectedType(null);
                    }
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  disabled={isSearching}
                />
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button className="btn btn-search" onClick={handleSearch} disabled={isSearching || !searchQuery.trim()}>
                  {isSearching ? (<><span className="spinner"></span><span>Searching...</span></>) : (<><span>{t('home.search.button')}</span><i className="fas fa-arrow-right"></i></>)}
                </button>
                {user && (
                  <button className="btn btn-intelx" onClick={() => setShowIntelXModal(true)} style={{ background: 'linear-gradient(135deg, #ffd700 0%, #ffa500 100%)', border: '2px solid rgba(255,215,0,0.3)', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#000', fontWeight: '600' }}>
                    <i className="fas fa-crown"></i><span>IntelX</span>
                  </button>
                )}
              </div>
            </div>

            {searchError && (
              <div className="search-error animate-fade-in" style={{ marginTop: '8px' }}>
                <i className="fas fa-exclamation-circle"></i>
                <span>{searchError}</span>
              </div>
            )}

            {detectedType && detectedType.type !== 'unknown' && (
              <div className="animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', borderRadius: '20px', background: 'rgba(77,171,247,0.15)', border: '1px solid rgba(77,171,247,0.3)', fontSize: '0.8rem', color: '#4dabf7', fontWeight: 600 }}>
                  <i className={`${detectedType.iconClass} ${detectedType.icon}`}></i>
                  <span>Type détecté: {detectedType.label}</span>
                </div>
              </div>
            )}

            {/* Search type filters */}
            <div className="search-type-filters">
              <button className="search-type-btn" onClick={() => handleTagClick('email')}><i className="fas fa-envelope"></i> Email</button>
              <button className="search-type-btn" onClick={() => handleTagClick('username')}><i className="fas fa-user"></i> Username</button>
              <button className="search-type-btn" onClick={() => handleTagClick('')}><i className="fas fa-phone"></i> Phone</button>
              <button className="search-type-btn" onClick={() => handleTagClick('discord')}><i className="fab fa-discord"></i> Discord</button>
              <button className="search-type-btn" onClick={() => handleTagClick('ip')}><i className="fas fa-network-wired"></i> IP Address</button>
              <button className="search-type-btn" onClick={() => handleTagClick('domain')}><i className="fas fa-globe"></i> Domain</button>
              {user && (
                <button className="search-type-btn search-type-vip" onClick={() => setShowIntelXModal(true)}><i className="fas fa-crown"></i> IntelX</button>
              )}
            </div>
          </div>
        </div>
      </section>

{/* Search Results Section */}
      {searchResults && (
        <section className="search-results-section" ref={resultsRef}>
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-search" style={{ marginRight: '12px' }}></i>
                Search Results
              </h2>
              <p className="section-description">
                {searchResults.length} result(s) found for "{searchQuery}"
              </p>
            </div>

            {/* Download Button */}
            {(breachResults !== null || stealerResults !== null) && (breachResults?.length || 0) + (stealerResults?.length || 0) > 0 && (
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '16px',
                marginBottom: '20px'
              }}>
                <button
                  onClick={generateDownloadFile}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    border: '2px solid rgba(16, 185, 129, 0.5)',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                  }}
                >
                  <i className="fas fa-download"></i>
                  <span>Download The Results </span>
                </button>
              </div>
            )}

            {/* Boutons de basculement */}
            {(breachResults !== null || stealerResults !== null) && (
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
                alignItems: 'stretch',
                justifyContent: 'flex-start',
                marginTop: '16px',
                marginBottom: '24px'
              }}>
                <button
                  className="btn-download"
                  onClick={() => {
                    setResultView('breaches');
                    setSearchResults(breachResults || []);
                  }}
                  style={{
                    flex: '1 1 0',
                    minWidth: '180px',
                    background: resultView === 'breaches' ? 'var(--primary)' : 'transparent',
                    border: `2px solid var(--primary)`,
                    color: resultView === 'breaches' ? 'white' : 'var(--primary)',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fas fa-database"></i>
                  <span>Breaches ({breachResults?.length || 0})</span>
                </button>

                <button
                  className="btn-download"
                  onClick={() => {
                    setResultView('stealers');
                    setSearchResults(stealerResults || []);
                  }}
                  style={{
                    flex: '1 1 0',
                    minWidth: '180px',
                    background: resultView === 'stealers' ? 'var(--primary)' : 'transparent',
                    border: `2px solid var(--primary)`,
                    color: resultView === 'stealers' ? 'white' : 'var(--primary)',
                    cursor: 'pointer'
                  }}
                >
                  <i className="fas fa-user-secret"></i>
                  <span>Stealers ({stealerResults?.length || 0})</span>
                </button>
              </div>
            )}

            {searchResults.length > 0 ? (
              <div className="results-grid">
                {searchResults.map((result, index) => {
                  const displayData = Array.isArray(result.data) ? result.data : [];

                  // Formatage clé lisible: snake_case/camelCase -> Title Case
                  const formatKey = (key: string): string => {
                    return key
                      .replace(/_/g, ' ')
                      .replace(/([a-z])([A-Z])/g, '$1 $2')
                      .replace(/\b\w/g, c => c.toUpperCase());
                  };

                  // Icône selon le type de donnée
                  const getFieldIcon = (key: string): string => {
                    const k = key.toLowerCase();
                    if (k.includes('email') || k.includes('mail')) return 'fas fa-envelope';
                    if (k.includes('password') || k.includes('pass') || k.includes('hash')) return 'fas fa-key';
                    if (k.includes('phone') || k.includes('tel')) return 'fas fa-phone';
                    if (k.includes('ip') || k.includes('address')) return 'fas fa-network-wired';
                    if (k.includes('user') || k.includes('name')) return 'fas fa-user';
                    if (k.includes('date') || k.includes('time') || k.includes('created')) return 'fas fa-calendar';
                    if (k.includes('url') || k.includes('link') || k.includes('domain')) return 'fas fa-link';
                    if (k.includes('country') || k.includes('city') || k.includes('location')) return 'fas fa-map-marker-alt';
                    if (k.includes('discord')) return 'fab fa-discord';
                    if (k.includes('steam')) return 'fab fa-steam';
                    return 'fas fa-circle';
                  };

                  // Rendu récursif pour les objets imbriqués
                  const renderValue = (value: unknown, depth = 0): React.ReactNode => {
                    if (value === null || value === undefined || value === '') {
                      return <span className="field-value field-empty">—</span>;
                    }

                    if (Array.isArray(value)) {
                      if (value.length === 0) return <span className="field-value field-empty">—</span>;
                      // Si c'est un tableau de primitifs
                      if (value.every(v => typeof v !== 'object')) {
                        return <span className="field-value">{value.join(', ')}</span>;
                      }
                      // Tableau d'objets
                      return (
                        <div className="field-nested">
                          {value.map((item, i) => (
                            <div key={i} className="nested-item">
                              {renderValue(item, depth + 1)}
                            </div>
                          ))}
                        </div>
                      );
                    }

                    if (typeof value === 'object') {
                      const entries = Object.entries(value as Record<string, unknown>);
                      if (entries.length === 0) return <span className="field-value field-empty">—</span>;
                      return (
                        <div className="field-nested">
                          {entries.map(([k, v]) => (
                            <div key={k} className="nested-field">
                              <span className="nested-key">{formatKey(k)}:</span>
                              {renderValue(v, depth + 1)}
                            </div>
                          ))}
                        </div>
                      );
                    }

                    const strValue = String(value);
                    // Masquer partiellement les mots de passe
                    if (strValue.length > 50) {
                      return <span className="field-value field-long">{escapeHtml(strValue)}</span>;
                    }
                    return <span className="field-value">{escapeHtml(strValue)}</span>;
                  };

                  return (
                    <div key={`${resultView}-${index}`} className="result-card animate-fade-in">
                      <div className="result-header">
                        <h3>
                          <i className={resultView === 'stealers' ? "fas fa-user-secret" : "fas fa-database"}></i>
                          {escapeHtml(result.database)}
                        </h3>
                        <span className="result-badge">{result.data.length} entrée(s)</span>
                      </div>

                      {result.infoLeak && (
                        <p className="result-info">{escapeHtml(decodeHtml(result.infoLeak))}</p>
                      )}

                      <div className="result-data">
                        {displayData.map((item, idx) => (
                          <div key={idx} className="result-item">
                            {Object.entries(item).map(([key, value]) => {
                              const displayKey = formatKey(key);
                              const icon = getFieldIcon(key);

                              return (
                                <div key={key} className="result-field">
                                  <span className="field-key">
                                    <i className={icon}></i>
                                    {displayKey}
                                  </span>
                                  {renderValue(value)}
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <h3>No Results Found</h3>
                <p>No data was found for "{searchQuery}" in this category.</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.features.section')}</span>
            <h2 className="section-title">{t('home.features.title')}</h2>
            <p className="section-description">{t('home.features.subtitle')}</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>{t('features.violations')}</h3>
              <p>{t('features.violations.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user-secret"></i>
              </div>
              <h3>{t('features.osint')}</h3>
              <p>{t('features.osint.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-moon"></i>
              </div>
              <h3>{t('features.darkweb')}</h3>
              <p>{t('features.darkweb.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3>{t('features.realtime')}</h3>
              <p>{t('features.realtime.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3>{t('features.encryption')}</h3>
              <p>{t('features.encryption.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>{t('features.api')}</h3>
              <p>{t('features.api.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('home.howitworks.section')}</span>
            <h2 className="section-title">{t('home.howitworks.title')}</h2>
            <p className="section-description">{t('home.howitworks.subtitle')}</p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>{t('home.howitworks.step1.title')}</h3>
                <p>{t('home.howitworks.step1.desc')}</p>
              </div>
              <div className="step-icon">
                <i className="fas fa-keyboard"></i>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>{t('home.howitworks.step2.title')}</h3>
                <p>{t('home.howitworks.step2.desc')}</p>
              </div>
              <div className="step-icon">
                <i className="fas fa-cogs"></i>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>{t('home.howitworks.step3.title')}</h3>
                <p>{t('home.howitworks.step3.desc')}</p>
              </div>
              <div className="step-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <div className="trust-text">
              <span className="section-badge">{t('home.trust.section')}</span>
              <h2>{t('home.trust.title')}</h2>
              <p>{t('home.trust.subtitle')}</p>
              <div className="trust-features">
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('home.trust.gdpr')}</span>
                </div>
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('home.trust.audit')}</span>
                </div>
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('home.trust.support')}</span>
                </div>
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('home.trust.sla')}</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">
                {t('home.trust.contact')}
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="trust-stats">
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="trust-stat-number">40+</div>
                <div className="trust-stat-label">{t('home.trust.orgs')}</div>
              </div>
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="trust-stat-number">10K+</div>
                <div className="trust-stat-label">{t('home.trust.users')}</div>
              </div>
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-search"></i>
                </div>
                <div className="trust-stat-number">1M+</div>
                <div className="trust-stat-label">{t('home.trust.searches')}</div>
              </div>
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-star"></i>
                </div>
                <div className="trust-stat-number">4.9/5</div>
                <div className="trust-stat-label">{t('home.trust.rating')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-preview" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
              maxWidth: '1600px',
              margin: '0 auto',
              padding: '0 16px'
            }}
          >
            {/* ================= BEGINNER ================= */}
            <div
              className="pricing-card"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid #ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '32px'
              }}
            >
              <div className="pricing-header">
                <h3 style={{ color: '#ffffff' }}>Beginner</h3>
                <div className="pricing-price">
                  <span className="currency">€</span>
                  <span className="amount">9.99</span>
                  <span className="period">/lifetime</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Paiement unique en crypto</p>
              </div>

              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check" /> 100 search/day
                </li>
                <li>
                  <i className="fas fa-check" /> Complete Results
                </li>
                <li>
                  <i className="fas fa-check" /> Support 24h/24
                </li>
                <li>
                  <i className="fas fa-check" /> OSINT Search
                </li>
                <li>
                  <i className="fas fa-check" /> API Access
                </li>
                <li>
                  <i className="fas fa-times" /> IntelX
                </li>
              </ul>

              <Link to="/contact?plan=beginner" className="btn btn-primary btn-block">
                Acheter
              </Link>
            </div>

            {/* ================= PRO ================= */}
            <div
              className="pricing-card"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid #ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '32px'
              }}
            >
              <div className="pricing-header">
                <h3 style={{ color: '#ffffff' }}>Pro</h3>
                <div className="pricing-price">
                  <span className="currency">€</span>
                  <span className="amount">24.99</span>
                  <span className="period">/lifetime</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Pour utilisateurs avancés</p>
              </div>

              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check" /> <strong>500 search/day</strong>
                </li>
                <li>
                  <i className="fas fa-check" /> Complete Results
                </li>
                <li>
                  <i className="fas fa-check" /> Support 24h/24
                </li>
                <li>
                  <i className="fas fa-check" /> OSINT Search
                </li>
                <li>
                  <i className="fas fa-check" /> API Access
                </li>
                <li>
                  <i className="fas fa-times" /> IntelX
                </li>
              </ul>

              <Link to="/contact?plan=pro" className="btn btn-primary btn-block">
                Acheter
              </Link>
            </div>

            {/* ================= PREMIUM HQ ================= */}
            <div
              className="pricing-card featured"
              style={{
                background: 'var(--bg-card)',
                border: '2px solid #ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '32px'
              }}
            >
              <div className="pricing-header">
                <h3 style={{ color: '#ffffff' }}>
                  <i className="fas fa-crown" /> premium
                </h3>
                <div className="pricing-price">
                  <span className="currency">€</span>
                  <span className="amount">99.99</span>
                  <span className="period">/lifetime</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>Accès ultime</p>
              </div>

              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check" /> <strong>5000 search/day</strong>
                </li>
                <li>
                  <i className="fas fa-check" /> Complete Results
                </li>
                <li>
                  <i className="fas fa-check" /> Support prioritaire 24h/24
                </li>
                <li>
                  <i className="fas fa-check" /> OSINT Search
                </li>
                <li>
                  <i className="fas fa-check" /> <strong>API Access</strong>
                </li>
                <li>
                  <i className="fas fa-check" /> IntelX
                </li>
              </ul>

              <Link to="/contact?plan=premiumhq" className="btn btn-primary btn-block">
                Acheter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('home.cta.title')}</h2>
            <p>{t('home.cta.subtitle')}</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">
                {t('home.cta.button1')}
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                {t('home.cta.button2')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IntelX Modal */}
      {showIntelXModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowIntelXModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            backdropFilter: 'blur(4px)'
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)',
              border: '2px solid rgba(255, 215, 0, 0.5)',
              borderRadius: '16px',
              padding: '32px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 20px 60px rgba(255, 215, 0, 0.2)'
            }}
          >
            <div style={{ marginBottom: '24px', textAlign: 'center' }}>
              <i className="fas fa-crown" style={{ fontSize: '48px', color: '#ffd700', marginBottom: '16px' }}></i>
              <h2 style={{ color: '#ffd700', marginBottom: '8px' }}>IntelX Search</h2>
              <p style={{ color: 'rgba(255, 215, 0, 0.7)', fontSize: '14px' }}>
                Advanced search in IntelX databases
              </p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontWeight: 500 }}>
                <i className="fas fa-database" style={{ marginRight: '8px' }}></i>
                Bucket
              </label>
              <select
                value={intelXBucket}
                onChange={(e) => setIntelXBucket(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(31, 41, 55, 0.8)',
                  border: '2px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                <option value="leaks.logs">Leaks Logs</option>
                <option value="darknet.tor">Darknet (TOR)</option>
                <option value="dns">DNS Records</option>
                <option value="documents.public.scihub">Documents (Sci-Hub)</option>
                <option value="dumpster">Dumpster</option>
                <option value="leaks.private">Leaks Private</option>
                <option value="leaks.public">Leaks Public</option>
                <option value="pastes">Pastes</option>
                <option value="web.gov.ru">Web Gov RU</option>
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: '#fff', marginBottom: '8px', fontWeight: 500 }}>
                <i className="fas fa-key" style={{ marginRight: '8px' }}></i>
                Storage ID
              </label>
              <input
                type="text"
                value={intelXStorageId}
                onChange={(e) => setIntelXStorageId(e.target.value)}
                placeholder="Entrez le Storage ID..."
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(31, 41, 55, 0.8)',
                  border: '2px solid rgba(255, 215, 0, 0.4)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setShowIntelXModal(false)}
                disabled={isIntelXSearching}
                style={{
                  padding: '12px 24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}
              >
                Annuler
              </button>
              <button
                onClick={handleIntelXSearch}
                disabled={isIntelXSearching || !intelXStorageId.trim()}
                style={{
                  padding: '12px 24px',
                  background: isIntelXSearching || !intelXStorageId.trim()
                    ? 'rgba(255, 215, 0, 0.3)'
                    : 'linear-gradient(135deg, #ffd700 0%, #ffa500 100%)',
                  border: '2px solid rgba(255, 215, 0, 0.5)',
                  borderRadius: '8px',
                  color: isIntelXSearching || !intelXStorageId.trim() ? 'rgba(0, 0, 0, 0.5)' : '#000',
                  cursor: isIntelXSearching || !intelXStorageId.trim() ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                {isIntelXSearching ? (
                  <>
                    <span className="spinner"></span>
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-search"></i>
                    <span>Search</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </TurnstileGate>
  );
};

export default Home;