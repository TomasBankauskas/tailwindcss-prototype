const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');
const { scale } = require('tailwindcss/defaultTheme');

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
          DEFAULT: '#00b4d8',
          dark: '#0096c7',
        }
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
          backgroundColor: theme('colors.primary.DEFAULT'),
          borderRadius: '4px',
          color: theme('colors.white'),
          transition: '.2s ease',
          '&:hover': {
            backgroundColor: theme('colors.primary.dark'),
          }
        },
        '.sb-btn-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.primary.DEFAULT')}`,
          borderRadius: '4px',
          color: theme('colors.primary.DEFAULT'),
          transition: '.2s ease',
          '&:hover': {
            borderColor: theme('colors.primary.dark'),
            color: theme('colors.primary.dark'),
          }
        },
        '.sb-btn-light': {
          backgroundColor: theme('colors.white'),
          borderRadius: '4px',
          color: theme('colors.primary.DEFAULT'),
          transition: '.2s ease',
          '&:hover': {
            backgroundColor: theme('colors.gray.100'),
          }
        },
        '.sb-btn-light-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.white')}`,
          borderRadius: '4px',
          color: theme('colors.white'),
          transition: '.2s ease',
          '&:hover': {
            borderColor: theme('colors.gray.100'),
            color: theme('colors.gray.100'),
          }
        },
       /*
        '.sb-btn': {
          backgroundColor: theme('colors.primary.DEFAULT'),
          borderRadius: '9999px',
          color: theme('colors.white'),
          transform: 'scale(1,1)',
          transition: '.3s ease',
          '&:hover': {
            transform: 'scale(1.05,1.05)',
          }
        },
        '.sb-btn-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.primary.DEFAULT')}`,
          borderRadius: '9999px',
          color: theme('colors.primary.DEFAULT'),
          transition: '.2s ease',
          '&:hover': {
            transform: 'scale(1.05,1.05)',
          }
        },
        '.sb-btn-light': {
          backgroundColor: theme('colors.white'),
          borderRadius: '9999px',
          color: theme('colors.primary.DEFAULT'),
          transition: '.2s ease',
          '&:hover': {
            transform: 'scale(1.05,1.05)',
          }
        },
        '.sb-btn-light-outline': {
          backgroundColor: 'transparent',
          border: `2px solid ${theme('colors.white')}`,
          borderRadius: '9999px',
          color: theme('colors.white'),
          transition: '.2s ease',
          '&:hover': {
            transform: 'scale(1.05,1.05)',
          }
        },
        */
      }
      addComponents(buttons)
    })
  ],
};
