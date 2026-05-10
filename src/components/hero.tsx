"use client"

import { motion, Variants } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100vh-4rem)] container mx-auto px-4 z-10 pointer-events-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl pointer-events-auto"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-lg md:text-xl font-medium text-primary mb-4">
            Hi, my name is
          </h2>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-foreground">
            Nicolas Estanislau.
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-muted-foreground">
            I do code.
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="backdrop-blur-md bg-background/30 border border-border/50 p-6 rounded-2xl shadow-xl max-w-xl mb-10">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Sou engenheiro de software com 3 anos de experiência na função, meu foco sempre foi no desenvolvimento com (MERN) MongoDB, Express.js, React.js e Node.js mas também possuo experiência em MySql, arquitetura backend e clean code.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4">
          {/* <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full shadow-lg")}>
            View Projects
          </Link>
          <Link href="#contact" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "rounded-full backdrop-blur-sm bg-background/50")}>
            Contact Me
          </Link> */}
        </motion.div>
      </motion.div>
    </section>
  )
}
