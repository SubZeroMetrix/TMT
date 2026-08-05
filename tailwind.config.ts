import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071426",
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071426",
          secondary: "#102A4C",
          light: "#102A4C",
          mid: "#102A4C",
        },
        blue: {
          DEFAULT: "#2563EB",
          bright: "#2F6FED",
          light: "#60A5FA",
          hover: "#1D4ED8",
          soft: "#3B82F6",
        },
        steel: {
          DEFAULT: "#4F6F8F",
          light: "#CBD5E1",
        },
        slate: {
          DEFAULT: "#475569",
          muted: "#64748B",
          nav: "#1E293B",
        },
        silver: {
          DEFAULT: "#4F6F8F",
          light: "#CBD5E1",
          pale: "#F8FAFC",
        },
        surface: {
          light: "#F8FAFC",
          white: "#FFFFFF",
          warm: "#E5E7EB",
        },
        border: {
          light: "#DCE3EA",
          dark: "#94A3B8",
        },
        accent: {
          DEFAULT: "#2563EB",
          warning: "#F97316",
        },
        // Legacy alias — maps to controlled blue-light, not neon cyan
        cyan: {
          DEFAULT: "#60A5FA",
          dim: "#2563EB",
          glow: "#2563EB",
        },
        code: {
          green: "#3DDC97",
          orange: "#F97316",
          purple: "#A78BFA",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        signature: ["var(--font-signature)", "cursive"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        md: "6px",
        lg: "8px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,31,58,0.06), 0 8px 24px rgba(11,31,58,0.08)",
        cta: "0 8px 24px rgba(37, 99, 235, 0.22)",
        glow: "0 8px 24px rgba(37, 99, 235, 0.16)",
        "glow-sm": "0 4px 12px rgba(37, 99, 235, 0.12)",
      },
      backgroundImage: {
        "grid-blueprint":
          "linear-gradient(rgba(79,111,143,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(79,111,143,0.08) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(11,31,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,58,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
        "grid-sm": "24px 24px",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
