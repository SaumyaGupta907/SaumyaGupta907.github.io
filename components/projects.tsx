"use client"

import { Github } from "lucide-react"
import { COLORS } from "@/lib/theme"
import Reveal from "@/components/reveal"

const FEATURED = [
  {
    index: "01",
    tag: "AI · AGENTIC",
    title: "Autonomous Browser Assistant",
    description:
      "An agent that navigates real websites, recovers from failed steps, and completes multi-step tasks on its own.",
    stack: ["Python", "LangGraph", "Playwright", "LangSmith"],
    stamp: "SELF-CORRECTS",
    github: "https://github.com/SaumyaGupta907/Autonomous-Browser-Assistant",
  },
  {
    index: "02",
    tag: "AI · MULTI-AGENT",
    title: "Equity Research CrewAI",
    description:
      "A crew of specialized AI agents that divide equity research the way an analyst desk would — one pulls the data, another analyzes it, a third drafts the report — orchestrated with CrewAI.",
    stack: ["Python", "CrewAI", "OpenAI", "SQLite"],
    github: "https://github.com/SaumyaGupta907/equity-research-crewai",
  },
  {
    index: "03",
    tag: "BACKEND · SEARCH",
    title: "Web Crawler Search Engine",
    description:
      "A distributed crawler and full-text search engine built for speed at scale, containerized for easy deployment.",
    stack: ["Python", "Elasticsearch", "Flask", "Docker"],
    stamp: "2HRS → 8MIN",
    github: "https://github.com/SaumyaGupta907/WebCrawlerSearchEngine",
  },
]

const FILED = [
  {
    tag: "AI · HEALTHCARE",
    title: "MediClear",
    stack: ["FastAPI", "LangChain", "ChromaDB", "React"],
    github: null,
    badge: "IN PROGRESS",
  },
  {
    tag: "JAVA · OOP",
    title: "Image Processing Java App",
    stack: ["Java", "MVC", "Command Pattern", "JUnit"],
    github: "https://github.com/SaumyaGupta907/Image-Processing-Java-App",
  },
  {
    tag: "FULL STACK · SQL",
    title: "Gym Management System",
    stack: ["Angular", "Node.js", "MySQL"],
    github: "https://github.com/SaumyaGupta907/GymManagementSystem",
  },
  {
    tag: "FULL STACK · REACT · ACADEMIC",
    title: "Kanbaz LMS",
    stack: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/SaumyaGupta907/kanbas-react-web-app",
  },
]

const PAPER = {
  title: "Face Mask and Social Distance Detection Using Deep Learning Models",
  venue: "Springer, 2023",
  tech: "MobileNet · YOLO · ResNet-50",
  stats: [
    { value: "506", label: "Accesses" },
    { value: "3", label: "Citations" },
    { value: "2023", label: "Published" },
  ],
  link: "https://link.springer.com/chapter/10.1007/978-981-19-9819-5_34",
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono font-medium" style={{ fontSize: "22px", color: COLORS.signal }}>
        {value}
      </p>
      <p className="text-[10px] font-mono uppercase tracking-widest mt-0.5" style={{ color: COLORS.inkFaint }}>
        {label}
      </p>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="builds" className="px-6 lg:px-8 py-12" style={{ background: COLORS.paperDeep }}>
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.2em] mb-3" style={{ color: COLORS.signal }}>
            Builds — Selected Work
          </p>
          <h2
            className="font-serif mb-10"
            style={{ fontSize: "clamp(28px, 3.4vw, 40px)", color: COLORS.ink }}
          >
            Things I&apos;ve built.
          </h2>
        </Reveal>

        <div style={{ borderTop: `1px solid ${COLORS.lineStrong}` }}>
          {FEATURED.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="py-10 md:py-14" style={{ borderBottom: `1px solid ${COLORS.lineStrong}` }}>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-mono" style={{ color: COLORS.inkFaint }}>
                    {p.index}
                  </span>
                  <span
                    className="text-[11px] font-mono tracking-widest"
                    style={{ color: COLORS.inkFaint }}
                  >
                    {p.tag}
                  </span>
                </div>

                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 mb-4">
                  <h3
                    className="font-serif"
                    style={{ fontSize: "clamp(24px, 2.8vw, 32px)", color: COLORS.ink, maxWidth: "22ch" }}
                  >
                    {p.title}
                  </h3>
                  {p.stamp && (
                    <span
                      className="inline-block text-[10px] font-mono uppercase tracking-wide shrink-0"
                      style={{
                        padding: "5px 10px",
                        color: COLORS.signal,
                        border: `1px solid ${COLORS.signal}`,
                        borderRadius: "3px",
                        transform: "rotate(-1.5deg)",
                      }}
                    >
                      {p.stamp}
                    </span>
                  )}
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: COLORS.inkSoft, maxWidth: "58ch" }}>
                  {p.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono rounded-full"
                        style={{
                          padding: "4px 11px",
                          border: `1px solid ${COLORS.lineStrong}`,
                          color: COLORS.inkSoft,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs transition-colors duration-200"
                    style={{ color: COLORS.inkFaint }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.signal)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.inkFaint)}
                  >
                    <Github className="w-3.5 h-3.5" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={FEATURED.length * 70}>
          <p
            className="text-[11px] font-mono uppercase tracking-[0.2em] mt-12 mb-1"
            style={{ color: COLORS.inkFaint }}
          >
            More builds
          </p>
        </Reveal>

        <div>
          {FILED.map((p, i) => {
            const Row = p.github ? "a" : "div"
            return (
              <Reveal key={p.title} delay={FEATURED.length * 70 + i * 50}>
                <Row
                  {...(p.github
                    ? { href: p.github, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5 sm:gap-4 py-4"
                  style={{ borderBottom: `1px solid ${COLORS.line}` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 min-w-0">
                    <h4
                      className="font-serif truncate transition-colors duration-200"
                      style={{ fontSize: "18px", color: COLORS.ink }}
                      onMouseEnter={
                        p.github ? (e) => (e.currentTarget.style.color = COLORS.signal) : undefined
                      }
                      onMouseLeave={p.github ? (e) => (e.currentTarget.style.color = COLORS.ink) : undefined}
                    >
                      {p.title}
                    </h4>
                    <span
                      className="text-[10px] font-mono tracking-widest shrink-0"
                      style={{ color: COLORS.inkFaint }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:inline text-xs font-mono" style={{ color: COLORS.inkFaint }}>
                      {p.stack.join(" · ")}
                    </span>
                    {p.github ? (
                      <Github className="w-3.5 h-3.5 shrink-0" style={{ color: COLORS.inkFaint }} />
                    ) : (
                      <span
                        className="text-[10px] font-mono uppercase tracking-wide shrink-0"
                        style={{ color: COLORS.inkFaint }}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                </Row>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={FEATURED.length * 70 + FILED.length * 50 + 60}>
          <div
            className="mt-16 md:mt-20 rounded-md"
            style={{ background: COLORS.paper, border: `1px solid ${COLORS.lineStrong}`, padding: "28px 28px" }}
          >
            <p
              className="text-[11px] font-mono uppercase tracking-[0.2em] mb-4"
              style={{ color: COLORS.signal }}
            >
              Published Research
            </p>
            <h3
              className="font-serif italic mb-2"
              style={{ fontSize: "clamp(20px, 2.4vw, 26px)", color: COLORS.ink, maxWidth: "38ch" }}
            >
              &ldquo;{PAPER.title}&rdquo;
            </h3>
            <p className="text-xs font-mono mb-6" style={{ color: COLORS.inkSoft }}>
              {PAPER.venue} · {PAPER.tech}
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-6">
              {PAPER.stats.map((s) => (
                <Stat key={s.label} value={s.value} label={s.label} />
              ))}
            </div>

            <a
              href={PAPER.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: COLORS.ink }}
              onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.signal)}
              onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.ink)}
            >
              Read the paper →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
