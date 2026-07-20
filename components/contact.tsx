"use client"

import { COLORS } from "@/lib/theme"
import Reveal from "@/components/reveal"
import MagneticButton from "@/components/magnetic-button"

const LINKS = [
  { label: "Email", value: "saumya.1126@gmail.com", href: "mailto:saumya.1126@gmail.com" },
  { label: "GitHub", value: "github.com/SaumyaGupta907", href: "https://github.com/SaumyaGupta907" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saumya-gupta346",
    href: "https://linkedin.com/in/saumya-gupta346",
  },
]

export default function Contact() {
  return (
    <section id="contact" style={{ background: COLORS.ink }}>
      <div className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p
              className="text-xs font-mono uppercase tracking-[0.2em] mb-6"
              style={{ color: COLORS.signal }}
            >
              End of Log
            </p>
            <h2
              className="font-serif mb-10"
              style={{ fontSize: "clamp(32px, 5vw, 56px)", lineHeight: 1.15, color: COLORS.paper }}
            >
              Got something <span style={{ color: COLORS.signal }}>worth building?</span>
              <br />
              Let&apos;s talk.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <MagneticButton
              href="mailto:saumya.1126@gmail.com"
              className="text-sm font-medium rounded-full mb-12"
              style={{ padding: "14px 32px", background: COLORS.signal, color: COLORS.paper }}
            >
              Say hello →
            </MagneticButton>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-sm font-mono transition-colors duration-200"
                  style={{ color: "rgba(250,246,239,0.6)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.paper)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,246,239,0.6)")}
                >
                  {link.value}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <p
              className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wide px-3 py-1.5 rounded-full"
              style={{ color: COLORS.signal, border: `1px solid ${COLORS.signal}` }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: COLORS.signal }} />
              Open to full-time SWE roles · OPT Available
            </p>
          </Reveal>
        </div>
      </div>

      <div className="px-6 lg:px-8 py-6" style={{ borderTop: "1px solid rgba(250,246,239,0.1)" }}>
        <p
          className="text-center text-[11px] font-mono"
          style={{ color: "rgba(250,246,239,0.35)" }}
        >
          designed &amp; built by Saumya Gupta · 2026 // EOF
        </p>
      </div>
    </section>
  )
}
