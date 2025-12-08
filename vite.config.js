import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CORRECCIÓN: Cambiar base: '/' a base: './' para asegurar que los assets se carguen
  // correctamente en entornos de producción con rutas relativas.
  base: './', 
  server: {
    port: 5173
  }
})
