import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",     // Indigo
        secondary: "#A855F7",   // Purple
        accent: "#06B6D4",      // Cyan
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        slideUp: "slideUp 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" } as any,
          "100%": { opacity: "1" } as any,
        },
        slideUp: {
          "0%": { 
            opacity: "0", 
            transform: "translateY(20px)" 
          } as any,
          "100%": { 
            opacity: "1", 
            transform: "translateY(0)" 
          } as any,
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
