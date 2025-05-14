"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ParticleBackground from "./particle-background"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <ParticleBackground />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <h2 className="text-xl md:text-2xl font-medium text-accent">Hello, I'm</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">Sachin Rathod</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-semibold text-foreground/80 h-[40px]"
            >
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Freelance Developer",
                  2000,
                  "Frontend Specialist",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-foreground/70 text-lg max-w-xl"
            >
              Specializing in building high-performance web applications with modern technologies. Offering freelance
              services to deliver custom, scalable solutions for businesses and startups. Committed to writing clean,
              efficient code while following best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild className="bg-accent hover:bg-accent/80 text-white">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent/10">
                <Link href="#projects">View Projects</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://github.com/SachinNic1502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sachin-rathod-241623250"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:itsachinrathod@gmail.com"
                className="text-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-accent/30 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-accent to-accent/50 p-1 rounded-full">
                <div className="bg-background rounded-full p-2">
                  <div className="aspect-square rounded-full overflow-hidden bg-muted flex items-center justify-center text-6xl font-bold text-accent">
                    SR
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-foreground/50 hover:text-accent transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
