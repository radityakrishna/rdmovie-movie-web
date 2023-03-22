/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', 
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mainTheme: '#0C111B', 
        yellowTheme: '#FED530',
      }
    },
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}