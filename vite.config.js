import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pastikan nama ini SAMA PERSIS dengan nama repo GitHub Anda
  base: '/praktikum-8-portofolio-/', // SESUAIKAN dengan nama repository Anda di GitHub
})