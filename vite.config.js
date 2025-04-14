import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // Import React plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),  // Include React plugin
    tailwindcss(),
  ],
})