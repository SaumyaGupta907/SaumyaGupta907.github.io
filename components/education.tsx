"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

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
      gpa: "3.92/4.0",
      description:
        "Pursuing advanced studies in computer science with focus on algorithms, distributed systems, and software engineering. Developing expertise in modern software development practices and emerging technologies.",
      courses: [
        "Object-Oriented Design",
        "Web Development",
        "Database Management",
        "Machine Learning",
        "Algorithms",
        "Distributed Systems",
        "Software Engineering",
        "Computer Networks",
      ],
    },
    {
      degree: "B.Tech - Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
      period: "Aug 2018 - Jul 2022",
      gpa: "9.21/10.0",
      description:
        "Completed comprehensive undergraduate program in computer science with strong academic performance. Built solid foundation in programming, algorithms, and software development methodologies.",
      courses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Computer Architecture",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Web Technologies",
        "Programming Fundamentals",
      ],
    },
  ]

  const EducationCard = ({ edu, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-zinc-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-zinc-700"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-full text-primary">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
            <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
              <Award className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-green-700 font-medium text-sm">GPA: {edu.gpa}</span>
            </div>
          </div>

          <div className="text-primary font-medium mt-1">{edu.institution}</div>

          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{edu.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{edu.location}</span>
            </div>
          </div>

          <p className="mt-3 text-gray-300">{edu.description}</p>

          <div className="mt-4">
            <h4 className="font-medium text-sm mb-2 text-white">Key Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {edu.courses.map((course, i) => (
                <span key={i} className="px-2 py-1 skill-pill rounded-md text-xs font-medium">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="education" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            Education
            <div className="h-1 w-32 bg-purple-600 mx-auto mt-2"></div>
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
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
