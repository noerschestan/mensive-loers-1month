/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#7B0828',
        maroon: '#C43B57',
        romanticPink: '#FF6B9A',
        softWhite: '#FDEDEF',
        goldAccent: '#D4AF37'
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        script: ['Great Vibes', 'cursive']
      }
    }
  },
  plugins: []
}
