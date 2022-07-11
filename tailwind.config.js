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
