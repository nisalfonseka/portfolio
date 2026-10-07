import type { Metadata } from "next"
import { AdminPanel } from "@/components/admin-panel"

export const metadata: Metadata = { title: "Content Admin", robots: { index: false, follow: false } }

export default function AdminPage() {
  return <main className="page-shell min-h-screen bg-[#ebe8df]"><AdminPanel /></main>
}
