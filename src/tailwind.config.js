/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        background: "#030712",
        primary: '#14b8a6',
        dark: '#0f172a',
        text: '#ffffff',
        secondary: '#f8fafc',
        logo: "#f1f5f9",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}