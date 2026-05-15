import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/config/constants';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  showAddress?: boolean;
  className?: string;
}

export default function ContactSection({
  title = '¿Preguntas?',
  subtitle = 'Contáctanos por cualquiera de estos medios',
  showAddress = true,
  className = ''
}: ContactSectionProps) {
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
    <section className={`py-20 bg-primary text-white ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-100 mb-8">{subtitle}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"
        >
          <motion.a
            href={CONTACT_INFO.phoneLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Phone size={32} className="text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold">Llamar</p>
              <p className="text-gray-100">{CONTACT_INFO.phone}</p>
            </div>
          </motion.a>

          <motion.a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 10 }}
            className="flex items-center gap-4 p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <MessageCircle size={32} className="text-accent flex-shrink-0" />
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="text-gray-100">{CONTACT_INFO.phone}</p>
            </div>
          </motion.a>
        </motion.div>

        {showAddress && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 p-6 bg-white/10 rounded-lg text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <MapPin size={24} className="text-accent" />
              <h3 className="font-bold text-lg">Ubicación</h3>
            </div>
            <p className="text-gray-100">{CONTACT_INFO.address}</p>
            <p className="text-gray-200 text-sm mt-2">{CONTACT_INFO.hours}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
