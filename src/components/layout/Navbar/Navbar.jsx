import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import NavbarActions from './NavbarActions';
import MobileMenu from './MobileMenu';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';

      sections.forEach((section) => {
        // Adjust the offset to trigger section change slightly before it hits the top
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial section
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline();

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
      );

    const menuItems = menuRef.current.querySelectorAll('a');
    menuItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { y: -2, duration: 0.3, ease: 'power2.out' });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { y: 0, duration: 0.3, ease: 'power2.out' });
      });
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-full fixed top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-14">
          
          <Logo ref={logoRef} />

          <DesktopMenu ref={menuRef} activeSection={activeSection} />

          <NavbarActions darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          {/* Mobile menu button */}
          <div className="-mr-2 flex xl:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none [-webkit-tap-highlight-color:transparent] transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <MobileMenu 
          activeSection={activeSection} 
          closeMobileMenu={closeMobileMenu} 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
      )}
    </nav>
  );
};

export default Navbar;
