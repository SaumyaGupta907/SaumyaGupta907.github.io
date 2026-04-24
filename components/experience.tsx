"use client"

import { useState } from "react"
import ScrollReveal from "@/components/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"

const experiences = [
  {
    company: "IpserLab",
    companySub: null,
    location: "New York, NY",
    period: "Aug 2025 – Present",
    type: "Full-time",
    accentColor: "#a78bfa",
    voice: "Full ownership of the frontend — from Figma to shipped code.",
    context: "Small team, real clients. The kind of place where there's no one else to fix it if you don't.",
    bullets: [
      "10+ reusable React/TypeScript components across a multi-vendor e-commerce platform.",
      "REST API integration for session-aware auth and dynamic user profile rendering.",
      "UI flows and layouts designed in Figma from client briefs to shipped code.",
    ],
    skills: ["React", "TypeScript", "REST APIs", "Figma"],
  },
  {
    company: "Experian",
    companySub: "Consumer Services",
    location: "Boston, MA",
    period: "May – Aug 2025",
    type: "Internship",
    accentColor: "#f59e0b",
    voice: "The first time I shipped something that touched millions of people's financial data.",
    context: "Regulated industry, production APIs, zero tolerance for errors. Learned what it means to take code seriously.",
    bullets: [
      "Deployed 6 API specs in MuleSoft (RAML/OAS) for fraud detection and identity protection platforms.",
      "Upgraded 4 Spring Boot microservices from JDK 8 → 17, fixing 15+ Veracode security vulnerabilities.",
      "CI/CD via GitHub Actions and Harness — 99.9% uptime across all monitored services.",
    ],
    skills: ["Java", "Spring Boot", "MuleSoft", "GitHub Actions", "Harness", "Splunk"],
  },
  {
    company: "Crewasis.ai",
    companySub: "Techstars",
    location: "New York, NY",
    period: "May – Aug 2024",
    type: "Internship",
    accentColor: "#ec4899",
    voice: "Joined a Techstars startup mid-sprint and shipped three features in one summer.",
    context: "Fast-moving, under-resourced, high-trust. You figure things out or things don't get done.",
    bullets: [
      "ETL pipeline on AWS S3 — CSV uploads to insights, 3 days → under 10 minutes.",
      "Django REST search portal reducing lookup time from 5 minutes to seconds across 35+ datasets.",
      "Refactored React/TypeScript data-insights dashboard used by all client-facing teams.",
    ],
    skills: ["Django", "PostgreSQL", "AWS S3", "React", "TypeScript"],
  },
  {
    company: "Northeastern",
    companySub: "Teaching Assistant",
    location: "Boston, MA",
    period: "May 2024 – May 2025",
    type: "Part-time",
    accentColor: "#34d399",
    voice: "Taught the course that shapes how engineers think. Took it seriously.",
    context: "300+ students across two semesters. If one of them writes better code because of a conversation we had, that matters more than most things on this page.",
    bullets: [
      "Weekly labs and code reviews — Java, OOP, SOLID principles, design patterns.",
      "JUnit and PIT mutation testing frameworks for better test coverage and stronger engineers.",
    ],
    skills: ["Java", "OOP", "SOLID", "JUnit", "Design Patterns"],
  },
  {
    company: "Accenture",
    companySub: null,
    location: "Hyderabad, India",
    period: "Oct 2022 – Aug 2023",
    type: "Full-time",
    accentColor: "#60a5fa",
    voice: "My first job. Enterprise systems, 25+ servers, and the slow realization I wanted to build things, not maintain them.",
    context: "99% uptime isn't a metric here — it's a guarantee to thousands of stores. That pressure taught me more about software than any course.",
    bullets: [
      "25+ SAP ERP servers at 99% uptime during 7-Eleven's Azure cloud migration.",
      "Kafka pipelines streaming server health metrics into Elasticsearch for real-time anomaly detection.",
      "Shell scripting to automate health checks, patching, and alert workflows.",
    ],
    skills: ["Java", "Kafka", "Elasticsearch", "SAP HANA", "Linux", "Shell"],
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]

  return (
    <section
      id="experience"
      className="py-28"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">

        {/* Section header */}
        <ScrollReveal className="mb-16">
          <p className="font-semibold mb-4 tracking-widest uppercase"
            style={{ fontSize: "11px", color: "#a78bfa" }}>
            Experience
          </p>
          <h2 className="font-bold"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-1.5px",
              color: "#f5f5f7",
              lineHeight: 1.1,
            }}>
            Where I've built.
          </h2>
        </ScrollReveal>

        {/* Split screen */}
        <ScrollReveal>
          <div className="grid lg:grid-cols-5 gap-0 min-h-[480px]"
            style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", overflow: "hidden" }}>

            {/* Left — company list */}
            <div className="lg:col-span-2"
              style={{ borderRight: "1px solid rgba(255,255,255,0.06)", background: "#080808" }}>
              {experiences.map((e, i) => (
                <button
                  key={e.company}
                  onClick={() => setActive(i)}
                  className="w-full text-left transition-all duration-200"
                  style={{
                    padding: "20px 28px",
                    borderBottom: i < experiences.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                    background: active === i ? "rgba(255,255,255,0.03)" : "transparent",
                    borderLeft: active === i ? `3px solid ${e.accentColor}` : "3px solid transparent",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-semibold mb-0.5 flex items-center gap-2"
                        style={{
                          fontSize: "15px",
                          color: active === i ? e.accentColor : "#86868b",
                          transition: "color 0.2s",
                          fontFamily: "'Playfair Display', Georgia, serif",
                        }}>
                        {e.company}
                        {e.companySub && (
                          <span style={{ fontSize: "10px", color: "#4a4a55", fontFamily: "inherit" }}>
                            · {e.companySub}
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: "11px", color: "#4a4a55" }}>{e.period}</div>
                    </div>
                    {active === i && (
                      <div style={{
                        width: "6px", height: "6px", borderRadius: "50%",
                        background: e.accentColor,
                        boxShadow: `0 0 8px ${e.accentColor}`,
                        flexShrink: 0,
                      }} />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Right — active company detail */}
            <div className="lg:col-span-3 relative" style={{ background: "#0a0a0a" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ padding: "32px 36px", height: "100%" }}
                >
                  {/* Company + meta */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold"
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 28px)",
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: exp.accentColor,
                        letterSpacing: "-0.5px",
                        lineHeight: 1.1,
                      }}>
                      {exp.company}
                      {exp.companySub && (
                        <span style={{ fontSize: "14px", color: "#4a4a55", fontWeight: 400, marginLeft: "10px" }}>
                          {exp.companySub}
                        </span>
                      )}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                      <span className="px-2 py-0.5 rounded-full"
                        style={{
                          fontSize: "10px", color: "#6e6e73",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: "12px", color: "#4a4a55", marginBottom: "20px" }}>
                    {exp.location} · {exp.period}
                  </div>

                  {/* Gradient divider */}
                  <div style={{
                    height: "1px",
                    background: `linear-gradient(to right, ${exp.accentColor}50, transparent)`,
                    marginBottom: "20px",
                  }} />

                  {/* Voice + context */}
                  <p className="mb-2"
                    style={{
                      fontSize: "17px",
                      color: "#f5f5f7",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontStyle: "italic",
                      lineHeight: 1.5,
                    }}>
                    "{exp.voice}"
                  </p>
                  <p className="mb-6"
                    style={{ fontSize: "13px", color: "#6e6e73", lineHeight: "1.7" }}>
                    {exp.context}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3"
                        style={{ fontSize: "13.5px", color: "#6e6e73", lineHeight: "1.7" }}>
                        <span style={{ color: exp.accentColor, flexShrink: 0, marginTop: "2px", opacity: 0.7 }}>›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map(s => (
                      <span key={s} className="px-2.5 py-1 rounded-full"
                        style={{
                          fontSize: "11px", color: "#4a4a55",
                          background: "rgba(255,255,255,0.02)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}