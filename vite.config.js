import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit to 1000kb
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Manual chunking for better code splitting
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'ui-vendor': ['lucide-react'],
          
          // App chunks
          'components': [
            './src/components/Hero.jsx',
            './src/components/About.jsx',
            './src/components/Skills.jsx',
            './src/components/Projects.jsx',
            './src/components/Education.jsx',
            './src/components/Contact.jsx',
            './src/components/Footer.jsx',
            './src/components/Navbar.jsx'
          ],
          'ui-components': [
            './src/components/ui/button.jsx',
            './src/components/ui/card.jsx',
            './src/components/ui/badge.jsx',
            './src/components/ui/modern-button.jsx'
          ]
        },
        // Optimize chunk file names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            return 'assets/[name]-[hash].js'
          }
          return 'assets/chunk-[hash].js'
        }
      }
    },
    // Enable minification with esbuild (default, faster than terser)
    minify: 'esbuild',
    // Remove console.log and debugger in production
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap']
  }
})