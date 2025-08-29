import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0E3AAF",
          orange: "#FF7A1A",
          red: "#F04438"
        }
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,.15)"
      },
      borderRadius: {
        "xl3": "20px"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
