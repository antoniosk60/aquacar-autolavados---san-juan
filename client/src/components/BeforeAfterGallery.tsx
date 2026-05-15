import { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_ITEMS } from '@/config/constants';
import { ChevronLeft, ChevronRight, Clock, Sparkles } from 'lucide-react';

export default function BeforeAfterGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const current = GALLERY_ITEMS[selectedIndex];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-primary via-primary-light to-primary">
      <div className="container">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '3rem' }}
            className="flex justify-center mb-4 h-1 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary rounded-full mx-auto"
          />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Galería de Transformaciones
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Desliza para ver el antes y después de nuestros trabajos más impresionantes
          </p>
        </motion.div>

        {/* Galería Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Comparador Antes/Después */}
          <div
            className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize group"
            onMouseMove={handleMouseMove}
          >
            {/* Imagen Después (fondo) */}
            <img
              src={current.after}
              alt="Después"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Imagen Antes (superpuesta) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={current.before}
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${(100 / sliderPosition) * 100}%` }}
              />
            </div>

            {/* Línea divisora */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent-secondary to-accent-tertiary"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="flex gap-1">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                  <ChevronRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>

            {/* Etiquetas */}
            <div className="absolute top-4 left-4 px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg text-white font-bold">
              ANTES
            </div>
            <div className="absolute top-4 right-4 px-4 py-2 bg-accent/80 backdrop-blur-md rounded-lg text-primary font-bold">
              DESPUÉS
            </div>

            {/* Información flotante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg p-4 border border-white/20"
            >
              <h3 className="text-white font-bold text-lg mb-2">{current.title}</h3>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span>{current.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent-secondary" />
                  <span>{current.service}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navegación */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="p-3 bg-accent/20 hover:bg-accent/40 text-accent rounded-full transition-all duration-300 border border-accent/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Indicadores */}
            <div className="flex gap-2">
              {GALLERY_ITEMS.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  animate={{
                    scale: index === selectedIndex ? 1.2 : 1,
                    backgroundColor: index === selectedIndex ? '#00d9ff' : 'rgba(0, 217, 255, 0.3)'
                  }}
                  className="w-3 h-3 rounded-full transition-all duration-300"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="p-3 bg-accent/20 hover:bg-accent/40 text-accent rounded-full transition-all duration-300 border border-accent/50"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </motion.div>

        {/* Grid de miniaturas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.05 }}
              className={`relative h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === selectedIndex ? 'border-accent shadow-lg shadow-accent/50' : 'border-border hover:border-accent/50'
              }`}
            >
              <img
                src={item.after}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
