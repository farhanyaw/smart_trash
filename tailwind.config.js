/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        mindgreen: "#6AB49B",
        darkgreen: "#156147",
        whiteswan: "#E5D9C6",
      },

      fontFamily: {
        iblack : ["Inter-Black"],
        ibold : ["Inter-Bold"],
        iextrabold : ["Inter-ExtraBold"],
        iextralight : ["Inter-ExtraLight"],
        ilight : ["Inter-Light"],
        imedium : ["Inter-Medium"],
        iregular : ["Inter-Regular"],
        isemibold : ["Inter-SemiBold"],
        ithin : ["Inter-Thin"],
      }
    },
  },
  plugins: [],
}

