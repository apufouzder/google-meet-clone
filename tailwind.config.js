/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primaryColor: "#24A6AF",
      blackColor: "#17202E",
      grayColor: "#6B758E"
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

