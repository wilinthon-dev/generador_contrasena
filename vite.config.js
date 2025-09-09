import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/generador_contrasena/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
