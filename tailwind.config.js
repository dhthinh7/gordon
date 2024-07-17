/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        "text-title": "#3D525B",
        "text-title-tab": "#DD7657",
        "card-line": "#E4EBEE",
        "active-status": "#009020",
        "primary-border-button": "#5BB3EF",
        "primary-text-button": "#5BB3EF",
      },
      fontFamily: {
        antique: "AntiqueOliveTCompactRegular",
      },
    },
  },
  plugins: [],
};
