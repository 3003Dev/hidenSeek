import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { logger } from '../lib/logger';
import { containsSuspiciousContent, sanitizeSearchQuery, checkRateLimit } from '../lib/security';
import TurnstileGate from '../components/TurnstileGate';

const Contact = () => {
  const { user, profile } = useAuth();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState<'contact' | 'acces_payant'>('contact');
  const [selectedPlan, setSelectedPlan] = useState<'beginner' | 'premium' | null>(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  // Check URL params for plan
  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan === 'beginner' || plan === 'premium') {
      setCategory('acces_payant');
      setSelectedPlan(plan);
      setSubject(`Achat plan ${plan === 'beginner' ? 'Beginner' : 'premium'}`);
      setMessage(`Bonjour,\n\nJe souhaite acheter le plan ${plan === 'beginner' ? 'Beginner (€9.99)' : 'premium (€99.99)'}.\n\nMerci de me fournir l'adresse LTC pour le paiement.`);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setError(t('contact.notloggedin'));
      return;
    }

    if (!subject.trim() || !message.trim()) {
      setError(t('contact.form.required'));
      return;
    }

    if (category === 'acces_payant' && !selectedPlan) {
      setError(t('contact.form.selectplan'));
      return;
    }

    setLoading(true);
    setError('');
    
    if (!checkRateLimit(`ticket_${user.id}`, 3, 60 * 60 * 1000)) {
      setError(t('contact.form.ratelimit') || 'Trop de tickets créés. Veuillez réessayer plus tard.');
      setLoading(false);
      return;
    }

    const sanitizedSubject = sanitizeSearchQuery(subject.trim());
    const sanitizedMessage = sanitizeSearchQuery(message.trim());

    if (sanitizedSubject.length < 5 || sanitizedSubject.length > 500) {
      setError('Le sujet doit contenir entre 5 et 500 caractères.');
      setLoading(false);
      return;
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 10000) {
      setError('Le message doit contenir entre 10 et 10000 caractères.');
      setLoading(false);
      return;
    }

    if (containsSuspiciousContent(sanitizedSubject) || containsSuspiciousContent(sanitizedMessage)) {
      setError('Contenu suspect détecté. Veuillez réviser votre message.');
      setLoading(false);
      return;
    }

    try {
      const username = profile?.username || user.user_metadata?.username || 'Utilisateur';
      const email = user.email || '';

      const { data: ticketData, error: insertError } = await supabase
        .from('tickets')
        .insert({
          user_id: user.id,
          username,
          email,
          category,
          subject: sanitizedSubject,
          message: sanitizedMessage,
          status: 'open'
        })
        .select()
        .maybeSingle()

      if (insertError) {
        logger.error('Error creating ticket:', insertError);
        setError(t('contact.form.error'));
      } else if (ticketData) {
        // Envoyer le message BOT avec les informations utilisateur
        const botMessage = `__BOT_INFO__${JSON.stringify({
          username,
          email,
          user_id: user.id,
          created_at: new Date().toISOString(),
          selected_plan: category === 'acces_payant' ? selectedPlan : null
        })}__BOT_INFO__`;

        await supabase
          .from('ticket_messages')
          .insert({
            ticket_id: ticketData.id,
            user_id: user.id,
            username: 'Dbs BOT',
            message: botMessage,
            image_url: null,
            is_owner: true
          });

        setShowSuccess(true);
        setSubject('');
        setMessage('');
        setSelectedPlan(null);
        // Rediriger vers la page tickets après 3 secondes
        setTimeout(() => {
          navigate('/tickets');
        }, 3000);
      }
    } catch (err) {
      logger.error('Error:', err);
      setError(t('contact.form.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('contact.header.badge')}</span>
          <h1>{t('contact.header.title')}</h1>
          <p>{t('contact.header.subtitle')}</p>
        </div>
      </header>

      {/* Contact Section */}
      <section className="content-section">
        <div className="container">
          {!user ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-color)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <i className="fas fa-lock" style={{ fontSize: '4rem', color: 'var(--text-muted)', marginBottom: '20px' }}></i>
              <h3>{t('contact.login.title')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {t('contact.login.required')}
              </p>
              <Link to="/login" className="btn btn-primary">{t('contact.login.button')}</Link>
            </div>
          ) : showSuccess ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              background: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid rgba(81, 207, 102, 0.3)',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(81, 207, 102, 0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <i className="fas fa-check" style={{ fontSize: '2.5rem', color: '#51cf66' }}></i>
              </div>
              <h3 style={{ color: '#51cf66' }}>{t('contact.success.title')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                {t('contact.success.desc')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {t('contact.success.redirect')}
              </p>
            </div>
          ) : (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <form onSubmit={handleSubmit}>
                {error && (
                  <div style={{
                    background: 'rgba(255, 107, 107, 0.1)',
                    border: '1px solid rgba(255, 107, 107, 0.3)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    marginBottom: '20px',
                    color: '#ff6b6b',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <i className="fas fa-exclamation-circle"></i>
                    {error}
                  </div>
                )}

                {/* Catégorie */}
                <div className="form-group">
                  <label className="form-label">{t('contact.form.category')}</label>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => { setCategory('contact'); setSelectedPlan(null); }}
                      style={{
                        flex: 1,
                        padding: '16px',
                        background: category === 'contact' ? 'rgba(0, 123, 255, 0.2)' : 'var(--bg-card)',
                        border: `2px solid ${category === 'contact' ? '#4dabf7' : 'var(--border-color)'}`,
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <i className="fas fa-comment-dots" style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'block', color: category === 'contact' ? '#4dabf7' : 'var(--text-muted)' }}></i>
                      <span style={{ fontWeight: 500, color: category === 'contact' ? '#4dabf7' : 'var(--text-primary)' }}>{language === 'fr' ? 'Contact' : 'Contact'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCategory('acces_payant')}
                      style={{
                        flex: 1,
                        padding: '16px',
                        background: category === 'acces_payant' ? 'rgba(255, 193, 7, 0.2)' : 'var(--bg-card)',
                        border: `2px solid ${category === 'acces_payant' ? '#ffd43b' : 'var(--border-color)'}`,
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <i className="fas fa-crown" style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'block', color: category === 'acces_payant' ? '#ffd43b' : 'var(--text-muted)' }}></i>
                      <span style={{ fontWeight: 500, color: category === 'acces_payant' ? '#ffd43b' : 'var(--text-primary)' }}>{language === 'fr' ? 'Accès Payant' : 'Paid Access'}</span>
                    </button>
                  </div>
                </div>

                {/* Sélection du plan (seulement pour Accès Payant) */}
                {category === 'acces_payant' && (
                  <div className="form-group">
                    <label className="form-label">{language === 'fr' ? 'Choisissez votre plan' : 'Choose your plan'}</label>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPlan('beginner');
                          setSubject(language === 'fr' ? 'Achat plan Beginner' : 'Beginner Plan Purchase');
                          setMessage(language === 'fr'
                            ? 'Bonjour,\n\nJe souhaite acheter le plan Beginner (€9.99).\n\nMerci de me fournir l\'adresse LTC pour le paiement.'
                            : 'Hello,\n\nI would like to purchase the Beginner plan (€9.99).\n\nPlease provide me with the LTC address for payment.');
                        }}
                        style={{
                          flex: 1,
                          padding: '20px 16px',
                          background: selectedPlan === 'beginner' ? 'rgba(255, 107, 157, 0.2)' : 'var(--bg-card)',
                          border: `2px solid ${selectedPlan === 'beginner' ? '#ff6b9d' : 'var(--border-color)'}`,
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'center'
                        }}
                      >
                        <i className="fas fa-rocket" style={{ fontSize: '1.8rem', marginBottom: '10px', display: 'block', color: selectedPlan === 'beginner' ? '#ff6b9d' : 'var(--text-muted)' }}></i>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem', display: 'block', color: selectedPlan === 'beginner' ? '#ff6b9d' : 'var(--text-primary)', marginBottom: '4px' }}>Beginner</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>100 search/day</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: 700, color: selectedPlan === 'beginner' ? '#ff6b9d' : 'var(--text-primary)', marginTop: '8px', display: 'block' }}>€9.99 LTC</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedPlan('premium');
                          setSubject(language === 'fr' ? 'Achat plan premium' : 'premium Plan Purchase');
                          setMessage(language === 'fr'
                            ? 'Bonjour,\n\nJe souhaite acheter le plan premium (€99).\n\nMerci de me fournir l\'adresse LTC pour le paiement.'
                            : 'Hello,\n\nI would like to purchase the premium plan (€99).\n\nPlease provide me with the LTC address for payment.');
                        }}
                        style={{
                          flex: 1,
                          padding: '20px 16px',
                          background: selectedPlan === 'premium' ? 'rgba(255, 215, 0, 0.2)' : 'var(--bg-card)',
                          border: `2px solid ${selectedPlan === 'premium' ? '#ffd700' : 'var(--border-color)'}`,
                          borderRadius: 'var(--radius-md)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'center',
                          position: 'relative'
                        }}
                      >
                        <div style={{
                          position: 'absolute',
                          top: '-8px',
                          right: '-8px',
                          background: 'linear-gradient(135deg, #ffd700, #ffa500)',
                          color: '#1a1a2e',
                          padding: '2px 8px',
                          borderRadius: '8px',
                          fontSize: '0.65rem',
                          fontWeight: 700
                        }}>
                          BEST
                        </div>
                        <i className="fas fa-crown" style={{ fontSize: '1.8rem', marginBottom: '10px', display: 'block', color: selectedPlan === 'premium' ? '#ffd700' : 'var(--text-muted)' }}></i>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem', display: 'block', color: selectedPlan === 'premium' ? '#ffd700' : 'var(--text-primary)', marginBottom: '4px' }}>premium</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block' }}>5000 search/day</span>
                        <span style={{ fontSize: '1.2rem', fontWeight: 700, color: selectedPlan === 'premium' ? '#ffd700' : 'var(--text-primary)', marginTop: '8px', display: 'block' }}>€200 LTC</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Sujet */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">{t('contact.form.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-input"
                    placeholder={language === 'fr' ? "Résumez votre demande en quelques mots" : "Summarize your request in a few words"}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    disabled={loading}
                    required
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    className="form-input"
                    placeholder={language === 'fr' ? "Décrivez votre demande en détail..." : "Describe your request in detail..."}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={loading}
                    required
                    rows={6}
                    style={{ resize: 'vertical', minHeight: '120px' }}
                  />
                </div>

                {/* Info utilisateur */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  marginBottom: '20px',
                  fontSize: '0.9rem'
                }}>
                  <p style={{ margin: '0 0 8px', color: 'var(--text-muted)' }}>
                    <i className="fas fa-info-circle"></i> {language === 'fr' ? 'Informations envoyées avec le ticket:' : 'Information sent with the ticket:'}
                  </p>
                  <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                    <strong>{language === 'fr' ? 'Username:' : 'Username:'}</strong> {profile?.username || user.user_metadata?.username || 'N/A'}<br />
                    <strong>{language === 'fr' ? 'Email:' : 'Email:'}</strong> {user.email}
                    {category === 'acces_payant' && selectedPlan && (
                      <>
                        <br />
                        <strong>{language === 'fr' ? 'Plan sélectionné:' : 'Selected plan:'}</strong> <span style={{ color: selectedPlan === 'beginner' ? '#ff6b9d' : '#ffd700' }}>
                          {t(`contact.form.plan.${selectedPlan}`)}
                        </span>
                      </>
                    )}
                  </p>
                </div>

                {/* Boutons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    style={{ flex: 1 }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner"></span>
                        {language === 'fr' ? 'Création...' : 'Creating...'}
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>
                        {language === 'fr' ? 'Créer le ticket' : 'Create Ticket'}
                      </>
                    )}
                  </button>
                  <Link to="/tickets" className="btn btn-outline">
                    {language === 'fr' ? 'Mes tickets' : 'My Tickets'}
                  </Link>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">{t('contact.faq.title')}</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="glow-card" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', marginBottom: '16px', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('contact.faq.q1')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('contact.faq.a1')}</p>
            </div>

            <div className="glow-card" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', marginBottom: '16px', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('contact.faq.q2')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('contact.faq.a2')}</p>
            </div>

            <div className="glow-card" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', marginBottom: '16px', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('contact.faq.q3')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('contact.faq.a3')}</p>
            </div>

            <div className="glow-card" style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('contact.faq.q4')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('contact.faq.a4')}</p>
            </div>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default Contact;
