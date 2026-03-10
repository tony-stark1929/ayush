'use client'

import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isInView, setIsInView] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  })
  const ref = useRef<HTMLDivElement>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
  }, [])

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const templateParams = {
        to_email: 'ayushchauhan1929@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile,
        message: formData.message,
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        templateParams
      )

      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', mobile: '', message: '' })
    } catch (error) {
      console.error('Email send error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-dark">
      <div ref={ref} className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text text-center">Get In Touch</h2>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-sky-500 mb-4">Let's Connect</h3>
              <p className="text-gray-700 mb-6">
                I'm passionate about building scalable web applications and excited to collaborate on innovative projects. Feel free to reach out for opportunities, discussions, or to explore how I can contribute to your team!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:ayushchauhan1929@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-sky-500 transition-colors group">
                <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span>ayushchauhan1929@gmail.com</span>
              </a>

              <a href="tel:+917600670070" className="flex items-center gap-3 text-gray-700 hover:text-sky-500 transition-colors group">
                <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <span>+91 7600670070</span>
              </a>

              <a href="https://linkedin.com/in/ayush-chauhan-2505a42b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-sky-500 transition-colors group">
                <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <svg className="w-5 h-5 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-sky-500/20 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-sky-500/20 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white border border-sky-500/20 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white border border-sky-500/20 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
//fdvz wmzh fqxo mava