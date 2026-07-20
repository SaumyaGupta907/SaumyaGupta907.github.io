"use client"

import { useRef } from "react"
import type { ReactNode, CSSProperties } from "react"

export default function MagneticButton({
  href,
  children,
  style,
  className = "",
  onClick,
}: {
  href?: string
  children: ReactNode
  style?: CSSProperties
  className?: string
  onClick?: () => void
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)"
  }

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`inline-flex items-center justify-center transition-transform duration-200 ease-out ${className}`}
      style={{ ...style, willChange: "transform" }}
    >
      {children}
    </a>
  )
}
