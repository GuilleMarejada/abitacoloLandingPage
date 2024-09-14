/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gris1: "#CCCCCC",
        gris2: "#666666",
        gris3: "#333333",
        verdeAbitacolo: "#919e32",
      },
    },
  },
  plugins: [],
};
