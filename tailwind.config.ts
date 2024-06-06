// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { boxShadow: {
     'white-bottom': '0 40px 70px rgb(15 14 14)',
    },},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
