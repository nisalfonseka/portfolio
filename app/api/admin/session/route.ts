import { NextResponse } from "next/server"
import { adminIsConfigured, isAdmin } from "@/lib/auth"

export async function GET() {
  return NextResponse.json({ authenticated: await isAdmin(), configured: adminIsConfigured() })
}
