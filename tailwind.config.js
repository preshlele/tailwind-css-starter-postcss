const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      amber: colors.amber
    },
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
