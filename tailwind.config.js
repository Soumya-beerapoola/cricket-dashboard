/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors  :{
        "black-1" : "#121b2a",
        "black-2" : "#111a49",
        "blue-1"   :"#4e8a90",
        "card-bg" :"#28323b",
        "card-bg2":"#1e2831",
        "txt-gray": "#71798c"
      },
    },
  },
  plugins: [],
}
