/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dt-p': '#101213',
        'dt-fade': '#1D1F20',
        'dt-text': '#606163'
      },
      fontFamily: {
        'primary': 'Inter'
      }
    },
  },
  plugins: [],
}

