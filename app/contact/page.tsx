import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { PageHeading } from "@/components/page-heading"

export const metadata: Metadata = { title: "Start a Project", description: "Talk to Nisal Fonseka about an AI application, RAG assistant or full-stack software project.", alternates: { canonical: "/contact" } }

export default function ContactPage() {
  return (
    <main className="page-shell">
      <PageHeading title="Have a project in mind?" intro="Tell me what you’re building, what problem you’re trying to solve and where you are in the process." />
      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-.04em]">Start with the context.</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-black/55">You do not need a finished specification. A clear description of the users, problem and constraints is enough to begin.</p>
            <div className="mt-10 border-t border-black/20 pt-5 text-sm"><p className="font-semibold">nisalfonseka@gmail.com</p><p className="mt-2 text-black/45">Colombo · Available remotely worldwide</p></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
