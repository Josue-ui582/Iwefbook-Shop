/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo 2', 'sans-serif'],
        poppins: ['poppins, sans-serif'],
        quicksand: ["Quicksand", "sans-serif"]
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
        '50' : '50px',
        '100': '100vh'
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
      'blue': '#009fe2',
      'red': '#e9611a',
      'gray-100': '#f3f3f3',
      'black': '#151515'
    },
    fontSize: {
      'text-xs' : '0.75rem',
      'text-sm' : '0.875rem',
      'text-base' : '1rem',
      'text-lg' : '1.125rem',
      'text-xl' : '1.25rem',
      'text-2xl' : '1.5rem',
      'text-3xl' : '1.875rem',
      'text-4xl' : '2.25rem',
      'text-5xl' : '3rem',
      'text-6xl' : '3.75rem',
      'text-7xl' : '4.5rem',
      'text-8xl' : '6rem',
      'text-9xl' : '8rem'
    }
  },
  plugins: [],
}