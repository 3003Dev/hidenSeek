import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { signUp } from '../lib/supabase';
import { checkRateLimit, isValidEmail, isValidUsername, isValidPassword } from '../lib/security';
import TurnstileGate from '../components/TurnstileGate';
import MouseGlow from '../components/MouseGlow';

const Register = () => {
  const { t } = useLanguage();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isValidEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (!isValidUsername(username)) {
      setError('Username must be 3-30 characters (letters, numbers, -, _)');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Password must be 8-128 characters');
      return;
    }

    if (password !== confirmPassword) {
      setError(t('register.error.passwordmismatch'));
      return;
    }

    if (!checkRateLimit(`register:${email}`, 3, 60 * 60 * 1000)) {
      setError('Too many registration attempts. Please try again later.');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password, username);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : t('register.error.signup'));
    } finally {
      setLoading(false);
    }
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
          <h1>Créer un compte</h1>
          <p>Rejoignez Dbs gratuitement</p>
        </div>

        {error && (
          <div className="auth-error animate-shake">
            <i className="fas fa-exclamation-circle"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
            <div className="input-wrapper">
              <i className="fas fa-user input-icon"></i>
              <input
                type="text"
                id="username"
                name="username"
                className="form-input form-input-icon"
                placeholder="johndoe"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">{t('register.email_label')}</label>
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
                placeholder="Minimum 8 caractères"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
            <div className="input-wrapper">
              <i className="fas fa-lock input-icon"></i>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="form-input form-input-icon"
                placeholder="Confirmez votre mot de passe"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
                disabled={loading}
              />
              <label htmlFor="terms">
                J'accepte les <Link to="/terms" style={{ color: '#fff' }}>conditions d'utilisation</Link> et la <Link to="/privacy" style={{ color: '#fff' }}>politique de confidentialité</Link>
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block btn-glow" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Création...
              </>
            ) : (
              <>
                Créer mon compte
                <i className="fas fa-arrow-right"></i>
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>Déjà un compte? <Link to="/login">Se connecter</Link></p>
        </div>
      </div>
    </div>
    </TurnstileGate>
  );
};

export default Register;