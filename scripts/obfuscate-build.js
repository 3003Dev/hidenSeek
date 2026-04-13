#!/usr/bin/env node

/**
 * Script de post-build pour ajouter du code décoy (SAFE)
 * N'altère PAS le code existant - ajoute seulement des fausses pistes à la fin
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, '..', 'dist');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');

// ============================================
// GÉNÉRATION DE NOMS ALÉATOIRES
// ============================================
function generateHexName() {
  return '_0x' + crypto.randomBytes(3).toString('hex');
}

// ============================================
// INJECTION DE FAUSSES RÉFÉRENCES (SAFE - fin du fichier seulement)
// ============================================
function injectDecoyStrings() {
  const decoys = [];

  // Fausses URLs
  decoys.push(`var ${generateHexName()}="https://api.example.com/v1/data";`);
  decoys.push(`var ${generateHexName()}="wss://stream.example.net/live";`);

  // Faux tokens
  decoys.push(`var ${generateHexName()}="sk_live_${crypto.randomBytes(24).toString('base64').replace(/[^a-zA-Z0-9]/g, '')}";`);
  decoys.push(`var ${generateHexName()}="pk_test_${crypto.randomBytes(16).toString('hex')}";`);

  // Faux endpoints
  decoys.push(`var ${generateHexName()}="/api/v2/internal/sync";`);
  decoys.push(`var ${generateHexName()}="/graphql/mutations/update";`);

  // Faux checksums
  decoys.push(`var ${generateHexName()}="${crypto.randomBytes(16).toString('hex')}";`);

  return decoys.join('');
}

// ============================================
// TRAITEMENT D'UN FICHIER JS
// ============================================
function processJsFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalSize = content.length;

    // SAFE: Ajouter UNIQUEMENT des décoys à la fin (ne modifie pas le code existant)
    content = content + injectDecoyStrings();

    // Écrire le fichier modifié
    fs.writeFileSync(filePath, content, 'utf8');

    const newSize = content.length;
    const diff = newSize - originalSize;
    console.log(`✓ ${path.basename(filePath)} (+${diff} bytes de décoy)`);
  } catch (error) {
    console.error(`✗ Error: ${path.basename(filePath)} - ${error.message}`);
  }
}

// ============================================
// POINT D'ENTRÉE
// ============================================
function processAllFiles() {
  console.log('\n🔒 Dbs Decoy Injection (Safe Mode)\n');
  console.log('━'.repeat(40));

  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('❌ Assets directory not found. Run build first.');
    process.exit(1);
  }

  const files = fs.readdirSync(ASSETS_DIR);
  const jsFiles = files.filter(f => f.endsWith('.js') && !f.includes('legacy'));

  console.log(`📦 ${jsFiles.length} fichiers JavaScript à traiter\n`);

  jsFiles.forEach(file => {
    const filePath = path.join(ASSETS_DIR, file);
    processJsFile(filePath);
  });

  console.log('\n━'.repeat(40));
  console.log('✅ Décoys injectés!');
  console.log('📝 Code original intact.\n');
}

processAllFiles();
