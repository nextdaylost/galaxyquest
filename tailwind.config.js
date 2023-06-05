/** @type {import('tailwindcss').Config} */
import * as colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: colors.indigo,
      },
    },
  },
  plugins: [],
};
