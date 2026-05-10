import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface WaterRippleProps {
  children: React.ReactNode;
  className?: string;
}

export default function WaterRipple({ children, className = '' }: WaterRippleProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Crear efecto de ondas
      const ripple = document.createElement('div');
      ripple.className = 'absolute rounded-full pointer-events-none';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = '0px';
      ripple.style.height = '0px';
      ripple.style.background = 'radial-gradient(circle, rgba(255,107,53,0.5) 0%, rgba(255,107,53,0) 70%)';

      container.appendChild(ripple);

      // Animar ripple
      let size = 0;
      const interval = setInterval(() => {
        size += 5;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x - size / 2}px`;
        ripple.style.top = `${y - size / 2}px`;
        ripple.style.opacity = String(1 - size / 200);

        if (size > 200) {
          clearInterval(interval);
          ripple.remove();
        }
      }, 30);
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      
      {/* Overlay shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
