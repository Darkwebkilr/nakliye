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
          DEFAULT: "#8B5CF6", // Electric Violet
          dark: "#6D28D9",
          light: "#C4B5FD",
        },
        secondary: {
          DEFAULT: "#0F172A", // Deep Slate
          dark: "#020617",
          light: "#1E293B",
        },
        accent: {
          DEFAULT: "#10B981", // Emerald
          neon: "#34D399",
        },
        background: "#020617",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
