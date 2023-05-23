/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Overpass', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'orange': 'hsl(25, 97%, 53%)',
        'grey-light': 'hsl(217, 12%, 63%)',
        'grey-medium': 'hsl(216, 12%, 54%)',
        'blue-dark': 'hsl(213, 19%, 18%)',
        'blue-very-dark': 'hsl(216, 12%, 8%)',
      },
    },
  },
};