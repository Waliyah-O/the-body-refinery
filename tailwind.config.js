/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk"], // Add themes you want to use
    darkTheme: "dark", // Set default dark theme
    base: true, // Apply base styles
    styled: true, // Apply themed styles
    utils: true, // Add utility classes
    logs: true, // Show info in console while building
  }
}