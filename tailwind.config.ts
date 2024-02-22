import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'black' : "#101828",
        'custom-purple' : "#7F56D9",
        'purple-second' : '#6941C6',
        'purp' :'#6941C6',
        'backpurp' : '#F9F5FF',
        'bordpurp' : '#E9D7FE',
        'backgray' : '#F9FAFB',
        'footerback' : '#0d111c'
      }
    },
  },
  plugins: [],
};
export default config;
