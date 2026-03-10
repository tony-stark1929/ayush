'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darker border-t border-sky-500/20 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Side - About & Contact */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Ayush Chauhan</h3>
            <p className="text-gray-600 mb-8">Cybersecurity Specialist | Full Stack Developer<br/>Securing systems, building solutions.</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-sky-500 font-semibold mb-1">📞 Call</p>
                <a href="tel:+917600670070" className="text-gray-700 hover:text-sky-500 transition-colors">+91 7600670070</a>
              </div>
              <div>
                <p className="text-sky-500 font-semibold mb-1">✉️ Write</p>
                <a href="mailto:ayushchauhan1929@gmail.com" className="text-gray-700 hover:text-sky-500 transition-colors">ayushchauhan1929@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Side - Follow & Links */}
          <div>
            <h3 className="text-xl font-bold text-sky-500 mb-6">Follow</h3>
            <div className="flex gap-6 mb-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-sky-500 transition-colors font-medium">Instagram</a>
            </div>

            <h3 className="text-xl font-bold text-sky-500 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#about" className="hover:text-sky-500 transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-sky-500 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-sky-500 transition-colors">Skills</a></li>
              <li><a href="#certifications" className="hover:text-sky-500 transition-colors">Certifications</a></li>
              <li><a href="#contact" className="hover:text-sky-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sky-500/20 pt-6 mt-8">
          <p className="text-center text-gray-600 text-sm">© {currentYear} by Ayush Chauhan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
