/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./*.html', './assets/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'], // Add Cairo as a custom font
      },
      colors: {
        themeBlue: '#1c2373', // Custom Blue
        themeLightBlue: '#F5F8FF', // Custom Light Blue
        themeGreen: '#54ed69', // Custom Green
        themeSky: '#126ee8', // Custom Sky
      },
      boxShadow: {
        theme: '0px 10px 14px rgba(0, 0, 0, 0.1)', // Custom shadow
      },
    },
  },
};
