/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      aperçupro: ['Apercu Pro', 'sans-serif'],
      roslindale: ["Roslindale"],
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

  plugins: [],

  important: true,
};
