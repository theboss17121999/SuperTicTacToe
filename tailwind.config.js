/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      }
    },
  },
  plugins: [],
}
