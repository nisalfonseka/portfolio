import "server-only"

import { createHmac, timingSafeEqual } from "node:crypto"
import { cookies } from "next/headers"

export const ADMIN_COOKIE = "nisal_admin_session"
const SESSION_SECONDS = 60 * 60 * 8

function secret() {
  return process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD || ""
}

export function adminIsConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && secret())
}

export function passwordMatches(input: string) {
  const expected = process.env.ADMIN_PASSWORD ?? ""
  const left = Buffer.from(input)
  const right = Buffer.from(expected)

  if (!expected || left.length !== right.length) return false
  return timingSafeEqual(left, right)
}

export function createSessionToken() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS
  const payload = String(expires)
  const signature = createHmac("sha256", secret()).update(payload).digest("base64url")
  return `${payload}.${signature}`
}

export function verifySessionToken(token?: string) {
  if (!token || !secret()) return false
  const [payload, signature] = token.split(".")
  if (!payload || !signature || Number(payload) < Math.floor(Date.now() / 1000)) return false

  const expected = createHmac("sha256", secret()).update(payload).digest("base64url")
  const left = Buffer.from(signature)
  const right = Buffer.from(expected)
  return left.length === right.length && timingSafeEqual(left, right)
}

export async function isAdmin() {
  const cookieStore = await cookies()
  return verifySessionToken(cookieStore.get(ADMIN_COOKIE)?.value)
}

export const sessionMaxAge = SESSION_SECONDS
