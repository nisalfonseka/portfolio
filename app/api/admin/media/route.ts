import { NextResponse } from "next/server"
import { isAdmin } from "@/lib/auth"
import { signedImageUrl } from "@/lib/storage"

export async function GET(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  const key = new URL(request.url).searchParams.get("key")
  if (!key?.startsWith("neon:")) return NextResponse.json({ message: "Invalid image key." }, { status: 400 })

  try {
    return NextResponse.redirect(await signedImageUrl(key))
  } catch {
    return NextResponse.json({ message: "Image unavailable." }, { status: 404 })
  }
}
