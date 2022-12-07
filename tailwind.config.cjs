/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ["'Archivo', sans-serif"]
      },
      backgroundImage: {
        'hero': "url('./src/assets/bg-hero.jpg')"
      }
    },
  },
  plugins: [],
}
