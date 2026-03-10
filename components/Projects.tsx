'use client'

import { useEffect, useRef, useState } from 'react'

interface Project {
  title: string
  description: string
  technologies: string[]
  link: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'Organic Food Selling Website',
    description: 'Developed a full-stack e-commerce platform for selling organic products. Created product catalog, shopping cart system, and order management features with real-time database synchronization using MongoDB for seamless customer experience.',
    technologies: ['React.js', 'Python', 'Django', 'MongoDB', 'REST APIs'],
    link: '#',
    github: '#'
  },
  {
    title: 'Student Portal System',
    description: 'Built a comprehensive portal to manage student records and academic data. Designed optimized database schema and implemented efficient queries for handling large datasets with improved performance metrics.',
    technologies: ['Java', 'MySQL', 'JDBC', 'Database Design'],
    link: '#',
    github: '#'
  },
  {
    title: 'Bus Ticket Booking System',
    description: 'Developed a ticket booking system with real-time seat availability, dynamic fare calculation, and booking management. Implemented data persistence using JSON-based storage for reliable data handling and transaction integrity.',
    technologies: ['Python', 'JSON', 'OOP', 'Data Structures'],
    link: '#',
    github: '#'
  }
]

export default function Projects() {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 bg-dark">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Featured Projects</h2>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-border p-6 rounded-lg backdrop-blur-sm flex flex-col hover:glow-effect transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex-1 px-4 py-2 bg-accent text-dark font-semibold rounded-lg text-center hover:bg-accentLight transition-colors"
                >
                  View Project
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    className="flex-1 px-4 py-2 border border-accent text-accent font-semibold rounded-lg text-center hover:bg-accent/10 transition-colors"
                  >
                    GitHub
                  </a>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
