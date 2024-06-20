/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary-one" : "#01051e",
        "color-primary-two" : "#01EEFF",
        "color-secondary": "#ff7d3b",
        "color-primary-three": "#5046e6"
        

      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md:"10px",
        lg:"50px"
      }
    },

  },
  plugins: [],
}

