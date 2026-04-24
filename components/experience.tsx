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
    voice: "Full ownership of the frontend, from Figma to shipped code.",
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
    companySub: null,
    location: "Boston, MA",
    period: "May – Aug 2025",
    type: "Internship",
    accentColor: "#f59e0b",
    voice: "The first time I shipped something that touched millions of people's financial data.",
    context: "Regulated industry, production APIs, zero tolerance for errors. Learned what it means to take code seriously.",
    bullets: [
      "Deployed 6 API specs in MuleSoft (RAML/OAS) for fraud detection and identity protection platforms.",
      "Upgraded 4 Spring Boot microservices from JDK 8 → 17, fixing 15+ Veracode security vulnerabilities.",
      "CI/CD via GitHub Actions and Harness. 99.9% uptime across all monitored services.",
    ],
    skills: ["Java", "Spring Boot", "MuleSoft", "GitHub Actions", "Harness", "Splunk"],
  },
  {
    company: "Crewasis.ai",
    companySub: null,
    location: "New York, NY",
    period: "May – Aug 2024",
    type: "Internship",
    accentColor: "#ec4899",
    voice: "Joined a Techstars startup mid-sprint and shipped three features in one summer.",
    context: "Fast-moving, under-resourced, high-trust. You figure things out or things don't get done.",
    bullets: [
      "ETL pipeline on AWS S3. CSV uploads to insights, 3 days → under 10 minutes.",
      "Django REST search portal reducing lookup time from 5 minutes to seconds across 35+ datasets.",
      "Refactored React/TypeScript data-insights dashboard used by all client-facing teams.",
    ],
    skills: ["Django", "PostgreSQL", "AWS S3", "React", "TypeScript"],
  },
  {
    company: "Northeastern",
    companySub: null,
    location: "Boston, MA",
    period: "May 2024 – May 2025",
    type: "Part-time",
    accentColor: "#34d399",
    voice: "Taught the course that shapes how engineers think. Took it seriously.",
    context: "300+ students across two semesters. If one of them writes better code because of a conversation we had, that matters more than most things on this page.",
    bullets: [
      "Weekly labs and code reviews. Java, OOP, SOLID principles, design patterns.",
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
    voice: "My first full-time role. Enterprise systems, 25+ servers, and the realization I wanted to build products, not maintain infrastructure.",
    context: "After internships building Alexa skills and React apps, this was my first full-time role at scale. 99% uptime isn't a metric here, it's a guarantee to thousands of stores.",
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
      className="pt-24 pb-16"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">

        {/* Section header */}
        <ScrollReveal className="mb-10">
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
          <div className="grid lg:grid-cols-5 gap-0"
            style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", overflow: "hidden" }}>

            {/* Left. company list */}
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
                          color: active === i ? e.accentColor : "#f5f5f7",
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
                      <div style={{ fontSize: "11px", color: "#6e6e73" }}>{e.period}</div>
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

            {/* Right. active company detail */}
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

                  <div style={{ fontSize: "12px", color: "#6e6e73", marginBottom: "20px" }}>
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
                      fontSize: "18px",
                      color: "#f5f5f7",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      lineHeight: 1.6,
                    }}>
                    {exp.voice}
                  </p>
                  <p className="mb-6"
                    style={{ fontSize: "14px", color: "#86868b", lineHeight: "1.75" }}>
                    {exp.context}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3"
                        style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.75" }}>
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
                          fontSize: "12px", color: "#86868b",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
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

        {/* Certifications strip — visible without scrolling */}
        <ScrollReveal delay={0.2} className="mt-8">
          <div
            className="rounded-2xl px-8 py-6"
            style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#080808" }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span style={{ fontSize: "10px", color: "#4a4a55", letterSpacing: "2px", textTransform: "uppercase", marginRight: "8px", flexShrink: 0 }}>
                Certifications
              </span>
              {[
                { name: "AWS Cloud Foundations",   color: "#f59e0b", status: "certified" },
                { name: "AWS Cloud Architecting",  color: "#f59e0b", status: "certified" },
                { name: "AWS Developer Associate", color: "#f59e0b", status: "in progress" },
                { name: "Oracle Database PL/SQL",  color: "#f97316", status: "certified" },
                { name: "Cisco Python (PCAP)",     color: "#22d3ee", status: "certified" },
                { name: "Cisco Linux Essentials",  color: "#22d3ee", status: "certified" },
              ].map(cert => (
                <div
                  key={cert.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: cert.status === "in progress" ? "rgba(124,58,237,0.08)" : "rgba(255,255,255,0.03)",
                    border: cert.status === "in progress" ? "1px solid rgba(124,58,237,0.2)" : "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: cert.color, flexShrink: 0, display: "inline-block",
                    boxShadow: cert.status === "certified" ? `0 0 4px ${cert.color}60` : "none" }} />
                  <span style={{ fontSize: "12px", color: cert.status === "in progress" ? "#86868b" : "#94a3b8" }}>
                    {cert.name}
                  </span>
                  {cert.status === "in progress" && (
                    <span style={{ fontSize: "9px", color: "#a78bfa", fontWeight: 600, letterSpacing: "0.5px" }}>
                      IN PROGRESS
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}