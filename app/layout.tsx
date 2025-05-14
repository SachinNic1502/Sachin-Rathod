import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sachin Rathod | MERN Stack Developer",
  description: "Portfolio of Sachin Rathod, a MERN Stack Developer specializing in building high-performance web applications with modern technologies. Top developer in Jamner, Jalgaon, and Maharashtra.",
  generator: 'v0.dev',
  keywords: [
    "Sachin Rathod",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio Website",
    "Web Application Developer",
    "Next.js Developer",
    // Local SEO Keywords
    "Best Developer in Jamner",
    "Top Web Developer in Jalgaon",
    "Best MERN Developer in Maharashtra",
    "Freelance Developer in Jamner",
    "Hire Developer in Jalgaon",
    "Web Developer near me",
    "Software Engineer in Maharashtra",
    "Professional Web Developer in India",
  ],
  authors: [{ name: "Sachin Rathod" }],
  creator: "Sachin Rathod",
  applicationName: "Sachin Rathod Portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}