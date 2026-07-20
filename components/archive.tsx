"use client"

import { COLORS } from "@/lib/theme"
import Reveal from "@/components/reveal"
import Chatbot from "@/components/chatbot"

export default function Archive() {
  return (
    <section id="reference-check" className="px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.2em] mb-3" style={{ color: COLORS.signal }}>
            Reference Check — AI Assistant
          </p>
          <h2
            className="font-serif mb-2"
            style={{ fontSize: "clamp(28px, 3.4vw, 40px)", color: COLORS.ink }}
          >
            Ask my AI assistant anything.
          </h2>
          <p className="text-xs mb-10" style={{ color: COLORS.inkFaint }}>
            Trained on my actual work history. Ask what you&apos;d ask in a screening call.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Chatbot />
        </Reveal>
      </div>
    </section>
  )
}
