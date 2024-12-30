/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#f2f0ff',
        black: '#151414',
        primary: {
          50: '#f2f0ff',
          100: '#e8e4ff',
          200: '#d4cdff',
          300: '#b6a5ff',
          400: '#9372ff',
          500: '#7139ff',
          600: '#6312ff',
          700: '#5500ff',
          800: '#4700d8',
          900: '#3e02b6',
          950: '#210078',
        },
      },
    },
  },
  plugins: [],
};
