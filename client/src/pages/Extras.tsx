import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Cloud, Droplets, Wind, Eye, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

/**
 * AQUACAR Extras - Calculadora de Presupuestos y Widget del Clima
 * Diseño: Minimalist Corporate Modern
 * Características: Cálculo dinámico de presupuestos, datos de clima en tiempo real
 */

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  feelsLike: number;
}

const services = [
  { id: 'basico', name: 'Lavado Básico', basePrice: 150, description: 'Lavado exterior, secado y aspirado básico' },
  { id: 'detallado', name: 'Lavado Detallado', basePrice: 250, description: 'Lavado completo, limpieza interior y secado premium' },
  { id: 'encerado', name: 'Encerado Premium', basePrice: 350, description: 'Todo incluido con encerado y protección UV' },
  { id: 'aspirado', name: 'Aspirado Interior', basePrice: 200, description: 'Aspirado profundo y desodorización' },
  { id: 'detailing', name: 'Detailing Completo', basePrice: 500, description: 'Servicio VIP con todos los extras' }
];

const addOns = [
  { id: 'aroma', name: 'Aromatizante Premium', price: 50 },
  { id: 'protector', name: 'Protector de Tela', price: 75 },
  { id: 'llantas', name: 'Limpieza de Llantas', price: 100 },
  { id: 'cristales', name: 'Tratamiento de Cristales', price: 80 },
  { id: 'motor', name: 'Limpieza de Motor', price: 120 }
];

export default function Extras() {
  const [selectedService, setSelectedService] = useState('basico');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [discount, setDiscount] = useState(0);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using open-meteo API (free, no key required)
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=19.3&longitude=-99.1&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,visibility&temperature_unit=celsius&timezone=auto'
        );
        const data = await response.json();
        const current = data.current;

        // Map weather codes to descriptions
        const weatherDescriptions: { [key: number]: string } = {
          0: 'Despejado',
          1: 'Mayormente despejado',
          2: 'Parcialmente nublado',
          3: 'Nublado',
          45: 'Niebla',
          48: 'Niebla con escarcha',
          51: 'Llovizna ligera',
          53: 'Llovizna moderada',
          55: 'Llovizna densa',
          61: 'Lluvia ligera',
          63: 'Lluvia moderada',
          65: 'Lluvia fuerte',
          80: 'Chubascos ligeros',
          81: 'Chubascos moderados',
          82: 'Chubascos fuertes',
        };

        setWeather({
          temperature: Math.round(current.temperature_2m),
          description: weatherDescriptions[current.weather_code] || 'Desconocido',
          humidity: current.relative_humidity_2m,
          windSpeed: Math.round(current.wind_speed_10m),
          visibility: Math.round(current.visibility / 1000),
          feelsLike: Math.round(current.temperature_2m - 2) // Estimado
        });
      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeather({
          temperature: 24,
          description: 'Día perfecto para un brillo espejo',
          humidity: 65,
          windSpeed: 12,
          visibility: 10,
          feelsLike: 22
        });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    const service = services.find(s => s.id === selectedService);
    if (!service) return 0;

    const servicePrice = service.basePrice;
    const addOnsTotal = selectedAddOns.reduce((sum, id) => {
      const addOn = addOns.find(a => a.id === id);
      return sum + (addOn?.price || 0);
    }, 0);

    const subtotal = (servicePrice + addOnsTotal) * quantity;
    const discountAmount = subtotal * (discount / 100);
    return subtotal - discountAmount;
  };

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const service = services.find(s => s.id === selectedService);
  const addOnsTotal = selectedAddOns.reduce((sum, id) => {
    const addOn = addOns.find(a => a.id === id);
    return sum + (addOn?.price || 0);
  }, 0);
  const subtotal = ((service?.basePrice || 0) + addOnsTotal) * quantity;
  const total = calculateTotal();

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
            <h1 className="text-5xl font-bold mb-4">Extras y Herramientas</h1>
            <p className="text-lg opacity-90">
              Calcula tu presupuesto personalizado y consulta el clima
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-8 h-8 text-[#FF6B35]" />
                <h2 className="text-3xl font-bold">Calculadora de Presupuestos</h2>
              </div>

              {/* Service Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3">Selecciona un Servicio</label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map(service => (
                      <SelectItem key={service.id} value={service.id}>
                        <div className="flex flex-col">
                          <span className="font-semibold">{service.name}</span>
                          <span className="text-xs text-gray-500">${service.basePrice}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {service && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{service.description}</p>
                )}
              </div>

              {/* Add-ons Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4">Agregar Servicios Adicionales</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {addOns.map(addOn => (
                    <motion.button
                      key={addOn.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleAddOn(addOn.id)}
                      className={`p-4 rounded-lg border-2 transition-all text-left ${
                        selectedAddOns.includes(addOn.id)
                          ? 'border-[#FF6B35] bg-[#FF6B35]/10'
                          : 'border-gray-200 dark:border-gray-700 hover:border-[#FF6B35]'
                      }`}
                    >
                      <div className="font-semibold">{addOn.name}</div>
                      <div className="text-sm text-[#FF6B35] font-bold">+${addOn.price}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-4">Cantidad de Vehículos</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[quantity]}
                    onValueChange={(value) => setQuantity(value[0])}
                    min={1}
                    max={10}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-[#FF6B35] w-12 text-center">{quantity}</span>
                </div>
              </div>

              {/* Discount */}
              <div className="mb-8">
                <label className="block text-sm font-semibold mb-3">Descuento (%)</label>
                <div className="flex items-center gap-4">
                  <Slider
                    value={[discount]}
                    onValueChange={(value) => setDiscount(value[0])}
                    min={0}
                    max={30}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-2xl font-bold text-[#FF6B35] w-12 text-center">{discount}%</span>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Servicio Base:</span>
                  <span>${(service?.basePrice || 0) * quantity}</span>
                </div>
                {addOnsTotal > 0 && (
                  <div className="flex justify-between text-sm">
                    <span>Servicios Adicionales:</span>
                    <span>${addOnsTotal * quantity}</span>
                  </div>
                )}
                <div className="border-t border-gray-300 dark:border-gray-700 pt-3 flex justify-between font-semibold">
                  <span>Subtotal:</span>
                  <span>${subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Descuento ({discount}%):</span>
                    <span>-${(subtotal * discount / 100).toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t border-gray-300 dark:border-gray-700 pt-3 flex justify-between text-xl font-bold text-[#FF6B35]">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full mt-6 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-lg py-6">
                Solicitar Presupuesto
              </Button>
            </Card>
          </motion.div>

          {/* Weather Widget Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="p-8 shadow-lg sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Cloud className="w-8 h-8 text-[#FF6B35]" />
                <h2 className="text-2xl font-bold">Clima Actual</h2>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin mb-4">
                    <Cloud className="w-12 h-12 text-[#FF6B35] mx-auto" />
                  </div>
                  <p>Cargando datos del clima...</p>
                </div>
              ) : weather ? (
                <div className="space-y-6">
                  {/* Temperature Display */}
                  <div className="bg-gradient-to-br from-[#0A1F44] to-[#FF6B35] text-white p-6 rounded-lg text-center">
                    <div className="text-5xl font-bold mb-2">{weather.temperature}°C</div>
                    <div className="text-lg">{weather.description}</div>
                    <div className="text-sm opacity-80 mt-2">Sensación térmica: {weather.feelsLike}°C</div>
                  </div>

                  {/* Weather Details */}
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Droplets className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold">Humedad</span>
                      </div>
                      <span className="text-lg font-bold">{weather.humidity}%</span>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Wind className="w-5 h-5 text-cyan-500" />
                        <span className="font-semibold">Viento</span>
                      </div>
                      <span className="text-lg font-bold">{weather.windSpeed} km/h</span>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Eye className="w-5 h-5 text-amber-500" />
                        <span className="font-semibold">Visibilidad</span>
                      </div>
                      <span className="text-lg font-bold">{weather.visibility} km</span>
                    </motion.div>
                  </div>

                  {/* Weather Recommendation */}
                  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
                      💡 Recomendación:
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 mt-2">
                      {weather.humidity > 70
                        ? 'Humedad alta - Ideal para servicios de limpieza profunda'
                        : weather.windSpeed > 20
                        ? 'Viento fuerte - Perfecto para secado rápido'
                        : 'Condiciones óptimas para todos nuestros servicios'}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No se pudo cargar el clima
                </div>
              )}
            </Card>
          </motion.div>
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '⚡',
              title: 'Presupuestos Precisos',
              description: 'Calcula exactamente cuánto pagarás por tu servicio personalizado'
            },
            {
              icon: '🌤️',
              title: 'Datos en Tiempo Real',
              description: 'Consulta el clima actual para planificar tu visita'
            },
            {
              icon: '💰',
              title: 'Descuentos Disponibles',
              description: 'Aprovecha nuestras promociones y ofertas especiales'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
