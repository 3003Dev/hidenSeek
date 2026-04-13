# Dbs Ticket Manager

Application de gestion des tickets de support avec interface moderne sombre.

## Installation

### 1. Installer Python 3.10+

### 2. Installer les dependances

```bash
cd tools/ticket-manager
pip install -r requirements.txt
```

### 3. Configurer Supabase

1. Copier `.env.example` vers `.env`
2. Remplir les valeurs:
   - `SUPABASE_URL`: URL de votre projet Supabase
   - `SUPABASE_SERVICE_KEY`: Cle service role (pas la cle anon!)
   - `ADMIN_USER_ID`: UUID de l'admin qui repond aux tickets

### 4. Executer le SQL

Dans l'editeur SQL de Supabase, executer le contenu de `sql/tickets_schema.sql` pour creer:
- Les tables `tickets`, `ticket_messages`, `admin_users`
- Les policies RLS de securite
- Les fonctions et triggers

### 5. Ajouter un super admin

```sql
INSERT INTO public.admin_users (user_id, role)
VALUES ('VOTRE-UUID-ADMIN', 'super_admin');
```

## Lancer l'application

```bash
python ticket_manager.py
```

## Fonctionnalites

- Liste des tickets avec filtres par statut
- Statistiques en temps reel
- Detail de chaque ticket avec historique des messages
- Repondre aux tickets
- Changer le statut (open, pending, in_progress, resolved, closed)
- Changer la priorite (low, normal, high, urgent)
- Supprimer des tickets

## Structure des fichiers

```
ticket-manager/
  requirements.txt     # Dependances Python
  .env.example         # Template de configuration
  ticket_manager.py    # Application principale
  sql/
    tickets_schema.sql # Schema de base de donnees
```

## Securite

Le fichier SQL inclut:
- Row Level Security (RLS) sur toutes les tables
- Verification des admins via fonction `is_admin()`
- Les utilisateurs ne peuvent voir que leurs propres tickets
- Seuls les admins peuvent repondre avec `is_admin_reply = true`
- Seuls les super_admins peuvent gerer les autres admins
