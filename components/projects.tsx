"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Github, Calendar, Tag } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState("All")

  const projectCategories = ["All", "Web Development", "AI & Machine Learning", "Data Engineering", "Educational"]

  const projects = [
    {
      title: "MovieZest",
      description: "A movie recommendation web application with personalized suggestions",
      image: "/placeholder.svg?height=400&width=600",
      period: "Feb 2024 - Apr 2024",
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST API", "JWT Authentication"],
      points: [
        "Built a responsive movie recommendation platform with React and Material UI, featuring user authentication and personalized watchlists",
        "Implemented a recommendation algorithm based on user preferences and viewing history",
      ],
      github: "https://github.com/SaumyaGupta907/MovieZest",
      category: "Web Development",
    },
    {
      title: "Face Mask & Social Distance Detection",
      description: "AI-powered system for COVID-19 safety compliance monitoring",
      image: "/placeholder.svg?height=400&width=600",
      period: "Jan 2023 - Mar 2023",
      technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Deep Learning"],
      points: [
        "Developed a real-time detection system using computer vision to monitor face mask usage and social distancing",
        "Implemented custom deep learning models with TensorFlow for accurate detection in various lighting conditions",
      ],
      github: "https://github.com/SaumyaGupta907/FaceMaskandSocialDistanceDetectionusingDLLmodels",
      category: "AI & Machine Learning",
    },
    {
      title: "HuskyStudy App",
      description: "Study companion app for Northeastern University students",
      image: "/placeholder.svg?height=400&width=600",
      period: "Oct 2023 - Dec 2023",
      technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
      points: [
        "Created a mobile application to help students organize study sessions, share resources, and track academic progress",
        "Implemented real-time collaboration features and calendar integration for scheduling",
      ],
      github: "https://github.com/SaumyaGupta907/HuskyStudyApp",
      category: "Educational",
    },
    {
      title: "Flask-Based Search Engine",
      description: "Custom search engine with web crawler and Elasticsearch integration",
      image: "/placeholder.svg?height=400&width=600",
      period: "Jan 2024 - Apr 2024",
      technologies: ["Flask", "Python", "Elasticsearch", "BM25", "Multithreading", "PageRank"],
      points: [
        "Developed a Flask-based search engine that integrates Elasticsearch and BM25 ranking to return the top 20 most relevant documents per query",
        "Designed and implemented a custom web crawler using a breadth-first search approach with PageRank algorithm and priority queue to index 30,000 documents",
        "Optimized crawler performance through multithreading, cutting runtime from 2 hours to 8 minutes",
      ],
      github: "https://github.com/SaumyaGupta907/hw5-SaumyaGupta907",
      category: "Data Engineering",
    },
    {
      title: "SheHack Hackathon Project",
      description: "Women-focused tech solution developed during Northeastern University hackathon",
      image: "/placeholder.svg?height=400&width=600",
      period: "Nov 2023",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
      points: [
        "Developed an innovative solution to address women's safety concerns in urban environments",
        "Integrated real-time location tracking and emergency alert system with community support features",
      ],
      github: "https://github.com/SaumyaGupta907/SheHack-HackathonNEU",
      category: "Web Development",
    },
    {
      title: "Kanbaz",
      description: "A Canvas-like Learning Management System built with MERN stack",
      image: "/placeholder.svg?height=400&width=600",
      period: "Jul 2024 - Aug 2024",
      technologies: ["React", "Redux", "TypeScript", "Node.js", "MongoDB", "REST API"],
      points: [
        "Built a Canvas-like LMS with React, Redux, and TypeScript, supporting multiple user profiles with role-based views",
        "Engineered a Node.js backend with MongoDB and RESTful APIs for authentication and content management",
      ],
      github: "https://github.com/SaumyaGupta907",
      category: "Educational",
    },
    {
      title: "Image Processor",
      description: "Java-based image processing application with GUI interface",
      image: "/placeholder.svg?height=400&width=600",
      period: "Sep 2023 - Dec 2023",
      technologies: ["Java", "Swing", "MVC", "Command Pattern"],
      points: [
        "Programmed a Java-based image processing application using Java Swing and MVC architecture",
        "Implemented core functionalities such as RGB visualization, image flipping, and brightening using the Command Design pattern",
      ],
      github: "https://github.com/SaumyaGupta907",
      category: "AI & Machine Learning",
    },
    {
      title: "Hydrosense",
      description: "IoT-based water quality monitoring system for schools",
      image: "/placeholder.svg?height=400&width=600",
      period: "Aug 2022 - Sep 2022",
      technologies: ["Python", "Django", "JavaScript", "Firebase", "IoT"],
      points: [
        "Developed a dashboard using Python-Django and JavaScript, integrating IoT for water quality monitoring across 500 schools",
        "Deployed a cloud-based multi-level monitoring system with Firebase for efficient data storage and analysis",
      ],
      github: "https://github.com/SaumyaGupta907",
      category: "Data Engineering",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.15 * index }}
      className="bg-white rounded-xl shadow-md overflow-hidden project-card"
    >
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center">
          <Tag className="h-3 w-3 mr-1 text-primary" />
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{project.period}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span key={i} className="px-2 py-1 skill-pill rounded-md text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-2 mb-6">
          {project.points.map((point, i) => (
            <li key={i} className="text-sm text-gray-600">
              • {point}
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              Code
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Projects</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my technical skills and problem-solving
            abilities.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "gradient-bg" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
