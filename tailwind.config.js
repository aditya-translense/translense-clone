/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#27AE60',
        'primary-light': '#45A247',
        secondary: '#283C86',
        'clr-yellow': '#FFC107',
        'primary-gray': '#212529',
        'secondary-gray': '#757575',
        'green-shade': '#45a24766',
      },
    },
  },
  plugins: [],
};
