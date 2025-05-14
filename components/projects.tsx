"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "MyLapKart",
    description:
      "E-commerce platform built with MERN stack and Tailwind CSS, featuring authentication, Razorpay payments, and Cloudinary image storage.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Razorpay", "Cloudinary"],
    github: "https://github.com/SachinNic1502",
    live: "",
    details: {
      overview:
        "MyLapKart is a comprehensive e-commerce platform for laptops and accessories, built with the MERN stack and styled with Tailwind CSS.",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filtering",
        "Shopping cart and wishlist functionality",
        "Secure payment integration with Razorpay",
        "Image upload and storage with Cloudinary",
        "Responsive design for all devices",
        "Order tracking and history",
      ],
      challenges:
        "Implementing a secure payment gateway and optimizing the product search functionality for large catalogs were the main challenges in this project.",
      solutions:
        "Utilized Razorpay's test environment for development and implemented efficient MongoDB indexing for faster search results.",
    },
  },
  {
    id: 2,
    title: "Sanjivani Care",
    description:
      "Hospital management web app using MERN stack, Tailwind CSS, and Framer Motion for animations and service/insurance management.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/SachinNic1502",
    live: "https://sanjivanicare.in",
    details: {
      overview:
        "Sanjivani Care is a comprehensive hospital management system designed to streamline healthcare operations and improve patient experience.",
      features: [
        "Patient registration and medical records",
        "Appointment scheduling and management",
        "Doctor and staff management",
        "Insurance claim processing",
        "Medical service catalog",
        "Billing and payment processing",
        "Interactive UI with smooth animations",
      ],
      challenges:
        "Creating an intuitive interface for complex healthcare workflows and ensuring data security for sensitive medical information.",
      solutions:
        "Implemented role-based access control and used Framer Motion to create intuitive UI transitions that guide users through complex processes.",
    },
  },
  {
    id: 3,
    title: "Comput Labs",
    description:
      "Developed a time-tracking web application using the MERN stack, featuring intuitive UI with React.js and secure data management with MongoDB.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Express", "RESTful API"],
    github: "https://github.com/SachinNic1502",
    live: "",
    details: {
      overview:
        "Comput Labs is a time-tracking application designed for teams and freelancers to monitor project hours, generate reports, and optimize productivity.",
      features: [
        "Time entry logging with start/stop functionality",
        "Project and task management",
        "Team collaboration tools",
        "Detailed reporting and analytics",
        "Client billing integration",
        "RESTful API for third-party integrations",
        "User-friendly dashboard",
      ],
      challenges:
        "Designing a system that accurately tracks time across different time zones and integrates seamlessly with existing project management tools.",
      solutions:
        "Implemented UTC-based time tracking with local time conversion and created flexible API endpoints for integration with popular project management platforms.",
    },
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onClick={() => setSelectedProject(project)} />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card
        className="overflow-hidden h-full flex flex-col cursor-pointer hover:shadow-xl transition-all duration-300 border-none accent-glow"
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl text-accent">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-foreground/70 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-1 mt-4">
            {project.tags.slice(0, 3).map((tag, i) => (
              <Badge key={i} variant="outline" className="bg-accent/10 text-foreground border-accent/20">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="bg-muted text-foreground/70">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="flex gap-2">
            {project.github && (
              <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            )}
            {project.live && (
              <Button variant="ghost" size="icon" asChild onClick={(e) => e.stopPropagation()}>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            )}
          </div>
          <Button variant="outline" size="sm" className="text-xs border-accent text-accent hover:bg-accent/10">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function ProjectDialog({ project, onClose }) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="relative h-64 md:h-80 my-4 rounded-md overflow-hidden">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-foreground/80">{project.details.overview}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1 text-foreground/80">
              {project.details.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Challenges & Solutions</h3>
            <p className="text-foreground/80 mb-2">{project.details.challenges}</p>
            <p className="text-foreground/80">{project.details.solutions}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} className="bg-accent/10 text-foreground border-accent/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          {project.github && (
            <Button variant="outline" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
          {project.live && (
            <Button asChild className="bg-accent hover:bg-accent/80">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
