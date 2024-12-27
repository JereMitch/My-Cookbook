import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  optimizeDeps: {
    include: ['@emotion/styled', '@mui/material', '@emotion/react', '@mui/icons-material']
  },
  server: {
    port: 3000
  }
})
