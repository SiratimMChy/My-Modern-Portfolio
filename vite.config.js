import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'gsap'],
          'ui-vendor': ['lucide-react'],
          'components': [
            './src/components/sections/Hero/Hero.jsx',
            './src/components/sections/About/About.jsx',
            './src/components/sections/Skills/Skills.jsx',
            './src/components/sections/Projects/Projects.jsx',
            './src/components/sections/Education/Education.jsx',
            './src/components/sections/Contact/Contact.jsx',
            './src/components/layout/Footer/Footer.jsx',
            './src/components/layout/Navbar/Navbar.jsx',
            './src/components/AiChatbot/AiChatbot.jsx'
          ],
          'ui-components': [
            './src/components/ui/button.jsx',
            './src/components/ui/card.jsx',
            './src/components/ui/badge.jsx',
            './src/components/ui/modern-button.jsx'
          ]
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            return 'assets/[name]-[hash].js'
          }
          return 'assets/chunk-[hash].js'
        }
      }
    },
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger']
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'gsap']
  }
})