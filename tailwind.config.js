/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
    safelist: [
      'swiper-pagination-bullet-active',
      'swiper-button-disabled',
      'swiper-pagination-bullet'
    // add any  custom classes you want to always include
  ],
  theme: {
    screens: {
      'xs': '360px',
      '1xs': '390px',
      '2xs': '415px',
      'sm': '430px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      'full': '1920px',      
      '3k': '2080px',
      '4k': '3073px', 
    },
    extend: {
      display: {
        contents: 'contents',
      },
      fontFamily: {
        'regular': [ "plaisioRegular","plaisioRegular Fallback"],
        'bold': ["plaisioBold","plaisioBold Fallback"],
        'light': ["plaisioLight","plaisioLight Fallback"], 
        'oblique': ['CFAstyPlaisio', 'sans-serif'],
        'boblique': ['CFAstyPlaisio', 'sans-serif'],
        'diamond': ['Black Diamond', 'plaisioRegular', 'sans-serif'],
      }, 
      boxShadow: {
        'glow': '0 0 20px rgba(255, 255, 255, 0.6)',
        'glow-strong': '0 0 40px rgba(19, 133, 212, 0.9)',

      },
     
      keyframes: {
       
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(166, 103, 255, 0.6)' },
          '50%': { boxShadow: '0 0 40px rgba(166, 103, 255, 0.9)' }
        },
        'wiggle-rotate': {
          '0%':   { transform: 'rotate(0deg)' },
          '15%':  { transform: 'rotate(-4deg)' },
          '35%':  { transform: 'rotate(6deg)' },
          '55%':  { transform: 'rotate(-3deg)' },
          '75%':  { transform: 'rotate(4deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      }, 


       backgroundImage: {
        'blue-gradient': 'linear-gradient(90deg,rgba(0, 0, 0, 0) 0%, rgba(81, 81, 81, 1) 5%, rgba(81, 81, 81, 1) 80%, rgba(0, 0, 0, 0) 100%)',
        'black-gradient': 'linear-gradient(0deg,rgba(74, 74, 74, 0) 0%, rgba(0, 0, 0, 1) 100%)'
      },


       animation: {    
         'glow': 'glow 1.5s ease-in-out infinite',  
        'fadeIn': 'fadeIn 800ms linear forwards',  
        'wiggle-rotate': 'wiggle-rotate 2.8s ease-in-out infinite',
        // 'drop': 'drop 2s linear 1',
        // 'drop2': 'drop 3s 2.2s linear infinite',
        // 'drop3': 'drop 3s 1.5s linear infinite',
        // 'drop4': 'drop 3s 3s linear infinite'
      },
    },
  },
  // plugins: [
  //   function ({ addUtilities }) {
  //     const newUtilities = {
  //       '.text-shadow-2': {
  //         'text-shadow': '0px 0px 2px #fff',
  //       }
  //     };
  //     addUtilities(newUtilities);
  //   },
  // ],
  blocklist: ['fixed', 'collapse'],
};


