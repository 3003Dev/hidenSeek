import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TurnstileGate from '../components/TurnstileGate';

const Pricing = () => {
  const { t } = useLanguage();
  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('pricing.header.badge')}</span>
          <h1>{t('pricing.header.title')}</h1>
          <p>{t('pricing.header.subtitle')}</p>
        </div>
      </header>

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
            <div className="pricing-card" style={{
              background: 'var(--bg-card)',
              border: '2px solid #ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '32px'
            }}>
              <div className="pricing-header">
                <h3 style={{ color: '#ffffff' }}>{t('pricing.plan.beginner')}</h3>
                <div className="pricing-price">
                  <span className="currency">€</span>
                  <span className="amount">{t('pricing.price.beginner')}</span>
                  <span className="period">{t('pricing.price.period')}</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>{t('pricing.price.crypto')}</p>
              </div>

              <ul className="pricing-features">
                <li><i className="fas fa-check" /> 100 {t('pricing.searches.per.day')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.results')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.support')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.osint')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.api')}</li>
                <li><i className="fas fa-times" /> {t('pricing.feature.intelx')}</li>
              </ul>

              <Link to="/contact?plan=beginner" className="btn btn-primary btn-block">
                {t('pricing.button.buy')}
              </Link>
            </div>

            {/* ================= PRO ================= */}
            <div className="pricing-card" style={{
              background: 'var(--bg-card)',
              border: '2px solid #ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '32px'
            }}>
              <div className="pricing-header">
                <h3 style={{ color: '#ffffff' }}>{t('pricing.plan.pro')}</h3>
                <div className="pricing-price">
                  <span className="currency">€</span>
                  <span className="amount">{t('pricing.price.pro')}</span>
                  <span className="period">{t('pricing.price.period')}</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>{t('pricing.price.advanced')}</p>
              </div>

              <ul className="pricing-features">
                <li><i className="fas fa-check" /> <strong>500 {t('pricing.searches.per.day')}</strong></li>
                <li><i className="fas fa-check" /> {t('pricing.feature.results')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.support')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.osint')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.api')}</li>
                <li><i className="fas fa-times" /> {t('pricing.feature.intelx')}</li>
              </ul>

              <Link to="/contact?plan=pro" className="btn btn-primary btn-block">
                {t('pricing.button.buy')}
              </Link>
            </div>

            {/* ================= PREMIUM HQ ================= */}
            <div className="pricing-card featured" style={{
              background: 'var(--bg-card)',
              border: '2px solid #ffffff',
              borderRadius: 'var(--radius-lg)',
              padding: '32px'
            }}>
              <div className="pricing-header">
                <h3 style={{ color: '#ffffff' }}>
                  <i className="fas fa-crown" /> {t('pricing.plan.premium')}
                </h3>
                <div className="pricing-price">
                  <span className="currency">€</span>
                  <span className="amount">{t('pricing.price.premium')}</span>
                  <span className="period">{t('pricing.price.period')}</span>
                </div>
                <p style={{ color: 'var(--text-muted)' }}>{t('pricing.price.ultimate')}</p>
              </div>

              <ul className="pricing-features">
                <li><i className="fas fa-check" /> <strong>5000 {t('pricing.searches.per.day')}</strong></li>
                <li><i className="fas fa-check" /> {t('pricing.feature.results')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.support')}</li>
                <li><i className="fas fa-check" /> {t('pricing.feature.osint')}</li>
                <li><i className="fas fa-check" /> <strong>{t('pricing.feature.api')}</strong></li>
                <li><i className="fas fa-check" /> {t('pricing.feature.intelx')}</li>
              </ul>

              <Link to="/contact?plan=premium" className="btn btn-primary btn-block">
                {t('pricing.button.buy')}
              </Link>
            </div>
          </div>

          {/* Payment Info */}
          <div style={{
            maxWidth: '600px',
            margin: '40px auto 0',
            textAlign: 'center',
            padding: '24px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)'
          }}>
            <i className="fab fa-bitcoin" style={{ fontSize: '2rem', color: '#ffd700', marginBottom: '12px' }}></i>
            <h4 style={{ marginBottom: '8px' }}>{t('pricing.payment.title')}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {t('pricing.payment.desc')}
            </p>
          </div>
        </div>
      </section>

          {/* FAQ Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('pricing.faq.title')}</h2>
          </div>          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', marginBottom: '16px', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('pricing.faq.payment.title')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('pricing.faq.payment.desc')}</p>
            </div>

            <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', marginBottom: '16px', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('pricing.faq.lifetime.title')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('pricing.faq.lifetime.desc')}</p>
            </div>

            <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', marginBottom: '16px', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('pricing.faq.osint.title')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('pricing.faq.osint.desc')}</p>
            </div>

            <div style={{ border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <h3 style={{ marginBottom: '12px' }}>{t('pricing.faq.activation.title')}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{t('pricing.faq.activation.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('pricing.cta.title')}</h2>
            <p>{t('pricing.cta.subtitle')}</p>
            <div className="cta-buttons">
              <Link to="/contact?plan=beginner" className="btn btn-primary btn-lg">
                {t('pricing.cta.button.beginner')}
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact?plan=premium" className="btn btn-outline btn-lg">
                {t('pricing.cta.button.premium')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default Pricing;

