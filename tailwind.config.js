module.exports = {
  content: [
    './layout/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'sans-serif'],
      },

      textColor: (theme) => theme('colors'),
      textColor: {
        gray: {
          dark: '#bbbbbb'
        },
        red: {
          dark: '#ff0000'
        },
        green: {
          dark: '#31d041'
        }
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        gray: '#eee',
        green: '#31d041',
        avai: 'rgba(0, 0, 0, 0.5)',
        circle: 'rgba(49, 208, 65, 0.43)',
        red: '#d90a2c',
      }),
      padding: {
        st: '87px',
        sy: '101px',
        sf: '3px',
      },
      margin: {
        gh: '138px',
      },
      inset: {
        21: '50px',
      },
      width: {
        jj: '15.4px',
      },
      height: {
        jk: '15.4px',
        hj: '52px',
      },
      borderRadius: {
        kl: '5px',
        hj: '15px',
      },
      fontSize: {
        su: '38px',
      },
      gradientColorStops: (theme) => ({
        ...theme('colors'),
        black: '#000000',
        light: 'rgba(0, 0, 0, 0)',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}