'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
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
    <section id="about" className="py-20 px-4 bg-dark">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">About Me</h2>

        <div className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <h3 className="text-2xl font-bold text-sky-500 mb-4">Professional Summary</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Aspiring Backend/Full Stack Developer with hands-on experience in building scalable web applications. Currently pursuing B.E. in Computer Engineering at LJ Institute of Engineering and Technology, Ahmedabad (3rd Year).
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As Backend Developer at TechDefenders Consulting Pvt. Ltd., I develop robust APIs using Node.js, implement server-side rendering with Next.js, and manage complex database integrations. I'm dedicated to creating efficient, secure, and scalable software solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Proficient in React.js, Python, Django, and modern web technologies. Experienced with full-stack development using MongoDB, MySQL, and PostgreSQL. Committed to solving real-world problems through clean, efficient code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Strong foundation in web design, responsive development, and REST API design. Proven ability to collaborate with teams and deliver production-ready applications.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-border p-6 rounded-lg backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300">
              <h3 className="text-lg font-bold text-sky-500 mb-2">📍 Location</h3>
              <p className="text-gray-700">Ahmedabad, Gujarat, India</p>
            </div>
            <div className="card-border p-6 rounded-lg backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300">
              <h3 className="text-lg font-bold text-sky-500 mb-2">🎓 Education</h3>
              <p className="text-gray-700">B.E. Computer Engineering<br/><span className="text-sm text-gray-600">LJ Institute of Engineering and Technology<br/>Current Year: 3rd</span></p>
            </div>
            <div className="card-border p-6 rounded-lg backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300">
              <h3 className="text-lg font-bold text-sky-500 mb-2">💼 Current Role</h3>
              <p className="text-gray-700">Backend Developer<br/><span className="text-sm text-gray-600">TechDefenders Consulting Pvt. Ltd.<br/>Sept 2025 - Present</span></p>
            </div>
            <div className="card-border p-6 rounded-lg backdrop-blur-sm hover:border-sky-500/50 transition-all duration-300">
              <h3 className="text-lg font-bold text-sky-500 mb-2">🏆 Senior School</h3>
              <p className="text-gray-700">Class XII (PCM) — 63.05%<br/><span className="text-sm text-gray-600">Shree Ved International School</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
