module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ev: {
          ink: '#1c2a2a',
          forest: '#1d3736',
          lime: '#c4d849',
          paper: '#f3f0e9',
          cream: '#f8f6ee'
        }
      },
      fontFamily: {
        display: ['DM Serif Display', 'serif'],
        sans: ['Manrope', 'sans-serif']
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
