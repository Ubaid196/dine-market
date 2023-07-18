/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors:{
      primaryWhite:"#FEECE3",
      primaryText:"#212121",
      primaryText1:"#666666",
      salebtnColor:"#0000FF",
      salebtnColor1:"#E1EDFF",
      promotionColor:"#0062F5",
      opacityDownColor:"#ffffffba",
      Cat1:"#D6D6D8",
      Cat2:"#EFE1C7",
      Cat3:"#D7D7D9",
      DineWkSale:"#474747",
      feature_bg:"#ECEDEF",


     }
    },
  },
  plugins: [],
}
