/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beef: '#beeeef',
        lblue: '#5294ff',
        darkblack:'#202427',
        dblue: '#0a135e'
      }
    },
  },
  plugins: [],
}