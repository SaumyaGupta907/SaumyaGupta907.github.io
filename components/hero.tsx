"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"

// ─── Particle canvas ──────────────────────────────────────────────────────────
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    type Star = { x: number; y: number; r: number; alpha: number; speed: number; drift: number }
    const stars: Star[] = Array.from({ length: 130 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.55 + 0.25,
      speed: Math.random() * 0.12 + 0.02,
      drift: (Math.random() - 0.5) * 0.06,
    }))
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const s of stars) {
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(167,139,250,${s.alpha})`; ctx.fill()
        s.y -= s.speed; s.x += s.drift
        s.alpha += Math.sin(Date.now() * 0.001 + s.x) * 0.002
        s.alpha = Math.max(0.04, Math.min(0.6, s.alpha))
        if (s.y < -4) { s.y = H + 4; s.x = Math.random() * W }
        if (s.x < -4 || s.x > W + 4) { s.x = Math.random() * W; s.y = Math.random() * H }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    window.addEventListener("resize", onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.75, zIndex: 1 }} />
}

const STATS = [
  { num: "4", suffix: "", label: "Companies · US & India" },
  { num: "300", suffix: "+", label: "Students Mentored" },
  { num: "SIH", suffix: "", label: "Winner · World's Largest Hackathon" },
  { num: "3.92", suffix: "", label: "MS GPA · Northeastern" },
]

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, -55])

  return (
    <section
      id="home"
      className="relative bg-black overflow-hidden"
      style={{
        height: "100dvh",
        minHeight: "640px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          opacity: 0.4,
          zIndex: 0,
          mixBlendMode: "overlay" as React.CSSProperties["mixBlendMode"],
        }}
      />

      {/* Stars */}
      <StarField />

      {/* Glow blooms */}
      <div className="bloom-top absolute pointer-events-none" style={{ width: "800px", height: "480px", top: "-160px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 65%)", zIndex: 2 }} />
      <div className="bloom-left absolute pointer-events-none" style={{ width: "400px", height: "400px", top: "25%", left: "-100px", background: "radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)", zIndex: 2 }} />
      <div className="bloom-right absolute pointer-events-none" style={{ width: "440px", height: "440px", bottom: "-60px", right: "-80px", background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)", zIndex: 2 }} />

      {/* Content */}
      <motion.div
        style={{ y: heroY, position: "relative", zIndex: 10 }}
        className="container mx-auto px-6 lg:px-16 pt-14"
      >
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* ── Left: Text ─────────────────────────────────────────── */}
          <div>
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full"
              style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.28)", color: "#a78bfa", fontSize: "11px" }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "#a78bfa" }} />
              Open to US Roles · OPT Available · Full-Stack SWE
            </motion.div>

            {/* Headline
                Key fix: clamp max is 56px, not 78px.
                "Engineer by training" is visually de-emphasized at 0.7em.
                Tight line-height 1.1 prevents runaway vertical space.
            */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(34px, 3.8vw, 56px)",
                letterSpacing: "-1.5px",
                lineHeight: 1.1,
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              <span className="text-white">Hi, I'm </span>
              <span style={{ backgroundImage: "linear-gradient(135deg,#7c3aed 0%,#a78bfa 45%,#ec4899 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Saumya.
              </span>
              <br />
              <span className="text-white">I build software</span>
              <br />
              <span style={{ backgroundImage: "linear-gradient(135deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                that ships.
              </span>
            </motion.h1>

            {/* Role — static, confident, no carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.5 }}
              style={{ marginBottom: "12px" }}
            >
              <span style={{ fontSize: "15px", color: "#6e6e73", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", letterSpacing: "0.2px" }}>
                Full-Stack Software Engineer
              </span>
            </motion.div>

            {/* Tagline — proof, not résumé */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              style={{ fontSize: "14px", color: "#6e6e73", lineHeight: "1.8", maxWidth: "440px", marginBottom: "20px" }}
            >
              Shipped production systems at{" "}
              <strong className="text-white font-medium">Experian</strong>,{" "}
              <strong className="text-white font-medium">Crewasis</strong>
              <span style={{ color: "#4a4a55", fontSize: "12px" }}> (Techstars)</span>,{" "}
              and <strong className="text-white font-medium">Accenture</strong>.{" "}
              <strong style={{ backgroundImage: "linear-gradient(90deg,#a78bfa,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Winner
              </strong>
              {" "}of the world's largest hackathon (1M+ engineers).{" "}
              <strong className="text-white font-medium">MS CS · Northeastern</strong>
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="flex gap-2.5 flex-wrap"
            >
              {[
                { href: "https://github.com/SaumyaGupta907", icon: <Github className="w-4 h-4" />, label: "GitHub", primary: true },
                { href: "https://linkedin.com/in/saumya-gupta346", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", primary: false },
                { href: "mailto:saumya.1126@gmail.com", icon: <Mail className="w-4 h-4" />, label: "Email", primary: false },
              ].map(btn => (
                <a
                  key={btn.label}
                  href={btn.href}
                  target={btn.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  <button
                    className="flex items-center gap-2 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      padding: "9px 22px",
                      ...(btn.primary
                        ? { background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", border: "none" }
                        : { background: "transparent", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)" }
                      ),
                    }}
                    onMouseEnter={e => {
                      if (btn.primary) e.currentTarget.style.boxShadow = "0 8px 28px rgba(124,58,237,0.35)"
                      else { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }
                    }}
                    onMouseLeave={e => {
                      if (btn.primary) e.currentTarget.style.boxShadow = "none"
                      else { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent" }
                    }}
                  >
                    {btn.icon}
                    {btn.label}
                  </button>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            {/*
              Orbit wrapper is exactly photo size (280×280).
              The orbit-dot is anchored at center (top:50%, left:50%, margin:-5px)
              and CSS rotates it around radius=155px (photo_radius 140 + 15px gap).
            */}
            <div className="relative" style={{ width: "280px", height: "280px" }}>
              {/* Breathing glow */}
              <div
                className="glow-ring absolute"
                style={{
                  inset: "-28px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(124,58,237,0.26), transparent 70%)",
                  zIndex: 0,
                }}
              />
              {/* Photo */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "280px",
                  height: "280px",
                  border: "1px solid rgba(124,58,237,0.35)",
                  boxShadow: "0 0 60px rgba(124,58,237,0.14)",
                  zIndex: 1,
                }}
              >
                <Image src="/photo_alt.png" alt="Saumya Gupta" fill className="object-cover object-top" priority />
              </div>
              {/* Orbit dot — centered on wrapper, CSS animates it around the edge */}
              <div
                className="orbit-dot"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "10px",
                  height: "10px",
                  marginTop: "-5px",
                  marginLeft: "-5px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#7c3aed,#ec4899)",
                  boxShadow: "0 0 10px rgba(124,58,237,0.85)",
                  zIndex: 3,
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ──────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 pt-7"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.67 + i * 0.06, duration: 0.38 }}
            >
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "28px", fontWeight: 700, color: "#f5f5f7", lineHeight: 1 }}>
                {s.num}
                {s.suffix && <span style={{ color: "#a78bfa" }}>{s.suffix}</span>}
              </div>
              <div style={{ fontSize: "10.5px", color: "#6e6e73", marginTop: "5px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ zIndex: 10 }}
      >
        <a href="#story" className="flex flex-col items-center gap-1 group">
          <span className="group-hover:text-[#6e6e73] transition-colors" style={{ fontSize: "9px", color: "#2e2e32", letterSpacing: "2px", textTransform: "uppercase" }}>
            scroll
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce" style={{ color: "#2e2e32" }} />
        </a>
      </motion.div>

      <style jsx>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .blink-cursor { animation: blink 1s step-end infinite; }

        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.75)} }
        .pulse-dot { animation: pulseDot 2s ease-in-out infinite; }

        @keyframes glowBreathe { 0%,100%{opacity:0.6} 50%{opacity:1} }
        .glow-ring { animation: glowBreathe 3.5s ease-in-out infinite; }

        @keyframes bloomPulse {
          0%,100% { opacity: 0.75; transform: translateX(-50%) scale(1); }
          50%      { opacity: 1;    transform: translateX(-50%) scale(1.07); }
        }
        .bloom-top { animation: bloomPulse 5s ease-in-out infinite; }
        @keyframes bloomLeft  { 0%,100%{opacity:0.5} 50%{opacity:0.8} }
        .bloom-left  { animation: bloomLeft  6s ease-in-out infinite 1s; }
        @keyframes bloomRight { 0%,100%{opacity:0.4} 50%{opacity:0.75} }
        .bloom-right { animation: bloomRight 7s ease-in-out infinite 2s; }

        /*
          The dot sits at center of the 280×280 wrapper via top/left 50% + margin -5px.
          translateX(155px) swings it to orbit radius (photo_r=140 + 15px gap).
          The counter-rotation keeps the dot visually upright as it travels.
        */
        @keyframes orbit {
          from { transform: rotate(0deg)   translateX(155px) rotate(0deg);   }
          to   { transform: rotate(360deg) translateX(155px) rotate(-360deg); }
        }
        .orbit-dot { animation: orbit 9s linear infinite; }
      `}</style>
    </section>
  )
}