"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, Shield } from "lucide-react"
import emailjs from "@emailjs/browser"
import dynamic from "next/dynamic"

// Dynamically import ReCAPTCHA to avoid SSR issues
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
})

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" })
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<any>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    setSubmitStatus({ success: false, message: "" })

    if (formData.user_name.trim().length < 2) {
      setSubmitStatus({ success: false, message: "Name must be at least 2 characters long." })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.user_email)) {
      setSubmitStatus({ success: false, message: "Please enter a valid email address." })
      return false
    }

    if (formData.subject.trim().length < 5) {
      setSubmitStatus({ success: false, message: "Subject must be at least 5 characters long." })
      return false
    }

    if (formData.message.trim().length < 10) {
      setSubmitStatus({ success: false, message: "Message must be at least 10 characters long." })
      return false
    }

    const spamKeywords = ["viagra", "casino", "lottery", "winner", "congratulations", "click here", "free money"]
    const messageText = formData.message.toLowerCase()
    const subjectText = formData.subject.toLowerCase()

    const hasSpam = spamKeywords.some((keyword) => messageText.includes(keyword) || subjectText.includes(keyword))

    if (hasSpam) {
      setSubmitStatus({ success: false, message: "Message contains prohibited content." })
      return false
    }

    const linkCount = (formData.message.match(/https?:\/\//g) || []).length
    if (linkCount > 2) {
      setSubmitStatus({ success: false, message: "Message contains too many links." })
      return false
    }

    if (!recaptchaValue) {
      setSubmitStatus({ success: false, message: "Please complete the reCAPTCHA verification." })
      return false
    }

    return true
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const serviceId = "service_gwji69k"
    const templateId = "template_dio5zgq"
    const publicKey = "lnuWJEW547RPBQo9M"

    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text)
        setSubmitStatus({
          success: true,
          message: "Thank you for your message! I will get back to you soon.",
        })
        setFormData({
          user_name: "",
          user_email: "",
          subject: "",
          message: "",
        })
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
          setRecaptchaValue(null)
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error)
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again later.",
        })
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const handleRecaptchaChange = useCallback(
    (value: string | null) => {
      setRecaptchaValue(value)
      if (value && submitStatus.message === "Please complete the reCAPTCHA verification.") {
        setSubmitStatus({ success: false, message: "" })
      }
    },
    [submitStatus.message],
  )

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "gupta.saum@northeastern.edu",
      link: "mailto:gupta.saum@northeastern.edu",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Jersey City, NJ",
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Get In Touch</h2>
          <div className="mt-2 h-1 w-20 gradient-bg mx-auto"></div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for job opportunities, collaborations, or just to say hello!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary">{info.icon}</div>
                <div>
                  <h3 className="font-medium text-white">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-gray-300 hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-4 p-4 bg-green-50 rounded-lg"
            >
              <div className="p-2 bg-green-100 rounded-full text-green-600">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-medium text-green-800 text-sm">Secure Contact</h4>
                <p className="text-green-700 text-xs">This form is protected by reCAPTCHA and spam filters.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 bg-zinc-900 rounded-lg shadow-md p-6 border border-zinc-700"
          >
            {submitStatus.message && (
              <div
                className={`p-4 mb-4 rounded-md ${
                  submitStatus.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium">
                    Your Name *
                  </label>
                  <Input
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    minLength={2}
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium">
                    Your Email *
                  </label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    value={formData.user_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  minLength={5}
                  className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  minLength={10}
                  className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-400"
                />
                <p className="text-xs text-gray-500">
                  Minimum 10 characters. Please avoid excessive links or promotional content.
                </p>
              </div>

              {/* reCAPTCHA */}
              <div className="space-y-2">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LeYYFkrAAAAAM_TfvhdExZH_gjrgazSzXHhlJM2"
                  onChange={handleRecaptchaChange}
                  theme="light"
                />
                <p className="text-xs text-gray-500">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </div>

              <Button type="submit" className="w-full sm:w-auto gradient-bg" disabled={isSubmitting || !recaptchaValue}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
