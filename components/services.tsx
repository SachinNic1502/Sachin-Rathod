"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Server, Database, Smartphone, Wrench } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    icon: <Code className="h-10 w-10 text-accent" />,
    features: [
      "Custom web application development",
      "Progressive Web Apps (PWAs)",
      "Single Page Applications (SPAs)",
      "Responsive design implementation",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces with modern React.js and related technologies.",
    icon: <Globe className="h-10 w-10 text-accent" />,
    features: [
      "React.js component development",
      "State management (Redux, Context API)",
      "UI/UX implementation",
      "Animation and interactive elements",
      "Cross-browser compatibility",
    ],
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Building robust server-side applications, APIs, and database integrations.",
    icon: <Server className="h-10 w-10 text-accent" />,
    features: [
      "RESTful API development",
      "Authentication & authorization",
      "Server-side rendering",
      "Microservices architecture",
      "API integration",
    ],
  },
  {
    id: 4,
    title: "Database Design",
    description: "Designing and implementing efficient database schemas and query optimization for MongoDB.",
    icon: <Database className="h-10 w-10 text-accent" />,
    features: [
      "MongoDB schema design",
      "Data modeling and normalization",
      "Query optimization",
      "Database migration",
      "Data security implementation",
    ],
  },
  {
    id: 5,
    title: "Mobile-First Development",
    description: "Creating applications that work seamlessly across all devices with a mobile-first approach.",
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    features: [
      "Responsive web design",
      "Mobile-first approach",
      "Touch-friendly interfaces",
      "Performance optimization for mobile",
      "Cross-device testing",
    ],
  },
  {
    id: 6,
    title: "Maintenance & Support",
    description: "Ongoing maintenance, updates, and support for existing web applications.",
    icon: <Wrench className="h-10 w-10 text-accent" />,
    features: [
      "Bug fixing and troubleshooting",
      "Performance optimization",
      "Feature enhancements",
      "Security updates",
      "Technical support",
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            As a freelance MERN stack developer, I offer a range of services to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-t-accent">
        <CardHeader className="p-6 pb-2 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-accent/10 mb-4">{service.icon}</div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-4">
          <p className="text-foreground/70 mb-4 text-center">{service.description}</p>
          <ul className="space-y-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
