/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'hero': ["Bebas Neue"],},
    extend: {
      backgroundImage:{
        'login':"url('./src/assets/nikeLogin.jpeg')"
      }
    },
  },
  plugins: [],
}
