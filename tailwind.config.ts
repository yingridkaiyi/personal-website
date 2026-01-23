import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ["var(--font-vt323)", "monospace"],
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "#F5D5E3", // Dusty rose background from reference
        foreground: "#4a4a4a",
        // Retro/Vaporwave Palette
        "retro-gray": "#C0C0C0",
        "retro-light": "#FFFFFF",
        "retro-dark": "#808080",
        "retro-darker": "#000000",
        "retro-blue": "#000080",
        "retro-pink": "#FF69B4",
        // Keep existing colors for compatibility if needed, but we'll transition away
        "lf-cream": "#FDFBD4",
        "lf-green": "#BDB96A",
        "lf-lavender": "#C1BFFF",
        "lf-purple": "#CF6DFC",
        "lf-dark-purple": "#8a4bba",
        "lf-dark-green": "#7a7742",
      },
      animation: {
        'type-bounce': 'bounce 0.5s infinite alternate',
      }
    },
  },
  plugins: [],
} satisfies Config;
