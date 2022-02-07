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
      },
      spacing: {
        'w-card': 'calc(50%-theme(space.8))'
      },
      height: {
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '128': '32rem',
        '168': '42rem',
      }
    },
    fontFamily: {
      'yeseva': ['"Yeseva One"', 'cursive'],
      'josefin': ['"Josefin Sans"', 'sans-serif'],
      'mitr': ['"Mitr"', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'mxsm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}
