import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import HeroImage from './HeroImage'

export default function Hero() {
  return (
    <main className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F5F0]/80 dark:bg-[#060810] transition-colors duration-300">
      <HeroBackground />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-32 pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-0">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </main>
  )
}