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
        background: "#F5D5E3",
        foreground: "#4a4a4a",
        // Retro/Vaporwave Palette - Pink/Purple/Yellow Theme
        "retro-gray": "#E8C0FF", // Soft lavender/purple
        "retro-light": "#FFFFFF",
        "retro-dark": "#9B6BBB", // Purple
        "retro-darker": "#4A1B5C", // Dark purple
        "retro-blue": "#6B2E8F", // Deep purple
        "retro-pink": "#FF69B4", // Hot pink
        // Vaporwave colors
        "vp-pink": "#FF69B4",
        "vp-purple": "#B366CC",
        "vp-lavender": "#E8C0FF",
        "vp-yellow": "#FFD700",
        "vp-cream": "#FFF5D9",
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
