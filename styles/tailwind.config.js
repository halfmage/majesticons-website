const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: colors.trueGray,
      primary: colors.emerald,
      secondary: colors.amber,
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
}