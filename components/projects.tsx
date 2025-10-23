"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Github, Calendar, Tag, Info } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState(null)

  const projectCategories = [
    "All",
    "Full Stack Development",
    "AI & Machine Learning",
    "iOS Development",
    "Software Engineering",
    "IoT & Data Engineering",
  ]

  const projects = [
    {
      title: "Web Crawler Search Engine",
      description: "Flask-based search engine with custom web crawler",
      image: "/WebCrawlerImg.png",
      period: "Jan 2024 - Apr 2024",
      technologies: ["Flask", "Python", "Elasticsearch", "BM25", "Multithreading", "PageRank"],
      detailedPoints: [
        "Engineered a search engine that returns the top 20 most relevant results per query using Elasticsearch's powerful indexing capabilities.",
        "Designed a custom web crawler implementing BFS traversal with PageRank algorithm and priority queue to efficiently index 30,000 documents.",
        "Optimized system performance through multithreading techniques, dramatically reducing runtime from 2 hours to just 8 minutes.",
      ],
      github: "https://github.com/SaumyaGupta907/hw5-SaumyaGupta907",
      category: "AI & Machine Learning",
    },
    {
      title: "MovieZest",
      description: "Movie discovery platform with search features",
      image: "/moviezest.png",
      period: "Feb 2024 - Apr 2024",
      technologies: ["React", "JavaScript", "REST API"],
      detailedPoints: [
        "Developed an IMDB-like web application enabling users to search for movies by title, genre, and other criteria.",
        "Implemented detailed movie pages displaying summaries, cast information, ratings, and related recommendations.",
        "Created an intuitive user interface with responsive design for seamless browsing across desktop and mobile devices.",
      ],
      github: "https://github.com/SaumyaGupta907/MovieZest",
      category: "Full Stack Development",
    },
    {
      title: "Kanbaz",
      description: "Canvas-like Learning Management System",
      image: "/kanbaz.png",
      period: "Jan 2024 - Apr 2024",
      technologies: ["React", "Redux", "TypeScript", "Node.js", "MongoDB", "REST API"],
      detailedPoints: [
        "Built a comprehensive learning management system supporting multiple user profiles with role-based views and permissions.",
        "Implemented course management features for faculty and organized module access for students, creating a streamlined educational experience.",
        "Developed authentication, assignment submission, and content management systems that received positive feedback during academic evaluations.",
      ],
      github: "https://github.com/SaumyaGupta907/kanbas-react-web-app",
      category: "Full Stack Development",
    },
    {
      title: "SheBalance",
      description: "AI-driven platform for women returning from maternity leave",
      image: "/SheBalance.jpg",
      period: "Nov 2023",
      technologies: ["React.js", "Node.js", "ApyHub", "HuggingFace", "NewsAPI"],
      detailedPoints: [
        "Created a personalized platform that helps returning mothers stay informed, skilled, and supported during their maternity phase.",
        "Developed key features including AI-generated weekly progress summaries, curated learning modules, and mood-based content recommendations.",
        "Integrated tech news updates and interactive project timelines to help users maintain workplace awareness during their leave.",
      ],
      github: "https://github.com/SaumyaGupta907/SheHack-HackathonNEU",
      category: "Full Stack Development",
    },
    {
      title: "HuskyStudy App",
      description: "Collaborative study group application",
      image: "/huskyapp.png",
      period: "Oct 2023 - Dec 2023",
      technologies: ["SwiftUI", "Firebase", "Cloud Firestore"],
      detailedPoints: [
        "Designed a collaborative chat application allowing users to create and join virtual study groups for shared learning sessions.",
        "Implemented advanced features including group messaging, image sharing, polling functionality, and user profile customization.",
        "Integrated Firebase for authentication, real-time database operations, and push notifications to enhance user engagement.",
      ],
      github: "https://github.com/SaumyaGupta907/HuskyStudyApp",
      category: "iOS Development",
    },
    {
      title: "Image Processor",
      description: "Java-based image manipulation application",
      image: "/ImageProcessor.png",
      period: "Sep 2023 - Dec 2023",
      technologies: ["Java", "Swing", "MVC", "Command Pattern"],
      detailedPoints: [
        "Developed a comprehensive image processing application with both text-based and GUI interfaces using Java Swing and MVC architecture.",
        "Implemented over 10 unique image operations including RGB visualization, image flipping, and brightness adjustment.",
        "Utilized the Command Design pattern to achieve real-time output with processing times under 2 seconds, demonstrating efficient algorithm implementation.",
      ],
      github: "https://github.com/SaumyaGupta907/Image-Processing-Java-App",
      category: "Software Engineering",
    },
    {
      title: "Face Mask & Social Distance Detection",
      description: "AI system for COVID-19 safety monitoring",
      image: "/facemask.jpeg",
      period: "Jan 2023 - Mar 2023",
      technologies: ["Python", "TensorFlow", "OpenCV", "Computer Vision", "Deep Learning"],
      detailedPoints: [
        "Developed a research-based system using deep learning models like MobileNet, YOLO, and ResNet-50 to detect face mask usage and social distancing violations in real-time.",
        "Built with Python 3.x, the system is specifically designed for monitoring crowded spaces such as airports and hospitals during the pandemic.",
        "Research work published in Springer (https://link.springer.com/chapter/10.1007/978-981-19-9819-5_34), demonstrating the academic significance and practical applications of the project.",
      ],
      github: "https://github.com/SaumyaGupta907/FaceMaskandSocialDistanceDetectionusingDLLmodels",
      category: "AI & Machine Learning",
    },
    {
      title: "Hydrosense",
      description: "IoT-based water quality monitoring system",
      image: "/placeholder.svg?height=400&width=600",
      period: "Aug 2022 - Sep 2022",
      technologies: ["Python", "Django", "JavaScript", "Firebase", "IoT"],
      detailedPoints: [
        "Developed an interactive dashboard using Django and JavaScript that monitors water quality across 500 schools in real-time.",
        "Designed a cloud-based multi-level monitoring system with Firebase for efficient data storage and comprehensive analysis.",
        "Won the Smart India Hackathon, competing against 40,000+ teams, by creating an innovative solution to a critical public health challenge.",
      ],
      github: "https://github.com/SaumyaGupta907/Hydrosense-SIH-KIRA",
      category: "IoT & Data Engineering",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const ProjectCard = ({ project, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: 0.15 * index }}
        className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-md overflow-hidden project-card flex flex-col h-full hover:border-zinc-700 transition-colors"
      >
        <div className="relative h-48 w-full">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute top-3 right-3 bg-zinc-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium flex items-center border border-zinc-700">
            <Tag className="h-3 w-3 mr-1 text-purple-400" />
            <span className="text-gray-200">{project.category}</span>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center text-sm text-gray-400 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{project.period}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-md text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-4 flex gap-3">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 bg-transparent border-zinc-700 text-gray-200 hover:bg-zinc-800 hover:border-zinc-600"
              >
                <Github className="h-4 w-4" />
                Code
              </Button>
            </a>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent border-zinc-700 text-gray-200 hover:bg-zinc-800 hover:border-zinc-600"
              onClick={() => setSelectedProject(project)}
            >
              <Info className="h-4 w-4" />
              Details
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <section id="projects" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white gradient-text">Projects</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my technical skills and problem-solving
            abilities.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category ? "gradient-bg" : "border-zinc-700 text-gray-200 hover:bg-zinc-800"
              }
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

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-white">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-purple-400 font-medium">{selectedProject?.period}</DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <h4 className="font-medium mb-2 text-white">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject?.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-md text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="font-medium mb-2 text-white">Key Achievements</h4>
            <ul className="space-y-2 mb-4">
              {selectedProject?.detailedPoints.map((point, i) => (
                <li key={i} className="text-sm text-gray-300">
                  • {point}
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-6">
              <a href={selectedProject?.github} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 bg-transparent border-zinc-700 text-gray-200 hover:bg-zinc-800"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </Button>
              </a>
              <DialogClose asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-zinc-700 text-gray-200 hover:bg-zinc-800 bg-transparent"
                >
                  Close
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
