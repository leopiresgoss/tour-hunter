/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
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
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
