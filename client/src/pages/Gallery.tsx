import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

/**
 * AQUACAR Gallery - Galería de imágenes de servicios
 * Diseño: Minimalist Corporate Modern
 * Características: Lightbox modal, navegación fluida, animaciones Framer Motion
 */

const galleryImages = [
  {
    id: 1,
    url: '/manus-storage/0 (1)_ab085350.png',
    title: 'Lavado Profesional',
    category: 'servicios'
  },
  {
    id: 2,
    url: '/manus-storage/0_686adfc2.png',
    title: 'Detalle de Limpieza',
    category: 'servicios'
  },
  {
    id: 3,
    url: '/manus-storage/1_080c417c.png',
    title: 'Área de Espera',
    category: 'instalaciones'
  },
  {
    id: 4,
    url: '/manus-storage/10_d53bdee1.png',
    title: 'Servicio Premium',
    category: 'servicios'
  },
  {
    id: 5,
    url: '/manus-storage/11_bf555073.png',
    title: 'Equipos Modernos',
    category: 'tecnologia'
  },
  {
    id: 6,
    url: '/manus-storage/2_7871575b.png',
    title: 'Secado Profesional',
    category: 'servicios'
  },
  {
    id: 7,
    url: '/manus-storage/3_2458d7c0.png',
    title: 'Limpieza Interior',
    category: 'servicios'
  },
  {
    id: 8,
    url: '/manus-storage/4_5cbca59a.png',
    title: 'Encerado Premium',
    category: 'servicios'
  },
  {
    id: 9,
    url: '/manus-storage/5_f5b53843.png',
    title: 'Protección UV',
    category: 'servicios'
  },
  {
    id: 10,
    url: '/manus-storage/6_09998c96.png',
    title: 'Limpieza de Llantas',
    category: 'servicios'
  },
  {
    id: 11,
    url: '/manus-storage/7_00a37450.png',
    title: 'Resultado Final',
    category: 'servicios'
  },
  {
    id: 12,
    url: '/manus-storage/8_add5d79d.png',
    title: 'Instalaciones',
    category: 'instalaciones'
  },
  {
    id: 13,
    url: '/manus-storage/9_bff18fd0.png',
    title: 'Área de Juegos',
    category: 'instalaciones'
  },
  {
    id: 14,
    url: '/manus-storage/2025-07-02_88cee5ed.jpg',
    title: 'Servicio en Acción',
    category: 'servicios'
  },
  {
    id: 15,
    url: '/manus-storage/2025-07-30_b756534a.jpg',
    title: 'Clientes Satisfechos',
    category: 'testimonios'
  },
  {
    id: 16,
    url: '/manus-storage/2026-01-26_311c24f6.jpg',
    title: 'Equipo Profesional',
    category: 'equipo'
  },
  {
    id: 17,
    url: '/manus-storage/2026-01-27_7810884d.jpg',
    title: 'Tecnología Avanzada',
    category: 'tecnologia'
  },
  {
    id: 18,
    url: '/manus-storage/7_51c6d412.jpg',
    title: 'Excelencia en Servicio',
    category: 'servicios'
  }
];

const categories = ['todos', 'servicios', 'instalaciones', 'tecnologia', 'equipo', 'testimonios'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const filteredImages = selectedCategory === 'todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A1F44] to-[#FF6B35] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4">Galería de Servicios</h1>
            <p className="text-lg opacity-90">
              Descubre la calidad y profesionalismo de AQUACAR en cada imagen
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12 justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedImageIndex(0);
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-[#FF6B35] text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category === 'todos' ? 'Todas' : category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64 bg-gray-100 dark:bg-gray-800">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/90 p-3 rounded-full"
                    >
                      <ZoomIn className="w-6 h-6 text-[#FF6B35]" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl max-h-screen bg-black/95 border-0 p-0 overflow-hidden">
          <div className="relative w-full h-screen flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Display */}
            <AnimatePresence mode="wait">
              <motion.div
                key={filteredImages[selectedImageIndex]?.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center w-full h-full"
              >
                <img
                  src={filteredImages[selectedImageIndex]?.url}
                  alt={filteredImages[selectedImageIndex]?.title}
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <p className="text-white mt-4 text-lg font-semibold">
                  {filteredImages[selectedImageIndex]?.title}
                </p>
                <p className="text-white/60 text-sm">
                  {selectedImageIndex + 1} de {filteredImages.length}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
