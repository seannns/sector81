import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
        extend: {
        fontFamily: {
            // Must match the font-family name in @font-face
            custom: ['jetbrainsMono', 'sans-serif'], 
        },
        },
    },
    plugins: [],
};
export default config;