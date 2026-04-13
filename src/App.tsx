import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { SecurityProvider } from './context/SecurityContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import MouseGlow from './components/MouseGlow';

import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Tickets from './pages/Tickets';
import Login from './pages/Login';
import Register from './pages/Register';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Gdpr from './pages/Gdpr';
import Security from './pages/Security';
import ApiDocs from './pages/ApiDocs';
import Admin from './pages/Admin';

import './styles/style.css';

// Composant pour scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Loader pendant le chargement de l'authentification
const AuthLoader = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-primary)"
    }}>
      <div style={{ textAlign: "center" }}>
        <div style={{
          width: "50px",
          height: "50px",
          border: "4px solid var(--border-color)",
          borderTop: "4px solid var(--accent-primary)",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          margin: "0 auto 20px"
        }}></div>
        <p style={{ color: "var(--text-secondary)" }}>Loading...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

// Layout avec Navbar et Footer (pas pour les pages d'auth)
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

// Layout pour les pages d'authentification (sans Navbar/Footer)
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Wrapper pour gérer le loading state
const AppContent = () => {
  const { loading } = useAuth();

  if (loading) {
    return <AuthLoader />;
  }

  return (
    <>
      <ScrollToTop />
      <MouseGlow />
      <LoginPopup />

      <Routes>
        {/* Pages principales avec layout */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/features" element={<MainLayout><Features /></MainLayout>} />
        <Route path="/pricing" element={<MainLayout><Pricing /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/tickets" element={<MainLayout><Tickets /></MainLayout>} />
        <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
        <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
        <Route path="/gdpr" element={<MainLayout><Gdpr /></MainLayout>} />
        <Route path="/security" element={<MainLayout><Security /></MainLayout>} />
        <Route path="/api-docs" element={<MainLayout><ApiDocs /></MainLayout>} />
        <Route path="/admin" element={<AuthLayout><Admin /></AuthLayout>} />

        {/* Pages d'authentification sans layout */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <SecurityProvider>
        <AuthProvider>
          <LanguageProvider>
            <AppContent />
          </LanguageProvider>
        </AuthProvider>
      </SecurityProvider>
    </Router>
  );
}

export default App;