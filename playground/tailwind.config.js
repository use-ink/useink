/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#e1dcfb',
          200: '#7388ff',
          300: '#3b53fe',
          500: '#151ec3',
          600: '#1119a5',
          800: '#19144f',
        },
      },
      fontFamily: {
        Headings: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
