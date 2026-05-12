import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Clock, Star, Droplet, Sofa, Sparkles, Users, Instagram, Facebook, Youtube, Menu, X, MessageCircle, Calendar, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import WeatherWidget from '@/components/WeatherWidget';
import QuoteCalculator from '@/components/QuoteCalculator';
import ThemeToggle from '@/components/ThemeToggle';
import ProgressiveLoader from '@/components/ProgressiveLoader';
import WaterRipple from '@/components/WaterRipple';

/**
 * AQUACAR Premium - Diseño Corporativo Minimalista Moderno
 * Características: Videos, Clima Real-Time, Calculadora Dinámica, Dark Mode, Animaciones Framer Motion
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    date: '',
    time: '',
    service: ''
  });

  const reviews = [
    {
      name: 'Carlos López',
      text: 'Autolavado muy completo, con paquetes variados y buen trato. El servicio premium es excepcional.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'María García',
      text: 'Instalaciones cómodas y precios justos. Excelente servicio y muy profesionales.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Juan Rodríguez',
      text: 'No aspiraron bien ni aplicaron crema en interiores y llantas.',
      rating: 3,
      image: '👨‍💻'
    },
    {
      name: 'Ana Martínez',
      text: 'Mi auto quedó impecable. Muy recomendado, volveré pronto.',
      rating: 5,
      image: '👩‍🦰'
    }
  ];

  const services = [
    {
      icon: Droplet,
      title: 'Lavado Profesional',
      description: 'Con hidrolavadoras de última tecnología y espuma premium'
    },
    {
      icon: Users,
      title: 'Área de Juegos',
      description: 'Para que los niños se diviertan mientras esperan'
    },
    {
      icon: Sofa,
      title: 'Sala de Espera',
      description: 'Cómoda y con WiFi gratuito para tu comodidad'
    },
    {
      icon: Sparkles,
      title: 'Baños Limpios',
      description: 'Mantenimiento impecable y productos premium'
    }
  ];

  const packages = [
    {
      name: 'Básico',
      price: '$150',
      features: ['Lavado exterior', 'Secado', 'Aspirado básico']
    },
    {
      name: 'Detallado',
      price: '$250',
      features: ['Lavado completo', 'Limpieza interior', 'Secado premium', 'Aromatizante']
    },
    {
      name: 'Encerado',
      price: '$350',
      features: ['Todo incluido', 'Encerado premium', 'Protección UV', 'Limpieza de llantas']
    },
    {
      name: 'Aspirado Interior',
      price: '$200',
      features: ['Aspirado profundo', 'Limpieza de tapetes', 'Desodorización', 'Protector de tela']
    }
  ];

  const handleReviewNext = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleReviewPrev = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <ProgressiveLoader />

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <div className="container flex items-center justify-between py-4">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <div className="text-3xl font-bold text-primary">🚗</div>
            <div>
              <h1 className="text-xl font-bold text-primary">AQUACAR</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Premium Autolavados</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {['Inicio', 'Servicios', 'Paquetes', 'Opiniones', 'Galería', 'Contacto'].map((item) => (
              <motion.a
                key={item}
                href={item === 'Galería' ? '/galeria' : `#${item.toLowerCase()}`}
                whileHover={{ color: '#FF6B35' }}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 py-4"
          >
            <div className="container flex flex-col gap-4">
              {['Inicio', 'Servicios', 'Paquetes', 'Opiniones', 'Galería', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={item === 'Galería' ? '/galeria' : `#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </motion.header>

      {/* Weather Widget */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary to-accent text-white py-3"
      >
        <div className="container">
          <WeatherWidget />
        </div>
      </motion.div>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663643512244/hbDWzUPmudCth5Kh98BVHM/aquacar-hero-premium-K5Ezsg9avqdGsaEg489HDm.webp)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Innovación y tecnología en autolavado
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              Servicio profesional con las mejores instalaciones y atención personalizada
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-accent hover:bg-accent/90 text-primary text-lg px-8 py-6 h-auto font-bold">
                      Agenda tu lavado
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Agendar Cita</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Input
                        placeholder="Tu nombre"
                        value={appointmentData.name}
                        onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                      />
                      <Input
                        type="date"
                        value={appointmentData.date}
                        onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                      />
                      <Input
                        type="time"
                        value={appointmentData.time}
                        onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                      />
                      <Select value={appointmentData.service} onValueChange={(value) => setAppointmentData({ ...appointmentData, service: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basico">Básico</SelectItem>
                          <SelectItem value="detallado">Detallado</SelectItem>
                          <SelectItem value="encerado">Encerado</SelectItem>
                          <SelectItem value="aspirado">Aspirado Interior</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button className="bg-primary hover:bg-primary/90 w-full">Confirmar Cita</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
              <motion.a
                href="https://wa.me/5543180287"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary font-bold">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp
                </Button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-primary text-white py-12"
      >
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: MapPin, title: 'Ubicación', text: 'Av. Cuauhtémoc 5301, San Juan Tlalpizahuac, Ixtapaluca' },
              { icon: Phone, title: 'Teléfono', text: '55 4318 0287', link: 'tel:5543180287' },
              { icon: Clock, title: 'Horario', text: 'Todos los días hasta las 7:00 PM' }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-4">
                  <Icon className="flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-gray-100 hover:text-accent transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <p className="text-gray-100">{item.text}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Calificación */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-gray-50 dark:bg-gray-800 py-8 border-b border-gray-200 dark:border-gray-700"
      >
        <div className="container flex items-center justify-center gap-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div key={i} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Star size={24} className="fill-accent text-accent" />
              </motion.div>
            ))}
          </div>
          <div>
            <p className="text-lg font-semibold text-primary">4.7 de 5</p>
            <p className="text-gray-600 dark:text-gray-400">Basado en 183 reseñas</p>
          </div>
        </div>
      </motion.section>

      {/* Servicios */}
      <section id="servicios" className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-accent rounded-full mx-auto"
            />
            <h2 className="text-4xl font-bold text-primary mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Contamos con instalaciones modernas y personal capacitado para brindarte el mejor servicio
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 border border-gray-200 dark:border-gray-700 hover:border-accent transition-colors h-full">
                    <motion.div
                      className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Icon size={32} className="text-accent" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Calculadora de Cotización */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <QuoteCalculator />
          </motion.div>
        </div>
      </section>

      {/* Paquetes */}
      <section id="paquetes" className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-accent rounded-full mx-auto"
            />
            <h2 className="text-4xl font-bold text-primary mb-4">Paquetes y Precios</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Elige el paquete que mejor se adapte a tus necesidades</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-accent transition-colors overflow-hidden h-full flex flex-col">
                  <div className="bg-primary text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-3xl font-bold text-accent">{pkg.price}</p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="bg-accent hover:bg-accent/90 text-primary w-full font-bold">
                        Reservar Ahora
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promoción */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-12 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container">
          <WaterRipple className="rounded-xl overflow-hidden h-80">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663643512244/hbDWzUPmudCth5Kh98BVHM/aquacar-promo-premium-VvVGqY2KhuXmpF2zmif6VE.webp"
              alt="Promoción Ceramic Coating"
              className="w-full h-full object-cover"
            />
          </WaterRipple>
        </div>
      </motion.section>

      {/* Opiniones */}
      <section id="opiniones" className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-accent rounded-full mx-auto"
            />
            <h2 className="text-4xl font-bold text-primary mb-4">Opiniones de Clientes</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Lo que dicen nuestros clientes sobre nuestro servicio</p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              key={currentReviewIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{reviews[currentReviewIndex].image}</div>
                <div>
                  <h3 className="font-bold text-lg text-primary">{reviews[currentReviewIndex].name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < reviews[currentReviewIndex].rating ? 'fill-accent text-accent' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">"{reviews[currentReviewIndex].text}"</p>
              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <ChevronLeft size={24} className="text-primary" />
                </motion.button>
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setCurrentReviewIndex(i)}
                      animate={{
                        scale: i === currentReviewIndex ? 1.2 : 1,
                        backgroundColor: i === currentReviewIndex ? '#FF6B35' : '#E5E7EB'
                      }}
                      className="w-2 h-2 rounded-full transition-colors"
                    />
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setCurrentReviewIndex((prev) => (prev + 1) % reviews.length)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <ChevronRight size={24} className="text-primary" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-accent rounded-full mx-auto"
            />
            <h2 className="text-4xl font-bold text-primary mb-4">Galería de Transformaciones</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Antes y después de nuestros servicios</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <WaterRipple className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663643512244/hbDWzUPmudCth5Kh98BVHM/aquacar-gallery-shine-C4WxYfK9k8GmuTmgMSnrzF.webp"
                alt="Transformación de auto"
                className="w-full h-96 object-cover"
              />
            </WaterRipple>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center mt-4 text-gray-600 dark:text-gray-400 font-medium"
            >
              Transformación Completa - Mercedes Benz Rojo
            </motion.p>
          </div>
        </div>
      </section>

      {/* Presencia Digital */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '3rem' }}
              className="flex justify-center mb-4 h-1 bg-accent rounded-full mx-auto"
            />
            <h2 className="text-4xl font-bold text-primary mb-4">Síguenos en Redes Sociales</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Facebook, name: 'Facebook', followers: '+950 seguidores', link: 'https://facebook.com' },
              { icon: Youtube, name: 'YouTube', followers: 'Videos de la red de agua', link: 'https://youtube.com' },
              { icon: Instagram, name: 'Instagram', followers: 'Feed en vivo', link: 'https://instagram.com' }
            ].map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit mx-auto"
                  >
                    <Icon size={40} className={i === 1 ? 'text-accent' : 'text-primary'} />
                  </motion.div>
                  <h3 className="font-bold text-lg text-primary mb-1">{social.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{social.followers}</p>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">¿Preguntas?</h2>
            <p className="text-xl text-gray-100 mb-8">Contáctanos por cualquiera de estos medios</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
          >
            {[
              { icon: Phone, title: 'Llamar', text: '55 4318 0287', link: 'tel:5543180287' },
              { icon: MessageCircle, title: 'WhatsApp', text: '55 4318 0287', link: 'https://wa.me/5543180287' }
            ].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={i}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center gap-4 p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Icon size={32} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="font-semibold">{contact.title}</p>
                    <p className="text-gray-100">{contact.text}</p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 bg-white/10 rounded-lg text-center"
          >
            <h3 className="font-bold text-lg mb-2">Ubicación</h3>
            <p className="text-gray-100">Av. Cuauhtémoc 5301, San Juan Tlalpizahuac, Ixtapaluca</p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {[
              {
                title: 'AQUACAR Autolavados',
                content: 'Servicio profesional de autolavado con tecnología de punta'
              },
              {
                title: 'Enlaces Rápidos',
                links: ['Servicios', 'Paquetes', 'Opiniones', 'Contacto']
              },
              {
                title: 'Síguenos',
                social: true
              }
            ].map((section, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h3 className="text-white font-bold mb-4">{section.title}</h3>
                {section.content && <p className="text-sm">{section.content}</p>}
                {section.links && (
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {section.social && (
                  <div className="flex gap-4">
                    {[Facebook, Instagram, Youtube].map((Icon, j) => (
                      <motion.a
                        key={j}
                        href="#"
                        whileHover={{ scale: 1.2, color: '#FF6B35' }}
                        className="hover:text-accent transition-colors"
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-t border-gray-800 pt-8 text-center text-sm"
          >
            <p>&copy; 2026 AQUACAR Autolavados. Todos los derechos reservados.</p>
            <p className="mt-2">Av. Cuauhtémoc 5301, San Juan Tlalpizahuac, Ixtapaluca</p>
          </motion.div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5543180287"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 p-4 bg-accent text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40"
        title="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
