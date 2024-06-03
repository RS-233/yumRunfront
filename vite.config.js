import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/user":"https://yumrun-1.onrender.com"
    }
  }
  plugins: [react()],
})
