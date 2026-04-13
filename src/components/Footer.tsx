import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-text">Dbs</span>
            </Link>
            <p>{t('footer.brand.desc')}</p>
            <div className="footer-social">
              <a href="https://discord.gg/hVQh3j4vU7" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h4>{t('footer.product')}</h4>
            <ul>
              <li><Link to="/features">{t('footer.features')}</Link></li>
              <li><Link to="/pricing">{t('footer.pricing')}</Link></li>
              <li><Link to="/api-docs">{t('footer.api')}</Link></li>
              <li><a href="#">{t('footer.changelog')}</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>{t('footer.company')}</h4>
            <ul>
              <li><Link to="/about">{t('footer.about')}</Link></li>
              <li><Link to="/contact">{t('footer.contact')}</Link></li>
              <li><a href="#">{t('footer.careers')}</a></li>
              <li><a href="#">{t('footer.blog')}</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li><Link to="/privacy">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms">{t('footer.terms')}</Link></li>
              <li><Link to="/gdpr">{t('footer.gdpr')}</Link></li>
              <li><Link to="/security">{t('footer.security')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="footer-badges">
            <span><i className="fas fa-lock"></i> {t('footer.secure')}</span>
            <span><i className="fas fa-check-circle"></i> {t('footer.gdpr_compliant')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
