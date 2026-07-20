"use client"

import { useState, useRef, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import { Send } from "lucide-react"
import { COLORS } from "@/lib/theme"

type Message = { role: "user" | "bot"; text: string }

const SUGGESTIONS = [
  { flag: "--stack", question: "What's her tech stack?" },
  { flag: "--projects", question: "Tell me about her projects" },
  { flag: "--experience", question: "Where has she worked?" },
  { flag: "--hire-me", question: "Is she available to hire?" },
]

const PLACEHOLDERS = [
  "Is she worth hiring?",
  "What's her strongest tech stack?",
  "Has she shipped to production?",
]

const GREETING = "Hi — I'm trained on Saumya's real work history. Ask me anything, or tap a question below."

function Avatar() {
  return (
    <span
      className="flex items-center justify-center rounded-full font-mono shrink-0"
      style={{
        width: "26px",
        height: "26px",
        fontSize: "10px",
        background: COLORS.signal,
        color: COLORS.paper,
      }}
    >
      SG
    </span>
  )
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState(false)
  const [placeholderIdx, setPlaceholderIdx] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, loading])

  useEffect(() => {
    if (focused || input) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => {
      setPlaceholderIdx((i) => (i + 1) % PLACEHOLDERS.length)
    }, 2600)
    return () => clearInterval(t)
  }, [focused, input])

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return
    setMessages((prev) => [...prev, { role: "user", text }])
    setInput("")
    setLoading(true)

    try {
      const postRes = await fetch("https://saumya1497-career-conversation.hf.space/gradio_api/call/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [text, []] }),
      })
      const { event_id } = await postRes.json()

      const streamRes = await fetch(
        `https://saumya1497-career-conversation.hf.space/gradio_api/call/chat/${event_id}`
      )
      const rawText = await streamRes.text()

      const lines = rawText.split("\n")
      const dataLine = lines.find((l) => l.startsWith("data:"))
      const parsed = JSON.parse(dataLine?.replace("data: ", "") || "[]")
      const reply = parsed?.[0] ?? "Sorry, I couldn't get a response."

      setMessages((prev) => [...prev, { role: "bot", text: reply }])
    } catch {
      setMessages((prev) => [...prev, { role: "bot", text: "Something went wrong, please try again." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="w-full rounded-md flex flex-col"
      style={{ background: COLORS.ink, border: `1px solid ${COLORS.ink}` }}
    >
      <div
        className="flex items-center gap-3 px-5 py-4"
        style={{ borderBottom: `1px solid rgba(250,246,239,0.12)` }}
      >
        <div>
          <p className="text-sm font-medium" style={{ color: COLORS.paper }}>
            Saumya · AI
          </p>
          <p className="flex items-center gap-1.5 text-xs" style={{ color: "rgba(250,246,239,0.5)" }}>
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: COLORS.signal }} />
            Online now
          </p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex flex-col gap-3 px-5 overflow-y-auto"
        style={{ minHeight: "220px", maxHeight: "380px", paddingTop: "18px", paddingBottom: "18px" }}
      >
        {messages.length === 0 && (
          <>
            <div className="flex items-end gap-2.5">
              <Avatar />
              <div
                className="text-sm leading-relaxed"
                style={{
                  maxWidth: "80%",
                  background: "rgba(250,246,239,0.08)",
                  color: "rgba(250,246,239,0.9)",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 14px 4px",
                }}
              >
                {GREETING}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pl-9">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s.flag}
                  onClick={() => sendMessage(s.question)}
                  className="text-xs rounded-full transition-colors duration-200"
                  style={{
                    padding: "7px 13px",
                    border: "1px solid rgba(250,246,239,0.18)",
                    background: "transparent",
                    color: "rgba(250,246,239,0.65)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = COLORS.signal
                    e.currentTarget.style.color = COLORS.paper
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(250,246,239,0.18)"
                    e.currentTarget.style.color = "rgba(250,246,239,0.65)"
                  }}
                >
                  {s.question}
                </button>
              ))}
            </div>
          </>
        )}

        {messages.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="flex justify-end">
              <div
                className="text-sm leading-relaxed"
                style={{
                  maxWidth: "80%",
                  background: COLORS.signal,
                  color: COLORS.paper,
                  padding: "10px 14px",
                  borderRadius: "14px 14px 4px 14px",
                }}
              >
                {m.text}
              </div>
            </div>
          ) : (
            <div key={i} className="flex items-end gap-2.5">
              <Avatar />
              <div
                className="text-sm leading-relaxed"
                style={{
                  maxWidth: "80%",
                  background: "rgba(250,246,239,0.08)",
                  color: "rgba(250,246,239,0.9)",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 14px 4px",
                }}
              >
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p style={{ margin: "0 0 6px 0" }}>{children}</p>,
                    strong: ({ children }) => (
                      <strong style={{ fontWeight: 600, color: COLORS.paper }}>{children}</strong>
                    ),
                    ol: ({ children }) => <ol style={{ paddingLeft: "18px", margin: "6px 0" }}>{children}</ol>,
                    ul: ({ children }) => <ul style={{ paddingLeft: "18px", margin: "6px 0" }}>{children}</ul>,
                    li: ({ children }) => <li style={{ marginBottom: "4px" }}>{children}</li>,
                  }}
                >
                  {m.text}
                </ReactMarkdown>
              </div>
            </div>
          )
        )}

        {loading && (
          <div className="flex items-end gap-2.5">
            <Avatar />
            <div
              className="flex items-center gap-1"
              style={{ background: "rgba(250,246,239,0.08)", padding: "13px 14px", borderRadius: "14px 14px 14px 4px" }}
            >
              <span className="typing-dot" style={{ background: "rgba(250,246,239,0.5)" }} />
              <span className="typing-dot" style={{ background: "rgba(250,246,239,0.5)", animationDelay: "0.15s" }} />
              <span className="typing-dot" style={{ background: "rgba(250,246,239,0.5)", animationDelay: "0.3s" }} />
            </div>
          </div>
        )}
      </div>

      <div className="px-5 py-4" style={{ borderTop: `1px solid rgba(250,246,239,0.12)` }}>
        <div
          className="flex items-center gap-2 rounded-full"
          style={{ background: "rgba(250,246,239,0.06)", border: "1px solid rgba(250,246,239,0.15)", padding: "5px 5px 5px 16px" }}
        >
          {!focused && !input && (
            <span className="blink-cursor" style={{ color: COLORS.signal }}>
              ▍
            </span>
          )}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={PLACEHOLDERS[placeholderIdx]}
            aria-label="Ask a question — live AI chat"
            className="flex-1 text-sm outline-none bg-transparent placeholder:text-[rgba(250,246,239,0.35)]"
            style={{ color: COLORS.paper }}
          />
          <button
            onClick={() => sendMessage(input)}
            aria-label="Send message"
            disabled={loading}
            className="flex items-center justify-center rounded-full shrink-0 transition-opacity duration-200 disabled:opacity-40"
            style={{ width: "32px", height: "32px", background: COLORS.signal, color: COLORS.paper }}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
