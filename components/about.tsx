"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">About Me</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm rounded-lg overflow-hidden shadow-xl"
            style={{ aspectRatio: "3/4" }}
          >
            <Image src="/photo_alt.png" alt="Saumya Gupta" fill className="object-cover" priority />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Software Development Engineer</h3>
            <p className="text-gray-600 mb-6">
              I am a passionate Software Development Engineer with experience in full-stack development, currently
              pursuing my Master's in Computer Science at Northeastern University. With a strong foundation in Java,
              TypeScript, Python, and web technologies, I enjoy building scalable and efficient applications.
            </p>
            <p className="text-gray-600 mb-6">
              My professional journey includes working at Accenture as an Associate Software Engineer and internships at
              Crewasis.ai and DecibelApps, where I developed skills in system architecture, database management, and
              user experience design. I'm also passionate about AI and machine learning, having worked on computer
              vision and data engineering projects.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-600">Saumya Gupta</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-600">gupta.saum@northeastern.edu</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-gray-600">Boston, MA</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-gray-600">(857) 867-9496</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
