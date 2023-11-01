/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
<<<<<<< HEAD
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
=======
      colors: {
        primary: "#FF6B00",
        primaryBlack: "#2B2B2B",
        primaryLink: "#0094FF",
        primarySuccess: "#1AB232",
        primaryError: "#FF4040",
        primaryGray: "#979797",
>>>>>>> parent of 0cee53e (header ui)
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
}
=======
  safelist: [
    {
      pattern:
        /(bg|text|border)-(primary|primaryBlack|primaryLink|primaryGray|primarySuccess|primaryError)/,
    },
  ],
};
>>>>>>> parent of 0cee53e (header ui)
