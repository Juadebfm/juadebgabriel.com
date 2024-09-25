/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        nunito_sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        primary_black: "#101010",
        primary_white: "#E0E0E2",
        white_mode_bg: "#FDFDFB",
        main_orange: "#fcac3c",
      },
    },
  },
  plugins: [],
};
