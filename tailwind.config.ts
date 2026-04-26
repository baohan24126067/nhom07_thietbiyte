import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "hsl(var(--brand))",
          light: "hsl(var(--brand-light))",
          sky: "hsl(var(--brand-sky))",
          dark: "hsl(var(--brand-dark))",
          footer: "hsl(var(--brand-footer))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
