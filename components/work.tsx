"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { GitBranch, X, LayoutGrid, Rows, Columns, Grip } from "lucide-react"

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories = ["All", "Full Stack", "AI & ML", "iOS", "IoT", "Software Eng"]

const projects = [
  {
    title: "Hydrosense",
    badge: "🏆 SIH 2022 Winner",
    badgeColor: "#f59e0b",
    category: "IoT",
    description: "National water quality monitoring dashboard. Won Smart India Hackathon 2022 out of 1M+ participants.",
    image: "/placeholder.svg?height=400&width=600",
    period: "Aug 2022 – Sep 2022",
    technologies: ["Python", "Django", "JavaScript", "Firebase", "IoT"],
    detailedPoints: [
      "Won Smart India Hackathon 2022, competing against 40,000+ teams out of 1M+ participants.",
      "Developed an interactive dashboard monitoring water quality across 500 schools in real-time.",
      "Designed a cloud-based multi-level monitoring system with Firebase for efficient data storage.",
    ],
    github: "https://github.com/SaumyaGupta907/Hydrosense-SIH-KIRA",
    featured: true,
  },
  {
    title: "Web Crawler Search Engine",
    badge: "AI & ML",
    badgeColor: "#a78bfa",
    category: "AI & ML",
    description: "Multithreaded crawler indexing 30,000+ pages. Cut runtime from 2 hours to 8 minutes.",
    image: "/WebCrawlerImg.png",
    period: "Jan 2024 – Apr 2024",
    technologies: ["Flask", "Python", "Elasticsearch", "BM25", "Multithreading", "PageRank", "NLP"],
    detailedPoints: [
      "Optimized crawler performance through multithreading, reducing runtime from 2 hours to 8 minutes.",
      "Designed a custom web crawler using BFS traversal with PageRank and priority queues to index 30,000+ pages.",
      "Built NLP preprocessing pipeline — tokenization, stemming, stop-word removal — to improve search relevance.",
      "Integrated Elasticsearch with BM25 ranking to return the top 20 most relevant results per query.",
    ],
    github: "https://github.com/SaumyaGupta907/hw5-SaumyaGupta907",
    featured: true,
  },
  {
    title: "SheBalance",
    badge: "AI & ML",
    badgeColor: "#a78bfa",
    category: "AI & ML",
    description: "AI wellness platform for women returning from maternity leave. SheHack NEU Hackathon.",
    image: "/SheBalance.jpg",
    period: "Nov 2023",
    technologies: ["React.js", "Node.js", "HuggingFace", "VADER", "ApyHub", "NewsAPI"],
    detailedPoints: [
      "Built an AI-powered wellness platform helping women returning from maternity leave.",
      "Used HuggingFace to summarize Slack messages for smoother return-to-work experience.",
      "Integrated VADER sentiment analysis to deliver personalized wellness tips based on mood.",
    ],
    github: "https://github.com/SaumyaGupta907/SheHack-HackathonNEU",
    featured: false,
  },
  {
    title: "Kanbaz LMS",
    badge: "Full Stack",
    badgeColor: "#34d399",
    category: "Full Stack",
    description: "Canvas LMS clone with course management, assignments, and discussions.",
    image: "/kanbaz.png",
    period: "Jan 2024 – Apr 2024",
    technologies: ["React", "Redux", "TypeScript", "Node.js", "MongoDB", "REST API"],
    detailedPoints: [
      "Built a comprehensive LMS supporting multiple user profiles with role-based views.",
      "Implemented course management features for faculty and organized module access for students.",
      "Developed authentication, assignment submission, and content management systems.",
    ],
    github: "https://github.com/SaumyaGupta907/kanbas-react-web-app",
    featured: false,
  },
  {
    title: "Gym Management System",
    badge: "Full Stack",
    badgeColor: "#34d399",
    category: "Full Stack",
    description: "Full-stack platform with 13-table MySQL schema, stored procedures, and role-based auth.",
    image: "/placeholder.svg?height=400&width=600",
    period: "2024",
    technologies: ["Angular", "Node.js", "MySQL", "REST APIs"],
    detailedPoints: [
      "Built a full-stack gym management platform with a 13-table MySQL schema.",
      "Implemented stored procedures, triggers, multi-join SQL queries for data integrity.",
      "Designed role-based authentication for members, trainers, and admins.",
    ],
    github: "https://github.com/SaumyaGupta907/GymManagementSystem",
    featured: false,
  },
  {
    title: "HuskyStudy App",
    badge: "iOS",
    badgeColor: "#f472b6",
    category: "iOS",
    description: "Real-time iOS chat app with user auth, chat rooms, and media storage.",
    image: "/huskyapp.png",
    period: "Oct 2023 – Dec 2023",
    technologies: ["SwiftUI", "Firebase", "Cloud Firestore"],
    detailedPoints: [
      "Built a real-time iOS chat app with user authentication and chat rooms.",
      "Implemented Firebase Firestore for real-time messaging and Firebase Storage for media.",
      "Designed collaborative study group features with polling and profile customization.",
    ],
    github: "https://github.com/SaumyaGupta907/HuskyStudyApp",
    featured: false,
  },
  {
    title: "MovieZest",
    badge: "Full Stack",
    badgeColor: "#34d399",
    category: "Full Stack",
    description: "IMDB-like movie discovery platform with search, genre filtering, and detailed movie pages.",
    image: "/moviezest.png",
    period: "Feb 2024 – Apr 2024",
    technologies: ["React", "JavaScript", "REST API"],
    detailedPoints: [
      "Developed an IMDB-like app enabling users to search for movies by title and genre.",
      "Implemented detailed movie pages displaying summaries, cast info, ratings, and recommendations.",
      "Created a responsive UI for seamless browsing across desktop and mobile.",
    ],
    github: "https://github.com/SaumyaGupta907/MovieZest",
    featured: false,
  },
  {
    title: "Face Mask & Distance Detection",
    badge: "AI & ML",
    badgeColor: "#a78bfa",
    category: "AI & ML",
    description: "AI COVID-19 safety monitoring via deep learning. Published in Springer 2023.",
    image: "/facemask.jpeg",
    period: "Jan 2023 – Mar 2023",
    technologies: ["Python", "TensorFlow", "OpenCV", "MobileNet", "YOLO", "ResNet-50"],
    detailedPoints: [
      "Built a real-time system using MobileNet, YOLO, and ResNet-50 to detect mask usage and social distancing violations.",
      "Designed for crowded spaces like airports and hospitals.",
      "Research published in Springer — Computational Vision and Bio-Inspired Computing, Vol. 1439.",
    ],
    github: "https://github.com/SaumyaGupta907/FaceMaskandSocialDistanceDetectionusingDLLmodels",
    featured: true,
  },
  {
    title: "Image Processor",
    badge: "Software Eng",
    badgeColor: "#60a5fa",
    category: "Software Eng",
    description: "Java image manipulation app with GUI and 10+ operations using MVC architecture.",
    image: "/ImageProcessor.png",
    period: "Sep 2023 – Dec 2023",
    technologies: ["Java", "Swing", "MVC", "Command Pattern"],
    detailedPoints: [
      "Developed a comprehensive image processing app with text-based and GUI interfaces.",
      "Implemented 10+ image operations including RGB visualization, flipping, and brightness adjustment.",
      "Used Command Design pattern with processing times under 2 seconds.",
    ],
    github: "https://github.com/SaumyaGupta907/Image-Processing-Java-App",
    featured: false,
  },
]

type Project = typeof projects[0]
type LayoutMode = "bento" | "grid" | "cinematic" | "masonry"

// ─── Layout mode config ────────────────────────────────────────────────────────
const LAYOUTS: { id: LayoutMode; label: string; icon: React.ReactNode; description: string }[] = [
  { id: "bento", label: "Bento", icon: <Grip className="w-3.5 h-3.5" />, description: "Mixed sizes, Apple-style" },
  { id: "grid", label: "Grid", icon: <LayoutGrid className="w-3.5 h-3.5" />, description: "Uniform 3-col cards" },
  { id: "cinematic", label: "Cinematic", icon: <Rows className="w-3.5 h-3.5" />, description: "Alternating full-width rows" },
  { id: "masonry", label: "Masonry", icon: <Columns className="w-3.5 h-3.5" />, description: "Pinterest-style stagger" },
]

// ─── Animation variants ────────────────────────────────────────────────────────
// Plain static variant — per-card delay passed via `transition` prop on each
// motion.div instead of the custom-function pattern (avoids whileInView conflicts).
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0 },
}
const cardTransition = (i: number) => ({
  duration: 0.5,
  delay: i * 0.06,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
})

// ─── Card styles shared ────────────────────────────────────────────────────────
const cardBase: React.CSSProperties = {
  background: "#0d0d0d",
  border: "1px solid rgba(255,255,255,0.06)",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  transition: "border 0.22s, transform 0.22s, box-shadow 0.22s",
}

function CardHoverHandlers(el: HTMLElement, enter: boolean) {
  el.style.border = enter ? "1px solid rgba(124,58,237,0.35)" : "1px solid rgba(255,255,255,0.06)"
  el.style.transform = enter ? "translateY(-5px)" : "translateY(0)"
  el.style.boxShadow = enter ? "0 20px 60px rgba(124,58,237,0.12)" : "none"
}

// ─── Shared card body ─────────────────────────────────────────────────────────
function CardBody({ p, compact = false }: { p: Project; compact?: boolean }) {
  return (
    <div className="p-5">
      <span
        className="text-xs font-bold tracking-widest uppercase mb-2 block"
        style={{ color: p.badgeColor }}
      >
        {p.badge}
      </span>
      <h3 className="font-semibold mb-2" style={{ fontSize: compact ? "15px" : "17px", color: "#f5f5f7", fontFamily: "'Playfair Display', Georgia, serif" }}>
        {p.title}
      </h3>
      <p style={{ fontSize: "13px", color: "#6e6e73", lineHeight: "1.65", marginBottom: "14px" }}>
        {p.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {p.technologies.slice(0, 4).map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-full text-xs"
            style={{ background: "rgba(255,255,255,0.04)", color: "#86868b", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {t}
          </span>
        ))}
        {p.technologies.length > 4 && (
          <span className="px-2.5 py-1 rounded-full text-xs" style={{ color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}>
            +{p.technologies.length - 4}
          </span>
        )}
      </div>
    </div>
  )
}

// ─── BENTO layout ─────────────────────────────────────────────────────────────
function BentoGrid({ items, onSelect }: { items: Project[]; onSelect: (p: Project) => void }) {
  // Pattern: 1 wide (col-span-2) + 1 normal, then 3 normal, repeat
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
    >
      {items.map((p, i) => {
        const isFeatured = p.featured && i < 4
        return (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={cardTransition(i)}
            style={{ ...cardBase, gridColumn: isFeatured ? "span 2" : "span 1" }}
            onClick={() => onSelect(p)}
            onMouseEnter={e => CardHoverHandlers(e.currentTarget as HTMLElement, true)}
            onMouseLeave={e => CardHoverHandlers(e.currentTarget as HTMLElement, false)}
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: isFeatured ? "21/9" : "16/9" }}
            >
              <Image src={p.image} alt={p.title} fill className="object-cover" />
              {isFeatured && (
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", color: p.badgeColor, border: `1px solid ${p.badgeColor}40` }}
                >
                  Featured
                </div>
              )}
            </div>
            <CardBody p={p} compact={!isFeatured} />
          </motion.div>
        )
      })}
    </div>
  )
}

// ─── GRID layout ──────────────────────────────────────────────────────────────
function UniformGrid({ items, onSelect }: { items: Project[]; onSelect: (p: Project) => void }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((p, i) => (
        <motion.div
          key={p.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={cardTransition(i)}
          style={cardBase}
          onClick={() => onSelect(p)}
          onMouseEnter={e => CardHoverHandlers(e.currentTarget as HTMLElement, true)}
          onMouseLeave={e => CardHoverHandlers(e.currentTarget as HTMLElement, false)}
        >
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image src={p.image} alt={p.title} fill className="object-cover" />
          </div>
          <CardBody p={p} compact />
        </motion.div>
      ))}
    </div>
  )
}

// ─── CINEMATIC layout ─────────────────────────────────────────────────────────
function CinematicRows({ items, onSelect }: { items: Project[]; onSelect: (p: Project) => void }) {
  return (
    <div className="flex flex-col gap-6">
      {items.map((p, i) => {
        const reversed = i % 2 !== 0
        return (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={cardTransition(i)}
            className={`flex gap-0 rounded-2xl overflow-hidden cursor-pointer ${reversed ? "flex-row-reverse" : "flex-row"}`}
            style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)", transition: "border 0.22s, box-shadow 0.22s" }}
            onClick={() => onSelect(p)}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.border = "1px solid rgba(124,58,237,0.35)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(124,58,237,0.1)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.boxShadow = "none" }}
          >
            {/* Image — 45% width */}
            <div className="relative flex-shrink-0" style={{ width: "45%" }}>
              <Image src={p.image} alt={p.title} fill className="object-cover" />
              {/* Gradient fade into content */}
              <div
                className="absolute inset-y-0"
                style={{
                  [reversed ? "left" : "right"]: 0,
                  width: "80px",
                  background: `linear-gradient(${reversed ? "to left" : "to right"}, #0d0d0d, transparent)`,
                }}
              />
            </div>
            {/* Content — 55% */}
            <div className="flex flex-col justify-center px-8 py-8" style={{ width: "55%" }}>
              <span
                className="text-xs font-bold tracking-widest uppercase mb-3 block"
                style={{ color: p.badgeColor }}
              >
                {p.badge}
              </span>
              <h3
                className="font-bold mb-3"
                style={{ fontSize: "22px", color: "#f5f5f7", fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.5px" }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#6e6e73", lineHeight: "1.75", marginBottom: "16px" }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.technologies.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs"
                    style={{ background: "rgba(255,255,255,0.04)", color: "#86868b", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4" style={{ fontSize: "11px", color: "#3d3d3f", letterSpacing: "0.5px" }}>
                {p.period}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

// ─── MASONRY layout ───────────────────────────────────────────────────────────
function MasonryGrid({ items, onSelect }: { items: Project[]; onSelect: (p: Project) => void }) {
  // Split into 3 columns in JS, giving each a slightly different aspect to create height variation
  const cols: Project[][] = [[], [], []]
  items.forEach((p, i) => cols[i % 3].push(p))

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      {cols.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-4">
          {col.map((p, i) => {
            // Vary aspect ratios for masonry feel
            const aspects = ["4/3", "16/10", "1/1"]
            const aspect = aspects[(ci + i) % aspects.length]
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={cardTransition(ci * 3 + i)}
                style={cardBase}
                onClick={() => onSelect(p)}
                onMouseEnter={e => CardHoverHandlers(e.currentTarget as HTMLElement, true)}
                onMouseLeave={e => CardHoverHandlers(e.currentTarget as HTMLElement, false)}
              >
                <div className="relative w-full" style={{ aspectRatio: aspect }}>
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                </div>
                <CardBody p={p} compact />
              </motion.div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

// ─── Modal ─────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(24px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full rounded-2xl overflow-auto"
        style={{
          maxWidth: "640px",
          maxHeight: "88vh",
          background: "#111",
          border: "1px solid rgba(255,255,255,0.1)",
          padding: "40px",
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full flex items-center justify-center transition-colors"
          style={{
            width: "32px",
            height: "32px",
            background: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "#6e6e73",
            cursor: "pointer",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#222"; (e.currentTarget as HTMLElement).style.color = "#f5f5f7" }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1a1a1a"; (e.currentTarget as HTMLElement).style.color = "#6e6e73" }}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative w-full rounded-xl overflow-hidden mb-6" style={{ aspectRatio: "16/9" }}>
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <div className="mb-1" style={{ fontSize: "10px", color: "#3d3d3f", letterSpacing: "1px", textTransform: "uppercase" }}>
          {project.period}
        </div>
        <span className="text-xs font-bold tracking-widest uppercase mb-3 block" style={{ color: project.badgeColor }}>
          {project.badge}
        </span>
        <h3
          className="font-bold mb-4"
          style={{ fontSize: "26px", fontFamily: "'Playfair Display', Georgia, serif", color: "#f5f5f7", letterSpacing: "-0.5px" }}
        >
          {project.title}
        </h3>
        <p className="mb-6" style={{ fontSize: "15px", color: "#86868b", lineHeight: "1.85" }}>
          {project.description}
        </p>

        <ul className="space-y-3 mb-6">
          {project.detailedPoints.map((pt, i) => (
            <li key={i} className="flex gap-3" style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.65" }}>
              <span style={{ color: "#a78bfa", marginTop: "3px", flexShrink: 0 }}>›</span>
              {pt}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs"
              style={{ background: "rgba(124,58,237,0.1)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
          style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)", color: "#fff", textDecoration: "none" }}
        >
          <GitBranch className="w-4 h-4" />
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  )
}

// ─── Work section ─────────────────────────────────────────────────────────────
export default function Work() {
  const [filter, setFilter] = useState("All")
  const [layout, setLayout] = useState<LayoutMode>("bento")
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <section
      id="work"
      className="py-28"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="container mx-auto px-6 lg:px-16">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-semibold mb-4 tracking-widest uppercase" style={{ fontSize: "11px", color: "#a78bfa" }}>
              Work
            </p>
            <h2
              className="font-bold"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: "-1.5px",
                color: "#f5f5f7",
                lineHeight: 1.1,
              }}
            >
              Selected projects.
            </h2>
          </motion.div>

          {/* ── Controls row: filter + layout switcher ─────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-between items-center gap-4 mt-8"
          >
            {/* Category filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className="px-4 py-2 rounded-full text-xs transition-all duration-200"
                  style={{
                    background: filter === c ? "rgba(124,58,237,0.15)" : "transparent",
                    color: filter === c ? "#a78bfa" : "#6e6e73",
                    border: filter === c ? "1px solid rgba(124,58,237,0.3)" : "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Layout switcher */}
            <div
              className="flex items-center gap-1 rounded-full p-1"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {LAYOUTS.map(l => (
                <button
                  key={l.id}
                  onClick={() => setLayout(l.id)}
                  title={l.description}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-200"
                  style={{
                    background: layout === l.id ? "rgba(124,58,237,0.2)" : "transparent",
                    color: layout === l.id ? "#a78bfa" : "#6e6e73",
                    cursor: "pointer",
                    border: "none",
                  }}
                >
                  {l.icon}
                  <span className="hidden sm:inline">{l.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Active layout description */}
          <p className="mt-3 text-xs" style={{ color: "#3d3d3f" }}>
            {LAYOUTS.find(l => l.id === layout)?.description}
          </p>
        </div>

        {/* ── Project grid — animated layout switch ──────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={layout + filter}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {layout === "bento" && <BentoGrid items={filtered} onSelect={setSelected} />}
            {layout === "grid" && <UniformGrid items={filtered} onSelect={setSelected} />}
            {layout === "cinematic" && <CinematicRows items={filtered} onSelect={setSelected} />}
            {layout === "masonry" && <MasonryGrid items={filtered} onSelect={setSelected} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Modal ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}