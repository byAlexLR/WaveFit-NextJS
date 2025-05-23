module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oscuro: "#000",
        claro: "#fff",
        acento: "#ffe6b8",
        input: "#f8f8f8",
        secundario: "#ffd699",
      },
      fontFamily: {
        poppins: ["Poppins", "Arial", "Helvetica", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      keyframes: {
        moveWaveFit: {
          "0%, 20%, 80%, 100%": { transform: "scale(1)", opacity: "1" },
          "40%, 60%": { transform: "scale(0.25)", opacity: "0" }
        },
        moveWF: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "20%": { color: "#ffffff72", transform: "scale(0.5) rotate(5deg)", opacity: "0" },
          "40%": { color: "var(--color-oscuro)", transform: "scale(1) rotate(15deg)", opacity: "1" },
          "60%": { color: "var(--color-oscuro)", transform: "scale(1) rotate(-15deg)", opacity: "1" },
          "80%": { color: "#ffffff72", transform: "scale(0.5) rotate(-5deg)", opacity: "0" },
          "100%": { transform: "scale(0) rotate(0deg)", opacity: "0" }
        },
        onda: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        aparecer: {
          "0%, 18%": { opacity: "0", transform: "translateY(10px)" },
          "20%, 30%": { opacity: "1", transform: "translateY(0)" },
          "30%, 100%": { opacity: "0", transform: "translateY(-10px)" }
        }
      },
      animation: {
        moveWaveFit: "moveWaveFit 12s ease-in-out infinite",
        moveWF: "moveWF 12s ease-in-out infinite",
        onda: "onda 2s ease-in-out infinite",
        aparecer: "aparecer 13.5s infinite forwards"
      },
      transitionDuration: {
        normal: "var(--transition-normal)",
        rapido: "var(--transition-rapido)",
        despacio: "var(--transition-despacio)",
      },
      scale: {
        120: "1.2",
      },
    },
  },
  safelist: [
    "animate-moveWaveFit",
    "animate-moveWF",
    "animate-onda",
    "animate-aparecer"
  ],
  plugins: [],
};