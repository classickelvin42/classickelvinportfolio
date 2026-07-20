import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#38BDF8",
        accent: "#0EA5E9",
        base: {
          950: "#05070B",
          900: "#0A0E17",
          800: "#0F1524",
          700: "#161D2E"
        },
        ink: {
          100: "#F1F5F9",
          300: "#CBD5E1",
          400: "#94A3B8",
          600: "#475569"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "grid-mesh":
          "linear-gradient(rgba(56,189,248,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.06) 1px, transparent 1px)",
        "glow-radial":
          "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.35), transparent 60%)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(56,189,248,0.25)",
        "glow-sm": "0 0 20px rgba(56,189,248,0.18)",
        card: "0 8px 30px rgba(0,0,0,0.35)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "pulse-slow": "pulse 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
