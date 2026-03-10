'use client'

import { useEffect, useRef, useState } from 'react'

interface Certification {
  title: string
  issuer: string
  description?: string
}

const certificationsData: Certification[] = [
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'Coursera',
    description: 'Learn data analysis techniques and visualization for machine learning projects'
  },
  {
    title: 'Inheritance and Data Structures in Java',
    issuer: 'Coursera',
    description: 'Master object-oriented programming and complex data structure implementations'
  },
  {
    title: 'Introduction to HTML, CSS & JavaScript',
    issuer: 'Coursera',
    description: 'Foundation in front-end web development and interactive web design'
  },
  {
    title: 'Introduction to Java',
    issuer: 'Coursera',
    description: 'Core Java programming concepts and best practices'
  }
]

export default function Certifications() {
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
    <section id="certifications" className="py-20 px-4 bg-dark">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Certifications</h2>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="card-border p-6 rounded-lg backdrop-blur-sm hover:glow-effect transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-sky-500 text-2xl">🏅</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{cert.title}</h3>
                  <p className="text-sky-500 font-semibold text-sm">{cert.issuer}</p>
                </div>
              </div>
              {cert.description && (
                <p className="text-gray-700 text-sm">{cert.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
