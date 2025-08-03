/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
       fontFamily: {
        sans: [ "sans-serif","Poppins"], // replace with "Poppins" or others if needed
      },
    },
  },
  plugins: [],
};
