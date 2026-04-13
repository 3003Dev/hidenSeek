# 🔒 Configuration du Proxy pour Masquer Supabase

Ce guide explique comment configurer un reverse proxy pour **masquer complètement** que vous utilisez Supabase.

## 🎯 Objectif

- ❌ **Avant** : Les requêtes vont directement vers `mwkamemnxhwmxpkmjief.supabase.co` (visible dans Network)
- ✅ **Après** : Les requêtes vont vers `api.see-know.eu` (impossible de savoir que c'est Supabase)

## 📋 Étapes d'installation

### Option 1 : Cloudflare Worker (Recommandé - Gratuit)

1. **Créer le Worker**
   - Allez sur [dash.cloudflare.com](https://dash.cloudflare.com)
   - Cliquez sur **Workers & Pages**
   - Cliquez sur **Create Worker**
   - Donnez-lui un nom : `supabase-proxy`

2. **Copier le code**
   - Ouvrez le fichier `cloudflare-proxy-worker.js`
   - Copiez tout le contenu
   - Collez-le dans l'éditeur Cloudflare
   - Cliquez sur **Save and Deploy**

3. **Configurer le domaine**
   - Allez dans **Workers & Pages** > Votre worker
   - Onglet **Triggers**
   - Section **Custom Domains**
   - Cliquez sur **Add Custom Domain**
   - Entrez : `api.see-know.eu`
   - Cliquez sur **Add Domain**

4. **Configurer les routes**
   - Dans **Routes**, ajoutez :
     - Route : `api.see-know.eu/*`
     - Worker : `supabase-proxy`
   - Sauvegardez

### Option 2 : Nginx (Pour serveur dédié)

Si vous avez votre propre serveur avec Nginx :

```nginx
server {
    listen 443 ssl http2;
    server_name api.see-know.eu;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        # Proxy vers Supabase
        proxy_pass https://mwkamemnxhwmxpkmjief.supabase.co;

        # Headers CORS
        add_header 'Access-Control-Allow-Origin' '*' always;
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, PATCH, OPTIONS' always;
        add_header 'Access-Control-Allow-Headers' 'authorization, x-client-info, apikey, content-type, x-api-key, prefer' always;

        # Ajouter l'apikey Supabase
        proxy_set_header apikey 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13a2FtZW1ueGh3bXhwa21qaWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDg1MDUsImV4cCI6MjA4MjkyNDUwNX0.hgjhqj_x_70K-XN3YfYoTVJ_1Kl4HWVtFoxgKmZpnzc';

        # Masquer les headers Supabase
        proxy_hide_header sb-gateway-version;
        proxy_hide_header sb-project-ref;

        # Préserver les autres headers
        proxy_set_header Host $proxy_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

### Option 3 : Apache (Pour serveur avec Apache)

```apache
<VirtualHost *:443>
    ServerName api.see-know.eu

    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/key.pem

    # Activer le proxy
    ProxyPreserveHost Off
    ProxyPass / https://mwkamemnxhwmxpkmjief.supabase.co/
    ProxyPassReverse / https://mwkamemnxhwmxpkmjief.supabase.co/

    # Ajouter les headers CORS
    Header always set Access-Control-Allow-Origin "*"
    Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    Header always set Access-Control-Allow-Headers "authorization, x-client-info, apikey, content-type, x-api-key, prefer"

    # Ajouter l'apikey Supabase
    RequestHeader set apikey "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13a2FtZW1ueGh3bXhwa21qaWVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjczNDg1MDUsImV4cCI6MjA4MjkyNDUwNX0.hgjhqj_x_70K-XN3YfYoTVJ_1Kl4HWVtFoxgKmZpnzc"

    # Masquer les headers Supabase
    Header unset sb-gateway-version
    Header unset sb-project-ref
</VirtualHost>
```

## ✅ Vérification

Une fois configuré, testez que tout fonctionne :

```bash
# Test 1 : Vérifier que le proxy répond
curl -I https://api.see-know.eu/auth/v1/health

# Test 2 : Vérifier qu'aucun header Supabase n'est visible
curl -I https://api.see-know.eu/rest/v1/ | grep -i supabase
# Devrait ne rien retourner

# Test 3 : Tester l'authentification
curl -X POST https://api.see-know.eu/auth/v1/signup \
  -H "Content-Type: application/json" \
  -H "apikey: sk_live_prod_2024_Dbs_public_access_token_v1" \
  -d '{"email":"test@example.com","password":"Test123!"}'
```

## 🔐 Sécurité Supplémentaire

Pour une sécurité maximale, vous pouvez également :

1. **Bloquer l'accès direct à Supabase** dans votre firewall
2. **Utiliser un WAF** (Web Application Firewall) pour protéger votre API
3. **Limiter le rate limiting** pour éviter les abus
4. **Ajouter une authentification supplémentaire** (API keys personnalisées)

## 📝 Notes importantes

- ⚠️ Le faux token `sk_live_prod_2024_Dbs_public_access_token_v1` est **remplacé automatiquement** par le vrai token Supabase dans le worker
- ⚠️ Après le déploiement du proxy, **rebuilder le frontend** avec `npm run build`
- ⚠️ Les WebSockets Realtime ne fonctionneront pas via le proxy HTTP (désactivez avec `VITE_DISABLE_REALTIME=true`)
