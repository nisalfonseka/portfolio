import { ImageResponse } from "next/og"

export const alt = "Nisal Fonseka — I build intelligent software products."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#000000",
        color: "#ffffff",
        padding: "48px 56px 44px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(circle at 75% 25%, rgba(6,182,212,.9) 0%, rgba(8,47,73,.7) 19%, rgba(0,0,0,0) 48%), radial-gradient(circle at 92% 78%, rgba(249,115,22,.78) 0%, rgba(124,45,18,.35) 22%, rgba(0,0,0,0) 49%), linear-gradient(90deg, rgba(0,0,0,.98) 0%, rgba(0,0,0,.78) 48%, rgba(0,0,0,.28) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "linear-gradient(90deg, transparent 0%, transparent 49.9%, rgba(255,255,255,.07) 50%, transparent 50.1%), linear-gradient(0deg, rgba(0,0,0,.56) 0%, transparent 42%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 68,
          top: 92,
          width: 154,
          height: 154,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(255,255,255,.42)",
          borderRadius: 999,
          boxShadow: "0 0 0 14px rgba(255,255,255,.04), 0 0 70px rgba(6,182,212,.42)",
        }}
      >
        <div
          style={{
            width: 88,
            height: 88,
            display: "flex",
            border: "2px solid rgba(255,255,255,.88)",
            borderRadius: 999,
            background: "rgba(0,0,0,.18)",
          }}
        />
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 3.2,
        }}
      >
        <span>NISAL FONSEKA</span>
        <span style={{ color: "rgba(255,255,255,.72)" }}>AI · SOFTWARE · RESEARCH · PRODUCT</span>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          marginTop: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: -5.5,
            lineHeight: 0.88,
          }}
        >
          <span>I build</span>
          <span>intelligent</span>
          <span>software</span>
          <span>products.</span>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          width: "100%",
          borderTop: "1px solid rgba(255,255,255,.28)",
          paddingTop: 22,
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: 680,
            fontSize: 18,
            lineHeight: 1.4,
            color: "rgba(255,255,255,.72)",
          }}
        >
          LLM and RAG systems · Full-stack products · Sinhala NLP
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 13, fontSize: 16, fontWeight: 700 }}>
          <span style={{ width: 42, height: 4, display: "flex", background: "#f97316" }} />
          <span>nisalfonseka.com</span>
        </div>
      </div>
    </div>,
    size,
  )
}
