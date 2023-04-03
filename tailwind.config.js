/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.43,-0.26, 0.49, 1.32)'
      },
      fontSize: {
        '2xs': '0.65rem',
        '3xs': '0.55rem',

      },
      colors: {
        background: {
          DEFAULT: '#110E11'
        },
        primary: {
          DEFAULT: '#5840BA'
        },
        grey: {
          DEFAULT: '#7A787A',
          500: '#1F191F'
        }
      },
      keyframes: {
        'grid-movement': {
          from: { backgroundPositionX: '39px', backgroundPositionY: '39px' },
          to: { backgroundPositionX: '0px', backgroundPositionY: '0px' }
        }
      },
      animation: {
        grid: 'grid-movement linear infinite 2s'
      },
      backgroundColor: {
        main: '#110E11'
      },
    },
  },
  plugins: [
  ],
}
