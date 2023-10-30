/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",
        primaryBlack: "#2B2B2B",
        link: "#0094FF",
        success: "#1AB232",
        _error: "#FF4040",
        primaryGray: "#979797",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|primaryBlack|link|primaryGray|success|_error)/,
    },
  ],
};
