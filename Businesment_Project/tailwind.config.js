/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0542c7',
        secondary:'#0957ff',
      }
    },
  },
  plugins: [require('daisyui'),],
}

