/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        marck: ['Marck Script', 'cursive'],
        caudex: ['Caudex'],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
};
