const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Overpass', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}

