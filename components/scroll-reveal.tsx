"use client"

/**
 * ScrollReveal — drop-in wrapper for any element that should
 * fade + slide up when it enters the viewport.
 *
 * Usage:
 *   <ScrollReveal>
 *     <YourContent />
 *   </ScrollReveal>
 *
 *   <ScrollReveal delay={0.2} y={40}>
 *     <YourContent />
 *   </ScrollReveal>
 */

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number        // stagger delay in seconds (default 0)
  y?: number            // slide distance in px (default 32)
  duration?: number     // animation duration (default 0.65)
  className?: string
  style?: React.CSSProperties
  once?: boolean        // animate only once (default true)
}

export default function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.65,
  className,
  style,
  once = true,
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px",
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}