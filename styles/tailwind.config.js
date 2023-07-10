const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./_site/**/*.{html,css,js}"],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: colors.zinc,
      primary: '#06B6D4',
      secondary: '#3B82F6',
      yellow: colors.yellow,
      blue: colors.blue,
    },
  },
  variants: {},
  plugins: [],
}