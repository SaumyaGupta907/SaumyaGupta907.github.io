// components/client-layout.tsx
"use client"

import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin } from "lucide-react"

const NAV_LINKS = [
  { name: "Home",       href: "/" },
  { name: "Work",       href: "/work" },
  { name: "Experience", href: "/experience" },
  { name: "Contact",    href: "/contact" },
]

function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0,0,0,0.75)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        }}
      >
        <div className="container mx-auto px-6 lg:px-16">
          <div
            className="flex items-center justify-between transition-all duration-500"
            style={{ height: scrolled ? "52px" : "68px" }}
          >
            <Link
              href="/"
              className="font-bold tracking-tight transition-all duration-300 hover:opacity-70"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: scrolled ? "16px" : "18px",
                backgroundImage: "linear-gradient(135deg,#7c3aed,#a78bfa,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Saumya Gupta
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-200 relative"
                    style={{ color: isActive ? "#f5f5f7" : "#86868b", letterSpacing: "0.01em" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#f5f5f7")}
                    onMouseLeave={e => (e.currentTarget.style.color = isActive ? "#f5f5f7" : "#86868b")}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2"
                        style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#a78bfa", display: "block" }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            <div className="hidden md:flex items-center gap-5">
              <a href="https://github.com/SaumyaGupta907" target="_blank" rel="noreferrer"
                className="transition-all duration-200 hover:-translate-y-0.5" style={{ color: "#6e6e73" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#f5f5f7")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6e6e73")}
              >
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a href="https://linkedin.com/in/saumya-gupta346" target="_blank" rel="noreferrer"
                className="transition-all duration-200 hover:-translate-y-0.5" style={{ color: "#6e6e73" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#f5f5f7")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6e6e73")}
              >
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
            </div>

            <button
              className="md:hidden flex items-center justify-center w-8 h-8"
              style={{ color: "#86868b" }}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6"
            style={{ background: "rgba(0,0,0,0.96)", backdropFilter: "blur(24px)" }}
          >
            <nav className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "28px", fontWeight: 700,
                      color: pathname === link.href ? "#f5f5f7" : "#6e6e73",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex gap-6 mt-auto mb-12">
              <a href="https://github.com/SaumyaGupta907" target="_blank" rel="noreferrer" style={{ color: "#6e6e73" }}>
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/saumya-gupta346" target="_blank" rel="noreferrer" style={{ color: "#6e6e73" }}>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
      <footer
        className="py-6 text-center"
        style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p style={{ fontSize: "12px", color: "#4a4a55" }}>
          © 2026 Saumya Gupta · Jersey City, NJ
        </p>
      </footer>
    </>
  )
}