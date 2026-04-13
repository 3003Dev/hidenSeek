# Code Obfuscation & Security

## Vue d'ensemble

Ce projet implémente plusieurs couches d'obfuscation pour masquer l'implémentation backend et protéger les détails techniques.

## Méthodes d'obfuscation

### 1. Variables d'environnement obfusquées

Les variables d'environnement utilisent des noms génériques :
- `VITE_DB_ENDPOINT` au lieu de `VITE_SUPABASE_URL`
- `VITE_DB_PUBLIC_KEY` au lieu de `VITE_SUPABASE_ANON_KEY`

### 2. Nom de clé de stockage personnalisé

La session est stockée sous `sn-session` au lieu de noms révélateurs.

### 3. Messages d'erreur neutres

Tous les messages d'erreur utilisent un langage générique :
- ❌ "Supabase error"
- ✅ "Database error"
- ❌ "Edge Function failed"
- ✅ "Request failed"

### 4. Build optimisé

Le build Vite est configuré pour :
- Supprimer tous les `console.log` et `console.error`
- Obfusquer les noms de variables contenant "supabase"
- Générer des noms de fichiers basés sur hash
- Supprimer tous les commentaires

### 5. Wrapper API

Le fichier `api-client.ts` abstrait complètement la configuration backend.

## Fichiers importants

- `src/lib/supabase.ts` - Client database obfusqué
- `src/lib/api-client.ts` - Configuration API abstraite
- `src/lib/db.ts` - Wrapper avec noms obfusqués
- `vite.config.ts` - Configuration de build avec obfuscation
- `.env` - Variables d'environnement avec noms génériques

## Build de production

```bash
npm run build
```

Le build de production applique automatiquement :
- Minification agressive (3 passes)
- Obfuscation des propriétés
- Suppression des console logs
- Noms de fichiers cryptés

## Vérification

Pour vérifier l'obfuscation après build :

```bash
npm run build
grep -r "supabase" dist/  # Ne devrait rien retourner (ou très peu)
```

## Notes de sécurité

- ✅ Aucune URL backend en dur dans le code
- ✅ Noms de variables obfusqués
- ✅ Messages d'erreur génériques
- ✅ Pas de logs en production
- ✅ CSP strict avec whitelisting
- ✅ Storage avec noms personnalisés
