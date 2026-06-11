import { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Lazy load components for better code splitting
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, 
      touchMultiplier: 2,
      infinite: false,
    })

    // Add lenis class to html
    document.documentElement.classList.add('lenis')

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Integrate with GSAP ticker for high-performance RAF
    const update = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // Store lenis instance globally for modal access
    window.lenis = lenis

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
      document.documentElement.classList.remove('lenis')
      window.lenis = null
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }



  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-gray-900 dark:text-white min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <Suspense fallback={<LoadingSpinner />}>
        <section id="home">
          <Hero />
        </section>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <section id="about">
          <About />
        </section>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <section id="skills">
          <Skills />
        </section>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <section id="education">
          <Education />
        </section>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <section id="experience">
          <Experience />
        </section>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <section id="projects">
          <Projects />
        </section>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App