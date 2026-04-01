/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B3D2E",
        secondary: "#D6A756",
        accent: "#F1EBDC",
        dark: "#1a1a1a",
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      keyframes: {
        fadeInSlow: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomFade: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: 0, transform: "translateX(30px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(214, 167, 86, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(214, 167, 86, 0.8)" },
        },
      },
      animation: {
        fadeInSlow: "fadeInSlow 1.5s ease-out forwards",
        slideUp: "slideUp 1s ease-out forwards",
        zoomFade: "zoomFade 1s ease-out forwards",
        slideDown: "slideDown 0.3s ease-out forwards",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
        pulse: "pulse 2s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      boxShadow: {
        "premium": "0 10px 40px rgba(0, 0, 0, 0.15)",
        "hover": "0 20px 50px rgba(0, 0, 0, 0.2)",
      },
      gridAutoRows: {
        menu: "1fr",
      },
    },
  },
  plugins: [],
};
