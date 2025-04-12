"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: "MS - Computer Science",
      institution: "Northeastern University",
      location: "Boston, USA",
      period: "Sep 2023 - May 2025",
      description:
        "Focusing on advanced algorithms, distributed systems, and software engineering principles. Relevant coursework includes Object-Oriented Design, Web Development, Database Management, and Machine Learning.",
    },
    {
      degree: "B.Tech - Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      period: "Aug 2018 - Jul 2022",
      description:
        "Graduated with a strong foundation in computer science fundamentals, data structures, algorithms, and software development methodologies.",
    },
  ]

  const EducationCard = ({ edu, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-full text-primary">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold">{edu.degree}</h3>
          <div className="text-primary font-medium mt-1">{edu.institution}</div>

          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{edu.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{edu.location}</span>
            </div>
          </div>

          <p className="mt-3 text-gray-600">{edu.description}</p>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My academic background has provided me with a strong foundation in computer science and software
            engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
