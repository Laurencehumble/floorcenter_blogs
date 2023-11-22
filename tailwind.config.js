/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  prefix: 'tw-',
  // purge:
  // [
  //   './build.css',
  //   './index_new.html'
  // ],
  content: 
  [
    './src/**/*.{html,js}',
    './*.{html,js}',
    // './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      screens: {

        
        // 'mobile': '0px',

        'big_mobile': '376px',

        // 'tablet': '640x',
        // => @media (min-width: 640px) { ... }
  
        'tablet': '768px',
        // => @media (min-width: 768px) { ... }
  
        'square': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'laptop': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        'desktop': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: 
      {
        'fc-900': '#730F01',
        'fc-800': '#991401',
        'fc-700': '#BF1901',
        'fc-600': '#CC432F',
        'fc-500': '#D96D5E',
        'fc-400': '#E5988C',
        'fc-300': '#ECADA3',
        'fc-200': '#F2C2BB',
        'fc-100': '#F9D7D2',
        'fc-50': '#FFECE9',
        'Linear-opacity': '#0F172A',

      },
      fontFamily: 
      {
        work_sans: ["Work Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      lineHeight: {
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
      },
      spacing: {
        '10vw': '10vw',
        '20vw': '20vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',
        '110vw': '110vw',
        '120vw': '120vw',
        '130vw': '130vw',
        '140vw': '140vw',
        '150vw': '150vw',
        '160vw': '160vw',
        '180vw': '180vw',
        'm_xl': '200px',
        'mobile_64px': '17vw',
        'laptop_64px': '3.7vw',

        // PERCENT
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '40%': '40%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '100%': '100%',

        px: '1px',
        '0': '0',
        '0.5': '2px',
        '1': '4px',
        '1.5': '6px',
        '2': '8px',
        '2.5': '10px',
        '3': '12px',
        '3.5': '14px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
        '11': '44px',
        '12': '48px',
        '14': '56px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
        '28': '112px',
        '30': '120px',
        '32': '128px',
        '36': '144px',
        '40': '160px',
        '44': '176px',
        '48': '192px',
        '52': '208px',
        '56': '224px',
        '60': '240px',
        '64': '256px',
        '72': '288px',
        '80': '320px',
        '88': '341px',
        '96': '384px',
        // extended
        '105': '405px',
        '112': '448px',
        '128': '512px',
        '136': '550px',
        '144': '576px',
        '160': '640px',
        '176': '704px',
        '192': '768px',
        '208': '832px',
        '224': '896px',
        '240': '960px',
        '256': '1024px',
        'square_1024px' : '1024px',
        'laptop_1280px': '1280px'
        
       
      },
      // borderRadius: {
      //   'none': '0',
      //   'sm': '16px',
      //   DEFAULT: '0.25rem',
      //   DEFAULT: '4px',
      //   'md': '24px',
      //   'lg': '64px',
      //   'full': '9999px',
      //   'large': '12px',
      // }
     
    },
  },
  plugins: [
    require('@tailwindcss/forms')
    // require('tw-elements/dist/plugin')
  ],
  
}
// '1': '8px',
// '2': '12px',
// '3': '16px',
// '4': '24px',
// '5': '32px',
// '6': '48px',
// '7': '48px',
// '8': '12px',
// '9': '16px',
// '10': '24px',
// '11': '32px',
// '12': '48px',
