"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, Linkedin, Mail } from "lucide-react"

const pills = [
  "Full-Stack SWE",
  "MS CS · Northeastern · 3.92",
  "Jersey City, NJ",
  "Open to Relocate",
]

const certs = [
  "AWS Cloud Foundations",
  "AWS Cloud Architecting",
  "Oracle Database PL/SQL",
  "Cisco Python (PCAP)",
  "Cisco Linux Essentials",
]

export default function Currently() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="contact"
      className="py-28 text-center relative overflow-hidden"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      ref={ref}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.14), transparent 65%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-semibold mb-5 tracking-widest uppercase"
            style={{ fontSize: "11px", color: "#a78bfa" }}
          >
            Currently
          </p>

          <h2
            className="font-bold mb-5"
            style={{
              fontSize: "clamp(40px, 6vw, 64px)",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-2px",
              color: "#f5f5f7",
            }}
          >
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed, #ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              together.
            </span>
          </h2>

          <p
            className="mb-10"
            style={{
              fontSize: "18px",
              color: "#6e6e73",
              lineHeight: "1.7",
            }}
          >
            Building at IpserLab · Practicing DSA in Python · Learning AI/ML engineering
            <br />
            Open to full-time SWE roles across the US
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {pills.map((p) => (
              <span
                key={p}
                className="px-5 py-2.5 rounded-full text-sm"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  color: "#86868b",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <a href="mailto:saumya.1126@gmail.com">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-85"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <Mail className="w-4 h-4" />
                saumya.1126@gmail.com
              </button>
            </a>
            <a href="https://github.com/SaumyaGupta907" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all"
                style={{
                  background: "transparent",
                  color: "#f5f5f7",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </button>
            </a>
            <a href="https://linkedin.com/in/saumya-gupta346" target="_blank" rel="noreferrer">
              <button
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm transition-all"
                style={{
                  background: "transparent",
                  color: "#f5f5f7",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </button>
            </a>
          </div>

          {/* Certifications */}
          <div
            className="pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p
              className="mb-4 tracking-widest uppercase"
              style={{ fontSize: "10px", color: "#3d3d3f" }}
            >
              Certifications
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {certs.map((c) => (
                <span
                  key={c}
                  className="px-4 py-1.5 rounded-full text-xs"
                  style={{
                    background: "transparent",
                    color: "#3d3d3f",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}