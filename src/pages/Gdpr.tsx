import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TurnstileGate from '../components/TurnstileGate';

const Gdpr = () => {
  const { t, language } = useLanguage();

  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('gdpr.badge')}</span>
          <h1>{t('gdpr.title')}</h1>
          <p>{t('gdpr.updated')}</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>{t('gdpr.section1')}</h2>
            <p>{t('gdpr.section1.desc')}</p>

            <h2>{t('gdpr.section2')}</h2>
            <p>{t('gdpr.section2.desc')}</p>
            <ul>
              <li>{t('gdpr.section2.contact')}</li>
              <li>{t('gdpr.section2.dpo')}</li>
            </ul>

            <h2>{t('gdpr.section3')}</h2>
            <ul>
              <li><strong>{language === 'fr' ? 'Exécution du contrat:' : 'Contract Execution:'}</strong> {t('gdpr.section3.contract')}</li>
              <li><strong>{language === 'fr' ? 'Consentement:' : 'Consent:'}</strong> {t('gdpr.section3.consent')}</li>
              <li><strong>{language === 'fr' ? 'Obligation légale:' : 'Legal Obligation:'}</strong> {t('gdpr.section3.legal')}</li>
              <li><strong>{language === 'fr' ? 'Intérêt légitime:' : 'Legitimate Interest:'}</strong> {t('gdpr.section3.legitimate')}</li>
            </ul>

            <h2>{t('gdpr.section4')}</h2>
            <p>
              {t('gdpr.section4.desc')}
              <Link to="/privacy">{language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}</Link>.
            </p>

            <h2>{t('gdpr.section5')}</h2>
            <ul>
              <li>{t('gdpr.section5.point1')}</li>
              <li>{t('gdpr.section5.point2')}</li>
              <li>{t('gdpr.section5.point3')}</li>
              <li>{t('gdpr.section5.point4')}</li>
              <li>{t('gdpr.section5.point5')}</li>
            </ul>

            <h2>{t('gdpr.section6')}</h2>
            <p>{t('gdpr.section6.desc')}</p>

            <h2>{t('gdpr.section7')}</h2>
            <p>{t('gdpr.section7.desc')}</p>

            <h2>{t('gdpr.section8')}</h2>
            <ul>
              <li>{t('gdpr.section8.point1')}</li>
              <li>{t('gdpr.section8.point2')}</li>
              <li>{t('gdpr.section8.point3')}</li>
              <li>{t('gdpr.section8.point4')}</li>
            </ul>

            <h2>{t('gdpr.section9')}</h2>
            <p>{t('gdpr.section9.desc')}</p>

            <h2>{t('gdpr.section10')}</h2>
            <p>{t('gdpr.section10.desc')}</p>

            <h2>{t('gdpr.section11')}</h2>
            <p>{t('gdpr.section11.desc')}</p>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default Gdpr;
