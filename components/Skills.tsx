'use client'

import { useEffect, useRef, useState } from 'react'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillsData: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS']
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['React.js', 'Next.js', 'Node.js', 'Django', 'Tailwind CSS', 'Bootstrap']
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL (PgAdmin)']
  },
  {
    name: 'Tools & Technologies',
    skills: ['Git', 'REST APIs', 'JSON', 'Full-Stack Development', 'Responsive Web Design']
  }
]

export default function Skills() {
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
    <section id="skills" className="py-20 px-4 bg-darker">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Skills & Expertise</h2>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {skillsData.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <h3 className="text-xl font-bold text-accent mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 flex items-center transition-all duration-300"
                    style={{
                      opacity: isInView ? 1 : 0,
                      transitionDelay: `${(catIndex * 4 + skillIndex) * 50}ms`
                    }}
                  >
                    <span className="inline-block w-2 h-2 bg-accent rounded-full mr-3"></span>
                    {skill}
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
