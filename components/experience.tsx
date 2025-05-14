"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer",
    company: "Resolüt Partners",
    period: "Dec 2024 - Mar 2025",
    location: "",
    responsibilities: [
      "Develop and deploy scalable web applications using MERN stack, ensuring responsiveness and cross-browser compatibility.",
      "Build RESTful APIs with Node.js/Express.js and optimize MongoDB schemas for performance.",
      "Collaborate with designers and product managers to translate requirements into technical solutions.",
      "Enhance application speed, security, and scalability while integrating third-party APIs.",
    ],
  },
  {
    id: 2,
    role: "MERN Stack Developer",
    company: "NovaNectar Services Pvt. Ltd.",
    period: "2024",
    location: "Uttarakhand, India",
    responsibilities: [
      "Designed interactive UI components with React.js and developed RESTful APIs using Node.js/Express.js.",
      "Managed MongoDB databases, ensuring data integrity and security.",
      "Deployed applications with minimal downtime and performed regular maintenance.",
    ],
  },
  {
    id: 3,
    role: "Solution Developer",
    company: "Quadwave consulting pvt ltd",
    period: "2022 - 2024",
    location: "Pune, India",
    responsibilities: [
      "Architected and deployed high-performance software solutions, adhering to best practices.",
      "Solved complex technical challenges and collaborated with cross-functional teams for cohesive integration.",
    ],
  },
  {
    id: 4,
    role: "Software Developer Intern",
    company: "HotSync Software Solutions",
    period: "2022",
    location: "Pune, India",
    responsibilities: [
      "Developed user-friendly interfaces for enterprise products, improving functionality and performance.",
      "Supported software development and maintenance, working closely with stakeholders.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          <div className="max-w-lg mx-auto space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Master Of Computer Application</h4>
                    <p className="text-foreground/70">PCCOE Pune</p>
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-foreground border-accent/20">
                    2019 - 2022
                  </Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold">Bachelor Of Computer Application</h4>
                    <p className="text-foreground/70">IMR College Jamner</p>
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-foreground border-accent/20">
                    2016 - 2019
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10"
    >
      {/* Timeline dot */}
      <div className="timeline-dot"></div>

      <Card className="card-hover border-l-4 border-l-accent">
        <CardHeader className="p-6 pb-2">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-xl text-accent">{experience.role}</CardTitle>
              <p className="font-medium">{experience.company}</p>
            </div>
            <Badge variant="outline" className="flex items-center gap-1 bg-accent/10 text-foreground border-accent/20">
              <Calendar className="h-3 w-3" />
              {experience.period}
            </Badge>
          </div>
          {experience.location && <p className="text-sm text-foreground/70 mt-1">{experience.location}</p>}
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <ul className="space-y-2 text-foreground/80">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
