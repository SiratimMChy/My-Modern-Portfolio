import { gsap } from 'gsap'

export class CursorTrail {
  constructor() {
    this.cursor = null
    this.trail = []
    this.isActive = false
    this.init()
  }

  init() {
    // Create cursor element
    this.cursor = document.createElement('div')
    this.cursor.className = 'cursor-trail'
    this.cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: linear-gradient(45deg, #3b82f6, #8b5cf6);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      opacity: 0;
      transform: translate(-50%, -50%);
    `
    document.body.appendChild(this.cursor)

    // Create trail particles
    for (let i = 0; i < 10; i++) {
      const particle = document.createElement('div')
      particle.className = 'cursor-particle'
      particle.style.cssText = `
        position: fixed;
        width: ${8 - i}px;
        height: ${8 - i}px;
        background: linear-gradient(45deg, #3b82f6, #8b5cf6);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: ${0.8 - i * 0.08};
        transform: translate(-50%, -50%);
      `
      document.body.appendChild(particle)
      this.trail.push({
        element: particle,
        x: 0,
        y: 0,
        delay: i * 0.05
      })
    }

    this.bindEvents()
  }

  bindEvents() {
    document.addEventListener('mousemove', (e) => {
      if (!this.isActive) return

      // Update cursor position
      gsap.to(this.cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })

      // Update trail particles
      this.trail.forEach((particle, index) => {
        gsap.to(particle.element, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3 + particle.delay,
          ease: 'power2.out'
        })
      })
    })

    document.addEventListener('mouseenter', () => {
      this.show()
    })

    document.addEventListener('mouseleave', () => {
      this.hide()
    })
  }

  show() {
    this.isActive = true
    gsap.to(this.cursor, { opacity: 1, duration: 0.3 })
    this.trail.forEach(particle => {
      gsap.to(particle.element, { opacity: particle.element.style.opacity, duration: 0.3 })
    })
  }

  hide() {
    this.isActive = false
    gsap.to(this.cursor, { opacity: 0, duration: 0.3 })
    this.trail.forEach(particle => {
      gsap.to(particle.element, { opacity: 0, duration: 0.3 })
    })
  }

  destroy() {
    if (this.cursor) {
      document.body.removeChild(this.cursor)
    }
    this.trail.forEach(particle => {
      if (particle.element) {
        document.body.removeChild(particle.element)
      }
    })
  }
}

export const initCursorTrail = () => {
  // Only initialize on desktop devices
  if (window.innerWidth > 768) {
    return new CursorTrail()
  }
  return null
}