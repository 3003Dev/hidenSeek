import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { cleanLocalStorage } from './lib/storageCleanup'

// Debug: Show loading indicator
console.log('Dbs: main.tsx loading...');

// Clean localStorage from sensitive data on startup
cleanLocalStorage();

// Polyfill pour les navigateurs qui ne supportent pas requestAnimationFrame
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}

// Détection des fonctionnalités CSS non supportées
const checkCSSSupport = () => {
  // Vérifier si @property est supporté
  const supportsProperty = CSS && CSS.registerProperty;

  // Vérifier si conic-gradient est supporté
  const supportsConicGradient = CSS && CSS.supports && CSS.supports('background', 'conic-gradient(red, blue)');

  if (!supportsProperty || !supportsConicGradient) {
    document.documentElement.classList.add('no-conic-gradient');
  }
};

// Exécuter la vérification une fois le DOM prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkCSSSupport);
} else {
  checkCSSSupport();
}

const rootElement = document.getElementById('root');
if (rootElement) {
  console.log('Dbs: Mounting React app...');
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    console.log('Dbs: React app mounted successfully');
  } catch (error) {
    console.error('Dbs: Failed to mount React app:', error);
    rootElement.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;font-family:Inter,sans-serif;text-align:center;padding:20px;">
        <div>
          <h1 style="color:#f00;">Error Loading Dbs</h1>
          <p>Please check the console for details</p>
          <pre style="text-align:left;background:#111;padding:10px;border-radius:5px;overflow:auto;max-width:90vw;">${error}</pre>
        </div>
      </div>
    `;
  }
} else {
  console.error('Dbs: Root element not found!');
}
