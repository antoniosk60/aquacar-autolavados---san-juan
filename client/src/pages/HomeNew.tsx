import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Check, Zap, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromotionBanner from '@/components/PromotionBanner';
import BeforeAfterGallery from '@/components/BeforeAfterGallery';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WeatherWidget from '@/components/WeatherWidget';
import { PACKAGES, REVIEWS, RATING, CONTACT_INFO } from '@/config/constants';

export default function HomeNew() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Header */}
      <Header />

      {/* Weather Widget */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-accent to-accent-secondary text-primary py-3"
      >
        <div className="container">
          <WeatherWidget />
        </div>
      </motion.div>

      {/* Hero Section */}
      <HeroSection />

      {/* Promociones */}
      <PromotionBanner />

      {/* Por qué elegirnos */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary rounded-full mx-auto"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Somos líderes en la industria del autolavado profesional
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: 'Garantía de Calidad',
                description: 'Si no quedas satisfecho, repetimos el trabajo sin costo adicional'
              },
              {
                icon: Zap,
                title: 'Tecnología Premium',
                description: 'Equipos de última generación importados de Europa'
              },
              {
                icon: Clock,
                title: 'Servicio Rápido',
                description: 'Desde 1.5 horas. No esperes más de lo necesario'
              },
              {
                icon: Users,
                title: 'Equipo Profesional',
                description: 'Personal capacitado y certificado internacionalmente'
              },
              {
                icon: Star,
                title: 'Mejor Precio',
                description: 'Ofertas especiales y descuentos para clientes frecuentes'
              },
              {
                icon: Check,
                title: 'Satisfacción 100%',
                description: '4.7 estrellas en 183+ reseñas de clientes reales'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card-dark p-8 hover-glow group"
                >
                  <div className="mb-4 p-4 bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-lg w-fit group-hover:from-accent/40 group-hover:to-accent-secondary/40 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent group-hover:text-accent-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Galería Dinámica */}
      <BeforeAfterGallery />

      {/* Paquetes con Descuentos */}
      <section className="py-20 bg-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary rounded-full mx-auto"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Paquetes y Precios
            </h2>
            <p className="text-gray-300 text-lg">Elige el que mejor se adapte a tu necesidad</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PACKAGES.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-accent' : ''
                }`}
              >
                {/* Fondo gradiente */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    pkg.popular
                      ? 'from-accent/30 to-accent-secondary/30'
                      : 'from-primary-light to-primary'
                  }`}
                ></div>

                {/* Contenido */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Badge */}
                  {pkg.badge && (
                    <div className="mb-4 inline-flex w-fit">
                      <span className="px-3 py-1 bg-accent/30 text-accent text-xs font-bold rounded-full border border-accent/50 backdrop-blur-md">
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  {/* Nombre y precio */}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">{pkg.originalPrice}</span>
                      )}
                    </div>
                    {pkg.discount && (
                      <span className="text-sm text-accent-secondary font-bold">Ahorra {pkg.discount}</span>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Botón */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      className={`w-full font-bold py-3 ${
                        pkg.popular ? 'btn-primary' : 'btn-outline'
                      }`}
                    >
                      {pkg.popular ? 'Reservar Ahora' : 'Más Info'}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reseñas */}
      <section className="py-20 bg-gradient-to-b from-primary-light to-primary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary rounded-full mx-auto"
            />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Qué Dicen Nuestros Clientes
            </h2>

            {/* Rating */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent-tertiary text-accent-tertiary" />
                ))}
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">{RATING.score}</p>
                <p className="text-gray-400">Basado en {RATING.reviews} reseñas</p>
              </div>
            </div>
          </motion.div>

          {/* Review Carrusel */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              key={currentReviewIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="card-glass p-8 border border-white/20 backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{REVIEWS[currentReviewIndex].image}</div>
                <div className="text-left">
                  <h3 className="font-bold text-lg">{REVIEWS[currentReviewIndex].name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < REVIEWS[currentReviewIndex].rating
                            ? 'fill-accent-tertiary text-accent-tertiary'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-200 text-lg italic mb-6">
                "{REVIEWS[currentReviewIndex].text}"
              </p>
              <div className="flex justify-between items-center">
                <button
                  onClick={() =>
                    setCurrentReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
                  }
                  className="text-accent hover:text-accent-secondary transition-colors"
                >
                  ← Anterior
                </button>
                <span className="text-gray-400">
                  {currentReviewIndex + 1} de {REVIEWS.length}
                </span>
                <button
                  onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % REVIEWS.length)}
                  className="text-accent hover:text-accent-secondary transition-colors"
                >
                  Siguiente →
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
