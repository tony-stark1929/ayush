'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-dark to-darker">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative z-10">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-2 gradient-text animate-slideInDown">
            Ayush Chauhan
          </h1>

          {/* Professional Title */}
          <p className="text-2xl md:text-3xl text-sky-500 font-semibold mb-12 animate-slideInUp">
            Backend Developer | Full Stack Developer | Cybersecurity Enthusiast
          </p>

          {/* Introduction */}
          <div className="mb-12 max-w-2xl mx-auto">
            <h2 className="text-xl text-gray-700 mb-6 font-semibold">Securing Systems, Building Solutions</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Aspiring Backend/Full Stack Developer with hands-on experience in building scalable web applications using Node.js, React.js, Next.js, Python, Django, and MongoDB.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Experienced in developing secure, efficient applications and solving real-world problems through robust software solutions. Passionate about continuous learning and industry best practices.
            </p>
          </div>

        
        </div>
      </div>
    </section>
  )
}
