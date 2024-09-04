import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#2948FF',
        lightBlue: '#D4E4FC', 
        coolBlue: '#89A7FF',
        skyBlue: '#EAF1FB',
        hoverBlue: '#396AFC',
        lightGray: '#F6F8FC',
        darkGray: '#444746',
        white: '#FFFFFF',
        black: '#141413',
      },
      fontFamily :{
        montserrat : ['montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
