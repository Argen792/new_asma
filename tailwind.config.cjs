/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#d4a95e",
        "background-light": "#fdf9f3",
        "background-dark": "#1f1b13",
        "ivory": "#FDF9F3",
        "blush-pink": "#F4DADA",
        "lavender-mist": "#E7E2EE",
        "warm-beige": "#EFE6D9",
        "gold-accent": "#D4A95E",
      },
      fontFamily: {
        "display": ["Playfair Display", "serif"],
        "arabic": ["Amiri", "serif"]
      },
      borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
    },
  },
  plugins: [],
}
