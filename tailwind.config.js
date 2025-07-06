/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-delay-1000': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s',
        'pulse-delay-2000': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 2s',
      },
    },
  },
  plugins: [],
}