/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lilita': ['Lilita One', 'cursive'],  // Add the custom font here
      },
      width: {
        '7': '5rem',
        '21': '15rem',
        '45': '45rem',
        '72': '18rem',   // Custom width
        '84': '21rem',   // Add more custom sizes if needed
      },
      height: {
        '7': '5rem',
        '21': '15rem',
        '45': '47rem',
        '72': '18rem',   // Custom height
        '84': '21rem',   // Add more custom sizes if needed
      },
      colors:{
        'lightblue' : '#DDFFF7',
        'lightblue1' : '#93E1D8',
        'darkpurple' : '#462255',
        primary: {
          DEFAULT: '#3B82F6',
          50: '#f5f3ff',
          100: '#e0e7ff',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95'
        }
      }
    },
  },
  plugins: [],
}
