import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0 w-full mt-auto relative z-10 bg-background/80 backdrop-blur">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by Nicolas Estanislau
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <Link
            href="https://github.com/nicolas-estanislau"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/nicolas-estanislau/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  )
}
