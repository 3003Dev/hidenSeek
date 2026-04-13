import { useAuth } from '../context/AuthContext';

const LoginPopup = () => {
  const { showLoginPopup, profile } = useAuth();

  if (!showLoginPopup) return null;

  return (
    <div className="login-popup">
      <div className="login-popup-content">
        <i className="fas fa-check-circle"></i>
        <span>Welcome back{profile?.username ? `, ${profile.username}` : ''}!</span>
      </div>
    </div>
  );
};

export default LoginPopup;
