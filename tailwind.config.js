/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['Overpass', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      'white': '#FFFFFF',
      'orange': '#FC7613',
      'gray': {
        900: '#141519',
        800: '#171E28', // gradient-bottom
        700: '#202731', // gradient-top
        600: '#262F38', // bg-icons
        500: '#9BA2AC',
      }
    },
    extend: {
      maxWidth: {
        'xs': '20.313rem',
        'md': '25.75rem',
      },
      borderRadius: {
        '4xl': '2.25rem',
      }
    }
  }
};