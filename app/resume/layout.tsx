import { createPageMetadata } from "@/lib/seo"

export const metadata = createPageMetadata({
  title: "Résumé",
  description: "Résumé of Nisal Fonseka, an AI application engineer experienced in enterprise chat platforms, RAG, realtime voice systems and Sinhala NLP research.",
  path: "/resume",
})

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
