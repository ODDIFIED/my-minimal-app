/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xsm': '280px',
      // => @media (min-width: 320px) { ... }

      'sm': '400px',
      // => @media (min-width: 430px) { ... }

      'md': '540px',
      // => @media (min-width: 540px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xlg': '1279px',
      // => @media (min-width: 1280px) { ... }
    },
    
  },
  plugins: [],
}

