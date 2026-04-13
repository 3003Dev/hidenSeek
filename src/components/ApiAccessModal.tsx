import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { getCreditsRemaining } from '../lib/searchApi';
import { storeApiKey, getStoredApiKey } from '../lib/security';

interface ApiAccessModalProps {
  onClose: () => void;
}

interface ApiKeyData {
  api_key: string;
  created_at: string;
  requests_total: number;
  is_active: boolean;
}

interface UserPlanData {
  plan: string;
  credits_per_day: number;
}

const ApiAccessModal = ({ onClose }: ApiAccessModalProps) => {
  const { user } = useAuth();
  const [apiKeyData, setApiKeyData] = useState<ApiKeyData | null>(null);
  const [userPlan, setUserPlan] = useState<UserPlanData | null>(null);
  const [creditsRemaining, setCreditsRemaining] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [generating, setGenerating] = useState(false);
  const isPaidPlan = !!userPlan && !['free', 'blocked'].includes(userPlan.plan?.toLowerCase?.() || '');

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      if (!user) {
        if (isMounted) setLoading(false);
        return;
      }

      try {
        const { data: planData } = await supabase
          .from('user_plans')
          .select('plan, credits_per_day')
          .eq('user_id', user.id)
          .maybeSingle()

        const resolvedPlan: UserPlanData = planData || { plan: 'free', credits_per_day: 0 };
        if (isMounted) setUserPlan(resolvedPlan);

        const paidPlan = resolvedPlan.plan?.toLowerCase() !== 'free';
        if (!paidPlan) {
          if (isMounted) {
            setCreditsRemaining(0);
            setLoading(false);
          }
          return;
        }

        const storedKey = await getStoredApiKey(user.id);

        if (storedKey && isMounted) {
          setApiKeyData({
            api_key: storedKey,
            created_at: new Date().toISOString(),
            requests_total: 0,
            is_active: true
          });
        } else if (isMounted) {
          const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          let newKey = 'sk_live_';
          for (let i = 0; i < 48; i++) {
            newKey += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          await storeApiKey(user.id, newKey);
          setApiKeyData({
            api_key: newKey,
            created_at: new Date().toISOString(),
            requests_total: 0,
            is_active: true
          });
        }

        const credits = await getCreditsRemaining(user.id);
        if (isMounted) setCreditsRemaining(credits);

      } catch (err) {
        // Silent fail
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();

    const interval = setInterval(async () => {
      if (user && isPaidPlan && isMounted) {
        const credits = await getCreditsRemaining(user.id);
        if (isMounted) setCreditsRemaining(credits);
      }
    }, 2000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [user, isPaidPlan]);

  // Générer une nouvelle API key
  const generateApiKey = async () => {
    if (!user || !isPaidPlan) return;

    setGenerating(true);
    try {
      // Générer une clé aléatoire côté client
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let key = 'sk_live_';
      for (let i = 0; i < 48; i++) {
        key += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      await storeApiKey(user.id, key);
      
      const newKeyData = {
        api_key: key,
        created_at: new Date().toISOString(),
        requests_total: 0,
        is_active: true
      };

      setApiKeyData(newKeyData);
      setShowKey(true);
    } catch (err) {
      alert('Error generating API key');
    } finally {
      setGenerating(false);
    }
  };

  // Copier la clé dans le presse-papier
  const copyToClipboard = async () => {
    if (!apiKeyData) return;

    try {
      await navigator.clipboard.writeText(apiKeyData.api_key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Silent fail
    }
  };

  // Masquer/Afficher la clé
  const maskKey = (key: string) => {
    if (showKey) return key;
    return key.substring(0, 12) + '••••••••••••••••••••••••••••••••••••';
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        width: '100%',
        maxWidth: '600px',
        maxHeight: '90vh',
        overflow: 'auto'
      }} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: '#1a1a1a',
              border: '1px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'white'
            }}>
              &lt;/&gt;
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.3rem' }}>API Access</h2>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                API for programmatic searches
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontSize: '1.5rem',
              padding: '4px'
            }}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '20px' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
              <p style={{ marginTop: '12px', color: 'var(--text-secondary)' }}>Loading...</p>
            </div>
          ) : !isPaidPlan ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: '#ef4444',
                margin: '0 auto 20px'
              }}>
                <i className="fas fa-ban"></i>
              </div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '1.2rem' }}>
                API Reserved for Paid Plans
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '420px', marginInline: 'auto' }}>
                Free accounts cannot generate API keys. Upgrade to Beta/Beginner/Pro/premium to unlock programmatic access.
              </p>
              <a
                href="/pricing"
                className="btn btn-primary"
                style={{ padding: '12px 20px', display: 'inline-flex', gap: '8px', alignItems: 'center' }}
              >
                <i className="fas fa-arrow-up"></i>
                View Plans
              </a>
            </div>
          ) : apiKeyData ? (
            <>
              {/* API Key Section */}
              <div style={{
                background: 'var(--bg-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '16px',
                marginBottom: '20px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px'
                }}>
                  Your API Key
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <code style={{
                    flex: 1,
                    background: 'var(--bg-card)',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    fontFamily: 'monospace',
                    wordBreak: 'break-all',
                    border: '1px solid var(--border-color)'
                  }}>
                    {maskKey(apiKeyData.api_key)}
                  </code>
                  <button
                    onClick={() => setShowKey(!showKey)}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px',
                      cursor: 'pointer',
                      color: 'var(--text-primary)'
                    }}
                    title={showKey ? 'Hide' : 'Show'}
                  >
                    <i className={`fas fa-eye${showKey ? '-slash' : ''}`}></i>
                  </button>
                  <button
                    onClick={copyToClipboard}
                    style={{
                      background: copied ? '#10b981' : 'var(--primary)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      padding: '12px',
                      cursor: 'pointer',
                      color: 'white',
                      transition: 'background 0.2s'
                    }}
                    title="Copy"
                  >
                    <i className={`fas fa-${copied ? 'check' : 'copy'}`}></i>
                  </button>
                </div>
              </div>

              {/* Stats - Crédits partagés avec le site */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {creditsRemaining}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Credits Remaining
                  </div>
                </div>
                <div style={{
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#ffd700' }}>
                    {userPlan?.credits_per_day || 100}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Credits / Day
                  </div>
                </div>
                <div style={{
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: apiKeyData.is_active ? '#10b981' : '#ef4444'
                  }}>
                    {apiKeyData.is_active ? 'Active' : 'Inactive'}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    Status
                  </div>
                </div>
              </div>

              {/* Shared credits info */}
              <div style={{
                background: 'rgba(255, 215, 0, 0.1)',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 16px',
                marginBottom: '20px',
                fontSize: '0.85rem',
                color: '#ffd700',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fas fa-info-circle"></i>
                <span>Credits are shared between the website and API. Each search consumes 1 credit.</span>
              </div>

              {/* Regenerate Button */}
              <button
                onClick={generateApiKey}
                disabled={generating}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-secondary)',
                  cursor: generating ? 'not-allowed' : 'pointer',
                  fontSize: '0.9rem',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <i className={`fas fa-${generating ? 'spinner fa-spin' : 'sync-alt'}`}></i>
                {generating ? 'Generating...' : 'Regenerate API Key'}
              </button>

              {/* Documentation */}
              <div style={{
                background: 'var(--bg-primary)',
                borderRadius: 'var(--radius-md)',
                padding: '16px'
              }}>
                <h3 style={{ margin: '0 0 12px 0', fontSize: '1rem' }}>
                  <i className="fas fa-book" style={{ marginRight: '8px', color: 'var(--primary)' }}></i>
                  API Documentation
                </h3>

                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <p style={{ margin: '0 0 12px 0' }}>
                    <strong>Endpoint:</strong>
                  </p>
                  <code style={{
                    display: 'block',
                    background: 'var(--bg-card)',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '16px',
                    fontSize: '0.85rem',
                    wordBreak: 'break-all'
                  }}>
                    POST https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search
                  </code>

                  <p style={{ margin: '0 0 8px 0' }}>
                    <strong>Headers:</strong>
                  </p>
                  <code style={{
                    display: 'block',
                    background: 'var(--bg-card)',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '16px',
                    fontSize: '0.85rem',
                    whiteSpace: 'pre-wrap'
                  }}>
{`Content-Type: application/json
X-API-Key: ${showKey ? apiKeyData.api_key : 'sk_live_••••••••'}`}
                  </code>

                  <p style={{ margin: '0 0 8px 0' }}>
                    <strong>Body (JSON):</strong>
                  </p>
                  <code style={{
                    display: 'block',
                    background: 'var(--bg-card)',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '16px',
                    fontSize: '0.85rem',
                    whiteSpace: 'pre-wrap'
                  }}>
{`{
  "query": "email@example.com",
  "limit": 100
}`}
                  </code>

                  <p style={{ margin: '0 0 8px 0' }}>
                    <strong>cURL Example:</strong>
                  </p>
                  <code style={{
                    display: 'block',
                    background: 'var(--bg-card)',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    whiteSpace: 'pre-wrap',
                    overflowX: 'auto'
                  }}>
{`curl -X POST \\
  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: ${showKey ? apiKeyData.api_key : 'YOUR_API_KEY'}" \\
  -d '{"query": "test@example.com"}'`}
                  </code>
                </div>
              </div>
            </>
          ) : (
            /* No API Key - Generate one */
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#1a1a1a',
                border: '1px solid #333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'white',
                margin: '0 auto 20px'
              }}>
                <i className="fas fa-key"></i>
              </div>
              <h3 style={{ margin: '0 0 12px 0', fontSize: '1.2rem' }}>
                Generate Your API Key
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                As a paid user (Beta, Beginner, Pro, or Premium), you have access to our API for programmatic searches.
              </p>
              <button
                onClick={generateApiKey}
                disabled={generating}
                className="btn btn-primary"
                style={{
                  padding: '14px 28px',
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className={`fas fa-${generating ? 'spinner fa-spin' : 'key'}`}></i>
                {generating ? 'Generating...' : 'Generate My API Key'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiAccessModal;
