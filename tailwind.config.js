/** @type {import('tailwindcss').Config} */
// const colors = require("./src/Assests/Images/building.jpg");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "0px", max: "480px" },
      md: { min: "481px", max: "768px" },
      lg: { min: "769px", max: "1279px" },
      xl: "1280px",
    },

    fontFamily: {
      Andika: ["Andika", " sans - serif"],
      Anton: ["Andika", "sans - serif"],
      Rubik: ["Rubik Bubbles", "cursive"],
      Carter: ["Carter One", "cursive"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
