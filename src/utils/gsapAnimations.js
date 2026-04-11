import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// Animation configurations
export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    verySlow: 2.0
  },
  ease: {
    smooth: "power2.out",
    bounce: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
    expo: "expo.out"
  }
}

// Hero section animations
export const animateHeroSection = () => {
  const tl = gsap.timeline()
  
  tl.from(".hero-title", {
    duration: animationConfig.duration.slow,
    y: 100,
    opacity: 0,
    ease: animationConfig.ease.smooth,
    stagger: 0.2
  })
  .from(".hero-subtitle", {
    duration: animationConfig.duration.normal,
    y: 50,
    opacity: 0,
    ease: animationConfig.ease.smooth
  }, "-=0.5")
  .from(".hero-buttons", {
    duration: animationConfig.duration.normal,
    y: 30,
    opacity: 0,
    ease: animationConfig.ease.bounce
  }, "-=0.3")
  
  return tl
}

// Floating elements animation
export const animateFloatingElements = (selector) => {
  gsap.to(selector, {
    y: -20,
    duration: 3,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1,
    stagger: {
      amount: 2,
      from: "random"
    }
  })
}

// Text reveal animation
export const animateTextReveal = (selector, options = {}) => {
  const defaults = {
    duration: animationConfig.duration.normal,
    ease: animationConfig.ease.smooth,
    stagger: 0.1
  }
  
  const config = { ...defaults, ...options }
  
  return gsap.from(selector, {
    duration: config.duration,
    y: 50,
    opacity: 0,
    ease: config.ease,
    stagger: config.stagger,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  })
}

// Card hover animations
export const setupCardHoverAnimations = (cardSelector) => {
  const cards = document.querySelectorAll(cardSelector)
  
  cards.forEach(card => {
    const tl = gsap.timeline({ paused: true })
    
    tl.to(card, {
      duration: animationConfig.duration.fast,
      y: -10,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      ease: animationConfig.ease.smooth
    })
    
    card.addEventListener('mouseenter', () => tl.play())
    card.addEventListener('mouseleave', () => tl.reverse())
  })
}

// Stagger animation for elements
export const animateStagger = (selector, options = {}) => {
  const defaults = {
    duration: animationConfig.duration.normal,
    y: 50,
    opacity: 0,
    ease: animationConfig.ease.smooth,
    stagger: 0.1
  }
  
  const config = { ...defaults, ...options }
  
  return gsap.from(selector, {
    ...config,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  })
}

// Morphing background animation
export const animateMorphingBackground = (selector) => {
  gsap.to(selector, {
    duration: 8,
    ease: "none",
    repeat: -1,
    yoyo: true,
    css: {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%"
    }
  })
}

// Parallax scrolling effect
export const setupParallaxScrolling = (selector, speed = 0.5) => {
  gsap.to(selector, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  })
}

// Counter animation
export const animateCounter = (selector, endValue, options = {}) => {
  const defaults = {
    duration: animationConfig.duration.slow,
    ease: animationConfig.ease.smooth
  }
  
  const config = { ...defaults, ...options }
  
  return gsap.to(selector, {
    duration: config.duration,
    textContent: endValue,
    ease: config.ease,
    snap: { textContent: 1 },
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  })
}

// Loading animation
export const animateLoader = (selector) => {
  const tl = gsap.timeline({ repeat: -1 })
  
  tl.to(selector, {
    duration: 0.8,
    rotation: 360,
    ease: "none"
  })
  
  return tl
}

// Page transition animations
export const pageTransitionIn = () => {
  const tl = gsap.timeline()
  
  tl.from("main", {
    duration: animationConfig.duration.normal,
    opacity: 0,
    y: 50,
    ease: animationConfig.ease.smooth
  })
  
  return tl
}

export const pageTransitionOut = () => {
  const tl = gsap.timeline()
  
  tl.to("main", {
    duration: animationConfig.duration.fast,
    opacity: 0,
    y: -30,
    ease: animationConfig.ease.smooth
  })
  
  return tl
}

// Magnetic button effect
export const setupMagneticButtons = (buttonSelector) => {
  const buttons = document.querySelectorAll(buttonSelector)
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(button, {
        duration: 0.3,
        x: x * 0.3,
        y: y * 0.3,
        ease: "power2.out"
      })
    })
    
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.3)"
      })
    })
  })
}

// Scroll-triggered reveal animation
export const setupScrollReveal = () => {
  // Animate sections on scroll
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      duration: animationConfig.duration.normal,
      y: 100,
      opacity: 0,
      ease: animationConfig.ease.smooth,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
  })
}

// Initialize all GSAP animations
export const initGSAPAnimations = () => {
  // Set up scroll reveal
  setupScrollReveal()
  
  // Set up magnetic buttons
  setupMagneticButtons('.magnetic-btn')
  
  // Set up card hover animations
  setupCardHoverAnimations('.project-card')
  
  // Animate floating elements
  animateFloatingElements('.floating-element')
  
  // Set up parallax scrolling for background elements
  setupParallaxScrolling('.parallax-bg', 0.3)
  
  console.log('GSAP animations initialized')
}