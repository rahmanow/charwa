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
        },
        slide: {
          '0%, 16%': { transform: 'translateY(0%)' },
          '20%, 36%': { transform: 'translateY(-16.66%)' },
          '40%, 56%': { transform: 'translateY(-33.32%)' },
          '60%, 76%': { transform: 'translateY(-49.98%)' },
          '80%, 96%': { transform: 'translateY(-66.64%)' },
          '100%': { transform: 'translateY(-83.3%)' }
        }
      },
      animation: {
          fadeIn: 'fadeIn 1s ease-in forwards',
          slide: 'slide 10s ease-out infinite'
      },
      spacing: {
        'w-card': 'calc(50%-theme(space.8))'
      },
      height: {
        '25': '6.25rem',
        '26': '6.6rem',
        '27': '6.85rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '128': '32rem',
        '132': '33rem',
        '136': '34rem',
        '148': '37rem',
        '150': '37.5rem',
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
