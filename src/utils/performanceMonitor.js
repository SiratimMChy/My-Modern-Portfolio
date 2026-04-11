class PerformanceMonitor {
  constructor() {
    this.metrics = {
      fps: 0,
      frameTime: 0,
      memoryUsage: 0
    }
    this.isMonitoring = false
    this.callbacks = []
    this.lastTime = performance.now()
    this.frameCount = 0
    this.fpsUpdateInterval = 1000 // Update FPS every second
  }

  start() {
    if (this.isMonitoring) return
    
    this.isMonitoring = true
    this.lastTime = performance.now()
    this.frameCount = 0
    this.monitor()
  }

  stop() {
    this.isMonitoring = false
  }

  monitor() {
    if (!this.isMonitoring) return

    const currentTime = performance.now()
    const deltaTime = currentTime - this.lastTime
    
    this.frameCount++
    this.metrics.frameTime = deltaTime

    // Update FPS every second
    if (deltaTime >= this.fpsUpdateInterval) {
      this.metrics.fps = Math.round((this.frameCount * 1000) / deltaTime)
      this.frameCount = 0
      this.lastTime = currentTime

      // Get memory usage if available
      if (performance.memory) {
        this.metrics.memoryUsage = Math.round(performance.memory.usedJSHeapSize / 1048576) // MB
      }

      // Notify callbacks
      this.callbacks.forEach(callback => callback(this.metrics))
    }

    requestAnimationFrame(() => this.monitor())
  }

  onUpdate(callback) {
    this.callbacks.push(callback)
    return () => {
      const index = this.callbacks.indexOf(callback)
      if (index > -1) {
        this.callbacks.splice(index, 1)
      }
    }
  }

  getMetrics() {
    return { ...this.metrics }
  }

  // Performance optimization suggestions
  getOptimizationSuggestions() {
    const suggestions = []
    
    if (this.metrics.fps < 30) {
      suggestions.push('Low FPS detected. Consider reducing animation complexity.')
    }
    
    if (this.metrics.memoryUsage > 100) {
      suggestions.push('High memory usage detected. Consider optimizing assets.')
    }
    
    if (this.metrics.frameTime > 16.67) {
      suggestions.push('Frame time is high. Consider optimizing animations.')
    }

    return suggestions
  }
}

export const performanceMonitor = new PerformanceMonitor()

// Utility function to enable performance monitoring in development
export const enablePerformanceMonitoring = (showConsoleOutput = false) => {
  if (process.env.NODE_ENV === 'development') {
    performanceMonitor.start()
    
    if (showConsoleOutput) {
      performanceMonitor.onUpdate((metrics) => {
        console.log('Performance Metrics:', metrics)
        
        const suggestions = performanceMonitor.getOptimizationSuggestions()
        if (suggestions.length > 0) {
          console.warn('Performance Suggestions:', suggestions)
        }
      })
    }
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState(performanceMonitor.getMetrics())

  useEffect(() => {
    const unsubscribe = performanceMonitor.onUpdate(setMetrics)
    performanceMonitor.start()

    return () => {
      unsubscribe()
      performanceMonitor.stop()
    }
  }, [])

  return metrics
}