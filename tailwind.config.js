/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,tsx}', './src/components/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        pageContent: '640px',
      },
    },
  },
  plugins: [],
}
