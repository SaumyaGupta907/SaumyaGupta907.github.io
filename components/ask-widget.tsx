"use client"

import { useEffect, useState } from "react"
import { X, Bot } from "lucide-react"
import { COLORS } from "@/lib/theme"
import Chatbot from "@/components/chatbot"

const QUESTIONS = [
  "What has she built at scale?",
  "How strong is her Java background?",
  "Has she shipped to production?",
  "What AI systems has she built?",
]

export default function AskWidget() {
  const [open, setOpen] = useState(false)
  const [qIndex, setQIndex] = useState(0)

  useEffect(() => {
    if (open) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const interval = setInterval(() => {
      setQIndex((i) => (i + 1) % QUESTIONS.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [open])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
    }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open reference check — ask Saumya's AI a question about her work"
        className="ask-tab hidden sm:block fixed bottom-6 right-6 z-40 text-left"
        style={{
          width: "236px",
          padding: "14px 16px",
          background: COLORS.paperDeep,
          border: `1px solid ${COLORS.signal}`,
          borderRadius: "8px",
          boxShadow: "0 12px 28px rgba(27,24,18,0.16)",
        }}
      >
        <span className="flex items-center gap-2 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full pulse-dot shrink-0" style={{ background: COLORS.signal }} />
          <Bot className="w-3 h-3 shrink-0" style={{ color: COLORS.signal }} />
          <span
            className="text-[10px] font-mono uppercase tracking-widest"
            style={{ color: COLORS.signal }}
          >
            Reference Check
          </span>
        </span>

        <span
          key={qIndex}
          className="fade-swap block font-serif italic"
          style={{ fontSize: "15px", lineHeight: 1.35, color: COLORS.ink, marginBottom: "10px" }}
        >
          &ldquo;{QUESTIONS[qIndex]}&rdquo;
        </span>

        <span
          className="text-[11px] font-mono uppercase tracking-wide"
          style={{ color: COLORS.ink }}
        >
          Ask now →
        </span>
      </button>

      <button
        onClick={() => setOpen(true)}
        aria-label="Open reference check — ask Saumya's AI a question about her work"
        className="sm:hidden fixed bottom-5 right-5 z-40 flex items-center justify-center rounded-full"
        style={{
          width: "52px",
          height: "52px",
          background: COLORS.signal,
          color: COLORS.paper,
          boxShadow: "0 8px 20px rgba(27,24,18,0.24)",
        }}
      >
        <Bot className="w-5 h-5" />
        <span
          className="absolute rounded-full pulse-dot"
          style={{ width: "8px", height: "8px", top: "2px", right: "2px", background: COLORS.paper }}
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          style={{ background: "rgba(27,24,18,0.55)" }}
          onClick={() => setOpen(false)}
        >
          <div className="relative w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-3 -right-3 z-10 flex items-center justify-center rounded-full"
              style={{
                width: "28px",
                height: "28px",
                background: COLORS.paper,
                border: `1px solid ${COLORS.lineStrong}`,
                color: COLORS.ink,
              }}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="max-h-[90vh] overflow-y-auto rounded-md">
              <Chatbot />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
