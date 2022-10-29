module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '820px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1100px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1200px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
    colors:{
      'dark':'#0D0D14',
      'lightDark':'#584E61',
      'lightBlue':'#7C84A4',
      'lightBlue2':'#767896',
      'pink':'#BC3756',
    },
    fontFamily: {
      'font':'Ubuntu'
    },
  },
  plugins: [],
}
