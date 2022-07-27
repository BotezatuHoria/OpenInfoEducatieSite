/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#4E8098',
        'primary': '#A31621',
        'accent2': '#CED3DC',
        'accent3': '#90C2E7',
        'accent4': '#FCF7F8'
      }
    },
  },
  plugins: [],
}