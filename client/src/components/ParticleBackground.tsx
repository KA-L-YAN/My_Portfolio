import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  const colors = [
    "hsl(var(--primary))",
    "hsl(var(--secondary))",
    "hsl(var(--accent-pink))",
    "hsl(var(--accent))"
  ];

  const createParticle = (): Particle => {
    return {
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 100,
      size: Math.random() * 4 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    };
  };

  useEffect(() => {
    const updateParticles = () => {
      // Add new particles periodically
      if (Math.random() < 0.02) {
        particlesRef.current.push(createParticle());
      }

      // Remove particles that are off-screen
      particlesRef.current = particlesRef.current.filter(
        particle => particle.y > -100
      );

      // Continue animation
      animationRef.current = requestAnimationFrame(updateParticles);
    };

    updateParticles();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="particle absolute rounded-full opacity-20"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            background: colors[Math.floor(Math.random() * colors.length)],
            left: Math.random() * window.innerWidth,
          }}
          animate={{
            y: [-100, window.innerHeight + 100],
            x: [0, (Math.random() - 0.5) * 200],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}
