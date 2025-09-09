import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // 👈 aquí el cambio

export default defineConfig({
  plugins: [react()],
  base: '/chacrasdelacalandria/',  // dejamos esto así por ahora
})
