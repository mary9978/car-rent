/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plusJakarta: ["Plus Jakarta Sans", "Nunito"],
      },
      colors: {
        borderColor: "#C3D4E966",
        grayLight: "#13131399",
        mainBg: "#F6F7F9",
        blue: {
          500: "#3563E9",
        },
      },
    },
  },
  plugins: [],
};
