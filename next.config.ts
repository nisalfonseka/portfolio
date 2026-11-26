import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      // Consolidate www onto the canonical apex domain so search engines see one site.
      { source: "/:path*", has: [{ type: "host", value: "www.nisalfonseka.com" }], destination: "https://nisalfonseka.com/:path*", permanent: true },
      { source: "/services/ai-engineering", destination: "/services/ai-development-sri-lanka", permanent: true },
      { source: "/services/rag-ai-chatbot-development", destination: "/services/rag-ai-assistant-development-sri-lanka", permanent: true },
      { source: "/services/ai-product-development", destination: "/services/ai-product-development-sri-lanka", permanent: true },
      { source: "/services/ai-integration-services", destination: "/services/ai-integration-sri-lanka", permanent: true },
      { source: "/services/ai-automation-for-business", destination: "/services/ai-automation-sri-lanka", permanent: true },
    ]
  },
  async headers() {
    return [{
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }]
  },
}

export default nextConfig
