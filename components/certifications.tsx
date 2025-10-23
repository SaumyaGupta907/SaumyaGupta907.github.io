"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star } from "lucide-react"

interface Certification {
  title: string
  issuer: string
  date: string
  icon: "award" | "trophy" | "star"
  description?: string
}

const certifications: Certification[] = [
  {
    title: "AWS Academy - Cloud Architecting",
    issuer: "Amazon Web Services",
    date: "",
    icon: "award",
    description: "Graduate certification in cloud architecture and design",
  },
  {
    title: "AWS Academy - Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "",
    icon: "award",
    description: "Foundational cloud computing concepts and services",
  },
  {
    title: "Database Programming with PL/SQL",
    issuer: "Oracle",
    date: "",
    icon: "trophy",
    description: "Advanced database programming and optimization",
  },
  {
    title: "PCAP - Python Programming",
    issuer: "Cisco",
    date: "",
    icon: "star",
    description: "Programming essentials in Python",
  },
  {
    title: "NDG Linux Essentials",
    issuer: "Cisco",
    date: "",
    icon: "star",
    description: "Linux system administration fundamentals",
  },
]

const iconMap = {
  award: Award,
  trophy: Trophy,
  star: Star,
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold inline-block">
            <span className="gradient-text">Certifications & Achievements</span>
            <div className="h-1 w-40 bg-purple-600 mx-auto mt-2"></div>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and recognition for excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">{cert.title}</h3>
                    <p className="text-purple-400 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                    {cert.description && <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
