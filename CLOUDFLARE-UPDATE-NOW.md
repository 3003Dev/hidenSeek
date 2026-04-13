# 🚨 MISE À JOUR URGENTE CLOUDFLARE WORKER

## ⚠️ PROBLÈME ACTUEL
Le Worker Cloudflare bloque actuellement les requêtes avec l'erreur CORS.

## ✅ SOLUTION - Suivez ces étapes:

### 1. Ouvrez votre Cloudflare Dashboard
- Allez sur https://dash.cloudflare.com
- Cliquez sur **Workers & Pages**
- Trouvez votre worker (probablement nommé `supabase-proxy`)
- Cliquez sur **Edit Code** ou **Quick Edit**

### 2. Remplacez TOUT le code par celui-ci:

```javascript
/**
 * Cloudflare Worker pour proxifier les requêtes Supabase
 * Cela masque complètement que vous utilisez Supabase
 *
 * INSTALLATION:
 * 1. Allez sur dash.cloudflare.com
 * 2. Workers & Pages > Create Worker
 * 3. Copiez ce code
 * 4. Configurez la route: api.see-know.eu/* -> ce worker
 */

const SUPABASE_URL = 'https://mwkamemnxhwmxpkmjief.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13a2FtZW1ueGh3bXhwa21qaWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDg1MDUsImV4cCI6MjA4MjkyNDUwNX0.hgjhqj_x_70K-XN3YfYoTVJ_1Kl4HWVtFoxgKmZpnzc';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Get origin for CORS
  const origin = request.headers.get('Origin') || '*';

  // CORS Preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-api-key, prefer',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': '86400',
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
    newResponse.headers.set('Access-Control-Allow-Origin', origin);
    newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    newResponse.headers.set('Access-Control-Allow-Headers', 'authorization, x-client-info, apikey, content-type, x-api-key, prefer');
    newResponse.headers.set('Access-Control-Allow-Credentials', 'true');

    // Supprimer tous les headers qui révèlent Supabase
    newResponse.headers.delete('sb-gateway-version');
    newResponse.headers.delete('sb-project-ref');

    return newResponse;
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Proxy error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': 'true',
      }
    });
  }
}
```

### 3. Sauvegardez
- Cliquez sur **Save and Deploy**
- Attendez quelques secondes que le déploiement se termine

### 4. Testez
- Retournez sur votre site https://see-know.eu
- Essayez de vous connecter
- Ça devrait fonctionner maintenant!

## ✅ CHANGEMENTS EFFECTUÉS

1. ✅ **CORS fixé** - Le Worker accepte maintenant les requêtes de n'importe quelle origine
2. ✅ **WebSocket désactivé** - Plus d'erreurs WebSocket dans la console
3. ✅ **CSP mis à jour** - Cloudflare Insights autorisé
4. ✅ **Build refait** - Nouvelle version avec toutes les corrections

## 📝 NOTES IMPORTANTES

- Le faux token `sk_live_prod_2024_Dbs_public_access_token_v1` est automatiquement remplacé par le vrai token Supabase dans le worker
- Aucune référence à "supabase" n'apparaîtra dans le Network tab après ces changements
- Le Worker fonctionne aussi bien depuis localhost que depuis see-know.eu
