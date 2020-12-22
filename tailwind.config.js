 const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: {
   mode: 'all',
    content: ['./public/index.html']
  },
  darkMode: false, 
 corePlugins: {
    animation: false,
  },
  theme: {
    extend: {
      colors: {
       "cyan-dark": 'hsl(185, 75%, 39%)',
       "blue-dark": "hsl(229, 23%, 23%)",
        "gray-blue-dark": "hsl(227, 10%, 46%)",
        "grey-dark": "hsl(0, 0%, 59%)"
      },
      fontFamily: {
        'body': ['Kumbh Sans', 'sans-serif']
      },
      fontSize: {
        '2xs': '.75rem',
        'xs': '.875rem',
        'sm': '1rem',
         'base': '1.125rem',
         'xl': '1.25rem',
         '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
        '7xl': '5rem',
       },
       minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
       },
       backgroundImage: {
        'card-bg': "url('../images/bg-pattern-card.svg')",
        'body-bg-bottom': "url('../images/bg-pattern-bottom.svg')",
        'body-bg-top': "url('../images/bg-pattern-top.svg')",
       }
    },
  },
  variants: {
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    // This plugin is useful in combination with tailwindcss-aspect-ratio.
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
          '.fill-parent': {
            position: "absolute",
            width: "100%",
            'padding-bottom': "100%",
             'z-index':"-1",
              },
          '.top-left': {
            top: '0',
            left: '0',
           
          },
          '.bottom-right': {
            bottom: '0',
            right: '0',
          },
          '.bg':{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
          '.body-top-bg': {
            transform: "translate(-50%, -50%) rotate(-15deg)",
            backgroundImage: "url('../images/bg-pattern-top.svg')",
          },
          '.body-btm-bg': {
             transform: "translate(50%, 50%) rotate(-75deg)",
            backgroundImage: "url('../images/bg-pattern-bottom.svg')",
          
          }
        },
        ['before','after']
      )
    }),
  ],
}