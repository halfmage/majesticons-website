const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  content: ["./_site/**/*.{html,css,js}"],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: colors.gray,
      primary: '#06B6D4',
      secondary: '#3B82F6',
      yellow: colors.yellow
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif']
    },
  },
  variants: {},
  plugins: [],
}