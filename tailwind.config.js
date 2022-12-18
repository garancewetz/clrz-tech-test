module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: true,
  content: [],
  theme: {
    extend: {
      maxWidth: {
        '4xl': '810px',
        '6xl': '1060px'
      },
      fontSize: {
        'xxs': ['10px', { lineHeight: '22px' }],
        'xs': '12px',
        'sm': ['15px', { lineHeight: '18px' }],
        'base': ['16px', { lineHeight: '24px' }],
        '1.5xl': ['22px', { lineHeight: '34px' }],
        '2xl': '24px',
        '3xl': ['29px', { lineHeight: '42px' }],
        '3.5xl': ['40px', { lineHeight: '56px'}],
        '4xl': ['44px', { lineHeight: '54px'}],
        '5xl': ['52px', { lineHeight: '60px'}]
      },
      padding: {
        '4.5': '18px',
        '13': '52px',
        '22': '88px'
      },
      margin: {
        '7.5': '30px',
        '13': '52px',
        '18': '72px'
      },
      space: {
        '4.5': '18px'
      },
      lineHeight: {
        '8': '34px'
      },
      colors: {
        dark: {
          '500': '#18181B'
        },
        grey: {
          '200': '#F4F4F4'
        },
        orange: {
          '500': '#F0380F',
          '600': '#c02c0c'
        }
      },
      backgroundImage: {
        'hero-header': "url('/src/assets/images/photos/hero-1.png')"
      }
    },
  },
  plugins: [],
}
