import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Design-Solution-agency/", // <--- This is the repo name
  plugins: [react()],
})