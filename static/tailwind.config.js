/* npx tailwindcss -i ./css/global.css -o ./css/tailwind.css --watch */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../content/*.md", "../layouts/**/*.html", "./css/*.css"],
  theme: {
    extend: {},
  },
  plugins: [],
};