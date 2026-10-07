import { NextResponse } from "next/server"
import { z } from "zod"
import { isAdmin } from "@/lib/auth"

const emailSchema = z.object({
  recipientName: z.string().trim().max(100).default(""),
  recipientEmail: z.email().max(160),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(2).max(12_000),
})

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function messageHtml(message: string) {
  return message
    .split(/\n{2,}/)
    .map((paragraph) => `<p style="margin:0 0 18px;line-height:1.75">${escapeHtml(paragraph).replaceAll("\n", "<br>")}</p>`)
    .join("")
}

export async function POST(request: Request) {
  if (!(await isAdmin())) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

  const parsed = emailSchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ message: parsed.error.issues[0]?.message || "Check the email fields." }, { status: 400 })

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) return NextResponse.json({ message: "BREVO_API_KEY is not configured." }, { status: 503 })

  const senderEmail = process.env.BREVO_SENDER_EMAIL || "hello@nisalfonseka.com"
  const senderName = process.env.BREVO_SENDER_NAME || "Nisal Fonseka"

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: senderName },
        replyTo: { email: senderEmail, name: senderName },
        to: [{ email: parsed.data.recipientEmail, name: parsed.data.recipientName || undefined }],
        subject: parsed.data.subject,
        textContent: parsed.data.message,
        htmlContent: `<!doctype html><html><body style="margin:0;background:#f4f1ea;color:#101010;font-family:Montserrat,Arial,sans-serif"><div style="max-width:680px;margin:0 auto;padding:48px 24px"><div style="border-top:4px solid #101010;background:#fff;padding:36px 32px">${messageHtml(parsed.data.message)}</div><p style="margin:18px 0 0;color:#666;font-size:12px">Sent by Nisal Fonseka · <a href="https://nisalfonseka.com" style="color:#101010">nisalfonseka.com</a></p></div></body></html>`,
        tags: ["portfolio-admin"],
      }),
      signal: AbortSignal.timeout(15_000),
    })

    const result = await response.json().catch(() => null) as { message?: string; messageId?: string } | null
    if (!response.ok) {
      console.error("Brevo email delivery failed", response.status, result?.message || "Unknown Brevo error")
      return NextResponse.json({ message: result?.message || "Brevo could not send this email." }, { status: 502 })
    }

    return NextResponse.json({ sent: true, messageId: result?.messageId })
  } catch (error) {
    console.error("Brevo email request failed", error)
    return NextResponse.json({ message: "The email service did not respond. Please try again." }, { status: 502 })
  }
}
