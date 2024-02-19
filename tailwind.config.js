/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'scissorsGradient': 'hsl(39, 89%, 49%)',
        'paperGradient': 'hsl(230, 89%, 62%)',
        'rockGradient': 'hsl(349, 71%, 52%)',
        'lizardGradient': 'hsl(261, 73%, 60%)',
        'cyan': 'hsl(189, 59%, 53%)',

        'darkText': 'hsl(229, 25%, 31%)',
        'scoreText': 'hsl(229, 64%, 46%)',
        'headerOutline': 'hsl(217, 16%, 45%)',

        'radialGradient': 'bg-gradient-to-b from-hsl(214, 47%, 23%) to-hsl(237, 49%, 15%)'
      },
      fontFamily: {
        'barlow': ['Barlow-Semi-Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


