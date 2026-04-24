"use client"

import { BadgeCheck } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

// All certs flat — no orphaned single-cert cards
const certs = [
  { name: "AWS Cloud Foundations",       provider: "AWS",    color: "#f59e0b", status: "certified"    },
  { name: "AWS Cloud Architecting",      provider: "AWS",    color: "#f59e0b", status: "certified"    },
  { name: "AWS Developer Associate",     provider: "AWS",    color: "#f59e0b", status: "in progress"  },
  { name: "Oracle Database PL/SQL",      provider: "Oracle", color: "#f97316", status: "certified"    },
  { name: "Cisco Python (PCAP)",         provider: "Cisco",  color: "#22d3ee", status: "certified"    },
  { name: "Cisco Linux Essentials",      provider: "Cisco",  color: "#22d3ee", status: "certified"    },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <ScrollReveal className="mb-10">
          <p className="font-semibold mb-4 tracking-widest uppercase"
            style={{ fontSize: "11px", color: "#a78bfa" }}>
            Certifications
          </p>
          <h2 className="font-bold"
            style={{
              fontSize: "clamp(28px, 3vw, 40px)",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-1px",
              color: "#f5f5f7",
              lineHeight: 1.1,
            }}>
            Staying sharp.
          </h2>
        </ScrollReveal>

        {/* Flat wrap grid — no orphaned cards */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {certs.map(cert => (
              <div
                key={cert.name}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                style={{
                  background: cert.status === "in progress"
                    ? "rgba(124,58,237,0.07)"
                    : "rgba(255,255,255,0.03)",
                  border: cert.status === "in progress"
                    ? "1px solid rgba(124,58,237,0.22)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Provider dot */}
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: cert.color, flexShrink: 0,
                  boxShadow: `0 0 6px ${cert.color}80`,
                }} />

                {/* Cert name */}
                <span style={{
                  fontSize: "13px",
                  color: cert.status === "in progress" ? "#86868b" : "#94a3b8",
                }}>
                  {cert.name}
                </span>

                {/* Status */}
                {cert.status === "certified" ? (
                  <BadgeCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#34d399" }} />
                ) : (
                  <span className="px-2 py-0.5 rounded-full" style={{
                    fontSize: "9px", color: "#a78bfa",
                    background: "rgba(124,58,237,0.15)",
                    fontWeight: 600, letterSpacing: "0.5px",
                  }}>
                    IN PROGRESS
                  </span>
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}