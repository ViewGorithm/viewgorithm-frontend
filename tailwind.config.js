/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
      colors: {
        'custom-color': '#22333B',
        'back-color': '#2c3e50',
        'section-color': '#daf4eb',
        'main-color': '#c8fae6',
      },
    },
  },
  plugins: [],
}

