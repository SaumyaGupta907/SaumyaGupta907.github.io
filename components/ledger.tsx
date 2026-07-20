"use client"

import { COLORS } from "@/lib/theme"
import Reveal from "@/components/reveal"

const ENTRIES = [
  { value: "04", label: "Companies · US & India" },
  { value: "300+", label: "Students mentored" },
  { value: "SIH", label: "Winner · World's largest hackathon" },
  { value: "3.92", label: "MS GPA · Northeastern" },
]

export default function Ledger() {
  return (
    <div className="px-6 lg:px-8 -mt-4 mb-12 relative z-10">
      <Reveal delay={320}>
        <div
          className="mx-auto max-w-5xl relative"
          style={{
            background: COLORS.paperDeep,
            border: `1px solid ${COLORS.lineStrong}`,
            borderRadius: "6px",
            transform: "rotate(-0.4deg)",
            boxShadow: "0 14px 32px rgba(27,24,18,0.07)",
          }}
        >
          <span
            aria-hidden="true"
            className="hidden sm:block absolute rounded-full"
            style={{
              width: "22px",
              height: "22px",
              left: "-11px",
              top: "50%",
              transform: "translateY(-50%)",
              background: COLORS.paper,
              border: `1px solid ${COLORS.lineStrong}`,
            }}
          />
          <span
            aria-hidden="true"
            className="hidden sm:block absolute rounded-full"
            style={{
              width: "22px",
              height: "22px",
              right: "-11px",
              top: "50%",
              transform: "translateY(-50%)",
              background: COLORS.paper,
              border: `1px solid ${COLORS.lineStrong}`,
            }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4">
            {ENTRIES.map((e, i) => (
              <div
                key={e.label}
                className="px-6 py-8 text-center md:text-left"
                style={{
                  borderLeft: i !== 0 ? `1px dashed ${COLORS.lineStrong}` : "none",
                  borderTop: i >= 2 ? `1px dashed ${COLORS.lineStrong}` : "none",
                }}
              >
                <div
                  className="font-mono font-medium"
                  style={{ fontSize: "30px", color: COLORS.signal }}
                >
                  {e.value}
                </div>
                <div
                  className="text-[11px] font-mono uppercase tracking-wide mt-2"
                  style={{ color: COLORS.inkSoft }}
                >
                  {e.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
