/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#d2fdde',
          200: '#a5fbbd',
          300: '#77fa9b',
          400: '#4af87a',
          500: '#1df659',
          600: '#17c547',
          700: '#119435',
          800: '#0c6224',
          900: '#063112'
        },
        dark: {
          100: '#ccd1d2',
          200: '#99a3a4',
          300: '#667477',
          400: '#334649',
          500: '#00181c',
          600: '#001316',
          700: '#000e11',
          800: '#000a0b',
          900: '#000506'
        }
      }
    }
  },
  plugins: []
}
