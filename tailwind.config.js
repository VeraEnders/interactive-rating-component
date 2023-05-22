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
        accent: 'hsl(var(--clr-orange) / 100%)',
        primary: 'rgb(var(--color-primary) / 100%)',
      },
    },
  },
};

