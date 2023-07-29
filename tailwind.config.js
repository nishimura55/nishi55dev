/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,tsx}', './src/components/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        pageContent: '640px',
      },
      backgroundColor: {
        primary: '#0A4D68',
        secondary: '#ECF9FF',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hidden-but-accessible': {
          position: 'absolute',
          clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
      })
    },
  ],
}
