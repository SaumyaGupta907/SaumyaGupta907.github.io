"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function Story() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Tighter spring, feels responsive, not laggy
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // ── Heading ─────────────────────────────────────────────────────────────────
  const headingOpacity = useTransform(progress, [0, 0.08], [0, 1])
  const headingY       = useTransform(progress, [0, 0.08], [24, 0])

  // ── Progress bar fill ────────────────────────────────────────────────────────
  const barScaleX = useTransform(progress, [0.04, 0.78], [0, 1])

  // ── Paragraph transitions, ZERO overlap ────────────────────────────────────
  // Each para has a strict enter window and exit window with NO crossover.
  // Gap between exit-end of para N and enter-start of para N+1 = 0.04 (blank moment)
  // This ensures only ONE paragraph is visible at any time.
  //
  // Para 1: enter 0.08→0.20 | full 0.20→0.38 | exit 0.38→0.46
  // Para 2: enter 0.50→0.62 | full 0.62→0.76 | exit 0.76→0.84
  // Para 3: enter 0.88→1.00 | stays visible
  //
  // The gaps (0.46→0.50) and (0.84→0.88) are intentional blank moments
  // where no para is shown, this prevents any overlap whatsoever.

  const p1Opacity = useTransform(progress,
    [0.06, 0.16, 0.30, 0.38],
    [0,    1,    1,    0   ]
  )
  const p1Y = useTransform(progress, [0.06, 0.16], [24, 0])

  const p2Opacity = useTransform(progress,
    [0.40, 0.52, 0.60, 0.68],
    [0,    1,    1,    0   ]
  )
  const p2Y = useTransform(progress, [0.40, 0.52], [24, 0])

  const p3Opacity = useTransform(progress,
    [0.70, 0.78],
    [0,    1   ]
  )
  const p3Y = useTransform(progress, [0.70, 0.78], [24, 0])

  // ── Step dots, which paragraph is active ───────────────────────────────────
  // dot opacity peaks when its paragraph is fully visible
  const dot1 = useTransform(progress, [0.06, 0.16, 0.30, 0.42], [0.2, 1, 1, 0.2])
  const dot2 = useTransform(progress, [0.38, 0.52, 0.60, 0.72], [0.2, 1, 1, 0.2])
  const dot3 = useTransform(progress, [0.68, 0.78],              [0.2, 1       ])

  // ── Scroll hint fades after first para appears ───────────────────────────────
  const hintOpacity = useTransform(progress, [0, 0.06, 0.18], [1, 1, 0])

  return (
    // 300vh, enough dwell time without feeling endless
    <div ref={containerRef} id="story" style={{ height: "420vh", position: "relative", marginTop: "10vh" }}>

      {/* Sticky viewport */}
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#000",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}>

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 100%)",
        }} />

        <div className="container mx-auto px-6 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* ── Left: heading (pins, stays) ──────────────────────── */}
            <motion.div style={{ opacity: headingOpacity, y: headingY }}>
              <p className="font-semibold mb-4 tracking-widest uppercase"
                style={{ fontSize: "11px", color: "#a78bfa" }}>
                Story
              </p>

              {/* Progress bar */}
              <div style={{ width: "40px", height: "2px", background: "rgba(255,255,255,0.08)", marginBottom: "24px", position: "relative" }}>
                <motion.div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(90deg,#7c3aed,#ec4899)",
                  scaleX: barScaleX,
                  transformOrigin: "left",
                }} />
              </div>

              <h2 className="font-bold"
                style={{
                  fontSize: "clamp(36px, 4vw, 54px)",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  letterSpacing: "-1.5px",
                  lineHeight: 1.1,
                  color: "#f5f5f7",
                }}>
                Engineer.<br />
                <span style={{ color: "#383840" }}>Curious by nature.</span><br />
                Community<br />
                builder.
              </h2>

              {/* Step dots, tell user where they are */}
              <div className="flex items-center gap-3 mt-8">
                {[dot1, dot2, dot3].map((dot, i) => (
                  <motion.div
                    key={i}
                    style={{ opacity: dot }}
                  >
                    <div style={{
                      width: i === 0 ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: "linear-gradient(90deg,#7c3aed,#ec4899)",
                      transition: "width 0.3s ease",
                    }} />
                  </motion.div>
                ))}
              </div>

              {/* Scroll hint */}
              <motion.div
                style={{ opacity: hintOpacity }}
                className="mt-6 flex items-center gap-2"
              >
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                  style={{ fontSize: "14px", color: "#3d3d3f" }}
                >↓</motion.span>
                <span style={{ fontSize: "10px", color: "#3d3d3f", letterSpacing: "2px", textTransform: "uppercase" }}>
                  scroll
                </span>
              </motion.div>
            </motion.div>

            {/* ── Right: paragraphs, strictly non-overlapping ─────── */}
            <div style={{ position: "relative", minHeight: "200px" }}>

              {/* Para 1 */}
              <motion.p
                style={{ opacity: p1Opacity, y: p1Y, position: "absolute", top: 0, left: 0, right: 0 }}
                className="leading-relaxed"
              >
                <span style={{ fontSize: "17px", color: "#94a3b8", lineHeight: "1.9" }}>
                  In 3rd grade, I got obsessed with a river-crossing puzzle.
                  Three monks, three devils, one boat. I kept losing, but I kept
                  playing, because I couldn't figure out{" "}
                  <strong className="font-medium text-white">
                    how the computer knew the rules.
                  </strong>{" "}
                  By 8th grade I found out: a blinking cursor, an empty{" "}
                  <span style={{ color: "#a78bfa", fontFamily: "monospace", fontSize: "15px" }}>&lt;html&gt;</span>{" "}
                  tag, and the slow realization that I could make things happen on a screen too.
                </span>
              </motion.p>

              {/* Para 2 */}
              <motion.p
                style={{ opacity: p2Opacity, y: p2Y, position: "absolute", top: 0, left: 0, right: 0 }}
                className="leading-relaxed"
              >
                <span style={{ fontSize: "17px", color: "#94a3b8", lineHeight: "1.9" }}>
                  I did a CS degree, then joined{" "}
                  <strong className="font-medium text-white">Accenture</strong>
                  {" "}out of college. Real systems, real stakes. 25+ enterprise
                  servers keeping 7-Eleven running. It was good, but I kept
                  wanting to{" "}
                  <strong className="font-medium text-white">build things</strong>,
                  not maintain them. So I moved to the US for my MS at{" "}
                  <strong className="font-medium text-white">Northeastern</strong>,
                  {" "}interned at a{" "}
                  <strong className="font-medium text-white">Techstars startup</strong>
                  {" "}in NYC, then{" "}
                  <strong className="font-medium text-white">Experian</strong>,
                  {" "}shipping APIs into fraud systems used by millions of people.
                </span>
              </motion.p>

              {/* Para 3 */}
              <motion.p
                style={{ opacity: p3Opacity, y: p3Y, position: "absolute", top: 0, left: 0, right: 0 }}
                className="leading-relaxed"
              >
                <span style={{ fontSize: "17px", color: "#94a3b8", lineHeight: "1.9" }}>
                  Along the way, I started noticing how many people didn't
                  have anyone to show them the door. So I{" "}
                  <strong className="font-medium text-white">
                    founded a women-in-tech coding club
                  </strong>
                  , TA'd 300+ students in Java and OOP, and went to{" "}
                  <strong className="font-medium text-white">Grace Hopper</strong>{" "}
                  to meet the people who needed the same nudge I once did.
                  That 3rd-grade kid who couldn't figure out the boat puzzle?
                  Still here.{" "}
                  <strong className="font-medium text-white">Still building.</strong>
                </span>
              </motion.p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}