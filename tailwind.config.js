/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#9EFF00",
        "background-light": "#f8f8f5",
        "background-dark": "#0D0D0D",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "2px",
        "xl": "4px",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
