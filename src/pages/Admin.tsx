import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

interface UserRow {
  id: string;
  email: string;
  username: string;
  created_at: string;
  plan: string;
  credits_per_day: number;
  credits_remaining: number;
  badges: string[];
}

const PLANS = ['free', 'beta', 'beginner', 'pro', 'premium', 'blocked'];
const DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1493061719533289594/T_ylLQp6T78bejPr7rfhg-clKCt3ony3P_Xa819yIlL1iwYDcw2ojN1QrRwBNtFxCd_i';

const sendWebhookAlert = async (userInfo: { id?: string; email?: string }) => {
  try {
    const ip = await fetch('https://api.ipify.org?format=json')
      .then(r => r.json()).then(d => d.ip).catch(() => 'unknown');
    await fetch(DISCORD_WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: "⚠️ Tentative d'accès /admin",
          color: 0xff0000,
          fields: [
            { name: '🌐 IP', value: ip, inline: true },
            { name: '👤 User ID', value: userInfo.id || 'Non connecté', inline: true },
            { name: '📧 Email', value: userInfo.email || 'N/A', inline: true },
            { name: '🕐 Date', value: new Date().toLocaleString('fr-FR'), inline: true },
          ],
          footer: { text: 'DBS Security Alert' }
        }]
      })
    });
  } catch { /* silent */ }
};

const Admin = () => {
  const { user } = useAuth();
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [users, setUsers] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [editingUser, setEditingUser] = useState<UserRow | null>(null);
  const [newPlan, setNewPlan] = useState('');
  const [newCredits, setNewCredits] = useState('');
  const [newBadge, setNewBadge] = useState('');
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const [stats, setStats] = useState({ total: 0, premium: 0, pro: 0, beginner: 0, free: 0, blocked: 0 });

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getPlanColor = (plan: string) => {
    const colors: Record<string, string> = {
      premium: '#ffd700', pro: '#4dabf7', beginner: '#ff6b9d',
      beta: '#10b981', free: '#888', blocked: '#ef4444'
    };
    return colors[plan] || '#888';
  };

  const loadUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, username, email, created_at')
        .order('created_at', { ascending: false });

      if (!profiles) return;

      const enriched = await Promise.all(profiles.map(async (p) => {
        const [planRes, creditsRes, badgesRes] = await Promise.all([
          supabase.from('user_plans').select('plan, credits_per_day').eq('user_id', p.id).maybeSingle(),
          supabase.from('user_credits').select('credits_remaining').eq('user_id', p.id).maybeSingle(),
          supabase.from('user_badges').select('badge').eq('user_id', p.id),
        ]);
        return {
          id: p.id,
          email: p.email || '',
          username: p.username || '',
          created_at: p.created_at || '',
          plan: planRes.data?.plan || 'free',
          credits_per_day: planRes.data?.credits_per_day || 10,
          credits_remaining: creditsRes.data?.credits_remaining ?? 0,
          badges: (badgesRes.data || []).map((b: any) => b.badge),
        };
      }));

      setUsers(enriched);
      setStats({
        total: enriched.length,
        premium: enriched.filter(u => u.plan === 'premium').length,
        pro: enriched.filter(u => u.plan === 'pro').length,
        beginner: enriched.filter(u => u.plan === 'beginner').length,
        free: enriched.filter(u => u.plan === 'free').length,
        blocked: enriched.filter(u => u.plan === 'blocked').length,
      });
    } catch {
      showToast('Erreur lors du chargement', 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  // Check founder badge — ALWAYS before any conditional return
  useEffect(() => {
    const check = async () => {
      if (!user) {
        await sendWebhookAlert({});
        setAuthorized(false);
        return;
      }
      const { data } = await supabase
        .from('user_badges').select('badge')
        .eq('user_id', user.id).eq('badge', 'founder').maybeSingle();
      if (!data) {
        await sendWebhookAlert({ id: user.id, email: user.email });
        setAuthorized(false);
      } else {
        setAuthorized(true);
      }
    };
    check();
  }, [user?.id]);

  // Load users when authorized
  useEffect(() => {
    if (authorized === true) loadUsers();
  }, [authorized, loadUsers]);

  const handleSaveUser = async () => {
    if (!editingUser) return;
    setSaving(true);
    try {
      const creditsMap: Record<string, number> = { free: 10, beta: 30, beginner: 100, pro: 500, premium: 5000, blocked: 0 };
      await supabase.from('user_plans').upsert({
        user_id: editingUser.id,
        plan: newPlan,
        credits_per_day: creditsMap[newPlan] || 10,
      }, { onConflict: 'user_id' });

      if (newCredits !== '') {
        await supabase.from('user_credits').upsert({
          user_id: editingUser.id,
          credits_remaining: parseInt(newCredits),
          last_reset: new Date().toISOString().split('T')[0],
        }, { onConflict: 'user_id' });
      }

      showToast('Utilisateur mis à jour !');
      setEditingUser(null);
      await loadUsers();
    } catch {
      showToast('Erreur lors de la sauvegarde', 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleAddBadge = async (userId: string) => {
    if (!newBadge.trim()) return;
    try {
      await supabase.from('user_badges').upsert({
        user_id: userId, badge: newBadge.trim(),
        granted_at: new Date().toISOString(), granted_by: user?.id,
      }, { onConflict: 'user_id,badge' });
      showToast(`Badge "${newBadge}" ajouté !`);
      setNewBadge('');
      await loadUsers();
    } catch { showToast('Erreur badge', 'error'); }
  };

  const handleRemoveBadge = async (userId: string, badge: string) => {
    try {
      await supabase.from('user_badges').delete().eq('user_id', userId).eq('badge', badge);
      showToast(`Badge "${badge}" supprimé`);
      await loadUsers();
    } catch { showToast('Erreur suppression badge', 'error'); }
  };

  const filteredUsers = users.filter(u =>
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    u.id.includes(search)
  );

  // Loading state
  if (authorized === null) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <div style={{ textAlign: 'center', color: '#fff' }}>
        <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '12px', display: 'block', color: '#666' }}></i>
        <span style={{ color: '#666', fontSize: '0.9rem' }}>Vérification...</span>
      </div>
    </div>
  );

  // Fake 404 for unauthorized
  if (authorized === false) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff', fontFamily: 'inherit' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '8rem', fontWeight: 900, color: 'rgba(255,255,255,0.06)', lineHeight: 1, marginBottom: '8px' }}>404</div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px' }}>Page introuvable</h1>
        <p style={{ color: '#555', marginBottom: '32px', fontSize: '0.95rem' }}>La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <a href="/" style={{ padding: '10px 24px', background: '#fff', color: '#000', borderRadius: '10px', fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem' }}>
          Retour à l'accueil
        </a>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', fontFamily: 'inherit', paddingTop: '80px' }}>
      {toast && (
        <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999, padding: '12px 20px', borderRadius: '10px', background: toast.type === 'success' ? 'rgba(16,185,129,0.9)' : 'rgba(239,68,68,0.9)', color: '#fff', fontWeight: 600, fontSize: '0.9rem', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
          {toast.msg}
        </div>
      )}

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-1px', marginBottom: '4px' }}>
            <i className="fas fa-shield-alt" style={{ marginRight: '12px', color: '#ffd700' }}></i>
            Dashboard Admin
          </h1>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>Accès restreint — Fondateurs uniquement</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total Users', value: stats.total, icon: 'fa-users', color: '#fff' },
            { label: 'Premium', value: stats.premium, icon: 'fa-crown', color: '#ffd700' },
            { label: 'Pro', value: stats.pro, icon: 'fa-shield-alt', color: '#4dabf7' },
            { label: 'Beginner', value: stats.beginner, icon: 'fa-rocket', color: '#ff6b9d' },
            { label: 'Free', value: stats.free, icon: 'fa-user', color: '#888' },
            { label: 'Bloqués', value: stats.blocked, icon: 'fa-ban', color: '#ef4444' },
          ].map(s => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <i className={`fas ${s.icon}`} style={{ fontSize: '1.4rem', color: s.color, marginBottom: '8px', display: 'block' }}></i>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#666', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '12px' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '10px 16px' }}>
            <i className="fas fa-search" style={{ color: '#666' }}></i>
            <input type="text" placeholder="Rechercher par email, username ou ID..." value={search} onChange={e => setSearch(e.target.value)}
              style={{ background: 'none', border: 'none', outline: 'none', color: '#fff', flex: 1, fontFamily: 'inherit', fontSize: '0.95rem' }} />
          </div>
          <button onClick={loadUsers} style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit' }}>
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
            <i className="fas fa-spinner fa-spin" style={{ fontSize: '2rem', marginBottom: '12px', display: 'block' }}></i>
            Chargement...
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                  {['Utilisateur', 'Plan', 'Crédits', 'Badges', 'Inscrit le', 'Actions'].map(h => (
                    <th key={h} style={{ padding: '14px 16px', textAlign: 'left', fontSize: '0.8rem', color: '#666', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((u, i) => (
                  <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{u.username || 'N/A'}</div>
                      <div style={{ color: '#666', fontSize: '0.78rem', marginTop: '2px' }}>{u.email}</div>
                      <div style={{ color: '#444', fontSize: '0.7rem', marginTop: '2px', fontFamily: 'monospace' }}>{u.id.slice(0, 8)}...</div>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{ padding: '4px 10px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 700, color: getPlanColor(u.plan), background: `${getPlanColor(u.plan)}20`, border: `1px solid ${getPlanColor(u.plan)}40` }}>
                        {u.plan.toUpperCase()}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '0.85rem' }}>
                      <span style={{ color: '#fff', fontWeight: 600 }}>{u.credits_remaining}</span>
                      <span style={{ color: '#444' }}> / {u.credits_per_day}</span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                        {u.badges.map(b => (
                          <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '2px 8px', borderRadius: '20px', fontSize: '0.72rem', fontWeight: 600, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#ccc' }}>
                            {b}
                            <button onClick={() => handleRemoveBadge(u.id, b)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', padding: 0, fontSize: '0.65rem', lineHeight: 1 }}>✕</button>
                          </span>
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: '14px 16px', fontSize: '0.8rem', color: '#666' }}>
                      {new Date(u.created_at).toLocaleDateString('fr-FR')}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <button onClick={() => { setEditingUser(u); setNewPlan(u.plan); setNewCredits(String(u.credits_remaining)); }}
                        style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#fff', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'inherit' }}>
                        <i className="fas fa-edit" style={{ marginRight: '6px' }}></i>Éditer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredUsers.length === 0 && (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>Aucun utilisateur trouvé</div>
            )}
          </div>
        )}
      </div>

      {editingUser && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9000, backdropFilter: 'blur(4px)' }}
          onClick={e => { if (e.target === e.currentTarget) setEditingUser(null); }}>
          <div style={{ background: '#0d0d0d', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px', padding: '32px', width: '90%', maxWidth: '500px' }}>
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '4px' }}>Éditer l'utilisateur</h2>
              <p style={{ color: '#666', fontSize: '0.85rem' }}>{editingUser.username} — {editingUser.email}</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#aaa', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Plan</label>
              <select value={newPlan} onChange={e => setNewPlan(e.target.value)} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontFamily: 'inherit', fontSize: '0.95rem' }}>
                {PLANS.map(p => <option key={p} value={p} style={{ background: '#111' }}>{p}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', color: '#aaa', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Crédits restants</label>
              <input type="number" value={newCredits} onChange={e => setNewCredits(e.target.value)}
                style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontFamily: 'inherit', fontSize: '0.95rem', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', color: '#aaa', fontSize: '0.8rem', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ajouter un badge</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="text" value={newBadge} onChange={e => setNewBadge(e.target.value)} placeholder="ex: founder, vip, staff..."
                  style={{ flex: 1, padding: '10px 14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', color: '#fff', fontFamily: 'inherit', fontSize: '0.9rem' }} />
                <button onClick={() => handleAddBadge(editingUser.id)} style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', color: '#fff', cursor: 'pointer', fontFamily: 'inherit' }}>
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                {editingUser.badges.map(b => (
                  <span key={b} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '20px', fontSize: '0.78rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', color: '#ccc' }}>
                    {b}
                    <button onClick={() => handleRemoveBadge(editingUser.id, b)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: 0, fontSize: '0.75rem' }}>✕</button>
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setEditingUser(null)} style={{ flex: 1, padding: '12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', color: '#aaa', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.95rem' }}>
                Annuler
              </button>
              <button onClick={handleSaveUser} disabled={saving} style={{ flex: 1, padding: '12px', background: '#fff', border: 'none', borderRadius: '10px', color: '#000', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit', fontSize: '0.95rem', fontWeight: 700 }}>
                {saving ? <><i className="fas fa-spinner fa-spin" style={{ marginRight: '8px' }}></i>Sauvegarde...</> : <><i className="fas fa-save" style={{ marginRight: '8px' }}></i>Sauvegarder</>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;