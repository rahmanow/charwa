module.exports = {
  content: ['./src/**/*.html', "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ch-dark": "#1F454F",
        "ch-orange": "#E9653B",
        "ch-background": "#FBFAF1",
        "ch-green": "#3E503C",
        "ch-lightgreen": "#A5C5C3",
        "ch-yellow": "#F7BC13"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        }
      },
      animation: {
          fadeIn: 'fadeIn 1s ease-in forwards'
      }
    },
    fontFamily: {
      'yeseva': ['"Yeseva One"', 'cursive'],
      'josefin': ['"Josefin Sans"', 'sans-serif'],
      'mitr': ['"Mitr"', 'sans-serif']
    }
  },
  plugins: [],
}
