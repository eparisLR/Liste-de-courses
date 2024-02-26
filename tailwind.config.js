/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      green: "7eb693",
      yellow: "274c5b",
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
