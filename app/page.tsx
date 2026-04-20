import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Story from "@/components/story"
import Moments from "@/components/moments"
import Work from "@/components/work"
import Currently from "../components/currently"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Hero />

        {/*
          Transition bridge: a short gradient div that creates a soft fade
          from the hero's bottom edge into the Story section.
          Prevents the hard-cut jump when the sticky section kicks in.
        */}
        <div
          aria-hidden="true"
          style={{
            height: "120px",
            background: "linear-gradient(to bottom, #000 0%, #000 60%, rgba(124,58,237,0.04) 100%)",
            marginTop: "-1px", // overlap by 1px to kill any seam
          }}
        />

        <Story />
        <Moments />
        <Work />
        <Currently />
      </main>
      <Footer />
    </>
  )
}