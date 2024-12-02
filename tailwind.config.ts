import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        custom_yellow: "#FAD171",
        customGray: '#222222',
        black: "#171717",
        white: "#FFFFFF",
        back: "#2B2B2B",
        red: "#E80000",

        black_80: "#464646",
        black_60: "#747474",
        black_40: "#A2A2A2",
        black_20: "#D1D1D1",
        black_10: "#E8E8E8",
        black_5: "#F3F3F3",

        blue_main: "#345CFF",
        blue_90: "#486CFF",
        blue_80: "#345CFFCC",
        blue_60: "#345CFF99",
        blue_40: "#345CFF66",
        blue_20: "#345CFF33",
        blue_10: "#345CFF1A",
      },
    },
  },
  plugins: [],
} satisfies Config;
