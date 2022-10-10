/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {

    extend: {
      backgroundImage: {
      'header-bg': "url('./assets/header.png')"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
],
}
