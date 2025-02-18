/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode support
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00aaff', // Futuristic blue for buttons & highlights
        dark: '#121212', // Dark background
        cardDark: '#1a1a1a', // Slightly lighter dark for contrast
        textLight: '#f1f1f1', // Light text for readability
      },
    },
  },
  plugins: [],
};
