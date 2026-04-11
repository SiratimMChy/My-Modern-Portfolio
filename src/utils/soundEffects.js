class SoundManager {
  constructor() {
    this.sounds = new Map()
    this.isEnabled = false
    this.volume = 0.1
    this.init()
  }

  init() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    this.isEnabled = !prefersReducedMotion
  }

  // Create audio context and generate tones
  createTone(frequency, duration = 0.1, type = 'sine') {
    if (!this.isEnabled) return null

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime)
      oscillator.type = type

      gainNode.gain.setValueAtTime(0, audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(this.volume, audioContext.currentTime + 0.01)
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + duration)

      return { oscillator, gainNode, audioContext }
    } catch (error) {
      console.warn('Audio not supported:', error)
      return null
    }
  }

  // Predefined sound effects
  playHover() {
    this.createTone(800, 0.05, 'sine')
  }

  playClick() {
    this.createTone(1200, 0.08, 'square')
  }

  playSuccess() {
    // Play a pleasant chord
    setTimeout(() => this.createTone(523.25, 0.15), 0)   // C5
    setTimeout(() => this.createTone(659.25, 0.15), 50)  // E5
    setTimeout(() => this.createTone(783.99, 0.15), 100) // G5
  }

  playNotification() {
    this.createTone(880, 0.1, 'triangle')
    setTimeout(() => this.createTone(1108.73, 0.1, 'triangle'), 100)
  }

  enable() {
    this.isEnabled = true
  }

  disable() {
    this.isEnabled = false
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume))
  }
}

export const soundManager = new SoundManager()

// Utility functions for easy use
export const playHoverSound = () => soundManager.playHover()
export const playClickSound = () => soundManager.playClick()
export const playSuccessSound = () => soundManager.playSuccess()
export const playNotificationSound = () => soundManager.playNotification()

// Add sound effects to elements
export const addSoundEffects = (element, options = {}) => {
  if (!element) return

  const {
    hover = true,
    click = true,
    hoverSound = playHoverSound,
    clickSound = playClickSound
  } = options

  if (hover) {
    element.addEventListener('mouseenter', hoverSound)
  }

  if (click) {
    element.addEventListener('click', clickSound)
  }

  // Return cleanup function
  return () => {
    if (hover) {
      element.removeEventListener('mouseenter', hoverSound)
    }
    if (click) {
      element.removeEventListener('click', clickSound)
    }
  }
}