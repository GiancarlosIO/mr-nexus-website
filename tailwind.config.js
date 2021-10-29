const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#4630AB',
      'primary-dark': '#2B0548',
      'primary-light': '#6669C5',
      'blue-light': '#F9F9FF',
      'blue-darker': '#353353',
      ...colors,
    },
    fontFamily: {
      kaushan: [
        'Kaushan Script',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
