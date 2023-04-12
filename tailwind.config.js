/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-color-dark': '#777',
        'primary': '#00A3E1',
        'dark': '#2C2D2F'
      },
      screens: {
        'xs': '400px',
        // => @media (min-width: 400px) { ... }
      },
      fontSize: {
        'font-inherit': 'inherit'
      },
      fontFamily: {
        'playfair': 'Playfair Display',
        'roboto': 'Roboto',
        'jacques':'Jacques Francois'
      }

    },
    plugins: [],
  }
}
