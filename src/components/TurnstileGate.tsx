interface TurnstileGateProps {
  children: React.ReactNode;
}

// Disable Turnstile verification when the env flag is set to 'true'.
// Useful for disabling Cloudflare checks during builds or for hosts
// that reject third-party verification flows.
const TURNSTILE_DISABLED = import.meta.env.VITE_DISABLE_TURNSTILE === 'true';

const TurnstileGate = ({ children }: TurnstileGateProps) => {
  // Early return if Turnstile is disabled - prevents loading the Turnstile library
  if (TURNSTILE_DISABLED) {
    return <>{children}</>;
  }

  // If Turnstile is enabled but we reach here, show error message
  // This prevents the app from loading Cloudflare scripts
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg-primary)"
    }}>
      <div style={{
        textAlign: "center",
        padding: "40px",
        background: "var(--bg-card)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-color)",
        maxWidth: "500px"
      }}>
        <i className="fas fa-info-circle" style={{ fontSize: "3rem", color: "var(--accent-primary)", marginBottom: "20px" }}></i>
        <h2 style={{ marginBottom: "16px" }}>Security Verification Disabled</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
          Cloudflare Turnstile verification is currently disabled.
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
          To enable verification, remove or set VITE_DISABLE_TURNSTILE to false in your environment configuration.
        </p>
      </div>
    </div>
  );
};

export default TurnstileGate;
