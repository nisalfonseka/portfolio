import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { isAdmin } from "@/lib/auth"
import { getSiteContent, saveSiteContent } from "@/lib/content-store"
import { siteContentSchema } from "@/lib/validation"

export async function GET() {
  if (!(await isAdmin())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  return NextResponse.json(await getSiteContent())
}

export async function PUT(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  const parsed = siteContentSchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ message: parsed.error.issues[0]?.message || "Invalid content" }, { status: 400 })

  try {
    await saveSiteContent(parsed.data)
    revalidatePath("/")
    revalidatePath("/work")
    revalidatePath("/work/[slug]", "page")
    revalidatePath("/achievements")
    revalidatePath("/sitemap.xml")
    return NextResponse.json({ saved: true })
  } catch (error) {
    return NextResponse.json({ message: error instanceof Error ? error.message : "Could not save content." }, { status: 503 })
  }
}
