/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Roboto', 'sans-serif']
      }, 
      borderRadius: {
        '4xl': '2rem',
      },
      margin: {
        '4xl': '2rem',
        '5xl': '13rem',
        '3xl': '8rem',
        '2xl': '5rem'
      },
      padding: {
        '4xl': '2rem',
      },
      height: {
        '6xl': '20rem',
        '7xl': '80vh',
        '150': '200px',
        '200': '220px',
        '170' : '190px',
        '40' : '100px',
        '50' : '50px'
      },
      width: {
        '6xl' : '200px',
        '150' : '170px',
        '200' : '200px',
        '140' : '170px',
        '100' : '100%',
        '50' : '50px'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': 'rgb(96, 96, 195)',
      'red': '#e11d48',
      'gray-100': '#f3f3f3',
      'black': '#151515'
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '7xl' : '4.5rem'
    }
  },
  plugins: [],
}