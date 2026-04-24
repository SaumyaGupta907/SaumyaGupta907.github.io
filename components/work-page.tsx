// components/work-page.tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"

const featured = [
  {
    id: "webcrawler",
    name: "Web Crawler Search Engine",
    tag: "AI & ML · Backend",
    tagColor: "#a78bfa",
    image: "/WebCrawlerImg.png",
    desc: "30,000 pages indexed. Crawl time cut from 2 hours to 8 minutes using multithreading and BM25 ranking.",
    what: "Multithreaded Python web crawler with Elasticsearch-backed search, BM25 ranking, and NLP preprocessing.",
    skills: ["Python", "Flask", "Elasticsearch", "BM25", "NLP", "Docker"],
    github: "https://github.com/SaumyaGupta907/hw5-SaumyaGupta907",
  },
  {
    id: "kanbaz",
    name: "Kanbaz LMS",
    tag: "Full Stack",
    tagColor: "#34d399",
    image: "/kanbaz.png",
    desc: "Full Canvas LMS clone. Role-based access, course management, assignments, and grading.",
    what: "Full-stack LMS built with React, Redux, TypeScript, Node.js, and MongoDB. Supports multiple user roles with distinct views and permissions.",
    skills: ["React", "Redux", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/SaumyaGupta907/kanbas-react-web-app",
  },
  {
    id: "imageprocessor",
    name: "Image Processor",
    tag: "Software Eng",
    tagColor: "#60a5fa",
    image: "/ImageProcessor.png",
    desc: "Java app demonstrating MVC architecture, Command Pattern, and SOLID principles. GUI and CLI, 10+ image operations.",
    what: "Supports RGB visualization, flipping, brightness, blur, and more across both GUI and CLI modes. Command Design Pattern keeps operations decoupled and extensible.",
    skills: ["Java", "Swing", "MVC", "Command Pattern", "JUnit"],
    github: "https://github.com/SaumyaGupta907/Image-Processing-Java-App",
  },
  {
    id: "shebalance",
    name: "SheBalance",
    tag: "AI & ML",
    tagColor: "#ec4899",
    image: "/SheBalance.jpg",
    desc: "AI wellness platform for women returning from maternity leave. Built at SheHack NEU in 24 hours.",
    what: "React and Node.js platform using HuggingFace for Slack summarization and VADER sentiment analysis for personalized wellness tips.",
    skills: ["React.js", "Node.js", "HuggingFace", "VADER", "NewsAPI"],
    github: "https://github.com/SaumyaGupta907/SheHack-HackathonNEU",
  },
  {
    id: "hydrosense",
    name: "Hydrosense",
    tag: "IoT · Full Stack",
    tagColor: "#f59e0b",
    image: "/placeholder.svg",
    desc: "Won Smart India Hackathon out of 1M+ participants. Real-time water quality monitoring across 500 schools.",
    what: "National water quality monitoring dashboard deployed across 500 schools in India. IoT sensor integration with real-time cloud alerting.",
    skills: ["Python", "Django", "JavaScript", "Firebase", "IoT"],
    github: "https://github.com/SaumyaGupta907/Hydrosense-SIH-KIRA",
  },
  {
    id: "huskyapp",
    name: "HuskyStudy App",
    tag: "iOS",
    tagColor: "#f472b6",
    image: "/huskyapp.png",
    desc: "Real-time iOS chat for study groups. Live messaging, media sharing, and polls via Firebase.",
    what: "SwiftUI app backed by Firebase Auth, Firestore, and Cloud Storage. Supports group chats, media uploads, and real-time sync.",
    skills: ["SwiftUI", "Firebase", "Firestore", "Cloud Storage"],
    github: "https://github.com/SaumyaGupta907/HuskyStudyApp",
  },
]

const more = [
  {
    id: "gymmanagement",
    name: "Gym Management System",
    tag: "Full Stack",
    tagColor: "#34d399",
    image: "/placeholder.svg",
    desc: "Full-stack gym platform. 13-table MySQL schema with stored procedures and role-based auth.",
    what: "Angular frontend with Node.js REST APIs backed by a 13-table MySQL schema. Multi-join queries and stored procedures handle all data workflows.",
    skills: ["Angular", "Node.js", "MySQL", "REST APIs"],
    github: "https://github.com/SaumyaGupta907/GymManagementSystem",
  },
  {
    id: "moviezest",
    name: "MovieZest",
    tag: "Full Stack",
    tagColor: "#34d399",
    image: "/moviezest.png",
    desc: "Movie discovery platform with search, genre filtering, and detailed cast and rating pages.",
    what: "Responsive web app with movie search by title and genre. Detailed pages show summaries, cast, ratings, and recommendations.",
    skills: ["React", "JavaScript", "REST API"],
    github: "https://github.com/SaumyaGupta907/MovieZest",
  },
  {
    id: "facemask",
    name: "Face Mask Detection",
    tag: "AI & ML",
    tagColor: "#ec4899",
    image: "/facemask.jpeg",
    desc: "Real-time COVID safety monitoring using MobileNet, YOLO, and ResNet-50. Published in Springer 2023.",
    what: "Built for crowded public spaces like airports and hospitals. Research published in Springer, Computational Vision and Bio-Inspired Computing, Vol. 1439.",
    skills: ["Python", "TensorFlow", "OpenCV", "YOLO", "ResNet-50"],
    github: "https://github.com/SaumyaGupta907/FaceMaskandSocialDistanceDetectionusingDLLmodels",
  },
]

type FeaturedProject = typeof featured[0]
type MoreProject = typeof more[0]
type ModalProject = FeaturedProject | (MoreProject & { image?: string; what?: string })

function GithubIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function FeaturedCard({ p, onClick }: { p: FeaturedProject; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer group"
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "border 0.2s, transform 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.border = `1px solid ${p.tagColor}50`
        ;(e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)"
        ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
      }}
    >
      {/* Image */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {p.image && p.image !== "/placeholder.svg" ? (
          <Image src={p.image} alt={p.name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${p.tagColor}20 0%, #080808 70%)` }}>
            <div style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "20px 20px", position: "absolute", inset: 0,
            }} />
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.12)", letterSpacing: "3px", textTransform: "uppercase", position: "relative" }}>
              {p.name}
            </span>
          </div>
        )}
        {/* Tag badge on image */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${p.tagColor}35`,
            fontSize: "10px", fontWeight: 600,
            color: p.tagColor,
          }}>
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: p.tagColor, display: "inline-block" }} />
          {p.tag}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px 18px 18px" }}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 style={{
            fontSize: "15px", fontWeight: 600, color: "#f5f5f7",
            fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.2px",
          }}>
            {p.name}
          </h3>
          <a href={p.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ color: "#6e6e73", flexShrink: 0, marginTop: "2px" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#f5f5f7")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6e6e73")}
          >
            <GithubIcon style={{ width: "16px", height: "16px" }} />
          </a>
        </div>

        <p style={{ fontSize: "13px", color: "#6e6e73", lineHeight: "1.65", marginBottom: "14px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
          {p.desc}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {p.skills.slice(0, 4).map(s => (
            <span key={s} className="px-2.5 py-1 rounded-full"
              style={{ fontSize: "11px", color: "#6e6e73", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {s}
            </span>
          ))}
          {p.skills.length > 4 && (
            <span className="px-2.5 py-1 rounded-full"
              style={{ fontSize: "11px", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}>
              +{p.skills.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function MoreCard({ p, onClick }: { p: MoreProject; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onClick}
      className="rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "border 0.2s, transform 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.border = `1px solid ${p.tagColor}50`
        ;(e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.07)"
        ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
      }}
    >
      {/* Image */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {p.image ? (
          <Image src={p.image} alt={p.name} fill className="object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: `linear-gradient(135deg, ${p.tagColor}15 0%, #080808 70%)` }}>
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.1)", letterSpacing: "3px", textTransform: "uppercase" }}>
              {p.name}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${p.tagColor}35`,
            fontSize: "10px", fontWeight: 600,
            color: p.tagColor,
          }}>
          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: p.tagColor, display: "inline-block" }} />
          {p.tag}
        </div>
      </div>

      <div style={{ padding: "14px 16px 16px" }}>
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#f5f5f7", fontFamily: "'Playfair Display', Georgia, serif", letterSpacing: "-0.2px" }}>
            {p.name}
          </h3>
          <a href={p.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            style={{ color: "#6e6e73", flexShrink: 0, marginTop: "2px" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#f5f5f7")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6e6e73")}
          >
            <GithubIcon style={{ width: "15px", height: "15px" }} />
          </a>
        </div>
        <p style={{ fontSize: "12px", color: "#6e6e73", lineHeight: "1.6", marginBottom: "12px",
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {p.skills.slice(0, 3).map(s => (
            <span key={s} className="px-2 py-0.5 rounded-full"
              style={{ fontSize: "10px", color: "#6e6e73", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
              {s}
            </span>
          ))}
          {p.skills.length > 3 && (
            <span className="px-2 py-0.5 rounded-full"
              style={{ fontSize: "10px", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.2)" }}>
              +{p.skills.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Modal({ project, onClose }: { project: ModalProject; onClose: () => void }) {
  const p = project as FeaturedProject
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(20px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="relative w-full rounded-2xl overflow-auto"
        style={{ maxWidth: "580px", maxHeight: "85vh", background: "#111", border: "1px solid rgba(255,255,255,0.1)", padding: "32px" }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center rounded-full"
          style={{ width: "28px", height: "28px", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.08)", color: "#6e6e73", cursor: "pointer" }}
        >
          <X className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2 mb-3">
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: p.tagColor, display: "inline-block" }} />
          <span style={{ fontSize: "10px", color: p.tagColor, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{p.tag}</span>
        </div>

        <h2 style={{ fontSize: "26px", fontWeight: 700, fontFamily: "'Playfair Display', Georgia, serif", color: p.tagColor, letterSpacing: "-0.5px", marginBottom: "8px" }}>
          {p.name}
        </h2>

        <div style={{ height: "1px", background: `linear-gradient(to right, ${p.tagColor}40, transparent)`, marginBottom: "18px" }} />

        <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", marginBottom: "14px" }}>
          {p.desc}
        </p>

        {p.what && (
          <p style={{ fontSize: "13px", color: "#6e6e73", lineHeight: "1.75", marginBottom: "20px" }}>
            {p.what}
          </p>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {p.skills.map(s => (
            <span key={s} className="px-3 py-1.5 rounded-full"
              style={{ fontSize: "12px", color: "#86868b", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)" }}>
              {s}
            </span>
          ))}
        </div>

        <a href={p.github} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm"
          style={{ background: "linear-gradient(135deg,#7c3aed,#6d28d9)", color: "#fff", textDecoration: "none" }}
        >
          <GithubIcon style={{ width: "15px", height: "15px" }} />
          View on GitHub
        </a>
      </motion.div>
    </motion.div>
  )
}

export default function WorkPage() {
  const [selected, setSelected] = useState<ModalProject | null>(null)

  return (
    <section className="min-h-screen pt-24 pb-16" style={{ background: "#000" }}>
      <div className="container mx-auto px-6 lg:px-16">

        <ScrollReveal className="mb-12">
          <p className="font-semibold mb-4 tracking-widest uppercase"
            style={{ fontSize: "11px", color: "#a78bfa" }}>
            Work
          </p>
          <h1 className="font-bold"
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontFamily: "'Playfair Display', Georgia, serif",
              letterSpacing: "-1.5px",
              color: "#f5f5f7",
              lineHeight: 1.1,
            }}>
            Things I've built.
          </h1>
        </ScrollReveal>

        {/* Featured grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {featured.map(p => (
            <FeaturedCard key={p.id} p={p} onClick={() => setSelected(p)} />
          ))}
        </div>

        {/* More work */}
        <div className="flex items-center gap-4 mb-5">
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <span style={{ fontSize: "9px", color: "#3d3d3f", letterSpacing: "2px", textTransform: "uppercase" }}>More work</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {more.map(p => (
            <MoreCard key={p.id} p={p} onClick={() => setSelected(p)} />
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selected && <Modal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}