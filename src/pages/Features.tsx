import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TurnstileGate from '../components/TurnstileGate';

const Features = () => {
  const { t } = useLanguage();
  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('features.header.badge')}</span>
          <h1>{t('features.header.title')}</h1>
          <p>{t('features.header.subtitle')}</p>
        </div>
      </header>

      {/* Main Features Section */}
      <section className="features" style={{ paddingTop: '60px' }}>
        <div className="container">
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

      {/* Search Types Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('features.section.types')}</span>
            <h2 className="section-title">{t('features.types.title')}</h2>
            <p className="section-description">{t('features.types.desc')}</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>{t('features.email')}</h3>
              <p>{t('features.email.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-user"></i>
              </div>
              <h3>{t('features.username')}</h3>
              <p>{t('features.username.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>{t('features.phone')}</h3>
              <p>{t('features.phone.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>{t('features.ip')}</h3>
              <p>{t('features.ip.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-link"></i>
              </div>
              <h3>{t('features.domain')}</h3>
              <p>{t('features.domain.desc')}</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fab fa-discord"></i>
              </div>
              <h3>{t('features.discord')}</h3>
              <p>{t('features.discord.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('features.section.sources')}</span>
            <h2 className="section-title">{t('features.sources.title')}</h2>
            <p className="section-description">{t('features.sources.desc')}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <i className="fas fa-database" style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}></i>
              <h4 style={{ marginBottom: '8px' }}>{t('features.breaches')}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('features.breaches.count')}</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <i className="fab fa-twitter" style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}></i>
              <h4 style={{ marginBottom: '8px' }}>{t('features.social')}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('features.social.count')}</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <i className="fas fa-moon" style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}></i>
              <h4 style={{ marginBottom: '8px' }}>{t('features.dark')}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('features.dark.count')}</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <i className="fas fa-file-alt" style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}></i>
              <h4 style={{ marginBottom: '8px' }}>{t('features.public')}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('features.public.count')}</p>
            </div>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px', textAlign: 'center' }}>
              <i className="fas fa-paste" style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '12px' }}></i>
              <h4 style={{ marginBottom: '8px' }}>{t('features.pastes')}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{t('features.pastes.count')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <div className="trust-text">
              <span className="section-badge">{t('features.section.security')}</span>
              <h2>{t('features.security.title')}</h2>
              <p>
                {t('features.security.desc')}
              </p>
              <div className="trust-features">
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('features.aes256')}</span>
                </div>
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('features.gdpr')}</span>
                </div>
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('features.zerologo')}</span>
                </div>
                <div className="trust-feature">
                  <i className="fas fa-check-circle"></i>
                  <span>{t('features.audit')}</span>
                </div>
              </div>
            </div>
            <div className="trust-stats">
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="trust-stat-number">TLS 1.3</div>
                <div className="trust-stat-label">Chiffrement</div>
              </div>
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-server"></i>
                </div>
                <div className="trust-stat-number">SOC 2</div>
                <div className="trust-stat-label">Certifié</div>
              </div>
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="trust-stat-number">99.9%</div>
                <div className="trust-stat-label">Uptime</div>
              </div>
              <div className="trust-stat-card">
                <div className="trust-stat-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="trust-stat-number">24/7</div>
                <div className="trust-stat-label">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('features.cta.text')}</h2>
            <p>{t('features.cta.subtitle')}</p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">
                {t('features.cta.button')}
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/pricing" className="btn btn-outline btn-lg">
                {t('nav.pricing')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default Features;
