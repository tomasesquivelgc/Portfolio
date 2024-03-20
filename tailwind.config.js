/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      night: '#0A0B0B',
      richBlack: '#0A1623',
      argBlue: '#4CA8EA',
      magnolia: '#FCF7FF',
    },
    extend: {
      fontFamily: {
        monts: ['Montserrat', 'sans-serif'],
        gentium: ['Gentium Book Plus', 'serif'],
        chivo: ['Chivo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
