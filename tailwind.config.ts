import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "seventy": "70vh",
        "sixty": "60vh",
        "thirty": "30vh",
        "twenty": "20vh",

        "250px": "250px"
      },
      colors: {
        "greenOne": "#103c00",
        "greenTwo": "#35711f",
        "greenThree": "#60a543",
        "greenFour": "#e6efc5",

        "greyThree": "#f2f2f2",
        "greyTwo": "#808080",
        "tanTwo": "#e7cbaf"
      },
      fontFamily :{
        "prox": ["proxima-nova", "sans-serif"]
      }
    }
  },
  plugins: [],
};
export default config;
