/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        malayalam: ['"Noto Serif Malayalam"', 'serif'],
      },
      colors: {
        brand: {
          green: {
            50: '#f0f5f2',
            100: '#dce8e0',
            500: '#3a5f4b',
            600: '#2c4c3b',
            700: '#233d2f',
            900: '#15241b',
          },
          cream: {
            50: '#fdfdfb',
            100: '#faf8f5',
            200: '#f2eee6',
            300: '#e5decb',
          },
          spice: {
            500: '#d96c40',
            600: '#c25e30',
            700: '#9c4822',
          },
          charcoal: {
            800: '#2d2a26',
            900: '#1c1917',
          }
        }
      }
    },
  },
  plugins: [],
}