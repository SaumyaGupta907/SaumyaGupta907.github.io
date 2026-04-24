// app/page.tsx
import Hero from "@/components/hero"
import Story from "@/components/story"
import Moments from "@/components/moments"

export default function Home() {
  return (
    <>
      <Hero />
      {/* Transition bridge */}
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
    </>
  )
}