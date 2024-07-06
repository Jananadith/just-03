import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/just-03/",
  plugins: [react()],
  server: {
    host: true,
  }
})
