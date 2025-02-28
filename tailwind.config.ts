import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "955px": "955px",
        "830px": "830px",
        "400px": "400px",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      colors: {
        instaOrange: "#f09433",
        instaRed: "#e6683c",
        instaPink: "#dc2743",
        instaPurple: "#cc2366",
        instaDeepPurple: "#bc1888",
      },
    },
  },
  plugins: [],
};
export default config;
