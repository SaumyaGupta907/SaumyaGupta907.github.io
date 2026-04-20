"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const moments = [
  {
    icon: "🏆",
    title: "Smart India Hackathon 2022",
    desc: "1st place · 1M+ participants · Built Hydrosense — a national water quality monitoring dashboard for schools across India.",
    photo: null as string | null,
    alt: "SIH 2022 Win",
  },
  {
    icon: "👩‍💻",
    title: "Grace Hopper Celebration 2025",
    desc: "World's largest gathering of women in tech. Connected with engineers from Google, Microsoft, Amazon and more.",
    photo: null as string | null,
    alt: "GHC 2025",
  },
]

export default function Moments() {

  return (
    <section
      id="moments"
      className="py-24"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p
            className="font-semibold mb-5 tracking-widest uppercase"
            style={{ fontSize: "11px", color: "#a78bfa" }}
          >
            Moments
          </p>
          <h2
            className="font-bold mb-4"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-1.5px",
              color: "#f5f5f7",
            }}
          >
            Beyond the code.
          </h2>
          <p style={{ fontSize: "18px", color: "#6e6e73", maxWidth: "540px" }}>
            Real moments from hackathons, conferences, and communities that
            shaped who I am as an engineer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {moments.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="rounded-2xl overflow-hidden relative"
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Photo or placeholder */}
              {m.photo ? (
                <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                  <Image src={m.photo} alt={m.alt} fill className="object-cover" />
                </div>
              ) : (
                <div
                  className="w-full flex items-center justify-center"
                  style={{
                    aspectRatio: "16/9",
                    background: "#0d0d0d",
                    border: "1px dashed rgba(255,255,255,0.08)",
                    borderRadius: "0",
                    color: "#3d3d3f",
                    fontSize: "13px",
                  }}
                >
                  📸 Add your photo here
                </div>
              )}

              <div className="p-8">
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3
                  className="font-bold mb-3"
                  style={{
                    fontSize: "20px",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#f5f5f7",
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: "1.7" }}>
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}