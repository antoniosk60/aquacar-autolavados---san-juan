import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Phone, MessageCircle, MapPin } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterProps {
  socialLinks?: Array<{ icon: React.ComponentType<any>; name: string; url: string }>;
  contactLinks?: FooterLink[];
  address?: string;
  year?: number;
}

export default function Footer({
  socialLinks = [
    { icon: Facebook, name: 'Facebook', url: 'https://facebook.com' },
    { icon: Instagram, name: 'Instagram', url: 'https://instagram.com' },
    { icon: Youtube, name: 'YouTube', url: 'https://youtube.com' }
  ],
  contactLinks = [
    { label: 'Llamar', href: 'tel:5543180287', icon: <Phone size={20} /> },
    { label: 'WhatsApp', href: 'https://wa.me/5543180287', icon: <MessageCircle size={20} /> }
  ],
  address = 'Av. Cuauhtémoc 5301, San Juan Tlalpizahuac, Ixtapaluca',
  year = new Date().getFullYear()
}: FooterProps) {
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
    <footer className="bg-primary text-white py-16">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Contacto */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Ubicación */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Ubicación</h3>
            <div className="flex gap-3">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <p className="text-gray-100">{address}</p>
            </div>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Síguenos</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 bg-white/10 rounded-lg hover:bg-accent transition-colors"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-gray-100 text-sm"
          >
            © {year} AQUACAR Premium Autolavados. Todos los derechos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
