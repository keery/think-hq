import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "50": "#F4F7E0",
          "100": "#DBDBDB",
          "200": "#C4C4C4",
          "300": "#ADADAD",
          "400": "#969696",
          "500": "#808080",
          "600": "#666666",
          "700": "#4D4D4D",
          "800": "#333333",
          "900": "#1A1A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)"],
        "eb-garamond": ["var(--font-eb-garamond)"],
      },
      fontSize: {
        "4xl": "2.5rem",
        "5xl": "3.125rem",
        "8xl": "5rem",
      },
      screens: {
        "2xl": "1440px",
      },
      spacing: {
        "6.5": "1.625rem",
        "8.5": "2.125rem",
        "14": "3.625rem",
        "18": "4.625rem",
        "44": "11.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
