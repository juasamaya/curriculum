/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand0: "#000000",
        brand1: "#131f36",
        brand2: "#364a79",
        brand3: "#5f7cc5",
        brand4: "#8eb2ff",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(142,178,255,0.12), 0 8px 30px rgba(20,30,54,0.45)"
      },
      borderRadius: {
        "3xl": "1.5rem"
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        cvtheme: {
          "primary": "#5f7cc5",
          "secondary": "#364a79",
          "accent": "#8eb2ff",
          "neutral": "#131f36",
          "base-100": "#0b1221",
          "base-200": "#131f36",
          "base-300": "#1b2b50",
          "info": "#8eb2ff",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444"
        }
      }
    ],
    darkTheme: "cvtheme"
  }
}
