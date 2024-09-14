/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#000000',
          primary: '#3b82f6'
        },
        dark: {
          background: '#252525',
          text: '#f9fafb',
          primary: '#3b82f6'
        },
      },
    },
  },
  plugins: [],
}

