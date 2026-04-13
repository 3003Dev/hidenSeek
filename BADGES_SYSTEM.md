# Système de Badges Automatiques Dbs

## Vue d'ensemble

Le système de badges automatiques attribue des badges aux utilisateurs en fonction de leurs actions et de leur statut.

## Badges Disponibles

### 1. 🏆 Early User Badge
- **Attribution**: Automatique pour les 100 premiers utilisateurs à créer un compte
- **Vérification**: À chaque connexion
- **Condition**: L'utilisateur doit être parmi les 100 premiers à avoir le badge `early`

### 2. 🧪 Beta Tester Badge (`bug_hunter`)
- **Attribution**: Automatique pour les utilisateurs avec le plan **Beta**
- **Vérification**: À chaque connexion
- **Condition**: `user_plans.plan = 'beta'`

### 3. 💰 Buyer Badge
- **Attribution**: Automatique pour tout utilisateur qui achète un plan payant
- **Vérification**: À chaque connexion
- **Condition**: Plan = `beginner`, `pro`, ou `premium`

### 4. 👑 Premium Badge
- **Attribution**: Automatique pour les utilisateurs avec le plan **premium**
- **Vérification**: À chaque connexion
- **Condition**: `user_plans.plan = 'premium'`

### 5. ⭐ VIP Badge
- **Attribution**: Automatique après 100 recherches effectuées
- **Vérification**: Après chaque recherche
- **Condition**: `COUNT(search_history) >= 100`

## Architecture Technique

### Edge Function: `auto-badges`

**Emplacement**: `supabase/functions/auto-badges/index.ts`

**Actions disponibles**:
- `check_early_user` - Vérifier le badge Early User
- `check_beta_tester` - Vérifier le badge Beta Tester
- `check_buyer` - Vérifier le badge Buyer
- `check_premium` - Vérifier le badge Premium
- `check_vip` - Vérifier le badge VIP

**Exemple d'appel**:
```typescript
const { data } = await supabase.functions.invoke('auto-badges', {
  body: {
    userId: 'user-uuid',
    action: 'check_vip'
  }
});
```

### Helper Functions

**Fichier**: `src/lib/autoBadges.ts`

#### `checkAutoBadges(userId, action)`
Vérifie et attribue un badge spécifique pour un utilisateur.

#### `checkAllAutoBadges(userId)`
Vérifie tous les badges automatiques pour un utilisateur (appelé à la connexion).

#### `logSearchAndCheckVIP(userId, query, resultCount)`
Enregistre une recherche dans l'historique et vérifie le badge VIP.

## Table de Base de Données

### `search_history`
```sql
CREATE TABLE search_history (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  query TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  result_count INTEGER DEFAULT 0
);
```

### Migration
Le fichier de migration se trouve dans:
`supabase/migrations/20260109_create_search_history.sql`

## Intégration Frontend

### Dans Home.tsx

1. **À la connexion** (useEffect):
```typescript
useEffect(() => {
  if (user?.id) {
    await checkAllAutoBadges(user.id);
    // Charger les badges depuis la DB...
  }
}, [user?.id]);
```

2. **Après chaque recherche**:
```typescript
const totalResults = bRes.length + sRes.length;
await logSearchAndCheckVIP(user.id, searchQuery, totalResults);
```

## Déploiement

### 1. Déployer l'Edge Function
```bash
npx supabase functions deploy auto-badges
```

### 2. Appliquer la migration
```bash
npx supabase db push
```

Ou manuellement via le Dashboard Supabase:
1. Aller dans SQL Editor
2. Copier le contenu de `20260109_create_search_history.sql`
3. Exécuter la requête

## Sécurité

- Les badges sont vérifiés côté serveur via Edge Functions
- Row Level Security (RLS) est activé sur `search_history`
- Les utilisateurs ne peuvent voir que leur propre historique
- Service Role Key est utilisée dans l'Edge Function pour gérer les badges

## Workflow

```
User Login
    ↓
checkAllAutoBadges()
    ↓
Edge Function vérifie:
  - Early User (100 premiers)
  - Beta Tester (plan beta)
  - Buyer (plans payants)
  - Premium (plan premium)
  - VIP (100 recherches)
    ↓
Badges attribués automatiquement
    ↓
Frontend recharge les badges
    ↓
Badges affichés dans l'UI
```

## Notes Importantes

- Les badges sont **non-révocables** (upsert avec `onConflict`)
- Les vérifications sont **idempotentes** (pas de doublons)
- Le badge VIP est vérifié **après chaque recherche**
- Les autres badges sont vérifiés **à la connexion**
