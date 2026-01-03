/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1C1C", // Charcoal Black
        secondary: "#8E8E8E", // Warm Gray
        accent: "#D4AF37", // Light Gold
        background: "#F9F9F9", // Off-White
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
