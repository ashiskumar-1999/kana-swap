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
        green: "#2ED3B7",
        slate: {
          100: "#1D1E20",
          200: "#17181A",
          300: "#111213",
        },
        gray: {
          100: "#A5A5A6 ",
          200: "#4A4B4D",
        },
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
