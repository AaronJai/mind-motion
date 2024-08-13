import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img': "url('/assets/work-process.webp')",
      },
      fontFamily: {
        'primary': "var(--poppins)",
        'secondary': "var(--syne)"
      },
      colors: {
        'heroBg': "#0e1122",
        'para': "rgb(0 0 0 / 80%)",
        'primary': "#06a055"
      }
    },
  },
  plugins: [],
};
export default config;
