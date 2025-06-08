"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Experian",
      location: "Boston, MA",
      period: "May 2025 – Present",
      skills: [
        "Java",
        "Spring Boot",
        "MuleSoft Anypoint Studio",
        "Insomnia",
        "RESTful API Development",
        "Maven",
        "AWS DynamoDB",
        "GitHub Actions",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "Crewasis.ai",
      location: "New York, NY",
      period: "May 2024 – Aug 2024",
      skills: ["TypeScript", "Next.js", "React", "Django", "PostgreSQL", "RESTful API", "AWS", "Database Optimization"],
    },
    {
      title: "Object-Oriented Design & Java Teaching Assistant",
      company: "Northeastern University",
      location: "Boston, MA",
      period: "May 2024 – May 2025",
      skills: ["Java", "Object-Oriented Design", "Design Patterns", "JUnit", "PITest", "Mentoring"],
    },
    {
      title: "Associate Software Engineer",
      company: "Accenture",
      location: "Hyderabad, India",
      period: "Oct 2022 – Aug 2023",
      skills: [
        "SAP BASIS",
        "SAP HANA",
        "Sybase",
        "Oracle",
        "Linux",
        "System Administration",
        "Database Management",
        "SSL",
        "Security",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "DecibelApps",
      location: "Herndon, VA (Remote)",
      period: "Aug 2020 – Mar 2021",
      skills: ["JavaScript", "Python", "Alexa Skills Kit", "React", "REST APIs", "Amazon S3", "Conversational AI"],
    },
  ]

  const ExperienceCard = ({ experience, index }: { experience: { title: string; company: string; location: string; period: string; skills: string[] }; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative pl-8 pb-8 last:pb-0 experience-timeline"
    >
      <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mt-1 sm:mt-0">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{experience.period}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="text-primary font-medium">{experience.company}</div>
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{experience.location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 skill-pill rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Work Experience</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My professional journey has equipped me with valuable experience across different roles and technologies.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
