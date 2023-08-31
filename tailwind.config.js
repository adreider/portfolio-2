/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans"],
      handwriting: ["Caveat"],
      headline: ["Poppins"],
    },
    extend: {
      keyframes: {
        "animate-cursor": {
          "0%": {
            color: "rgb(192 132 252)",
          },
          "100%": {
            color: "rgba(0,0,0,0)",
          },
        },
      },
      animation: {
        "animate-cursor": "animate-cursor .8s infinite",
      },
    },
  },
  plugins: [],
}

