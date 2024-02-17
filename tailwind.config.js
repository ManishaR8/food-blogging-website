/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sourceSans :["Source Sans Pro","sans-serif"],
        openSans : ["Open Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}

