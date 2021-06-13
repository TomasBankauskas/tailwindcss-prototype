const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      colors:{
        primary: {
          DEFAULT: '#4ea8de',
          dark: '#5390d9',
        },
        secondary: {
          DEFAULT: '#1F2937',
          dark: '#171f29',
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      const buttons = {
        '.sb-btn': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.primary.DEFAULT')}`,
          boxShadow: `4px 4px 0 0 ${theme('colors.primary.DEFAULT')}`,
          color: theme('colors.primary.DEFAULT'),
          '&:hover': {
            boxShadow: `0 0 0 ${theme('colors.primary.DEFAULT')}`,
          }
        },
        '.sb-btn-secondary': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.white')}`,
          boxShadow: `4px 4px 0 0 ${theme('colors.white')}`,
          color: theme('colors.white'),
          '&:hover': {
            boxShadow: `0 0 0 ${theme('colors.white')}`,
          }
        }
      }
      addComponents(buttons)
    })
  ],
};
