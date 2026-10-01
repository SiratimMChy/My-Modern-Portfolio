import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function BackgroundParticles() {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.skill-particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: -20 - Math.random() * 30,
          x: -10 + Math.random() * 20,
          opacity: 0,
          duration: 3 + Math.random() * 2,
          delay: index * 0.1,
          repeat: -1,
          ease: 'sine.inOut',
        });
      });
    }
  }, []);

  return (
    <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="skill-particle absolute w-1 h-1 rounded-full"
          style={{
            background: `hsl(${200 + i * 20}, 100%, 60%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
}
