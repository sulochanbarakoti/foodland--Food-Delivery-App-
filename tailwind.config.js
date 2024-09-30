/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#ff3131", secondary: "#ffc2c2" },
      backgroundImage: { bg: "./assets/foodbg.png" },
    },
  },
  plugins: [],
};
