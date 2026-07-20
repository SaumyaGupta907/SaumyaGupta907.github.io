"use client"

import { COLORS } from "@/lib/theme"
import Reveal from "@/components/reveal"

const LOG = [
  {
    id: "b3c12e",
    range: "2025.08 → 2026.03",
    company: "IpserLab",
    role: "Software Engineering Intern",
    location: "New York, NY",
    note: "IpserLab was building a multi-vendor e-commerce platform from scratch with a small team. I owned the frontend end to end — built 10+ reusable React and TypeScript components across the landing pages, supplier dashboard, and user flows, and integrated REST APIs for session-aware authentication and dynamic profile rendering.",
  },
  {
    id: "a1f92c",
    range: "2025.05 → 2025.08",
    company: "Experian Consumer Services",
    role: "Software Engineering Intern",
    location: "Boston, MA",
    note: "Experian's fraud detection platform had a patchwork of undocumented APIs and aging microservices running on JDK 8. I took ownership of the API layer end to end — designed and deployed 6 client-facing specifications in MuleSoft for fraud detection and identity services, then migrated 4 Spring Boot microservices to JDK 17. The migration surfaced 15 Veracode security vulnerabilities which I resolved before shipping to production through GitHub Actions and Harness CI/CD.",
  },
  {
    id: "7e3d0b",
    range: "2024.05 → 2024.08",
    company: "Crewasis.ai (Techstars)",
    role: "Software Engineering Intern",
    location: "New York, NY",
    note: "Crewasis was processing client data manually — analysts were waiting 3 days for reports and spending 5 minutes on every search query. I built the entire data infrastructure from scratch: an ETL pipeline on AWS S3 that automated report generation, a Django REST API search portal, and a React and TypeScript dashboard for client-facing insights. Processing time dropped from 3 days to 10 minutes. Search went from 5 minutes to seconds.",
  },
  {
    id: "5c81f4",
    range: "2022.10 → 2023.08",
    company: "Accenture",
    role: "Associate Software Engineer",
    location: "Hyderabad, India",
    note: "7-Eleven was migrating 25 enterprise servers to Azure across HANA, Oracle, and Sybase databases. My job was to make sure nothing went down during the move. I built Java automation to continuously monitor server health and wrote Kafka to Elasticsearch event pipelines that streamed real-time metrics for anomaly detection. We maintained 99.9% uptime throughout the migration and automated disaster recovery so incidents resolved before they escalated.",
  },
  {
    id: "2b09a7",
    range: "2024 → 2025",
    company: "Northeastern University",
    role: "Teaching Assistant · Object-Oriented Design",
    location: "Boston, MA",
    note: "I mentored over 300 students in Java, object-oriented design, SOLID principles, and design patterns — reviewing code, running office hours, and helping them debug systems they couldn't see past on their own.",
  },
]

export default function Experience() {
  return (
    <section id="field-log" className="px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.2em] mb-3" style={{ color: COLORS.signal }}>
            git log --author=saumya
          </p>
          <h2
            className="font-serif mb-10"
            style={{ fontSize: "clamp(28px, 3.4vw, 40px)", color: COLORS.ink }}
          >
            Where I&apos;ve built.
          </h2>
        </Reveal>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 hidden sm:block"
            style={{ left: "5px", width: "1.5px", background: COLORS.line }}
          />

          <div className="flex flex-col gap-12">
            {LOG.map((entry, i) => (
              <Reveal key={entry.id} delay={i * 80}>
                <div className="relative sm:pl-12">
                  <span
                    aria-hidden="true"
                    className="hidden sm:block absolute rounded-full"
                    style={{
                      left: "0px",
                      top: "6px",
                      width: "11px",
                      height: "11px",
                      background: COLORS.paper,
                      border: `2px solid ${COLORS.signal}`,
                    }}
                  />

                  <p
                    className="text-[11px] font-mono mb-2"
                    style={{ color: COLORS.inkFaint }}
                  >
                    #{entry.id} · {entry.range}
                  </p>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                    <h3
                      className="font-serif"
                      style={{ fontSize: "22px", color: COLORS.ink }}
                    >
                      {entry.company}
                    </h3>
                    <span className="text-xs font-mono" style={{ color: COLORS.inkFaint }}>
                      {entry.location}
                    </span>
                  </div>

                  <p className="text-sm font-medium mb-3" style={{ color: COLORS.signal }}>
                    {entry.role}
                  </p>

                  <p className="text-sm leading-relaxed" style={{ color: COLORS.inkSoft, maxWidth: "62ch" }}>
                    {entry.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
