import { useLanguage } from '../context/LanguageContext';
import TurnstileGate from '../components/TurnstileGate';

const Terms = () => {
  const { t, language } = useLanguage();

  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('terms.badge')}</span>
          <h1>{t('terms.title')}</h1>
          <p>{t('terms.updated')}</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>{t('terms.section1')}</h2>
            <p>{language === 'fr' ? 'En accédant et en utilisant Dbs, vous acceptez d\'être lié par ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre service.' : 'By accessing and using Dbs, you agree to be bound by these Terms of Service. If you do not accept these terms, please do not use our service.'}</p>

            <h2>{t('terms.section2')}</h2>
            <p>{t('terms.service.desc')}</p>

            <h2>{t('terms.section3')}</h2>
            <p>{t('terms.registration')}</p>
            <ul>
              <li>{t('terms.reg1')}</li>
              <li>{t('terms.reg2')}</li>
              <li>{t('terms.reg3')}</li>
              <li>{t('terms.reg4')}</li>
            </ul>

            <h2>{t('terms.section4')}</h2>
            <p>{t('terms.acceptable')}</p>
            <ul>
              <li>{t('terms.acceptable1')}</li>
              <li>{t('terms.acceptable2')}</li>
              <li>{t('terms.acceptable3')}</li>
              <li>{t('terms.acceptable4')}</li>
            </ul>

            <h2>{t('terms.section5')}</h2>
            <p><strong>{t('terms.prohibited')}</strong></p>
            <ul>
              <li>{t('terms.prohibited1')}</li>
              <li>{t('terms.prohibited2')}</li>
              <li>{t('terms.prohibited3')}</li>
              <li>{t('terms.prohibited4')}</li>
              <li>{t('terms.prohibited5')}</li>
              <li>{t('terms.prohibited6')}</li>
              <li>{t('terms.prohibited7')}</li>
            </ul>

            <h2>{t('terms.section6')}</h2>
            <p>{t('terms.ip.text')}</p>

            <h2>{t('terms.section7')}</h2>
            <p>{t('terms.liability')}</p>
            <ul>
              <li>{t('terms.liability1')}</li>
              <li>{t('terms.liability2')}</li>
              <li>{t('terms.liability3')}</li>
            </ul>
            <p>{t('terms.liability.desc')}</p>

            <h2>{t('terms.section8')}</h2>
            <p>{t('terms.subscription')}</p>

            <h2>{t('terms.section9')}</h2>
            <p>{t('terms.suspension')}</p>
            <ul>
              <li>{t('terms.suspension1')}</li>
              <li>{t('terms.suspension2')}</li>
              <li>{t('terms.suspension3')}</li>
              <li>{t('terms.suspension4')}</li>
            </ul>

            <h2>{t('terms.section10')}</h2>
            <p>{t('terms.modifications')}</p>

            <h2>{t('terms.section11')}</h2>
            <p>{t('terms.law')}</p>

            <h2>{t('terms.section12')}</h2>
            <p>{t('terms.contact')}</p>
            <ul>
              <li>{t('terms.contact.email')}</li>
              <li>{t('terms.contact.address')}</li>
            </ul>

            <div style={{ marginTop: '40px', padding: '24px', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {t('terms.confirmation')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default Terms;
