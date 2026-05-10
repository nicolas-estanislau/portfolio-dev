"use client"

import { motion } from "framer-motion"

const SKILLS = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Three.js / R3F",
  "Tailwind CSS",
  "PostgreSQL",
]

export function About() {
  return (
    <section id="about" className="relative py-24 min-h-screen flex items-center z-10 pointer-events-none">
      <div className="container mx-auto px-4 pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">About Me</h2>
            <div className="h-px bg-border flex-1 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed backdrop-blur-sm bg-background/20 p-8 rounded-2xl border border-border/50 shadow-xl">
              <p>
                Hello! My name is Nicolas and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about building digital interfaces!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of building high-performance applications, interactive 3D experiences, and scalable full-stack architectures. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                When I'm not at the computer, I'm usually exploring new technologies or refining my design skills.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-background/20 p-8 rounded-2xl border border-border/50 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-primary">Here are a few technologies I've been working with recently:</h3>
              <ul className="grid grid-cols-2 gap-4">
                {SKILLS.map((skill, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-2 text-foreground/80"
                  >
                    <span className="text-primary text-xl leading-none">▹</span> {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
