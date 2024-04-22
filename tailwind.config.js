/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin'
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  plugins: [
    // require('@tailwindcss/forms'),
    prelinePlugin,
  ],
  theme: {
    extend: {
      colors :{
        Charcoal: "#181823",
        NeonWhite: "#F4F3F9",
        Purple:  "#BE2CD2",
        TwitchPurple :"#8A3DFF",
        ClearBlue : "#214CE0",
        Coral : "#E0594C",
        Blue : "#4986EA",
        Tosca : "#32C7C4",
        Yellow : "#F5D364"
        /* background: linear-gradient(90deg, #19C6C2 0%, #8A3DFF 82.5%);*/
      },
    },
  },
}

