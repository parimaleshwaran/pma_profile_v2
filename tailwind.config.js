module.exports = {
  content: [
    './layout/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans Pro"', 'sans-serif'],
        serif: ['Roboto']
      },

      textColor: (theme) => theme('colors'),
      textColor: {
        gray: {
          dark: '#bbbbbb',
          light: '#c5c5c6',
          you: '#6a696c',
          ques: '#5f6368',
          veri: '#373737',
          fb: '#101d2a',
        },
        red: {
          dark: '#ff0000'
        },
        green: {
          dark: '#31d041'
        },
        pink: {
          dark: '#e3507a',
          marine: '#50e3c2',
        },
        blue: {
          dark: '#59588d',
        },
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        gray: '#eee',
        green: '#31d041',
        avai: 'rgba(0, 0, 0, 0.5)',
        circle: 'rgba(49, 208, 65, 0.43)',
        red: '#d90a2c',
        bla: '#1a191d',
        ref: 'rgba(255, 255, 255, 0.05)',
        gri: '#c4c4c4',
        name: '#262529',
        foo: '#25232b',
        play: 'rgba(0, 0, 0, 0.5)',
        ques: '#6a6a6a',
        click: '#222222',
        arrow: '#313131',
        add: '#f4f4f4',
        card: '#fafafa'
      }),
      backgroundImage: {
        hero: "linear-gradient(13deg, #000 3%, rgba(0, 0, 0, 0) 206%);",
        bor: "linear-gradient(to right, #37353d 50%, rgba(255, 255, 255, 0) 0%);",
        img: "linear-gradient(49deg, rgba(97, 141, 255, 0) 16%, rgba(90, 156, 255, 0.13) 69%);",
      },
      backgroundSize: {
        '16': '15px 1px, 1px 15px',
      },
      boxShadow: {
        fg: '0 0 9px 2px rgba(201, 224, 255, 0.1);',
        hj: ' 0 0 50px 0 rgba(0, 0, 0, 0.5);',
        gh: '0 0 9px 2px rgba(90, 156, 255, 0.13);',
        ff: '2px 2px 10px 0 rgba(0, 0, 0, 0.1);',
      },
      gridTemplateColumns: {
        16: 'auto auto auto auto',
        17: '426px auto auto',
      },
      gridTemplateRows: {
        17: '140px 80px 45px',
      },
      gap: {
        '11': '30px',
      },
      gridRow: {
        'span-16': 'span 2',
        'span-17': 'span 16',
        'span-14': 'span 3',
        'span-9': 'span 14',
      },
      padding: {
        st: '87px',
        sy: '101px',
        sf: '3px',
        fg: '21.7px',
        yu: '7.6px',
        we: '14.2px',
        ty: '100.4px',
        jk: '70px',
        kj: '78px',
        rr: '17px',
        yk: '13px',
        tr: '7px',
        bh: '36px',
        lo: '55px',
        ds: '130px',
        vb: '99px',
        ti: '140px',
        to: '150px',
        uo: '47px',
        tg: '22px',
        zc: '100px',
        za: '77px',
        jf: '30px',
        hi: '109px',
        qw: '34.4px',
        sq: '53px',
        wy: '18px',
        wl: '20.4px',
        wh: '23px',
        hj: '26px',
        ji: '74.4px'
      },
      margin: {
        gh: '138px',
        jk: '21px',
        df: '70px',
        ui: '5px',
        qw: '-60px',
      },
      inset: {
        21: '50px',
        23: '46px',
        25: '150%',
        27: '43px',
        tg: '22px',
        as: '200%',
        ad: '74%',
        az: '105%',
        ac: '110%',
        ag: '21%',
        af: '125%',
        ah: '94%',
        hj: '104%',
        hg: '120%',
        yu: '113%',
        yt: '53%',
        yq: '140%',
        al: '86%',
        rt: '55%'
      },
      width: {
        jj: '15.4px',
        gh: '267.1px',
        gj: '455px',
        op: '18px',
        df: '7%',
        ds: '308px',
        ft: '122px',
        kj: '377px',
        po: '78px',
        iu: '300px',
        wi: '227px',
        we: '120px',
        wk: '184.4px'
      },
      borderWidth: {
        DEFAULT: '1px',
        11: '5px',
        12: '10px',
        13: '6px'

      },
      height: {
        jk: '15.4px',
        hj: '52px',
        io: '18px',
        ui: '90%',
        po: '78px'

      },
      borderRadius: {
        kl: '5px',
        hj: '15px',
        hu: '3px'
      },
      fontSize: {
        su: '38px',
        gh: '48px',
        jh: '11px',
        fg: '17px',
        kl: '10px',
        ju: '14px'
      },
      colors: {
        blue: '#00c2ff',
        gray: '#37353d',
        blu: '#312f62',
        or: '#2f2d33',
        red: '#ff0000'
      },
      maxWidth: {
        sa: '182px',
        df: '432px'
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