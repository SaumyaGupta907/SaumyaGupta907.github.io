import type React from "react"
import type { Metadata } from "next"
import { Fraunces, JetBrains_Mono, Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import AskWidget from "@/components/ask-widget"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "900"],
  style: ["normal", "italic"],
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Saumya Gupta — Software Engineer",
  description:
    "Field log of Saumya Gupta, software engineer. MS CS Northeastern. Previously at Experian, Crewasis (Techstars), Accenture. Winner, Smart India Hackathon.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${mono.variable} ${inter.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <AskWidget />
      </body>
    </html>
  )
}
