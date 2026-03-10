import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
// import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayush Chauhan - Backend/Full Stack Developer Portfolio</title>
        <meta name="description" content="Backend & Full Stack Developer | Node.js, React.js, Next.js, Python, Django, MongoDB | Scalable Web Applications | Ahmedabad, India" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      {/* <Footer /> */}
    </>
  )
}
