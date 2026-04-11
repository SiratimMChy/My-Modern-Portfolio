import { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'

// Lazy load components for better code splitting
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const SourceCode = lazy(() => import('./components/SourceCode'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[200px]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
)

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [currentView, setCurrentView] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setDarkMode(false)
      document.documentElement.classList.remove('dark')
    }

    // Check URL for source code navigation
    const urlParams = new URLSearchParams(window.location.search)
    const projectId = urlParams.get('project')
    if (projectId && window.location.pathname.includes('source-code')) {
      setCurrentView('source-code')
      setSelectedProject(projectId)
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

  const navigateToSourceCode = (projectId) => {
    setCurrentView('source-code')
    setSelectedProject(projectId)
    // Update URL without page reload
    window.history.pushState({}, '', `/?view=source-code&project=${projectId}`)
  }

  const navigateToHome = () => {
    setCurrentView('home')
    setSelectedProject(null)
    // Update URL without page reload
    window.history.pushState({}, '', '/')
  }

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const view = urlParams.get('view')
      const projectId = urlParams.get('project')
      
      if (view === 'source-code' && projectId) {
        setCurrentView('source-code')
        setSelectedProject(projectId)
      } else {
        setCurrentView('home')
        setSelectedProject(null)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  if (currentView === 'source-code') {
    return (
      <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Suspense fallback={<LoadingSpinner />}>
          <SourceCode projectId={selectedProject} onNavigateHome={navigateToHome} />
        </Suspense>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white min-h-screen">
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
          <Projects onNavigateToSourceCode={navigateToSourceCode} />
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