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
      animation: {
        slideLeft: "slideLeft 1.2s ease-in-out",
        slideUp: "slideUp 1.1s ease-out forwards",

        slideBottom: "slideBottom 1.1s ease-out forwards",
        slideUpHigher: "slideUpHigher 1.7s ease-out forwards",
        spinBackForth: "spinBackForth 2s ease-in-out infinite",
      },
      keyframes: {
        slideLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideBottom: {
          "0%": {
            opacity: "0",
            transform: "translateY(200%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideUpHigher: {
          "0%": {
            transform: "translateY(200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        slideDiagonal: {
          "0%": {
            transform: "translate(-200%, 200%)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: "1",
          },
        },
        spinBackForth: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(25deg)",
          },
          "100%": {
            transform: "rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
