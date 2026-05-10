"use client"

import { motion } from "framer-motion"

const SKILLS = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
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
                Olá! Meu nome é Nicolas Estanislau.
              </p>
              <p>
                Uma das minhas atividades é construir novas arquiteturas para me desafiar com novos padrões de desenvolvimento. Além disso, um dos meus hobbies é aprender novas tecnologias, por exemplo, no momento estou bastante interessado em Ruby on Rails.
              </p>
              <p>
                Nos últimos anos, também tenho me interessado em aprender novas linguagens e culturas.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-background/20 p-8 rounded-2xl border border-border/50 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-primary">Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:</h3>
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
