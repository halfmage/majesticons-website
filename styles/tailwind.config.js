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
      primary: '#12F4F0',
      secondary: '#FF0DB7',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
}