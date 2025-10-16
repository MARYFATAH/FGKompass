/** @type {import('tailwindcss').Config} */
module.exports = {
  // Ensure Tailwind scans all your component files
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom font configuration
      fontFamily: {
        // Sets 'sans' as the default font stack, which is used by the 'font-sans' utility
        sans: ["Montserrat", "Quicksand", "sans-serif"],
        // Sets 'serif' as the font stack for the 'font-serif' utility
        serif: ["Fleur De Leah", "serif"],
        // Sets 'mono' as the font stack for the 'font-mono' utility
        mono: ["monospace"],
      },

      // Define custom colors, spacing, etc., here if needed
      colors: {
        "pink-accent": "#e91e63", // A darker, custom pink for emphasis
      },
    },
  },
  plugins: [],
};
