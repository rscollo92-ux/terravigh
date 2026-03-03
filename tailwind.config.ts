import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f3f5f0",
          100: "#e8ece4",
          300: "#c6d0bf",
          500: "#8e9a84",
          700: "#5c6755",
          900: "#2f372b"
        },
        sand: "#f8f5ef",
        ink: "#1e231d"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(33, 39, 31, 0.08)"
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
