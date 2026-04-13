# 🔒 Renommer le Worker Cloudflare pour cacher "supabase"

## 🎯 Objectif

Actuellement, l'URL du Worker est: `supabase-proxy.tiny-wave-2fa1.workers.dev`

Le problème: le mot **"supabase"** est visible dans l'URL, ce qui révèle que vous utilisez Supabase.

## 📋 Solution: Créer un nouveau Worker avec un nom neutre

### Étape 1: Créer un nouveau Worker

1. Allez sur https://dash.cloudflare.com
2. **Workers & Pages** → **Create** → **Create Worker**
3. Donnez-lui un nom **NEUTRE** sans "supabase", par exemple:
   - `api-gateway`
   - `backend-proxy`
   - `data-api`
   - `app-gateway`
   - `Dbs-api`

4. Cliquez sur **Deploy**

### Étape 2: Copier le code

1. Une fois créé, cliquez sur **Quick Edit**
2. **REMPLACEZ TOUT LE CODE** par celui du fichier `cloudflare-proxy-worker.js`
3. Cliquez sur **Save and Deploy**

### Étape 3: Mettre à jour le .env

1. Copiez la nouvelle URL du Worker (exemple: `api-gateway.tiny-wave-2fa1.workers.dev`)
2. Ouvrez le fichier `.env` à la racine du projet
3. Remplacez les lignes:

```env
VITE_DB_ENDPOINT=https://api-gateway.tiny-wave-2fa1.workers.dev
VITE_SUPABASE_URL=https://api-gateway.tiny-wave-2fa1.workers.dev
```

(Remplacez `api-gateway` par le nom que vous avez choisi)

### Étape 4: Mettre à jour index.html

Ouvrez `index.html` et changez:

```html
connect-src 'self' https://api-gateway.tiny-wave-2fa1.workers.dev;
```

### Étape 5: Rebuild et déployer

```bash
npm run build
```

Puis uploadez le contenu de `dist/` sur votre hébergeur.

### Étape 6: Supprimer l'ancien Worker (optionnel)

Une fois que tout fonctionne avec le nouveau Worker:

1. Retournez sur Cloudflare Dashboard
2. **Workers & Pages** → Trouvez `supabase-proxy`
3. **Settings** → **Delete Worker**

---

## ✅ Résultat final

Avant:
```
Network tab: supabase-proxy.tiny-wave-2fa1.workers.dev
Console: https://supabase-proxy.tiny-wave-2fa1.workers.dev/...
```

Après:
```
Network tab: api-gateway.tiny-wave-2fa1.workers.dev
Console: https://api.see-know.eu/... (automatiquement masqué par le code)
```

---

## 🚨 Important

- Ne choisissez PAS un nom contenant: `supabase`, `database`, `postgres`, `db`, `sql`
- Choisissez un nom **générique** comme `api`, `gateway`, `backend`, `proxy`, `data`

---

## 💡 Alternative: Utiliser un domaine personnalisé

Si vous voulez utiliser `api.see-know.eu` au lieu de `*.workers.dev`:

1. **Configurez le Worker Route** sur Cloudflare
2. **Ajoutez un enregistrement DNS** CNAME pointant vers le Worker
3. **ATTENTION**: Assurez-vous que Cloudflare Bot Fight Mode ne bloque pas les requêtes

Pour l'instant, l'approche la plus simple est de renommer le Worker.
