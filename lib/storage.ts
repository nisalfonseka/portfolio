import "server-only"

import { Files } from "files-sdk"
import { neon } from "files-sdk/neon"

const BUCKET = "uploads"

function client() {
  return new Files({ adapter: neon({ bucket: BUCKET, defaultUrlExpiresIn: 60 * 60 * 6 }) })
}

export function isStoredImage(value: string) {
  return value.startsWith("neon:")
}

export function storedImageKey(value: string) {
  return value.replace(/^neon:/, "")
}

export async function imageUrl(value: string) {
  if (!isStoredImage(value)) return value
  return client().url(storedImageKey(value), { expiresIn: 60 * 60 * 6 })
}

export async function uploadImage(file: File) {
  const extension = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg"
  const base = file.name.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "image"
  const key = `portfolio/${Date.now()}-${crypto.randomUUID().slice(0, 8)}-${base}.${extension}`
  await client().upload(key, file, { contentType: file.type, cacheControl: "private, max-age=21600" })
  return { key: `neon:${key}`, url: await client().url(key, { expiresIn: 60 * 60 * 6 }) }
}

export async function signedImageUrl(value: string) {
  return imageUrl(value)
}
