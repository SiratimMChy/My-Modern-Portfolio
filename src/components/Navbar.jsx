import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { Button } from './ui/button'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navRef = useRef(null)
  const logoRef = useRef(null)
  const menuRef = useRef(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    // Navbar entrance animation
    const tl = gsap.timeline()
    
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
    .fromTo(logoRef.current,
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(1.7)' },
      '-=0.5'
    )
    .fromTo(menuRef.current.children,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
      '-=0.4'
    )

    // Setup hover animations for menu items
    const menuItems = menuRef.current.querySelectorAll('a')
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { y: -2, duration: 0.3, ease: 'power2.out' })
      })
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { y: 0, duration: 0.3, ease: 'power2.out' })
      })
    })
  }, [])

  return (
    <nav 
      ref={navRef}
      className="w-full fixed top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
              <a 
              href="#" 
              className="text-3xl font-bold tracking-tighter"
              style={{ 
                fontFamily: 'Cursive, serif', 
                fontStyle: 'italic',
                background: 'linear-gradient(90deg,#38bdf8,#818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                paddingRight: '4px'
              }}
            >
              Smc.dev
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div ref={menuRef} className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-blue-600 dark:text-blue-400 font-medium px-3 py-2 rounded-md text-sm transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Skills
              </a>
              <a href="#education" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Education
              </a>
              <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Experience
              </a>
              <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent dark:border-gray-700"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>

            {/* Resume Button */}
            <a 
              href="/My_resume_1.pdf" 
              download="Siratim_Mustakim_Chowdhury_CV.pdf"
              className={`${
                darkMode 
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-sm shadow-cyan-500/20 hover:shadow-cyan-500/30' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-sm shadow-blue-500/20 hover:shadow-blue-500/30'
              } text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 hover:scale-105 transform duration-200`}
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button 
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
            <a 
              href="#home" 
              onClick={closeMobileMenu}
              className="text-blue-600 dark:text-blue-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              onClick={closeMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Skills
            </a>
            <a 
              href="#education" 
              onClick={closeMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Education
            </a>
            <a 
              href="#experience" 
              onClick={closeMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={closeMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </a>
            
            {/* Mobile Theme Toggle and Resume */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
              
              <a 
                href="/My_resume_1.pdf" 
                download="Siratim_Mustakim_Chowdhury_CV.pdf"
                className={`${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                } text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 hover:scale-105 transform duration-200`}
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

