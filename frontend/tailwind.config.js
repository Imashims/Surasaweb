const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Include all necessary file types
    "./public/index.html", // Include the public index.html file if applicable
  ],
  theme: {
    extend: {
      backgroundColor: {
        NavBarBG: '#f3f3f3',
        SurasaYellow:'#F0C903',
        SurasaBrown: '#291603'
      },
      fontSize: {
        'body-lg': '3rem',
        'body': '.875rem',
      }
    },
  },
  plugins: [],
});