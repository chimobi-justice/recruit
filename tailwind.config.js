/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fff6e9",
          200: "#e1e1e1",
          300: "#f5f8ff",
          400: "#f0f0f0",
        }
      }
    },
  },
  plugins: [],
}

