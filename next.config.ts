import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/work/sliit-ai-assistant", destination: "/work/sliit-coeai-chatbot", permanent: true },
      { source: "/work/sliit-academic-ai", destination: "/work/sliit-academic-chatbot-platform", permanent: true },
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
