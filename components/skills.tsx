"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Globe, Brain, Server, Cpu } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      items: ["React.js", "Next.js", "Node.js", "Express.js", "Django", "REST APIs", "MVC", "Redux"],
    },
    {
      category: "Database & Cloud",
      icon: <Database className="h-6 w-6" />,
      items: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Elasticsearch",
        "AWS (S3, EC2, Lambda, DynamoDB)",
        "Firebase",
        "Docker",
      ],
    },
    {
      category: "AI & Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      items: ["TensorFlow", "OpenCV", "Web Crawling", "Information Retrieval"],
    },
    {
      category: "DevOps & Tools",
      icon: <Server className="h-6 w-6" />,
      items: ["Git", "CI/CD", "Agile", "Jira", "IntelliJ", "VS Code", "Multithreading", "Performance Optimization"],
    },
    {
      category: "Other Skills",
      icon: <Cpu className="h-6 w-6" />,
      items: [
        "Alexa Skills Kit",
        "System Architecture",
        "UI/UX Design",
        "Data Structures & Algorithms",
      ],
    },
  ]

  const SkillCard = ({ category, icon, items, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">{icon}</div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="px-3 py-1 skill-pill rounded-full text-sm font-medium">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My technical toolkit includes a diverse range of programming languages, frameworks, and tools that I've
            mastered throughout my academic and professional journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} category={skill.category} icon={skill.icon} items={skill.items} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
