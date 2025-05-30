/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "soft-purple": "0px 8px 17px #e0e1fa26, 0px 0px 2px #e0e1fa1F",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
