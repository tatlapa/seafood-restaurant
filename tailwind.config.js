/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sfprodisplay: ["SF Pro Display", "Arial", "sans-serif"],
      poppins: ["Poppins"],
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    variants: {
      extend: { important: ["responsive", "hover"] },
    },
  },
  plugins: [require("tailwindcss-font-inter")],

  important: true,
};

