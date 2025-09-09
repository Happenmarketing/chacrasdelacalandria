import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'   // usa el plugin correcto
import { fileURLToPath, URL } from 'node:url'  // para el alias @

export default defineConfig({
  plugins: [react()],
  base: '/chacrasdelacalandria/',              // lo dejamos así por ahora
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // alias @ -> /src
    },
  },
})
