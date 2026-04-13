#!/bin/bash

# 🔒 SECURITY CHECKLIST - Dbs Build
# This script verifies all security measures are in place

echo "🔍 VÉRIFICATION DE SÉCURITÉ - BUILD OBFUSCATION"
echo "==============================================="
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check counter
PASSED=0
FAILED=0
WARNINGS=0

# Function to print status
check_status() {
  if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ PASS${NC} - $1"
    ((PASSED++))
  else
    echo -e "${RED}❌ FAIL${NC} - $1"
    ((FAILED++))
  fi
}

# Function to print warning
print_warning() {
  echo -e "${YELLOW}⚠️  WARN${NC} - $1"
  ((WARNINGS++))
}

echo "1️⃣  Vérification de la structure des fichiers..."
echo ""

# Check if logger.ts exists
if [ -f "src/lib/logger.ts" ]; then
  echo -e "${GREEN}✅ PASS${NC} - logger.ts exists"
  ((PASSED++))
else
  echo -e "${RED}❌ FAIL${NC} - logger.ts missing"
  ((FAILED++))
fi

# Check if storageCleanup.ts exists
if [ -f "src/lib/storageCleanup.ts" ]; then
  echo -e "${GREEN}✅ PASS${NC} - storageCleanup.ts exists"
  ((PASSED++))
else
  echo -e "${RED}❌ FAIL${NC} - storageCleanup.ts missing"
  ((FAILED++))
fi

# Check vite.config.ts has drop_console
if grep -q "drop_console.*true" "vite.config.ts"; then
  echo -e "${GREEN}✅ PASS${NC} - Terser drop_console configured"
  ((PASSED++))
else
  echo -e "${RED}❌ FAIL${NC} - Terser drop_console not found"
  ((FAILED++))
fi

echo ""
echo "2️⃣  Vérification des imports dans les fichiers source..."
echo ""

# Check main.tsx imports storageCleanup
if grep -q "cleanLocalStorage" "src/main.tsx"; then
  echo -e "${GREEN}✅ PASS${NC} - main.tsx imports cleanLocalStorage"
  ((PASSED++))
else
  echo -e "${RED}❌ FAIL${NC} - main.tsx missing cleanLocalStorage import"
  ((FAILED++))
fi

# Check main.tsx calls cleanLocalStorage
if grep -q "cleanLocalStorage()" "src/main.tsx"; then
  echo -e "${GREEN}✅ PASS${NC} - main.tsx calls cleanLocalStorage()"
  ((PASSED++))
else
  echo -e "${RED}❌ FAIL${NC} - main.tsx doesn't call cleanLocalStorage()"
  ((FAILED++))
fi

# Check all component files use logger
echo ""
echo "3️⃣  Vérification de l'utilisation du logger..."
echo ""

files_to_check=(
  "src/lib/autoBadges.ts"
  "src/pages/Home.tsx"
  "src/pages/Contact.tsx"
  "src/pages/About.tsx"
  "src/components/SettingsModal.tsx"
  "src/components/Navbar.tsx"
  "src/components/InboxModal.tsx"
)

for file in "${files_to_check[@]}"; do
  if [ -f "$file" ]; then
    if grep -q "import.*logger" "$file" || grep -q "from.*logger" "$file"; then
      echo -e "${GREEN}✅ PASS${NC} - $file imports logger"
      ((PASSED++))
    else
      print_warning "$file doesn't import logger"
    fi
  fi
done

echo ""
echo "4️⃣  Vérification de l'absence de console directs..."
echo ""

# Check for console.log patterns (should be minimized)
if grep -r "console\.log\|console\.error\|console\.warn" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | grep -v "logger" | grep -v "^Binary" > /dev/null 2>&1; then
  print_warning "Some console.* calls still found in source (will be removed by Terser)"
else
  echo -e "${GREEN}✅ PASS${NC} - No direct console calls found (using logger)"
  ((PASSED++))
fi

echo ""
echo "5️⃣  Vérification du script d'obfuscation..."
echo ""

if [ -f "scripts/obfuscate-build.js" ]; then
  if grep -q "removeConsoleLogs" "scripts/obfuscate-build.js"; then
    echo -e "${GREEN}✅ PASS${NC} - obfuscate-build.js has removeConsoleLogs"
    ((PASSED++))
  else
    print_warning "obfuscate-build.js may need console removal enhancement"
  fi
else
  echo -e "${RED}❌ FAIL${NC} - obfuscate-build.js not found"
  ((FAILED++))
fi

echo ""
echo "6️⃣  Vérification du package.json..."
echo ""

if grep -q '"build".*"obfuscate-build.js"' "package.json"; then
  echo -e "${GREEN}✅ PASS${NC} - Build script runs obfuscation"
  ((PASSED++))
else
  print_warning "package.json build script may not run obfuscate-build.js"
fi

echo ""
echo "========================================="
echo "📊 RÉSULTATS FINAUX"
echo "========================================="
echo -e "${GREEN}✅ Passed: $PASSED${NC}"
echo -e "${RED}❌ Failed: $FAILED${NC}"
echo -e "${YELLOW}⚠️  Warnings: $WARNINGS${NC}"
echo ""

if [ $FAILED -eq 0 ]; then
  echo -e "${GREEN}🎉 Tous les tests de sécurité sont PASSÉS!${NC}"
  echo ""
  echo "Prochaines étapes:"
  echo "1. npm run build (pour générer le build production avec obfuscation)"
  echo "2. Vérifier que dist/assets/*.js n'a pas de console.* ou localStorage"
  echo "3. Déployer en production"
  exit 0
else
  echo -e "${RED}⚠️  Certains tests ont échoué. Veuillez corriger les erreurs ci-dessus.${NC}"
  exit 1
fi
