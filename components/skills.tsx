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
      items: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: "Web Technologies & Frameworks",
      icon: <Globe className="h-6 w-6" />,
      items: [
        "HTML",
        "CSS",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "Django",
        "REST APIs",
        "MVC Architecture",
        "Redux",
        "GraphQL"
      ],
    },
    {
      category: "Databases, Storage & Cloud",
      icon: <Database className="h-6 w-6" />,
      items: [
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Elasticsearch",
        "Firebase",
        "AWS (S3, EC2, Lambda, DynamoDB)",
      ],
    },
    {
      category: "DevOps, CI/CD & Tools",
      icon: <Server className="h-6 w-6" />,
      items: [
        "Git",
        "GitLab",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "CI/CD Pipelines",
        "Terraform",
        "Ansible",
        "Agile Methodology",
        "Jira",
        "IntelliJ IDEA",
        "VS Code",
      ],
    },
    {
      category: "AI, Machine Learning & Data",
      icon: <Brain className="h-6 w-6" />,
      items: [
        "TensorFlow",
        "OpenCV",
        "Information Retrieval",
        "Web Crawling",
      ],
    },
    {
      category: "Core CS Concepts & Advanced Skills",
      icon: <Cpu className="h-6 w-6" />,
      items: [
        "System Design",
        "Design Patterns",
        "Data Structures & Algorithms (DSA)",
        "Multithreading",
        "Performance Optimization",
        "Alexa Skills Kit",
        "UI/UX Design",
      ],
    },
  ]

  const SkillCard = ({ category, icon, items, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-zinc-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-zinc-700"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">{icon}</div>
        <h3 className="text-xl font-bold text-white">{category}</h3>
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
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold  text-white gradient-text">Skills & Expertise</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
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
