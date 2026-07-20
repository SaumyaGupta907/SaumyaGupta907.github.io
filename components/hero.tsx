"use client"

import { COLORS } from "@/lib/theme"
import MagneticButton from "@/components/magnetic-button"
import Reveal from "@/components/reveal"

export default function Hero() {
  return (
    <section id="top" className="pt-28 pb-10 px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p
            className="text-xs font-mono uppercase tracking-[0.2em] mb-6"
            style={{ color: COLORS.signal }}
          >
            Field Log — Entry 001 · Software Engineer
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1
            className="font-serif tracking-tight"
            style={{
              fontSize: "clamp(38px, 6.4vw, 74px)",
              lineHeight: 1.08,
              color: COLORS.ink,
              marginBottom: "28px",
              maxWidth: "18ch",
            }}
          >
            I&apos;ve been curious how things work since third grade.
            <br />
            Now{" "}
            <span className="relative inline-block" style={{ color: COLORS.signal }}>
              I build them
              <svg
                aria-hidden="true"
                viewBox="0 0 300 14"
                className="absolute left-0 w-full"
                style={{ bottom: "-6px", height: "12px" }}
              >
                <path
                  d="M2 8 C 60 2, 120 12, 160 6 S 260 2, 298 8"
                  fill="none"
                  stroke={COLORS.signal}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: COLORS.inkSoft, maxWidth: "56ch", marginBottom: "40px" }}
          >
            Software engineer across backend, frontend, and GenAI. Java, Python, TypeScript, React,
            AWS.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#builds"
              className="text-sm font-medium rounded-full"
              style={{ padding: "13px 28px", background: COLORS.signal, color: COLORS.paper }}
            >
              See the builds →
            </MagneticButton>
            <MagneticButton
              href="#reference-check"
              className="text-sm font-medium rounded-full"
              style={{ padding: "13px 28px", border: `1px solid ${COLORS.ink}`, color: COLORS.ink }}
            >
              Ask directly →
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
