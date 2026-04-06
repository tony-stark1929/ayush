'use client'

import { useEffect, useRef, useState } from 'react'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Backend Developer',
    company: 'TechDefenders Consulting Pvt. Ltd.',
    period: 'September 2025 - March 2026',
    description: [
      'Developed backend services and APIs using Node.js for scalable web applications',
      'Collaborated with frontend developers to build responsive interfaces using React.js',
      'Implemented Next.js server-side rendering to improve performance and SEO',
      'Integrated databases and managed data operations using MongoDB',
      'Debugged and optimized application performance for better user experience',
      'Contributed to full-stack development and deployment of modern web applications'
    ]
  }
]

export default function Experience() {
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
    <section id="experience" className="py-20 px-4 bg-darker">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Experience</h2>

        <div className={`space-y-8 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-border p-8 rounded-lg backdrop-blur-sm hover:glow-effect transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-sky-500 text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-600 whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-3">
                    <span className="text-sky-500 mt-1.5">▸</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
