"use client"

import { Mail, Github, Linkedin, MapPin } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

export default function Currently() {
  return (
    <section
      id="contact"
      className="py-28 text-center relative overflow-hidden"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="absolute pointer-events-none" style={{
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px", height: "500px",
        background: "radial-gradient(ellipse, rgba(124,58,237,0.1), transparent 65%)",
      }} />

      <div className="container mx-auto px-6 lg:px-16 relative z-10 max-w-3xl">
        <ScrollReveal>
          <p className="font-semibold mb-5 tracking-widest uppercase"
            style={{ fontSize: "11px", color: "#a78bfa" }}>
            Currently
          </p>

          <h2 className="font-bold mb-5"
            style={{
              fontSize: "clamp(38px, 5.5vw, 62px)",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-2px",
              color: "#f5f5f7",
              lineHeight: 1.1,
            }}>
            Let's build something{" "}
            <span style={{
              backgroundImage: "linear-gradient(135deg, #7c3aed, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              together.
            </span>
          </h2>

          <p className="mb-3" style={{ fontSize: "16px", color: "#6e6e73", lineHeight: "1.75" }}>
            Currently engineering at{" "}
            <strong className="text-white font-medium">IpserLab</strong> in NYC.
          </p>
          <p className="mb-12 flex items-center justify-center gap-1.5"
            style={{ fontSize: "13px", color: "#4a4a55" }}>
            <MapPin className="w-3 h-3" />
            Jersey City, NJ · Open to full-time SWE roles across the US · OPT Available
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:saumya.1126@gmail.com">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", border: "none", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 28px rgba(124,58,237,0.35)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
              >
                <Mail className="w-4 h-4" />
                saumya.1126@gmail.com
              </button>
            </a>
            <a href="https://github.com/SaumyaGupta907" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "transparent", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
                onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent" }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </button>
            </a>
            <a href="https://linkedin.com/in/saumya-gupta346" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "transparent", color: "#f5f5f7", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)" }}
                onMouseLeave={e => { e.currentTarget.style.border = "1px solid rgba(255,255,255,0.15)"; e.currentTarget.style.background = "transparent" }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}