import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { signIn, sendOTP, verifyOTP } from '../lib/supabase';
import { checkRateLimit, resetRateLimit } from '../lib/security';
import TurnstileGate from '../components/TurnstileGate';
import MouseGlow from '../components/MouseGlow';

const Login = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // États pour le système OTP
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [otpSuccess, setOtpSuccess] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email || !email.includes('@')) {
      setError('Invalid email format');
      setLoading(false);
      return;
    }

    if (!checkRateLimit(`login:${email}`, 5, 1 * 60 * 1000)) {
      setError('Too many login attempts. Please try again later.');
      setLoading(false);
      return;
    }

    try {
      const { user } = await signIn(email, password);
      if (user?.email) {
        // Do NOT store PII (email) in localStorage - GDPR violation
        resetRateLimit(`login:${email}`);
      }
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('login.error'));
    } finally {
      setLoading(false);
    }
  };

  // Envoyer le code OTP
  const handleSendOTP = async (e: FormEvent) => {
    e.preventDefault();
    setOtpLoading(true);
    setOtpError('');
    setOtpSuccess('');

    try {
      await sendOTP(forgotEmail);
      setOtpSent(true);
      setOtpSuccess(t('login.otp.sent'));
    } catch (err) {
      setOtpError(err instanceof Error ? err.message : t('login.error'));
    } finally {
      setOtpLoading(false);
    }
  };

  // Vérifier le code OTP et connecter
  const handleVerifyOTP = async (e: FormEvent) => {
    e.preventDefault();
    setOtpLoading(true);
    setOtpError('');

    if (!newPassword || newPassword.length < 8) {
      setOtpError('Password must be at least 8 characters');
      setOtpLoading(false);
      return;
    }

    try {
      await verifyOTP(forgotEmail, otpCode, newPassword);
      setOtpSuccess(t('login.success'));
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (err) {
      setOtpError(err instanceof Error ? err.message : t('login.otp.error'));
    } finally {
      setOtpLoading(false);
    }
  };

  // Fermer le modal et réinitialiser
  const closeForgotPassword = () => {
    setShowForgotPassword(false);
    setForgotEmail('');
    setOtpCode('');
    setNewPassword('');
    setOtpSent(false);
    setOtpError('');
    setOtpSuccess('');
  };

  return (
    <TurnstileGate>
      <MouseGlow />
    <div className="auth-container">
      {/* Background géré par body + MouseGlow */}

      <div className="auth-card animate-fade-in">
        <div className="auth-header">
          <Link to="/" className="logo">
            <span className="logo-text">Dbs</span>
          </Link>
          <h1>{t('login.title')}</h1>
          <p>{t('login.subtitle')}</p>
        </div>

        {error && (
          <div className="auth-error animate-shake">
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">{t('login.email_label')}</label>
            <div className="input-wrapper">
              <i className="fas fa-envelope input-icon"></i>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input form-input-icon"
                placeholder="votre@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <div className="input-wrapper">
              <i className="fas fa-lock input-icon"></i>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input form-input-icon"
                placeholder="Votre mot de passe"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="remember">Se souvenir de moi</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block btn-glow" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Connexion...
              </>
            ) : (
              <>
                Se connecter
                <i className="fas fa-arrow-right"></i>
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>Pas encore de compte? <Link to="/register">S'inscrire</Link></p>
          <p style={{ marginTop: '12px' }}>
            <button
              type="button"
              onClick={() => setShowForgotPassword(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                textDecoration: 'underline',
                fontSize: 'inherit',
                fontFamily: 'inherit'
              }}
            >
              Mot de passe oublié?
            </button>
          </p>
        </div>
      </div>

      {/* Modal Mot de passe oublié / OTP */}
      {showForgotPassword && (
        <div className="otp-overlay" onClick={closeForgotPassword}>
          <div className="otp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="otp-close" onClick={closeForgotPassword}>
              <i className="fas fa-times"></i>
            </button>

            <div className="otp-header">
              <div className="otp-icon">
                <i className={otpSent ? "fas fa-key" : "fas fa-envelope"}></i>
              </div>
              <h2>{otpSent ? t('login.otp.title') : t('login.forgot_password')}</h2>
              <p>
                {otpSent
                  ? `${t('login.otp_sent')} ${forgotEmail}`
                  : t('login.subtitle')
                }
              </p>
            </div>

            {otpError && (
              <div className="otp-error">
                <i className="fas fa-exclamation-circle"></i>
                {otpError}
              </div>
            )}

            {otpSuccess && (
              <div className="otp-success">
                <i className="fas fa-check-circle"></i>
                {otpSuccess}
              </div>
            )}

            {!otpSent ? (
              // Étape 1: Entrer l'email
              <form onSubmit={handleSendOTP}>
                <div className="form-group">
                  <label htmlFor="forgot-email" className="form-label">{t('login.email_label')}</label>
                  <div className="input-wrapper">
                    <i className="fas fa-envelope input-icon"></i>
                    <input
                      type="email"
                      id="forgot-email"
                      className="form-input form-input-icon"
                      placeholder="votre@email.com"
                      required
                      value={forgotEmail}
                      onChange={(e) => setForgotEmail(e.target.value)}
                      disabled={otpLoading}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={otpLoading}>
                  {otpLoading ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Envoyer le code OTP
                    </>
                  )}
                </button>
              </form>
            ) : (
              // Étape 2: Entrer le code OTP et nouveau mot de passe
              <form onSubmit={handleVerifyOTP}>
                <div className="form-group">
                  <label htmlFor="otp-code" className="form-label">Code OTP</label>
                  <div className="input-wrapper">
                    <i className="fas fa-key input-icon"></i>
                    <input
                      type="text"
                      id="otp-code"
                      className="form-input form-input-icon otp-input"
                      placeholder="00000000"
                      required
                      maxLength={8}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                      disabled={otpLoading}
                      autoComplete="one-time-code"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="new-password" className="form-label">Nouveau mot de passe</label>
                  <div className="input-wrapper">
                    <i className="fas fa-lock input-icon"></i>
                    <input
                      type="password"
                      id="new-password"
                      className="form-input form-input-icon"
                      placeholder="Entrez un nouveau mot de passe"
                      required
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      disabled={otpLoading}
                      minLength={8}
                    />
                  </div>
                  <small style={{ color: '#666', marginTop: '4px', display: 'block' }}>
                    Minimum 8 caractères
                  </small>
                </div>

                <button type="submit" className="btn btn-primary btn-block" disabled={otpLoading || otpCode.length < 8 || !newPassword}>
                  {otpLoading ? (
                    <>
                      <span className="spinner"></span>
                      Vérification...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-sign-in-alt"></i>
                      Réinitialiser et Se connecter
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className="btn btn-outline btn-block"
                  style={{ marginTop: '12px' }}
                  onClick={() => {
                    setOtpSent(false);
                    setOtpCode('');
                    setNewPassword('');
                    setOtpError('');
                    setOtpSuccess('');
                  }}
                >
                  <i className="fas fa-arrow-left"></i>
                  {t('login.change_email')}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
    </TurnstileGate>
  );
};

export default Login;