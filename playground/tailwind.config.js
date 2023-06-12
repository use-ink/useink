/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
        success: {
          500: '#00c900',
        },
        warning: {
          500: '#ffbe54',
        },
        error: {
          500: '#d6502b',
        },
        info: {
          500: '#bc83fb',
        },
      },
      fontFamily: {
        Headings: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
