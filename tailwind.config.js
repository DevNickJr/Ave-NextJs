module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E37302',
        // primary: '#ffbf00',
        secondary: '#0040FF',
        // primaryDark: '#2167B4',
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/line-clamp"), 
    require("daisyui"),
    require("prettier-plugin-tailwindcss")
  ],
};
