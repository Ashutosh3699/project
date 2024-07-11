/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'regal-blue': '#002D4E',
        'blue-color':  '#40BAFF',
        
      },
    },
  },
  plugins: [],
}

