"use client"

import { useState, useEffect } from "react"
import { COLORS } from "@/lib/theme"

const NAV_LINKS = [
  { name: "Field Log", href: "#field-log" },
  { name: "Builds", href: "#builds" },
  { name: "Reference Check", href: "#reference-check" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = ""
      return
    }
    // cancel any in-flight smooth-scroll before locking, so the fixed
    // panel's layout isn't computed mid-animation
    const root = document.documentElement
    const prevBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = "auto"
    window.scrollTo(0, window.scrollY)
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
      root.style.scrollBehavior = prevBehavior
    }
  }, [mobileOpen])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e)
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-45% 0px -45% 0px" }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className="fixed top-0 w-full z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(250,246,239,0.92)" : "transparent",
        borderBottom: `1px solid ${scrolled ? COLORS.line : "transparent"}`,
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center rounded-full text-[10px] font-mono font-medium"
            style={{
              width: "26px",
              height: "26px",
              border: `1.5px solid ${COLORS.ink}`,
              color: COLORS.ink,
            }}
          >
            SG
          </span>
          <span
            className="hidden sm:inline text-sm font-medium tracking-tight"
            style={{ color: COLORS.ink, fontFamily: "var(--font-serif)" }}
          >
            Saumya Gupta
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-wide uppercase transition-colors duration-200"
                style={{ color: isActive ? COLORS.signal : COLORS.inkSoft }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.ink)}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? COLORS.signal : COLORS.inkSoft)}
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        <div
          className="hidden md:flex items-center gap-2 text-[11px] font-mono uppercase tracking-wide px-3 py-1.5 rounded-full"
          style={{ color: COLORS.signal, border: `1px solid ${COLORS.signal}` }}
        >
          <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: COLORS.signal }} />
          Open to work
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 w-6"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span
            className="h-px w-full transition-transform duration-200"
            style={{
              background: COLORS.ink,
              transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="h-px w-full transition-opacity duration-200"
            style={{ background: COLORS.ink, opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="h-px w-full transition-transform duration-200"
            style={{
              background: COLORS.ink,
              transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="md:hidden flex flex-col gap-6 px-6 py-10"
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            height: "calc(100vh - 64px)",
            background: COLORS.paper,
            borderTop: `1px solid ${COLORS.line}`,
            zIndex: 999,
            transform: "translateZ(0)",
            WebkitBackfaceVisibility: "hidden",
            isolation: "isolate",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl"
              style={{ color: COLORS.ink, fontFamily: "var(--font-serif)" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-wide mt-4 px-3 py-1.5 rounded-full w-fit"
            style={{ color: COLORS.signal, border: `1px solid ${COLORS.signal}` }}
          >
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: COLORS.signal }} />
            Open to work
          </div>
        </nav>
      )}
    </header>
  )
}
