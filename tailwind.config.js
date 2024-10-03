/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        disabledgrey:"#a4a4a4",
        error: "#FF0000",
        primary: "#152a43",
        lightgrey:"#e9e9e9",
        gray:"#4D4D4D" ,
        whitegrey:"#F9F9FB",
        darkred:"#C00000",
        yellow:"#FF9900",
        green:"#92d050",
        lightgreen:"#00B050",
        resetBlue:"#1885F2",
        electricGreen: "#8600F0",
        veryHighColor:"#EAC4C4",
        highColor:"#F7C4C4",
        moderateColor:"#F7E3C4",
        lowColor:"#E1EED4",
        veryLowColor:"#C4E7D4",
        closedBlue: '#bdf3f0',
        primaryBg: '#AEC3DC',
        moderategrey: '#dddddd',
        forReview: '#085B96',
        forReviewBg: '#085b9633'  
      },
      fontFamily: {
        opensans:['Open Sans']
      },
      width: {
        '98':'98%',
        '68':'68%',
        '30':'30%',
        '320': "320px",
        '2':'2%',
        '12' : '12%',
        '15' : '15%',
        '11' : '10%',
        '88' : '88%',
        '70' : '70%',
        '75' : '75%',
        '30' : '30%',
        '85' : '85%',
        '77' : '77%',
        '23' : '23%',
        '27' : '27%',
        '93' : '93%',
        '90' : '90%',
        '25' : '25%',
        '95' : '95%',
      },
      minHeight: {
        30: "30px",
        50:"50px",
        320: "320px",
        170: "170px",
        100:"100px"

       
      },
      maxHeight: {
        30: "30px",
        230: "230px"
      },
      maxWidth: {
        30: "30px",
        320: "320px"
      },
      boxshadow: {
        xl: '-2px 2px 4px rgba(0, 0, 0, 0.1)',
        a:'-2px 2px 4px rgba(0, 0, 0, 0.1)'
      },
      inset:{
        '36': '36%',
        '39': '39%'
      },
      borderRadius: {
        'sm': '0.25rem',
      
      },
    },
  },
  plugins: [],
}

