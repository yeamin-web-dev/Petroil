import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        Container:"1140px"
      },
      backgroundColor: {
        hbg:"#282828",
      },
      backgroundImage: {
        'hero-pettern' :"url('/src/assets/banner.jpg')"
        
      },
      fontFamily: {
        pops: ['Poppins', 'sans-serif',]
    }
  },
},
  plugins: [],
};
