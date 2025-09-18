import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.JPG'],
  plugins: [
    tailwindcss(),
    react(),
  ],
  // base: '/Tope-adenike/',
  server: {
    allowedHosts: [
      '113625b59f27.ngrok-free.app',
      'd8396997d3e2.ngrok-free.app' 
    ]
  }
})

