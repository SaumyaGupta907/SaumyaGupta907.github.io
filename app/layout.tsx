import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import ClientLayout from "../components/client-layout"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Saumya Gupta | Software Engineer",
  description:
    "Portfolio of Saumya Gupta — Full-Stack Software Engineer. MS CS Northeastern. Previously at Experian, Crewasis (Techstars), Accenture.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={playfair.variable}>
      <body style={{ background: "#000", margin: 0 }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}