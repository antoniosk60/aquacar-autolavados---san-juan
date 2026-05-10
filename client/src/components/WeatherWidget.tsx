import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';
import { motion } from 'framer-motion';

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  willRain: boolean;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de datos de clima para San Juan Tlalpizahuac
    // En producción, usar OpenWeather API
    const mockWeather: WeatherData = {
      temp: 24,
      condition: 'Soleado',
      humidity: 65,
      windSpeed: 12,
      icon: 'sunny',
      willRain: false
    };

    setTimeout(() => {
      setWeather(mockWeather);
      setLoading(false);
    }, 500);
  }, []);

  if (loading || !weather) return null;

  const weatherMessage = weather.willRain
    ? '🌧️ No dejes que la lluvia arruine tu pintura. Aplica nuestro recubrimiento cerámico hoy'
    : '☀️ Día perfecto para un brillo espejo. ¡Agenda tu lavado ahora!';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-primary to-accent text-white p-4 rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {weather.icon === 'sunny' ? (
            <Sun size={32} className="animate-spin-slow" />
          ) : (
            <CloudRain size={32} />
          )}
          <div>
            <p className="text-sm font-semibold">{weather.condition}</p>
            <p className="text-2xl font-bold">{weather.temp}°C</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-90">Humedad: {weather.humidity}%</p>
          <p className="text-xs opacity-90">Viento: {weather.windSpeed} km/h</p>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-3 text-sm font-medium italic"
      >
        {weatherMessage}
      </motion.p>
    </motion.div>
  );
}
