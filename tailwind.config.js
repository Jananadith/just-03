/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      heroFont : [ "Playwrite US Modern" , "cursive"],
      heroFont2 : ["Allerta Stencil" , "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'backp':"url('/src/Components/Pages/Home/images/back.jpg')",
      } 
    },
  },
  plugins: [],
}