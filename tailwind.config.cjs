/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      Ubuntu: ['Ubuntu', 'sans-serif'],
      Roboto: ['Roboto', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}