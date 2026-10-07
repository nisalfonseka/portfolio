import { NextResponse } from "next/server"
import { isAdmin } from "@/lib/auth"
import { getInquiries } from "@/lib/content-store"

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  return NextResponse.json(await getInquiries())
}
