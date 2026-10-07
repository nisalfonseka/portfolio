import { NextResponse } from "next/server"
import { z } from "zod"
import { ADMIN_COOKIE, adminIsConfigured, createSessionToken, passwordMatches, sessionMaxAge } from "@/lib/auth"

const schema = z.object({ password: z.string().min(1).max(500) })

export async function POST(request: Request) {
  if (!adminIsConfigured()) return NextResponse.json({ message: "Admin access is not configured. Add ADMIN_PASSWORD and AUTH_SECRET." }, { status: 503 })

  const parsed = schema.safeParse(await request.json())
  if (!parsed.success || !passwordMatches(parsed.data.password)) return NextResponse.json({ message: "Incorrect password." }, { status: 401 })

  const response = NextResponse.json({ authenticated: true })
  response.cookies.set(ADMIN_COOKIE, createSessionToken(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: sessionMaxAge })
  return response
}
