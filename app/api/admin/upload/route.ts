import { NextResponse } from "next/server"
import { isAdmin } from "@/lib/auth"
import { uploadImage } from "@/lib/storage"

export const runtime = "nodejs"

export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  const formData = await request.formData()
  const file = formData.get("file")

  if (!(file instanceof File)) return NextResponse.json({ message: "Choose an image to upload." }, { status: 400 })
  if (!file.type.startsWith("image/")) return NextResponse.json({ message: "Only image files are accepted." }, { status: 400 })
  if (file.size > 8 * 1024 * 1024) return NextResponse.json({ message: "Images must be smaller than 8 MB." }, { status: 400 })

  try {
    return NextResponse.json(await uploadImage(file))
  } catch (error) {
    console.error("Neon Object Storage upload failed", error)
    return NextResponse.json({ message: "The image could not be uploaded to Neon." }, { status: 500 })
  }
}
