import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mix': path.resolve(__dirname, 'src/estilos/mix'),
      '@var': path.resolve(__dirname, 'src/estilos/var'),
      '@img': path.resolve(__dirname, 'src/assets/imagenes'),
      '@anim': path.resolve(__dirname, 'src/estilos/animaciones'),
    },
  },
})
