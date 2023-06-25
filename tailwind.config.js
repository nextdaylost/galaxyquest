/** @type {import('tailwindcss').Config} */
import { indigo } from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brand: indigo,
      },
    },
  },
  plugins: [],
};
