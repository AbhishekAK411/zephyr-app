/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'mac': '0 5px 10px rbga(0,0,0,0.5)'
      }
    },
  },
  plugins: [],
})

