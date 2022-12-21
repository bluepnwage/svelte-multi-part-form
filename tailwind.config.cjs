/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "purple-blue": "hsl(243, 100%, 62%)"
      }
    },
    fontFamily: {
      sans: "Ubuntu"
    }
  },
  plugins: []
};
