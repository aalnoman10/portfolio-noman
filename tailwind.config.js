/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "synthwave",
      "halloween",
      "forest",
      "black",
      "dracula",
      "business",
      "night"
    ],
  },
  plugins: [require("daisyui")],
}

