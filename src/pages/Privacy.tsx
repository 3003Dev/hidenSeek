import { useLanguage } from '../context/LanguageContext';
import TurnstileGate from '../components/TurnstileGate';

const Privacy = () => {
  const { t, language } = useLanguage();

  return (
    <TurnstileGate>
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('privacy.badge')}</span>
          <h1>{t('privacy.title')}</h1>
          <p>{t('privacy.updated')}</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>{language === 'fr' ? '1. Introduction' : '1. Introduction'}</h2>
            <p>{language === 'fr' ? 'Chez Dbs, nous prenons la protection de vos données personnelles très au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations lorsque vous utilisez notre plateforme.' : 'At Dbs, we take the protection of your personal data very seriously. This privacy policy explains how we collect, use, store and protect your information when you use our platform.'}</p>

            <h2>{language === 'fr' ? '2. Données collectées' : '2. Data Collected'}</h2>
            <p>{language === 'fr' ? 'Nous collectons les types de données suivants:' : 'We collect the following types of data:'}</p>
            <ul>
              <li><strong>{language === 'fr' ? 'Données d\'inscription:' : 'Registration Data:'}</strong> {language === 'fr' ? 'nom, adresse email, mot de passe (chiffré)' : 'name, email address, password (encrypted)'}</li>
              <li><strong>{language === 'fr' ? 'Données de paiement:' : 'Payment Data:'}</strong> {language === 'fr' ? 'traitées par nos partenaires de paiement sécurisés (Stripe)' : 'processed by our secure payment partners (Stripe)'}</li>
              <li><strong>{language === 'fr' ? 'Données d\'utilisation:' : 'Usage Data:'}</strong> {language === 'fr' ? 'logs de connexion, statistiques d\'utilisation anonymisées' : 'login logs, anonymized usage statistics'}</li>
              <li><strong>{language === 'fr' ? 'Données techniques:' : 'Technical Data:'}</strong> {language === 'fr' ? 'adresse IP, type de navigateur, système d\'exploitation' : 'IP address, browser type, operating system'}</li>
            </ul>

            <h2>{language === 'fr' ? '3. Utilisation des données' : '3. Data Usage'}</h2>
            <p>{language === 'fr' ? 'Vos données sont utilisées pour:' : 'Your data is used for:'}</p>
            <ul>
              <li>{language === 'fr' ? 'Fournir et améliorer nos services' : 'Provide and improve our services'}</li>
              <li>{language === 'fr' ? 'Gérer votre compte et vos abonnements' : 'Manage your account and subscriptions'}</li>
              <li>{language === 'fr' ? 'Communiquer avec vous concernant votre compte' : 'Communicate with you about your account'}</li>
              <li>{language === 'fr' ? 'Assurer la sécurité de la plateforme' : 'Ensure platform security'}</li>
              <li>{language === 'fr' ? 'Respecter nos obligations légales' : 'Comply with our legal obligations'}</li>
            </ul>

            <h2>{language === 'fr' ? '4. Recherches et confidentialité' : '4. Searches and Privacy'}</h2>
            <p><strong>{language === 'fr' ? 'Important:' : 'Important:'}</strong> {language === 'fr' ? 'Dbs ne stocke pas l\'historique de vos recherches. Chaque requête est traitée de manière isolée et les résultats ne sont pas conservés sur nos serveurs une fois la session terminée.' : 'Dbs does not store your search history. Each request is processed in isolation and results are not retained on our servers after the session ends.'}</p>

            <h2>{language === 'fr' ? '5. Partage des données' : '5. Data Sharing'}</h2>
            <p>{language === 'fr' ? 'Nous ne vendons jamais vos données personnelles. Nous pouvons partager des données avec:' : 'We never sell your personal data. We may share data with:'}</p>
            <ul>
              <li>{language === 'fr' ? 'Nos sous-traitants techniques (hébergement, paiement) sous contrat de confidentialité' : 'Our technical subprocessors (hosting, payment) under confidentiality agreements'}</li>
              <li>{language === 'fr' ? 'Les autorités compétentes en cas d\'obligation légale' : 'Competent authorities when legally required'}</li>
            </ul>

            <h2>{language === 'fr' ? '6. Sécurité des données' : '6. Data Security'}</h2>
            <p>{language === 'fr' ? 'Nous mettons en œuvre des mesures de sécurité robustes:' : 'We implement robust security measures:'}</p>
            <ul>
              <li>{language === 'fr' ? 'Chiffrement AES-256 pour les données au repos' : 'AES-256 encryption for data at rest'}</li>
              <li>{language === 'fr' ? 'TLS 1.3 pour les données en transit' : 'TLS 1.3 for data in transit'}</li>
              <li>{language === 'fr' ? 'Authentification à deux facteurs disponible' : 'Two-factor authentication available'}</li>
              <li>{language === 'fr' ? 'Audits de sécurité réguliers' : 'Regular security audits'}</li>
              <li>{language === 'fr' ? 'Accès limité aux données personnelles' : 'Limited access to personal data'}</li>
            </ul>

            <h2>{language === 'fr' ? '7. Vos droits (RGPD)' : '7. Your Rights (GDPR)'}</h2>
            <p>{language === 'fr' ? 'Conformément au RGPD, vous disposez des droits suivants:' : 'Under GDPR, you have the following rights:'}</p>
            <ul>
              <li><strong>{language === 'fr' ? 'Droit d\'accès:' : 'Right of Access:'}</strong> {language === 'fr' ? 'obtenir une copie de vos données' : 'obtain a copy of your data'}</li>
              <li><strong>{language === 'fr' ? 'Droit de rectification:' : 'Right to Rectification:'}</strong> {language === 'fr' ? 'corriger vos données inexactes' : 'correct inaccurate data'}</li>
              <li><strong>{language === 'fr' ? 'Droit à l\'effacement:' : 'Right to Erasure:'}</strong> {language === 'fr' ? 'demander la suppression de vos données' : 'request deletion of your data'}</li>
              <li><strong>{language === 'fr' ? 'Droit à la portabilité:' : 'Right to Data Portability:'}</strong> {language === 'fr' ? 'recevoir vos données dans un format lisible' : 'receive your data in a readable format'}</li>
              <li><strong>{language === 'fr' ? 'Droit d\'opposition:' : 'Right to Object:'}</strong> {language === 'fr' ? 'vous opposer au traitement de vos données' : 'object to processing of your data'}</li>
            </ul>
            <p>{language === 'fr' ? 'Pour exercer ces droits, contactez-nous à: privacy@Dbs.io' : 'To exercise these rights, contact us at: privacy@Dbs.io'}</p>

            <h2>{language === 'fr' ? '8. Cookies' : '8. Cookies'}</h2>
            <p>{language === 'fr' ? 'Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques (avec votre consentement) pour améliorer nos services. Vous pouvez gérer vos préférences de cookies à tout moment.' : 'We use essential cookies for website functionality and analytical cookies (with your consent) to improve our services. You can manage your cookie preferences at any time.'}</p>

            <h2>{language === 'fr' ? '9. Conservation des données' : '9. Data Retention'}</h2>
            <p>{language === 'fr' ? 'Nous conservons vos données personnelles pendant la durée de votre compte actif, plus 3 ans après sa fermeture pour des raisons légales. Les données de facturation sont conservées 10 ans conformément à la loi.' : 'We retain your personal data for the duration of your active account, plus 3 years after closure for legal reasons. Billing data is retained for 10 years as required by law.'}</p>

            <h2>{language === 'fr' ? '10. Modifications' : '10. Changes'}</h2>
            <p>{language === 'fr' ? 'Nous pouvons mettre à jour cette politique de confidentialité. Toute modification importante vous sera notifiée par email. La date de dernière mise à jour est indiquée en haut de ce document.' : 'We may update this privacy policy. Any significant changes will be notified by email. The last update date is shown at the top of this document.'}</p>

            <h2>{language === 'fr' ? '11. Contact' : '11. Contact'}</h2>
            <p>{language === 'fr' ? 'Pour toute question concernant cette politique ou vos données personnelles:' : 'For any questions about this policy or your personal data:'}</p>
            <ul>
              <li>{language === 'fr' ? 'Email: privacy@Dbs.io' : 'Email: privacy@Dbs.io'}</li>
              <li>{language === 'fr' ? 'Adresse: 123 Rue de la Sécurité, 75001 Paris, France' : 'Address: 123 Rue de la Sécurité, 75001 Paris, France'}</li>
              <li>{language === 'fr' ? 'DPO: dpo@Dbs.io' : 'DPO: dpo@Dbs.io'}</li>
            </ul>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default Privacy;
