const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./_site/**/*.{html,css,js}"],
  theme: {
    extends: {
      colors: {
        white: '#fff',
        black: '#000',
        gray: colors.zinc,
        amber: colors.amber,
        orange: colors.orange,
        blue: colors.blue,
      },
    }
  },
  variants: {},
  plugins: [],
}