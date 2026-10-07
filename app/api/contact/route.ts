import { NextResponse } from "next/server"
import { z } from "zod"
import { saveInquiry } from "@/lib/content-store"
import type { Inquiry } from "@/lib/content"

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.email().max(160),
  company: z.string().trim().max(120).default(""),
  service: z.string().trim().min(2).max(100),
  timeline: z.string().trim().max(100).default(""),
  budget: z.string().trim().max(100).default(""),
  message: z.string().trim().min(20).max(4000),
  website: z.string().max(0).optional(),
})

export async function POST(request: Request) {
  try {
    const parsed = schema.safeParse(await request.json())
    if (!parsed.success) return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 })

    const inquiry: Inquiry = {
      id: crypto.randomUUID(),
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      service: parsed.data.service,
      timeline: parsed.data.timeline,
      budget: parsed.data.budget,
      message: parsed.data.message,
      createdAt: new Date().toISOString(),
    }
    await saveInquiry(inquiry)

    if (process.env.BREVO_API_KEY && process.env.BREVO_SMS_RECIPIENT) {
      const smsContent = `New portfolio lead: ${inquiry.name} / ${inquiry.service}. ${inquiry.email}. Check nisalfonseka.com/admin.`.slice(0, 155)
      const response = await fetch("https://api.brevo.com/v3/transactionalSMS/send", {
        method: "POST",
        headers: { "api-key": process.env.BREVO_API_KEY, accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: (process.env.BREVO_SMS_SENDER || "NisalSite").slice(0, 11),
          recipient: process.env.BREVO_SMS_RECIPIENT.replace(/^\+/, ""),
          content: smsContent,
          type: "transactional",
          tag: "portfolio-lead",
        }),
      })
      if (!response.ok) console.error("Brevo SMS delivery failed", await response.text())
    }

    return NextResponse.json({ message: "Message received." })
  } catch (error) {
    console.error("Contact submission failed", error)
    return NextResponse.json({ message: "Contact delivery is not configured yet. Please email hello@nisalfonseka.com." }, { status: 503 })
  }
}
