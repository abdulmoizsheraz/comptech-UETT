/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comptech-950': '#111346',
        'comptech-100': 'rgb(0, 170, 255)',
      },
    },
  },
  plugins: [],
}

