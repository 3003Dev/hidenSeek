import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { logger } from '../lib/logger';

interface SettingsModalProps {
  onClose: () => void;
}


// IDs des membres spéciaux (fallback si pas de badge en DB)
const FOUNDER_IDS = [
  'f479668f-4129-4c67-91bb-decba5a0e804', // WalSo
  'aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96', // Swith
  '3e45559e-299c-4d49-9fe8-b2c77237d2c9', // Quraiv
  'deee5dc2-e37e-48ba-8da2-1fb5945cd235'  // New member
];

const PROMOTER_IDS = [
  'f479668f-4129-4c67-91bb-decba5a0e804', // WalSo
  'aeb3ce9a-bd9d-4cbd-8c4b-2a76f972fa96', // Swith
  '3e45559e-299c-4d49-9fe8-b2c77237d2c9', // Quraiv
  'deee5dc2-e37e-48ba-8da2-1fb5945cd235'  // New member
];

// Seul WalSo a le badge développeur
const DEVELOPER_ID = 'f479668f-4129-4c67-91bb-decba5a0e804';

interface UserPlan {
  plan: 'free' | 'beginner' | 'pro' | 'premium' | 'beta' | 'blocked';
  credits_per_day: number;
}

// Fonction pour charger le plan depuis localStorage
const getUserPlanFromStorage = (userId: string): UserPlan | null => {
  const stored = localStorage.getItem(`user_plan_${userId}`);
  if (stored) {
    try {
      return JSON.parse(stored) as UserPlan;
    } catch {
      return null;
    }
  }
  return null;
};

// Fonction pour sauvegarder le plan dans localStorage
const saveUserPlanToStorage = (userId: string, plan: UserPlan) => {
  localStorage.setItem(`user_plan_${userId}`, JSON.stringify(plan));
};

const resolvePlanCredits = (plan?: UserPlan | null) => {
  if (plan?.credits_per_day && plan.credits_per_day > 0) {
    return plan.credits_per_day;
  }

  switch (plan?.plan) {
    case 'beginner':
      return 100;
    case 'pro':
      return 500;
    case 'premium':
      return 5000;
    case 'beta':
      return 30;
    case 'blocked':
      return 0;
    case 'free':
      return 10;
    default:
      return 50;
  }
};

const SettingsModal = ({ onClose }: SettingsModalProps) => {
  const { user, profile } = useAuth();
  const [showEmail, setShowEmail] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>((profile as any)?.avatar_url ?? null);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [avatarError, setAvatarError] = useState<string | null>(null);

  // Charger le plan depuis localStorage immédiatement
  const getInitialPlan = (): UserPlan | null => {
    if (!user?.id) return null;
    return getUserPlanFromStorage(user.id);
  };

  const [userPlan, setUserPlan] = useState<UserPlan | null>(getInitialPlan);

  // Charger les badges UNIQUEMENT depuis le serveur
  const [userBadges, setUserBadges] = useState<string[]>([]);

  // Vérifier les badges spéciaux
  const isFounder = FOUNDER_IDS.includes(user?.id || '') || userBadges.includes('founder');
  const isPromoter = PROMOTER_IDS.includes(user?.id || '') || userBadges.includes('promoter');
  const isDeveloper = user?.id === DEVELOPER_ID || userBadges.includes('developer');
  const isBugHunter = userBadges.includes('bug_hunter');
  const isBuyer = userBadges.includes('buyer');
  const isEarlyUser = userBadges.includes('early');
  const isVip = userBadges.includes('vip');
  const isPartner = userBadges.includes('partner');
  const isStaff = userBadges.includes('staff');
  const isBetaTester = userBadges.includes('beta_tester');
  const isPremium = userBadges.includes('premium');

  const today = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  useEffect(() => {
    setAvatarUrl((profile as any)?.avatar_url ?? null);
  }, [profile?.id, (profile as any)?.avatar_url]);

  // Charger tous les badges depuis le serveur
  useEffect(() => {
    const loadBadges = async () => {
      if (!user?.id) {
        setUserBadges([]);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_badges')
          .select('badge')
          .eq('user_id', user.id);

        if (!error && data) {
          const badges = data.map((b: { badge: string }) => b.badge);
          setUserBadges(badges);
        }
      } catch (err) {
        logger.error('Error loading badges:', err);
      }
    };

    void loadBadges();
  }, [user?.id]);

  const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user?.id) return;

    setAvatarError(null);
    if (file.size > 3 * 1024 * 1024) {
      setAvatarError('Image too large (max 3MB)');
      event.target.value = '';
      return;
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const path = `${user.id}/avatar-${Date.now()}.${ext}`;

    setUploadingAvatar(true);
    try {
      const { error: uploadError } = await supabase.storage.from('avatars').upload(path, file, {
        cacheControl: '3600',
        upsert: true,
        contentType: file.type || 'image/jpeg',
      });
      if (uploadError) {
        setAvatarError(uploadError.message || 'Upload failed');
        logger.error('Avatar upload failed', uploadError);
        return;
      }

      const { data: publicData } = supabase.storage.from('avatars').getPublicUrl(path);
      const publicUrl = publicData.publicUrl;

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id);

      if (updateError) {
        setAvatarError('Profile update failed');
        logger.error('Avatar profile update failed', updateError);
        return;
      }

      setAvatarUrl(publicUrl);
      if (profile) {
        (profile as any).avatar_url = publicUrl;
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unexpected error during upload';
      setAvatarError(msg);
      logger.error('Avatar upload exception', err);
    } finally {
      setUploadingAvatar(false);
      event.target.value = '';
    }
  };

  // Charger le plan de l'utilisateur
  useEffect(() => {
    const loadUserPlan = async () => {
      if (!user?.id) return;

      // Charger depuis le cache si pas encore chargé
      const cachedPlan = getUserPlanFromStorage(user.id);
      if (cachedPlan && !userPlan) {
        setUserPlan(cachedPlan);
      }

      try {
        const { data: planData } = await supabase
          .from('user_plans')
          .select('plan, credits_per_day')
          .eq('user_id', user.id)
          .maybeSingle()

        if (planData) {
          const normalizedPlan = (() => {
            switch ((planData as UserPlan).plan?.toLowerCase()) {
              case 'beginner':
                return 'beginner' as const;
              case 'pro':
                return 'pro' as const;
              case 'premium':
                return 'premium' as const;
              case 'beta':
                return 'beta' as const;
              default:
                return 'free' as const;
            }
          })();

          const newPlan: UserPlan = {
            plan: normalizedPlan,
            credits_per_day: resolvePlanCredits({
              plan: normalizedPlan,
              credits_per_day: (planData as UserPlan).credits_per_day
            })
          };
          setUserPlan(newPlan);
          saveUserPlanToStorage(user.id, newPlan);
        } else {
          const defaultPlan: UserPlan = { plan: 'free', credits_per_day: resolvePlanCredits({ plan: 'free', credits_per_day: 10 }) };
          if (!userPlan) {
            setUserPlan(defaultPlan);
          }
        }
      } catch (err) {
        if (!userPlan) {
          const fallbackPlan = cachedPlan ?? { plan: 'free', credits_per_day: resolvePlanCredits({ plan: 'free', credits_per_day: 10 }) };
          setUserPlan(fallbackPlan);
        }
      }
    };

    void loadUserPlan();
  }, [user?.id]);

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2><i className="fas fa-cog"></i> Account Settings</h2>
          <button className="settings-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="settings-content">
          <div className="settings-avatar">
            <div className="avatar-wrapper">
              <div className="avatar-circle" style={{ position: 'relative', overflow: 'hidden' }}>
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt="Avatar"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <i className="fas fa-user"></i>
                )}
              </div>
              <label className="avatar-upload-btn" title="Update avatar">
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  onChange={handleAvatarChange}
                  disabled={uploadingAvatar}
                />
                <i className={`fas fa-pen ${uploadingAvatar ? 'fa-spin' : ''}`}></i>
              </label>
            </div>
            {avatarError && (
              <p style={{ color: '#ff6b6b', marginTop: '6px', fontSize: '0.85rem' }}>{avatarError}</p>
            )}
            {!avatarError && (
              <p style={{ color: 'var(--text-muted)', marginTop: '6px', fontSize: '0.85rem' }}>
                JPG/PNG/WebP · max 3MB
              </p>
            )}
            {/* Badges container */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* Badge Fondateur - Couronne (uniquement pour WalSo) */}
              {isFounder && (
                <div className="founder-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #FFD700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-crown" style={{
                      fontSize: '0.55rem',
                      color: '#FFD700',
                      filter: 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.8))'
                    }}></i>
                  </div>
                  <div className="founder-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #FFD700, #FFA500)',
                    color: '#1a1a2e',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Fondateur
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #FFA500'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Développeur (uniquement pour WalSo) */}
              {isDeveloper && (
                <div className="dev-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #00d4ff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(0, 212, 255, 0.5), 0 0 15px rgba(0, 212, 255, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-code" style={{
                      fontSize: '0.5rem',
                      color: '#00d4ff',
                      filter: 'drop-shadow(0 0 3px rgba(0, 212, 255, 0.8))'
                    }}></i>
                  </div>
                  <div className="dev-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                    color: '#1a1a2e',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 212, 255, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Développeur
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #0099cc'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Promoteur (mégaphone) */}
              {isPromoter && (
                <div className="promoter-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #a855f7',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(168, 85, 247, 0.5), 0 0 15px rgba(168, 85, 247, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-bullhorn" style={{
                      fontSize: '0.45rem',
                      color: '#a855f7',
                      filter: 'drop-shadow(0 0 3px rgba(168, 85, 247, 0.8))'
                    }}></i>
                  </div>
                  <div className="promoter-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(168, 85, 247, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Promoteur
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #7c3aed'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Early User */}
              {isEarlyUser && (
                <div className="early-badge-wrapper" style={{ position: 'relative' }}>
                  <div className="early-badge-icon" style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #e0e0e0',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(255, 255, 255, 0.4), 0 0 15px rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-eye" style={{
                      fontSize: '0.55rem',
                      color: '#e0e0e0',
                      filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))'
                    }}></i>
                  </div>
                  <div className="early-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #e0e0e0, #ffffff)',
                    color: '#1a1a2e',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 255, 255, 0.3)',
                    pointerEvents: 'none'
                  }}>
                    Early User
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #ffffff'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Buyer (billet rose) */}
              {isBuyer && (
                <div className="buyer-badge-wrapper" style={{ position: 'relative' }}>
                  <div className="buyer-badge-icon" style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #ff6b9d',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(255, 107, 157, 0.5), 0 0 15px rgba(255, 107, 157, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-money-bill-wave" style={{
                      fontSize: '0.45rem',
                      color: '#ff6b9d',
                      filter: 'drop-shadow(0 0 3px rgba(255, 107, 157, 0.8))'
                    }}></i>
                  </div>
                  <div className="buyer-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #ff6b9d, #c44569)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 107, 157, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Buyer
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #c44569'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Bug Hunter (insecte vert) */}
              {isBugHunter && (
                <div className="bughunter-badge-wrapper" style={{ position: 'relative' }}>
                  <div className="bughunter-badge-icon" style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #51cf66',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(81, 207, 102, 0.5), 0 0 15px rgba(81, 207, 102, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-bug" style={{
                      fontSize: '0.5rem',
                      color: '#51cf66',
                      filter: 'drop-shadow(0 0 3px rgba(81, 207, 102, 0.8))'
                    }}></i>
                  </div>
                  <div className="bughunter-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #51cf66, #37b24d)',
                    color: '#1a1a2e',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(81, 207, 102, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Bug Hunter
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #37b24d'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge VIP */}
              {isVip && (
                <div className="vip-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #ffd700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(255, 215, 0, 0.5), 0 0 15px rgba(255, 215, 0, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-gem" style={{
                      fontSize: '0.5rem',
                      color: '#ffd700',
                      filter: 'drop-shadow(0 0 3px rgba(255, 215, 0, 0.8))'
                    }}></i>
                  </div>
                  <div className="vip-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #ffd700, #ffb700)',
                    color: '#1a1a2e',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    VIP
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #ffb700'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Partner */}
              {isPartner && (
                <div className="partner-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #4dabf7',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(77, 171, 247, 0.5), 0 0 15px rgba(77, 171, 247, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-handshake" style={{
                      fontSize: '0.45rem',
                      color: '#4dabf7',
                      filter: 'drop-shadow(0 0 3px rgba(77, 171, 247, 0.8))'
                    }}></i>
                  </div>
                  <div className="partner-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #4dabf7, #339af0)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(77, 171, 247, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Partner
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #339af0'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Staff */}
              {isStaff && (
                <div className="staff-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #ff6b6b',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(255, 107, 107, 0.5), 0 0 15px rgba(255, 107, 107, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-shield-alt" style={{
                      fontSize: '0.5rem',
                      color: '#ff6b6b',
                      filter: 'drop-shadow(0 0 3px rgba(255, 107, 107, 0.8))'
                    }}></i>
                  </div>
                  <div className="staff-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 107, 107, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Staff
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #ee5a52'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Beta Tester */}
              {isBetaTester && (
                <div className="beta-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #845ef7',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(132, 94, 247, 0.5), 0 0 15px rgba(132, 94, 247, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-flask" style={{
                      fontSize: '0.5rem',
                      color: '#845ef7',
                      filter: 'drop-shadow(0 0 3px rgba(132, 94, 247, 0.8))'
                    }}></i>
                  </div>
                  <div className="beta-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #845ef7, #7048e8)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(132, 94, 247, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Beta Tester
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #7048e8'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Badge Premium */}
              {isPremium && (
                <div className="premium-badge-wrapper" style={{ position: 'relative' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1a1a2e, #2a2a4e)',
                    border: '1.5px solid #f59f00',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 0 8px rgba(245, 159, 0, 0.5), 0 0 15px rgba(245, 159, 0, 0.3)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}>
                    <i className="fas fa-star" style={{
                      fontSize: '0.5rem',
                      color: '#f59f00',
                      filter: 'drop-shadow(0 0 3px rgba(245, 159, 0, 0.8))'
                    }}></i>
                  </div>
                  <div className="premium-tooltip" style={{
                    position: 'absolute',
                    bottom: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginBottom: '6px',
                    padding: '4px 10px',
                    background: 'linear-gradient(135deg, #f59f00, #e67700)',
                    color: '#ffffff',
                    borderRadius: '6px',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'opacity 0.2s ease, visibility 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 10px rgba(245, 159, 0, 0.5)',
                    pointerEvents: 'none'
                  }}>
                    Premium
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: '5px solid #e67700'
                    }}></div>
                  </div>
                </div>
              )}
            </div>

            <style>{`
              .founder-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.4) !important;
              }
              .founder-badge-wrapper:hover .founder-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }
              .dev-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(0, 212, 255, 0.7), 0 0 20px rgba(0, 212, 255, 0.4) !important;
              }
              .dev-badge-wrapper:hover .dev-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }
              .promoter-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(168, 85, 247, 0.7), 0 0 20px rgba(168, 85, 247, 0.4) !important;
              }
              .promoter-badge-wrapper:hover .promoter-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }
              .early-badge-wrapper:hover .early-badge-icon {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3) !important;
              }
              .early-badge-wrapper:hover .early-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }
              .buyer-badge-wrapper:hover .buyer-badge-icon {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(255, 107, 157, 0.7), 0 0 20px rgba(255, 107, 157, 0.4) !important;
              }
              .buyer-badge-wrapper:hover .buyer-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }
              .bughunter-badge-wrapper:hover .bughunter-badge-icon {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(81, 207, 102, 0.7), 0 0 20px rgba(81, 207, 102, 0.4) !important;
              }
              .bughunter-badge-wrapper:hover .bughunter-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }

              .vip-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(255, 215, 0, 0.7), 0 0 20px rgba(255, 215, 0, 0.4) !important;
              }
              .vip-badge-wrapper:hover .vip-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }

              .partner-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(77, 171, 247, 0.7), 0 0 20px rgba(77, 171, 247, 0.4) !important;
              }
              .partner-badge-wrapper:hover .partner-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }

              .staff-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(255, 107, 107, 0.7), 0 0 20px rgba(255, 107, 107, 0.4) !important;
              }
              .staff-badge-wrapper:hover .staff-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }

              .beta-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(132, 94, 247, 0.7), 0 0 20px rgba(132, 94, 247, 0.4) !important;
              }
              .beta-badge-wrapper:hover .beta-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }

              .premium-badge-wrapper:hover > div:first-child {
                transform: scale(1.15);
                box-shadow: 0 0 12px rgba(245, 159, 0, 0.7), 0 0 20px rgba(245, 159, 0, 0.4) !important;
              }
              .premium-badge-wrapper:hover .premium-tooltip {
                opacity: 1 !important;
                visibility: visible !important;
              }
            `}</style>
          </div>

          <div className="settings-info">
            {(profile?.username || user?.user_metadata?.username) && (
              <div className="settings-field">
                <label><i className="fas fa-user"></i> Username</label>
                <div className="settings-value">{profile?.username || user?.user_metadata?.username}</div>
              </div>
            )}

            <div className="settings-field">
              <label><i className="fas fa-envelope"></i> Email</label>
              <div className="settings-value email-field">
                {showEmail ? (
                  <span>{user?.email || profile?.email || 'N/A'}</span>
                ) : (
                  <span className="hidden-email">••••••••••••@••••.•••</span>
                )}
                <button
                  className="reveal-btn"
                  onClick={() => setShowEmail(!showEmail)}
                >
                  <i className={`fas ${showEmail ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
              </div>
            </div>

            <div className="settings-field">
              <label><i className="fas fa-calendar-alt"></i> Today's Date</label>
              <div className="settings-value">{today}</div>
            </div>

            <div className="settings-field">
              <label><i className="fas fa-id-badge"></i> User ID</label>
              <div className="settings-value user-id">{user?.id?.slice(0, 8)}...</div>
            </div>

            {/* Plan Status */}
            <div className="settings-field">
              <label><i className="fas fa-gem"></i> Plan Status</label>
              <div className="settings-value" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {userPlan?.plan === 'free' && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'rgba(134, 142, 150, 0.2)',
                    color: '#868e96',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    <i className="fas fa-user" style={{ marginRight: '6px' }}></i>
                    Free
                  </span>
                )}
                {userPlan?.plan === 'blocked' && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1))',
                    border: '1px solid #ef4444',
                    color: '#ef4444',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    <i className="fas fa-ban" style={{ marginRight: '6px' }}></i>
                    Bloqué
                  </span>
                )}
                {userPlan?.plan === 'beta' && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2))',
                    border: '1px solid #10b981',
                    color: '#10b981',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    <i className="fas fa-flask" style={{ marginRight: '6px' }}></i>
                    Beta
                  </span>
                )}
                {userPlan?.plan === 'beginner' && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(196, 69, 105, 0.2))',
                    border: '1px solid #ff6b9d',
                    color: '#ff6b9d',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    <i className="fas fa-rocket" style={{ marginRight: '6px' }}></i>
                    Beginner
                  </span>
                )}
                {userPlan?.plan === 'pro' && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(77, 171, 247, 0.2), rgba(34, 139, 230, 0.2))',
                    border: '1px solid #4dabf7',
                    color: '#4dabf7',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    <i className="fas fa-shield-alt" style={{ marginRight: '6px' }}></i>
                    Pro
                  </span>
                )}
                {userPlan?.plan === 'premium' && (
                  <span style={{
                    padding: '4px 12px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.2))',
                    border: '1px solid #ffd700',
                    color: '#ffd700',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}>
                    <i className="fas fa-crown" style={{ marginRight: '6px' }}></i>
                    premium
                  </span>
                )}
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                  ({resolvePlanCredits(userPlan)} credits/day)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-footer">
          <button className="btn btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
