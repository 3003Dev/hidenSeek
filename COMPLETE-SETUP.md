# ✅ Configuration Complète - Dbs

## 📋 Résumé des changements

Tous les fichiers ont été modifiés pour:
1. ✅ Désactiver Cloudflare Turnstile
2. ✅ Masquer complètement Supabase (proxy Cloudflare Worker)
3. ✅ Masquer breachhub.org de tous les logs et erreurs
4. ✅ Fixer les erreurs CORS
5. ✅ Build fonctionnel sans obfuscation cassant les API keys

---

## 🔧 ÉTAPE 1: Mettre à jour le Worker Cloudflare

### Instructions:

1. Allez sur https://dash.cloudflare.com
2. **Workers & Pages** → Trouvez votre worker `supabase-proxy`
3. Cliquez sur **Quick Edit** ou **Edit Code**
4. **REMPLACEZ TOUT LE CODE** par celui-ci:

```javascript
/**
 * Cloudflare Worker pour proxifier les requêtes Supabase
 * Cela masque complètement que vous utilisez Supabase
 */

const SUPABASE_URL = 'https://mwkamemnxhwmxpkmjief.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13a2FtZW1ueGh3bXhwa21qaWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDg1MDUsImV4cCI6MjA4MjkyNDUwNX0.hgjhqj_x_70K-XN3YfYoTVJ_1Kl4HWVtFoxgKmZpnzc';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Lire l'origin de la requête
  const origin = request.headers.get('Origin');
  const allowedOrigins = ['https://see-know.eu', 'http://localhost:5174', 'http://localhost:5173'];
  const corsOrigin = allowedOrigins.includes(origin) ? origin : 'https://see-know.eu';

  // CORS Preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': corsOrigin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key, prefer, x-supabase-api-version, accept-profile',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
        'Vary': 'Origin',
      }
    });
  }

  try {
    const url = new URL(request.url);

    // Remplacer votre domaine par l'URL Supabase
    const supabaseUrl = new URL(url.pathname + url.search, SUPABASE_URL);

    // Copier tous les headers mais remplacer/ajouter les headers Supabase
    const headers = new Headers(request.headers);

    // Convertir le faux token public en vrai token Supabase
    const authHeader = headers.get('authorization');
    if (authHeader && authHeader.includes('sk_live_prod_2024_Dbs_public_access_token_v1')) {
      headers.set('authorization', `Bearer ${SUPABASE_ANON_KEY}`);
    }

    // Ajouter l'apikey Supabase
    headers.set('apikey', SUPABASE_ANON_KEY);

    // Supprimer les headers qui pourraient causer des problèmes
    headers.delete('host');
    headers.delete('cf-connecting-ip');
    headers.delete('cf-ray');

    // Faire la requête vers Supabase
    const response = await fetch(supabaseUrl.toString(), {
      method: request.method,
      headers: headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.blob() : undefined,
    });

    // Copier la réponse avec les headers CORS
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('Access-Control-Allow-Origin', corsOrigin);
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', 'authorization, x-client-info, apikey, content-type, x-api-key, prefer, x-supabase-api-version, accept-profile');
    newResponse.headers.set('Access-Control-Allow-Credentials', 'true');
    newResponse.headers.set('Vary', 'Origin');

    // Supprimer tous les headers qui révèlent Supabase
    newResponse.headers.delete('sb-gateway-version');
    newResponse.headers.delete('sb-project-ref');

    return newResponse;
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Proxy error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': corsOrigin,
        'Access-Control-Allow-Credentials': 'true',
        'Vary': 'Origin',
      }
    });
  }
}
```

5. Cliquez sur **Save and Deploy**
6. Attendez le déploiement (quelques secondes)

---

## 🚀 ÉTAPE 2: Déployer le nouveau build

Les fichiers suivants ont été modifiés et un nouveau build a été créé:

### Fichiers modifiés:
- ✅ `.env` - Configuration avec Worker URL et flags de désactivation
- ✅ `index.html` - CSP sans breachhub.org
- ✅ `src/lib/supabase.ts` - Suppression des logs breachhub
- ✅ `supabase/functions/search/index.ts` - Erreurs génériques
- ✅ `dist/*` - Nouveau build avec tous les changements

### Déployez le dossier `dist`:
1. Prenez tout le contenu du dossier `dist/`
2. Uploadez-le sur votre hébergeur
3. Remplacez tous les anciens fichiers

---

## 🎯 Vérifications après déploiement

1. **Ouvrez votre site** https://see-know.eu
2. **Ouvrez la console** (F12 → Console)
3. **Ouvrez Network** (F12 → Network)
4. **Essayez de vous connecter**

### ✅ Ce que vous NE devez PAS voir:
- ❌ `supabase.co` dans le Network tab
- ❌ `breachhub.org` dans le Network tab ou console
- ❌ Erreurs CORS
- ❌ Erreurs WebSocket
- ❌ Headers `sb-gateway-version` ou `sb-project-ref`

### ✅ Ce que vous DEVEZ voir:
- ✅ Requêtes vers `supabase-proxy.tiny-wave-2fa1.workers.dev`
- ✅ Connexion fonctionnelle
- ✅ Console propre (ou presque)

---

## 🔍 En cas de problème

### Erreur "Failed to fetch" ou CORS:
→ Vérifiez que le Worker est bien déployé avec le nouveau code

### Erreur "No API key found":
→ Le build a désactivé l'obfuscation agressive, cela devrait fonctionner

### Erreur avec un header manquant:
→ Faites une capture d'écran de l'erreur console et vérifiez le nom du header

### breachhub.org apparaît encore:
→ Vérifiez que vous avez bien uploadé le nouveau build (dossier `dist`)
→ Videz le cache du navigateur (Ctrl+Shift+Del)

---

## 📊 Architecture finale

```
Navigateur (see-know.eu)
    ↓
    └─→ supabase-proxy.tiny-wave-2fa1.workers.dev
            ↓
            └─→ mwkamemnxhwmxpkmjief.supabase.co (caché)
                    ↓
                    └─→ Edge Functions → breachhub.org (caché)
```

**Ce qui est visible publiquement:**
- `supabase-proxy.tiny-wave-2fa1.workers.dev`
- Token factice: `sk_live_prod_2024_Dbs_public_access_token_v1`

**Ce qui est caché:**
- Vraie URL Supabase
- Vrai token Supabase
- breachhub.org
- Tous les headers Supabase

---

## ✅ FAIT

Toutes les modifications sont appliquées. Il ne reste plus qu'à:
1. Mettre à jour le code du Worker Cloudflare
2. Déployer le dossier `dist` sur l'hébergeur
3. Tester!
