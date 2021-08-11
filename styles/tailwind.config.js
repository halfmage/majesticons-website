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
      primary: '#59C173',
      secondary: '#5D26C1',
      tert: '#a17fe0',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
}