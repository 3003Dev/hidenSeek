import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import TurnstileGate from '../components/TurnstileGate';

const Security = () => {
  const { t, language } = useLanguage();

  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('security.badge')}</span>
          <h1>{t('security.title')}</h1>
          <p>{t('security.updated')}</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>{t('security.section1')}</h2>
            <p>{t('security.section1.desc')}</p>

            <h2>{t('security.section2')}</h2>
            <p>{t('security.section2.desc')}</p>

            <h2>{t('security.section3')}</h2>
            <ul>
              <li>{t('security.section3.point1')}</li>
              <li>{t('security.section3.point2')}</li>
              <li>{t('security.section3.point3')}</li>
            </ul>

            <h2>{t('security.section4')}</h2>
            <p>{t('security.section4.desc')}</p>

            <h2>{t('security.section5')}</h2>
            <p>{t('security.section5.desc')}</p>

            <h2>{t('security.section6')}</h2>
            <p>{t('security.section6.desc')}</p>

            <h2>{t('security.section7')}</h2>
            <p>{t('security.section7.desc')}</p>

            <h2>{t('security.section8')}</h2>
            <ul>
              <li>{t('security.section8.point1')}</li>
              <li>{t('security.section8.point2')}</li>
              <li>{t('security.section8.point3')}</li>
              <li>{t('security.section8.point4')}</li>
            </ul>

            <h2>{t('security.section9')}</h2>
            <p>
              {t('security.section9.desc')}
              <Link to="/privacy">{language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}</Link>.
            </p>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default Security;
