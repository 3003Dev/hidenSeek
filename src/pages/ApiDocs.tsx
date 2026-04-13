import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import TurnstileGate from '../components/TurnstileGate';

const ApiDocs = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [hasApiAccess, setHasApiAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [accessDeniedReason, setAccessDeniedReason] = useState('');

  useEffect(() => {
    const checkAccess = async () => {
      setLoading(true);
      const timeoutId = setTimeout(() => setLoading(false), 8000);
      if (!user) {
        clearTimeout(timeoutId);
        setLoading(false);
        navigate('/login');
        return;
      }

      const allowedPlans = ['beta', 'beginner', 'pro', 'premium'];
      let planName: string | null = null;

      // Lire le cache en premier
      let cachedPlanName: string | null = null;
      try {
        const cachedKey = `user_plan_${user.id}`;
        const cached = localStorage.getItem(cachedKey);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            cachedPlanName = (parsed?.plan || '').toString().toLowerCase() || null;
          } catch {
            cachedPlanName = 'beginner';
          }
        }
      } catch {
        // ignore cache errors
      }

      // Admin panel session -> beginner au minimum
      const hasAdminSession = sessionStorage.getItem('admin_panel_auth') === 'granted';
      if (!cachedPlanName && hasAdminSession) {
        cachedPlanName = 'beginner';
      }

      // Tenter le plan distant, mais ne pas écraser le cache en cas d'absence
      let remotePlanName: string | null = null;
      try {
        const { data: planData } = await supabase
          .from('user_plans')
          .select('plan')
          .eq('user_id', user.id)
          .maybeSingle();
        remotePlanName = (planData?.plan || '').toString().toLowerCase() || null;
        if (remotePlanName) {
          planName = remotePlanName;
        }
      } catch (err) {
        // Silent fail
      }

      // Priorité: plan distant si présent, sinon cache
      if (!planName && cachedPlanName) {
        planName = cachedPlanName;
      }

      // Dernier recours : si on a une session mais aucun plan détecté, essayer une requête supplémentaire (maybeSingle déjà fait)
      if (!planName) {
        try {
          const { data: planData } = await supabase
            .from('user_plans')
            .select('plan')
            .eq('user_id', user.id)
            .maybeSingle();
          const fallbackPlan = (planData?.plan || '').toString().toLowerCase() || null;
          if (fallbackPlan) {
            planName = fallbackPlan;
          }
        } catch {
          // ignore
        }
      }

      const isAdmin = !!import.meta.env.VITE_ADMIN_EMAIL && user.email === import.meta.env.VITE_ADMIN_EMAIL;

      if (!planName || (!allowedPlans.includes(planName) && !isAdmin)) {
        setHasApiAccess(false);
        setAccessDeniedReason('API réservée aux plans payants (Beta / Beginner / Pro / premium).');
        setLoading(false);
        clearTimeout(timeoutId);
        return;
      }

      setHasApiAccess(true);

      try {
        const storedKey = localStorage.getItem(`api_key_${user.id}`);

        if (storedKey) {
          setApiKey(storedKey);
        } else {
          const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          let newKey = 'sk_live_';
          for (let i = 0; i < 48; i++) {
            newKey += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          localStorage.setItem(`api_key_${user.id}`, newKey);
          setApiKey(newKey);
        }
      } catch (err) {
        navigate('/');
      } finally {
        setLoading(false);
        clearTimeout(timeoutId);
      }
    };

    void checkAccess();
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        void checkAccess();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [user, navigate]);

  useEffect(() => {
    if (!loading) return;
    const timeout = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timeout);
  }, [loading]);

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      // Silent fail
    }
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', color: 'var(--primary)' }}></i>
      </div>
    );
  }

  if (!hasApiAccess) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
        <h2 style={{ margin: 0 }}>API réservée aux plans payants</h2>
        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{accessDeniedReason || "Choisis un plan payant pour générer une clé API."}</p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
          <button className="btn btn-primary" onClick={() => navigate('/pricing')}>Voir les plans</button>
          <button className="btn btn-outline" onClick={() => navigate('/')}>Retour</button>
        </div>
      </div>
    );
  }

const curlExample = `curl -X POST \\
  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: ${apiKey || 'YOUR_API_KEY'}" \\
  -d '{"query": "test@example.com"}'`;

  const curlFormattedExample = `curl -s -X POST \\
  https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: ${apiKey || 'YOUR_API_KEY'}" \\
  -d '{"query": "test@example.com"}' | python3 -c "import sys,json; print(json.load(sys.stdin).get('formatted_text',''))"`;

  const pythonExample = `import requests

API_KEY = "${apiKey || 'YOUR_API_KEY'}"
API_URL = "https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search"

def search(query, limit=100):
    headers = {
        "Content-Type": "application/json",
        "X-API-Key": API_KEY
    }
    data = {
        "query": query,
        "limit": limit
    }
    response = requests.post(API_URL, json=data, headers=headers)
    return response.json()

# Example usage
result = search("test@example.com")
print(result["formatted_text"])`;

  const responseExample = `{
  "success": true,
  "query": "test@example.com",
  "results_count": 35,
  "credits_remaining": 995,
  "credits_per_day": 1000,
  "results": [
    {
      "database": "Collection #1",
      "infoLeak": "Database breach info...",
      "data": [
        {
          "Email": "test@example.com",
          "Password": "password123"
        }
      ]
    }
  ],
  "formatted_text": "Dbs RESULTS\\nQuery: test@example.com\\n..."
}`;

  const formattedTextExample = `Dbs RESULTS
Query: test@example.com
Date: 2025-12-12T19:30:00.000Z
Total databases: 35

[1] Collection #1
Email: test@example.com
Password: password123

[2] AlfaBank 2023
Email: test@example.com
FullName: John Doe
Phone: 79515026171

[3] Alien TxtBase
Email: test@example.com
Password: qwerty123
Url: example.com/login
...`;

  return (
    <TurnstileGate>
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-primary)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #161616 0%, #0f0f0f 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          marginBottom: '30px',
          textAlign: 'center',
          border: '1px solid #2a2a2a',
          boxShadow: '0 20px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.02)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '12px',
            background: '#000',
            border: '2px solid #444',
            fontSize: '1.5rem',
            fontWeight: 700,
            color: 'white',
            marginBottom: '20px'
          }}>
            &lt;/&gt;
          </div>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>{t('apidocs.header.title')}</h1>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            {t('apidocs.header.subtitle')}
          </p>
        </div>

        {/* Quick Start */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-rocket" style={{ color: 'var(--primary)' }}></i>
            Quick Start
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Make your first API request in seconds. Copy and paste this command in your terminal:
          </p>
          <div style={{ position: 'relative' }}>
            <pre style={{
              background: '#0d1117',
              padding: '16px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.85rem',
              color: '#c9d1d9',
              border: '1px solid #30363d'
            }}>
              {curlExample}
            </pre>
            <button
              onClick={() => copyToClipboard(curlExample, 'curl')}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: copied === 'curl' ? '#10b981' : '#21262d',
                border: '1px solid #30363d',
                borderRadius: '6px',
                padding: '6px 12px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              <i className={`fas fa-${copied === 'curl' ? 'check' : 'copy'}`}></i>
              {copied === 'curl' ? ' Copied!' : ' Copy'}
            </button>
          </div>
        </section>

        {/* Endpoint */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-server" style={{ color: 'var(--primary)' }}></i>
            API Endpoint
          </h2>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: '#0d1117',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #30363d'
          }}>
            <span style={{
              background: '#238636',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '4px',
              fontWeight: 600,
              fontSize: '0.8rem'
            }}>POST</span>
            <code style={{ color: '#c9d1d9', flex: 1 }}>
              https://wbvbjfabddvtsmmeidzb.supabase.co/functions/v1/api-search
            </code>
          </div>
        </section>

        {/* Authentication */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-key" style={{ color: 'var(--primary)' }}></i>
            Authentication
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            All API requests require authentication via the <code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>X-API-Key</code> header.
          </p>
          <div style={{
            background: '#0d1117',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #30363d',
            marginBottom: '16px'
          }}>
            <code style={{ color: '#c9d1d9' }}>X-API-Key: {apiKey || 'sk_live_xxxxxxxxxxxx'}</code>
          </div>
          <div style={{
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '8px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#ffd700'
          }}>
            <i className="fas fa-info-circle"></i>
            <span style={{ fontSize: '0.9rem' }}>
              Your API key can be found in the API Access modal. Keep it secret!
            </span>
          </div>
        </section>

        {/* Request Parameters */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-cog" style={{ color: 'var(--primary)' }}></i>
            Request Parameters
          </h2>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9rem'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)' }}>Parameter</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)' }}>Required</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>query</code></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>string</td>
                <td style={{ padding: '12px' }}><span style={{ color: '#f85149' }}>Yes</span></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>Search query (email, phone, username, etc.)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px' }}><code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>limit</code></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>integer</td>
                <td style={{ padding: '12px' }}><span style={{ color: 'var(--text-secondary)' }}>No</span></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>Maximum results per database (default: 100, max: 100)</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Response */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-reply" style={{ color: 'var(--primary)' }}></i>
            Response Format
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            The API returns JSON with structured results and a pre-formatted text version.
          </p>
          <div style={{ position: 'relative' }}>
            <pre style={{
              background: '#0d1117',
              padding: '16px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.8rem',
              color: '#c9d1d9',
              border: '1px solid #30363d',
              maxHeight: '300px'
            }}>
              {responseExample}
            </pre>
          </div>
        </section>

        {/* Formatted Text Output */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-file-alt" style={{ color: 'var(--primary)' }}></i>
            Clean Text Output
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
            Use the <code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>formatted_text</code> field
            for a clean, readable output without database descriptions:
          </p>
          <div style={{ position: 'relative', marginBottom: '20px' }}>
            <pre style={{
              background: '#0d1117',
              padding: '16px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.85rem',
              color: '#c9d1d9',
              border: '1px solid #30363d'
            }}>
              {curlFormattedExample}
            </pre>
            <button
              onClick={() => copyToClipboard(curlFormattedExample, 'curlf')}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: copied === 'curlf' ? '#10b981' : '#21262d',
                border: '1px solid #30363d',
                borderRadius: '6px',
                padding: '6px 12px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              <i className={`fas fa-${copied === 'curlf' ? 'check' : 'copy'}`}></i>
              {copied === 'curlf' ? ' Copied!' : ' Copy'}
            </button>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '10px', fontSize: '0.9rem' }}>
            <strong>Output example:</strong>
          </p>
          <pre style={{
            background: '#0d1117',
            padding: '16px',
            borderRadius: '8px',
            overflow: 'auto',
            fontSize: '0.8rem',
            color: '#58a6ff',
            border: '1px solid #30363d',
            maxHeight: '250px'
          }}>
            {formattedTextExample}
          </pre>
        </section>

        {/* Python Example */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fab fa-python" style={{ color: '#3776ab' }}></i>
            Python Example
          </h2>
          <div style={{ position: 'relative' }}>
            <pre style={{
              background: '#0d1117',
              padding: '16px',
              borderRadius: '8px',
              overflow: 'auto',
              fontSize: '0.8rem',
              color: '#c9d1d9',
              border: '1px solid #30363d'
            }}>
              {pythonExample}
            </pre>
            <button
              onClick={() => copyToClipboard(pythonExample, 'python')}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: copied === 'python' ? '#10b981' : '#21262d',
                border: '1px solid #30363d',
                borderRadius: '6px',
                padding: '6px 12px',
                color: 'white',
                cursor: 'pointer',
                fontSize: '0.8rem'
              }}
            >
              <i className={`fas fa-${copied === 'python' ? 'check' : 'copy'}`}></i>
              {copied === 'python' ? ' Copied!' : ' Copy'}
            </button>
          </div>
        </section>

        {/* Rate Limits */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-tachometer-alt" style={{ color: 'var(--primary)' }}></i>
            Rate Limits & Credits
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div style={{
              background: 'var(--bg-primary)',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>1000</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Credits per day</div>
            </div>
            <div style={{
              background: 'var(--bg-primary)',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#ffd700' }}>1</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Credit per search</div>
            </div>
            <div style={{
              background: 'var(--bg-primary)',
              padding: '16px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#10b981' }}>00:00</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Daily reset (UTC)</div>
            </div>
          </div>
          <div style={{
            marginTop: '16px',
            background: 'rgba(139, 92, 246, 0.1)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '8px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#a78bfa'
          }}>
            <i className="fas fa-sync-alt"></i>
            <span style={{ fontSize: '0.9rem' }}>
              Credits are shared between the website and API. Each search (web or API) consumes 1 credit.
            </span>
          </div>
        </section>

        {/* Error Codes */}
        <section style={{
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px',
          marginBottom: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h2 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-exclamation-triangle" style={{ color: '#f85149' }}></i>
            Error Codes
          </h2>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.9rem'
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)' }}>Code</th>
                <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>401</code></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>Invalid or missing API key</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>403</code></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>Beginner/Pro/premium plan required</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px' }}><code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>429</code></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>No credits remaining (resets at midnight UTC)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px' }}><code style={{ background: '#21262d', padding: '2px 6px', borderRadius: '4px' }}>400</code></td>
                <td style={{ padding: '12px', color: 'var(--text-secondary)' }}>Missing query parameter or invalid request</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button
            onClick={() => navigate('/')}
            className="btn btn-outline"
            style={{ marginRight: '12px' }}
          >
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i>
            Back to Home
          </button>
          <button
            onClick={() => navigate('/pricing')}
            className="btn btn-primary"
          >
            <i className="fas fa-crown" style={{ marginRight: '8px' }}></i>
            View Plans
          </button>
        </div>
      </div>
    </div>
    </TurnstileGate>
  );
};

export default ApiDocs;
