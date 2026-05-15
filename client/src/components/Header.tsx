import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  logo?: string;
  title?: string;
  subtitle?: string;
  navItems?: Array<{ label: string; href: string }>;
  sticky?: boolean;
}

export default function Header({
  logo = '🚗',
  title = 'AQUACAR',
  subtitle = 'Premium Autolavados',
  navItems = [
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Paquetes', href: '/#paquetes' },
    { label: 'Opiniones', href: '/#opiniones' },
    { label: 'Galería', href: '/galeria' },
    { label: 'Extras', href: '/extras' },
    { label: 'Contacto', href: '/#contacto' }
  ],
  sticky = true
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerClass = sticky
    ? 'sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm'
    : 'bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={headerClass}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
          <div className="text-3xl font-bold text-primary">{logo}</div>
          <div>
            <h1 className="text-xl font-bold text-primary">{title}</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400">{subtitle}</p>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#FF6B35' }}
              className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
            >
              {item.label}
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
            aria-label="Toggle menu"
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
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
