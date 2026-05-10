import { Hero } from "@/components/hero"
import { About } from "@/components/about"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      {/* Future sections will go here */}
      {/* <section id="projects" className="h-screen" /> */}
      {/* <section id="experience" className="h-screen" /> */}
      {/* <section id="contact" className="h-screen" /> */}
    </div>
  )
}
