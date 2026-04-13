import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11', 'chrome >= 49', 'firefox >= 52', 'safari >= 10', 'edge >= 79'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      renderLegacyChunks: true,
      polyfills: [
        'es.symbol',
        'es.promise',
        'es.promise.finally',
        'es.array.iterator',
        'es.array.flat',
        'es.array.flat-map',
        'es.object.entries',
        'es.object.from-entries',
        'es.string.includes',
        'es.string.pad-start',
        'es.string.pad-end',
        'web.dom-collections.iterator',
      ],
    }),
  ],
  build: {
    // Target pour compatibilité maximale
    target: 'es2015',
    // CSS code splitting
    cssCodeSplit: true,
    // Minification agressive
    minify: 'terser',
    terserOptions: {
      compress: {
        // Suppression des logs et debugger
        drop_console: true, // Supprime TOUS les console.* en production
        drop_debugger: true,
        // Obfuscation agressive mais sûre
        passes: 3, // Plus de passes pour meilleure compression
        pure_funcs: ['console.info', 'console.debug', 'console.warn', 'console.log', 'console.error'],
        // Supprime le code mort
        dead_code: true,
        // Optimisations avancées mais sûres pour les APIs
        evaluate: true, // Évalue les expressions constantes
        collapse_vars: true, // Réduit les variables
        reduce_vars: true, // Optimise les variables
        inline: 2, // Inline les fonctions petites
        // Optimisations sûres
        conditionals: true,
        comparisons: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true, // Optimise le hoisting
        keep_fargs: false, // Supprime arguments non utilisés
        keep_fnames: false,
        // Optimisations modérées (safe pour les APIs)
        unsafe: false,
        unsafe_comps: false,
        unsafe_math: true, // Optimise les opérations mathématiques
        unsafe_methods: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false,
        // Obfuscation supplémentaire
        arrows: true, // Convertit en arrow functions
        arguments: true, // Optimise arguments
        join_vars: true, // Combine les déclarations
        sequences: true, // Combine les statements
        side_effects: true, // Supprime code sans effet
      },
      mangle: {
        // Obfuscation maximale des noms de variables
        toplevel: true,
        eval: false,
        keep_fnames: false,
        keep_classnames: false,
        // IMPORTANT: Ne pas obfusquer les propriétés pour les APIs
        properties: false,
        safari10: true,
        // Obfuscation réservée pour les noms courts
        reserved: ['React', 'ReactDOM'], // Protège React
      },
      format: {
        // Suppression de tous les commentaires et espaces
        comments: false,
        // Raccourcis au maximum
        ascii_only: true,
        beautify: false,
        braces: false,
        ecma: 2015,
        indent_level: 0,
        // Code le plus compact possible
        semicolons: false,
        shebang: false,
        webkit: true,
      },
      // Suppression des noms de fonctions pour le debug
      keep_fnames: false,
      keep_classnames: false,
    },
    rollupOptions: {
      output: {
        // Assurer la compatibilité des chunks
        manualChunks: undefined,
        // Noms de fichiers basés sur hash cryptographique
        // Préfixe fixe pour éviter les noms commençant par un tiret
        entryFileNames: 'assets/app-[hash].js',
        chunkFileNames: 'assets/chunk-[hash].js',
        assetFileNames: 'assets/asset-[hash].[ext]',
        // Compacter au maximum
        compact: true,
        // Variables globales obfusquées
        globals: {},
        // Format le plus compact
        generatedCode: {
          constBindings: true,
          objectShorthand: true,
          arrowFunctions: true,
        },
      },
    },
    // Génération de sourcemap désactivée en prod
    sourcemap: false,
  },
  css: {
    devSourcemap: true,
  },
})
