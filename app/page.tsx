import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Story from "@/components/story"
import Moments from "@/components/moments"
import Work from "@/components/work"
import Experience from "@/components/experience"
import Currently from "@/components/currently"
import Certifications from "@/components/certifications"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Hero />

        {/* Transition bridge: soft fade from hero into Story sticky section */}
        <div
          aria-hidden="true"
          style={{
            height: "120px",
            background: "linear-gradient(to bottom, #000 0%, #000 60%, rgba(124,58,237,0.04) 100%)",
            marginTop: "-1px",
          }}
        />

        <Story />
        <Moments />
        <Work />
        <Experience />
        <Certifications />
        <Currently />
      </main>
      <Footer />
    </>
  )
}