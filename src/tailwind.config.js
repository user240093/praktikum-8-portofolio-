/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1e3a8a', // Sesuaikan biru tua di desain
        'brand-yellow': '#fef08a',
        'brand-green': '#bbf7d0',
        'brand-pink': '#fbcfe8',
      }
    },
  },
  plugins: [],
}