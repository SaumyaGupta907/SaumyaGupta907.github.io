"use client"

import Image from "next/image"
import ScrollReveal from "@/components/scroll-reveal"

// ─── Add as many moments as you want here ─────────────────────────────────────
// Layout auto-adjusts: 1 item = full width, 2 = two cols, 3+ = masonry-style
const moments = [
  {
    id: "sih",
    label: "Smart India Hackathon · 2022",
    headline: "1st place. Out of 1M+.",
    body: "Built Hydrosense — a real-time water quality monitoring dashboard deployed across 500 schools in India. Competed against 40,000+ teams. Won.",
    photo: null as string | null,
    alt: "SIH 2022 winning moment",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.4) 0%, rgba(10,10,14,1) 65%)",
    accentColor: "#a78bfa",
    span: 3, // out of 5 columns on desktop
  },
  {
    id: "ghc",
    label: "Grace Hopper Celebration · 2025",
    headline: "Largest gathering of women in tech.",
    body: "Rooms full of engineers from Google, Microsoft, Amazon. Left with a clearer sense of the kind of engineer — and person — I want to be.",
    photo: null as string | null,
    alt: "Grace Hopper Celebration 2025",
    gradient: "linear-gradient(135deg, rgba(236,72,153,0.35) 0%, rgba(10,10,14,1) 65%)",
    accentColor: "#ec4899",
    span: 2,
  },
  // ── To add more, just copy a block like this: ───────────────────────────────
  // {
  //   id: "your-event",
  //   label: "Event Name · Year",
  //   headline: "Short punchy headline.",
  //   body: "One or two sentences about what it meant.",
  //   photo: "/your-photo.jpg",   ← drop image in /public and point here
  //   alt: "Alt text for accessibility",
  //   gradient: "linear-gradient(135deg, rgba(52,211,153,0.35) 0%, rgba(10,10,14,1) 65%)",
  //   accentColor: "#34d399",
  //   span: 2,
  // },
]

function PhotoPlaceholder({ gradient }: { gradient: string }) {
  return (
    <div className="absolute inset-0" style={{ background: gradient }}>
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
        <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.18)", letterSpacing: "3px", textTransform: "uppercase" }}>
          photo coming soon
        </span>
        <div style={{ width: "32px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
      </div>
    </div>
  )
}

function MomentCard({ m, priority = false }: { m: typeof moments[0]; priority?: boolean }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.06)",
        height: "100%",
      }}
    >
      {/* Photo — fixed height so all cards align */}
      <div className="relative flex-shrink-0" style={{ height: "220px" }}>
        {m.photo ? (
          <Image src={m.photo} alt={m.alt} fill className="object-cover" priority={priority} />
        ) : (
          <PhotoPlaceholder gradient={m.gradient} />
        )}
        {/* Bottom fade into card bg */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "60px", background: "linear-gradient(to bottom, transparent, #0d0d0d)" }}
        />
        {/* Label badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${m.accentColor}35`,
            fontSize: "9px",
            color: m.accentColor,
            letterSpacing: "1px",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {m.label}
        </div>
      </div>

      {/* Text */}
      <div className="px-6 pt-1 pb-7 flex flex-col gap-2">
        <h3
          className="font-bold"
          style={{
            fontSize: "clamp(17px, 1.8vw, 21px)",
            fontFamily: "'Playfair Display', Georgia, serif",
            letterSpacing: "-0.4px",
            color: "#f5f5f7",
            lineHeight: 1.2,
          }}
        >
          {m.headline}
        </h3>
        <p style={{ fontSize: "13px", color: "#6e6e73", lineHeight: "1.75" }}>
          {m.body}
        </p>
      </div>
    </div>
  )
}

export default function Moments() {
  return (
    <section
      id="moments"
      className="py-28"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">

        <ScrollReveal className="mb-14">
          <p className="font-semibold mb-4 tracking-widest uppercase"
            style={{ fontSize: "11px", color: "#a78bfa" }}>
            Moments
          </p>
          <h2 className="font-bold"
            style={{
              fontSize: "clamp(36px, 4vw, 54px)",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-1.5px",
              color: "#f5f5f7",
              lineHeight: 1.1,
            }}>
            Beyond the code.
          </h2>
        </ScrollReveal>

        {/*
          Grid: uses CSS grid with named column spans per card.
          1 card  → full width
          2 cards → 3/5 + 2/5 (asymmetric, equal height)
          3+ cards → wraps naturally, each respects its span
          All cards have identical photo height (220px) so rows always align.
        */}
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
        >
          {moments.map((m, i) => (
            <ScrollReveal
              key={m.id}
              delay={i * 0.12}
              style={{ gridColumn: `span ${m.span}` }}
            >
              <MomentCard m={m} priority={i === 0} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  )
}