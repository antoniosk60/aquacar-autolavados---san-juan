import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet } from 'lucide-react';

export default function ProgressiveLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simular carga progresiva
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="h-1 bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          className="h-full bg-gradient-to-r from-primary to-accent"
          transition={{ duration: 0.3 }}
        />
      </div>
      
      {/* Bubble animation */}
      <motion.div
        animate={{ x: `${progress}%` }}
        transition={{ duration: 0.3 }}
        className="absolute top-2 left-0 flex items-center gap-2 text-primary font-semibold text-sm"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <Droplet size={16} className="text-accent fill-accent" />
        </motion.div>
        <span>{Math.round(progress)}%</span>
      </motion.div>
    </motion.div>
  );
}
