"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Server, Layout, GitGraphIcon as Git, Lightbulb } from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-5 h-5 mr-2" />,
    skills: [
      "React.js",
      "Redux",
      "Context API",
      "Hooks",
      "JavaScript (ES6+)",
      "HTML5/CSS3",
      "Tailwind CSS",
      "Material UI",
      "Responsive Design",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 mr-2" />,
    skills: [
      "Node.js",
      "Express.js",
      "REST API Design",
      "GraphQL",
      "Authentication/JWT",
      "Middleware",
      "API Integration",
      "Serverless Functions",
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5 mr-2" />,
    skills: [
      "MongoDB",
      "Mongoose ODM",
      "Schema Design",
      "Data Modeling",
      "Query Optimization",
      "Aggregation Pipeline",
      "Atlas Cloud",
      "Database Security",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: <Git className="w-5 h-5 mr-2" />,
    skills: [
      "Git/GitHub",
      "CI/CD",
      "Vercel",
      "Netlify",
      "AWS",
      "Docker",
      "Testing (Jest/Mocha)",
      "Performance Optimization",
    ],
  },
  {
    title: "Freelance Skills",
    icon: <Lightbulb className="w-5 h-5 mr-2" />,
    skills: [
      "Client Communication",
      "Project Management",
      "Time Estimation",
      "Requirement Analysis",
      "Agile Methodology",
      "Remote Collaboration",
      "Deadline Management",
    ],
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="section-subtitle">Who I Am</h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              MERN Stack Developer and Freelancer specializing in building high-performance web applications with modern
              technologies. Proficient in designing responsive front-end interfaces with React.js and developing
              scalable back-end services using Node.js, Express.js, and MongoDB.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              As a freelancer, I work directly with clients to transform their ideas into functional, elegant web
              solutions. I pride myself on delivering projects on time, maintaining clear communication, and providing
              ongoing support. Committed to writing clean, efficient code while following best practices in UI/UX, API
              design, and database optimization.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-3">Location</h4>
              <p className="text-foreground/80">Jamner, India</p>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="section-subtitle">My Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div key={index} variants={item}>
                  <Card className="card-hover h-full border-l-4 border-l-accent overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4 text-accent">
                        {category.icon}
                        <h4 className="font-bold text-lg">{category.title}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-accent/10 text-foreground border-accent/20 hover:bg-accent/20 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
