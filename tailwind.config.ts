import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        paper: "#f4f1ea",
        signal: "#e85d32",
        cyan: "#22d3ee",
      },
      boxShadow: { soft: "0 24px 70px rgba(16, 16, 16, 0.10)" },
    },
  },
  plugins: [],
}

export default config
