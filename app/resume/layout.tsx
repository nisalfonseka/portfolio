import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Résumé",
  description: "Résumé of Nisal Fonseka, AI application engineer: experience at SLIIT and Sri Lanka Telecom, enterprise AI chat platforms, RAG, realtime voice, Sinhala LLM research, education and skills.",
  path: "/resume",
})

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
