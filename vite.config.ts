import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '~Shared', replacement: fileURLToPath(new URL('./src/Shared', import.meta.url)) },
      { find: '~App', replacement: fileURLToPath(new URL('./src/App', import.meta.url)) },
    ],
  },
})
