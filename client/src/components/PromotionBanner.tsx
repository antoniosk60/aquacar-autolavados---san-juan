import { motion } from 'framer-motion';
import { PROMOTIONS } from '@/config/constants';
import { Zap, Gift, TrendingUp } from 'lucide-react';

export default function PromotionBanner() {
  const icons = [Zap, Gift, TrendingUp];

  return (
    <section className="py-12 bg-gradient-to-r from-primary via-primary-light to-primary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {PROMOTIONS.map((promo, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={promo.id}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br ${promo.color} p-6 rounded-2xl border border-white/20 backdrop-blur-md cursor-pointer group overflow-hidden relative`}
              >
                {/* Efecto de fondo animado */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>

                {/* Contenido */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="px-3 py-1 bg-white/30 text-white text-xs font-bold rounded-full backdrop-blur-md">
                      {promo.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
                  <p className="text-white/90 font-semibold mb-3">{promo.subtitle}</p>
                  <p className="text-white/70 text-sm">{promo.description}</p>

                  {/* Botón */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all duration-300 backdrop-blur-md border border-white/30"
                  >
                    Aprovechar Oferta
                  </motion.button>
                </div>

                {/* Brillo de fondo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
