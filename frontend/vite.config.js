import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
      '/entrance': {
        target: 'https://securegate.slt.lk',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/entrance/, ''),
      },
      '/status': {
        target: 'https://securegate.slt.lk',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/status/, ''),
      },
    },
  },
})