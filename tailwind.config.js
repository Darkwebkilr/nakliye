/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0052FF", // Canlı Modern Mavi
          dark: "#0035A3",
          light: "#EBF2FF",
        },
        secondary: {
          DEFAULT: "#0A1128", // Çok Koyu Lacivert (Siyah yerine)
          light: "#1C2541",
        },
        accent: "#00D1FF", // Turkuaz/Açık Mavi vurgu
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
