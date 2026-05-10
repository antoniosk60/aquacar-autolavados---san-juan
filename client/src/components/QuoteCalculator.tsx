import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Droplets, Zap, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

type CarSize = 'sedan' | 'suv' | 'truck';
type DirtLevel = 'light' | 'moderate' | 'dirty';

interface Extras {
  premiumFoam: boolean;
  tireShine: boolean;
  paintProtection: boolean;
  fragrance: boolean;
}

export default function QuoteCalculator() {
  const [carSize, setCarSize] = useState<CarSize>('sedan');
  const [dirtLevel, setDirtLevel] = useState<DirtLevel>('moderate');
  const [extras, setExtras] = useState<Extras>({
    premiumFoam: false,
    tireShine: false,
    paintProtection: false,
    fragrance: false
  });

  const basePrices: Record<CarSize, number> = {
    sedan: 150,
    suv: 200,
    truck: 250
  };

  const dirtMultiplier: Record<DirtLevel, number> = {
    light: 1,
    moderate: 1.2,
    dirty: 1.5
  };

  const extraPrices = {
    premiumFoam: 15,
    tireShine: 10,
    paintProtection: 25,
    fragrance: 5
  };

  const timeEstimates: Record<CarSize, number> = {
    sedan: 30,
    suv: 45,
    truck: 60
  };

  let basePrice = basePrices[carSize] * dirtMultiplier[dirtLevel];
  let extrasCost = 0;

  Object.entries(extras).forEach(([key, value]) => {
    if (value) {
      extrasCost += extraPrices[key as keyof typeof extraPrices];
    }
  });

  const totalPrice = basePrice + extrasCost;
  const timeEstimate = timeEstimates[carSize];

  const handleExtraChange = (key: keyof Extras) => {
    setExtras(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl p-8 shadow-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Calculator */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold flex items-center gap-2">
            <Zap className="text-accent" size={28} />
            Calculadora de Cotización
          </h3>

          {/* Car Size Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
              <Car size={18} className="text-accent" />
              Tamaño del Auto
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['sedan', 'suv', 'truck'] as const).map(size => (
                <motion.button
                  key={size}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCarSize(size)}
                  className={`py-2 px-3 rounded-lg font-medium transition-all ${
                    carSize === size
                      ? 'bg-accent text-primary'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dirt Level Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
              <Droplets size={18} className="text-accent" />
              Nivel de Suciedad
            </label>
            <div className="space-y-2">
              {(['light', 'moderate', 'dirty'] as const).map(level => (
                <motion.button
                  key={level}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setDirtLevel(level)}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all text-left ${
                    dirtLevel === level
                      ? 'bg-accent text-primary'
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  {level === 'light' && '💧 Ligero'}
                  {level === 'moderate' && '💦 Moderado'}
                  {level === 'dirty' && '🌊 Muy Sucio'}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Extras Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3">Servicios Adicionales</label>
            <div className="space-y-2">
              {[
                { key: 'premiumFoam' as const, label: 'Espuma Premium', price: 15 },
                { key: 'tireShine' as const, label: 'Brillo de Llantas', price: 10 },
                { key: 'paintProtection' as const, label: 'Protección de Pintura', price: 25 },
                { key: 'fragrance' as const, label: 'Fragancia Interior', price: 5 }
              ].map(({ key, label, price }) => (
                <motion.label
                  key={key}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={extras[key]}
                    onChange={() => handleExtraChange(key)}
                    className="w-4 h-4 rounded accent-accent"
                  />
                  <span className="flex-1">{label}</span>
                  <span className="text-accent font-semibold">+${price}</span>
                </motion.label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Price Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur rounded-xl p-6 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-sm text-gray-200 mb-2">Precio Estimado</p>
              <motion.div
                key={totalPrice}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-5xl font-bold text-accent flex items-center justify-center gap-2"
              >
                <DollarSign size={40} />
                {totalPrice.toFixed(2)}
              </motion.div>
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="flex justify-between mb-3">
                <span className="text-sm">Servicio Base:</span>
                <span className="font-semibold">${basePrice.toFixed(2)}</span>
              </div>
              {extrasCost > 0 && (
                <div className="flex justify-between mb-3">
                  <span className="text-sm">Extras:</span>
                  <span className="font-semibold text-accent">${extrasCost.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="bg-accent/20 rounded-lg p-4 flex items-center gap-3">
              <Clock size={24} className="text-accent flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-200">Tiempo Estimado</p>
                <p className="text-xl font-bold">{timeEstimate} minutos</p>
              </div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6"
          >
            <Button className="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-3 rounded-lg text-lg">
              Agendar Ahora
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
