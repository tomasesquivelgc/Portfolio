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
      modal: '#000000e1',
      prussiaBlue: '#122840',
    },
    extend: {
      fontFamily: {
        monts: ['Montserrat', 'sans-serif'],
        gentium: ['Gentium Book Plus', 'serif'],
        chivo: ['Chivo', 'sans-serif'],
      },
      boxShadow: {
        'inner-custom': 'inset 0 2px 4px 3px rgb(2 9 27 / 0.5)',
      },
    },
  },
  plugins: [],
};
