/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2c6975",
      },
      backgroundImage: {
        animatedBg: "../../../images/animaedShape.svg",
      },
    },
    screens: {
      sm: "640px", // Small devices
      md: "768px", // Medium devices
      lg: "1024px", // Large devices
      xl: "1280px", // Extra large devices
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
    ], // Add themes you want to use
    darkTheme: "dark", // Set default dark theme
    base: true, // Apply base styles
    styled: true, // Apply themed styles
    utils: true, // Add utility classes
    logs: true, // Show info in console while building
  },
};
