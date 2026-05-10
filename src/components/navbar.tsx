"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useState, type ReactNode } from "react";

type Section = "hero" | "about";

const tabs: { id: Section; label: string }[] = [
  { id: "hero", label: "Nicolas" },
  { id: "about", label: "About" }
];

interface Props {
  hero: ReactNode;
  about: ReactNode;
}
export function Navbar({ hero, about }: Props) {
  const [active, setActive] = useState<Section>("hero");

  const { setTheme, theme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">Nicolas</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            {/* <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</Link> */}
            {/* <Link href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</Link> */}
            {/* <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link> */}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
