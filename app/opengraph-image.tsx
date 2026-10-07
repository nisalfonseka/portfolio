import { ImageResponse } from "next/og"

export const alt = "Nisal Fonseka — AI Application Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#101010",
        color: "#ffffff",
        padding: "72px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, letterSpacing: 4 }}>
        <span>NISAL FONSEKA</span>
        <span style={{ color: "#22d3ee" }}>SRI LANKA</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -5, lineHeight: 1.02, maxWidth: 980 }}>
          AI APPLICATION ENGINEERING
        </div>
        <div style={{ display: "flex", marginTop: 36, fontSize: 27, color: "rgba(255,255,255,.68)" }}>
          LLM applications · RAG systems · Full-stack products · Sinhala NLP
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 22 }}>
        <span style={{ width: 72, height: 6, background: "#f97316" }} />
        <span>nisalfonseka.com</span>
      </div>
    </div>,
    size,
  )
}
