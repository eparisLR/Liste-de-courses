/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)"],
      },
    },
    colors: {
      green: "#7eb693",
      yellow: "#274c5b",
      gray: "#525C60",
      white: "rgb(255 255 255)",
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
