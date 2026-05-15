import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MessageCircle, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  cta1Text?: string;
  cta2Text?: string;
  backgroundImage?: string;
  onCta1Click?: () => void;
}

export default function HeroSection({
  title = 'Innovación y Tecnología en Autolavado',
  subtitle = 'Servicio profesional con las mejores instalaciones y atención personalizada',
  cta1Text = 'Agendar Ahora',
  cta2Text = 'Contactar por WhatsApp',
  backgroundImage = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643512244/hbDWzUPmudCth5Kh98BVHM/aquacar-hero-premium-K5Ezsg9avqdGsaEg489HDm.webp'
}: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay gradiente premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        
        {/* Efecto de partículas/luz */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-secondary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/50 rounded-full backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">Servicio Premium 2024</span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white"
          >
            <span className="text-gradient">Transformamos</span>
            <br />
            tu auto en una joya
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {/* Botón Principal */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="btn-primary text-lg px-8 py-6 h-auto font-bold group relative overflow-hidden">
                    <span className="relative z-10">{cta1Text}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-primary-light border-border">
                  <DialogHeader>
                    <DialogTitle className="text-white">Agendar Cita</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-gray-300">Completa el formulario para agendar tu cita</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            {/* Botón Secundario */}
            <motion.a
              href="https://wa.me/5543180287"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline text-lg px-8 py-6 h-auto font-bold inline-flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="relative z-10">{cta2Text}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary/0 via-white/10 to-accent-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { number: '5000+', label: 'Autos Lavados' },
              { number: '4.7★', label: 'Calificación' },
              { number: '10+', label: 'Años Experiencia' }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</span>
                <span className="text-gray-300 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-accent text-sm font-semibold">Desliza para explorar</span>
          <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
