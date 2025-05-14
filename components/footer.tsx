import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="text-xl font-bold">
              <span className="gradient-text">Sachin Rathod</span>
            </Link>
            <p className="text-sm text-foreground/70 mt-1">MERN Stack Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SachinNic1502"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sachin-rathod-b20b83175/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:itsachinrathod@gmail.com"
              className="text-foreground/70 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-foreground/60">
          <p>© {new Date().getFullYear()} Sachin Rathod. All rights reserved.</p>
          <p className="mt-1">Designed and built with Next.js, Tailwind CSS, and Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
