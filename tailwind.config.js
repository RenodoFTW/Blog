/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beef: '#beeeef',
        lblue: '#add8e6',
        darkblack:'#202427'
      }
    },
  },
  plugins: [],
}