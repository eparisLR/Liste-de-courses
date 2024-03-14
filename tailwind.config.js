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
      colors: {
        green: "#7eb693",
        yellow: "#EFD372",
        gray: "#525C60",
        white: "#fff",
        "light-gray": "#EFF6F1",
        "brown-gray": "#A098AE",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

export default config;
