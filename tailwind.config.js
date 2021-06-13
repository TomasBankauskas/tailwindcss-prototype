module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors:{
        primary: {
          DEFAULT: '#4801FF',
          dark: '#3601bf',
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
  plugins: [],
};
