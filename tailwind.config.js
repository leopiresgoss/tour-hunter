/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    colors: {
      orange: '#ffb400',
      green: '#97bf0f',
      'gray-light': '#efefef',
      'gray-dark': '#7f7f7f',
      gray: '#e2e3e7',
      white: '#fff',
      black: '#000',
      red: '#b90e0a',
      transparent: 'transparent',
      blue: {
        100: '#d2e3f9',
        200: '#a5c8f3',
        300: '#4b91e7',
        400: '#1e75e1',
        500: '#185eb4',
        600: '#124687',
      },
      reddish: {
        100: '#f9d2d6',
        200: '#f3a5ad',
        300: '#e74b5b',
        400: '#e11e32',
        500: '#b41828',
        600: '#87121e',
      },
      greenish: {
        100: '#d2f9d2',
        200: '#a5f3a5',
        300: '#4be74b',
        400: '#1ee11e',
        500: '#18b418',
        600: '#124687',
      },
      cyan: {
        100: '#d2f9f9',
        200: '#a5f3f3',
        300: '#4be7e7',
        400: '#1ee1e1',
        500: '#18b4b4',
        600: '#124687',
      },
      yellowish: {
        100: '#f9f9d2',
        200: '#f3f3a5',
        300: '#e7e74b',
        400: '#e1e11e',
        500: '#b4b418',
        600: '#87871e',
      },
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('tw-elements/dist/plugin'),
  ],
};
