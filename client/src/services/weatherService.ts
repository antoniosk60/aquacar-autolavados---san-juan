/**
 * Servicio de clima usando Open-Meteo API (gratuita, sin API key requerida)
 */

export interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  willRain: boolean;
  rainChance: number;
}

// Mapeo de códigos WMO a descripciones en español
const WMO_CODES: Record<number, { description: string; icon: string }> = {
  0: { description: 'Cielo despejado', icon: '☀️' },
  1: { description: 'Principalmente despejado', icon: '🌤️' },
  2: { description: 'Parcialmente nublado', icon: '⛅' },
  3: { description: 'Nublado', icon: '☁️' },
  45: { description: 'Niebla', icon: '🌫️' },
  48: { description: 'Niebla con escarcha', icon: '🌫️' },
  51: { description: 'Llovizna ligera', icon: '🌧️' },
  53: { description: 'Llovizna moderada', icon: '🌧️' },
  55: { description: 'Llovizna densa', icon: '🌧️' },
  61: { description: 'Lluvia ligera', icon: '🌧️' },
  63: { description: 'Lluvia moderada', icon: '🌧️' },
  65: { description: 'Lluvia fuerte', icon: '⛈️' },
  71: { description: 'Nieve ligera', icon: '❄️' },
  73: { description: 'Nieve moderada', icon: '❄️' },
  75: { description: 'Nieve fuerte', icon: '❄️' },
  77: { description: 'Granos de nieve', icon: '❄️' },
  80: { description: 'Lluvia ligera', icon: '🌧️' },
  81: { description: 'Lluvia moderada', icon: '🌧️' },
  82: { description: 'Lluvia fuerte', icon: '⛈️' },
  85: { description: 'Nieve ligera', icon: '❄️' },
  86: { description: 'Nieve fuerte', icon: '❄️' },
  95: { description: 'Tormenta', icon: '⛈️' },
  96: { description: 'Tormenta con granizo', icon: '⛈️' },
  99: { description: 'Tormenta fuerte', icon: '⛈️' }
};

export async function getWeatherData(latitude: number = 19.3, longitude: number = -99.1): Promise<WeatherData> {
  try {
    const url = new URL('https://api.open-meteo.com/v1/forecast');
    url.searchParams.set('latitude', latitude.toString());
    url.searchParams.set('longitude', longitude.toString());
    url.searchParams.set('current', 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation_probability');
    url.searchParams.set('timezone', 'auto');

    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    const current = data.current;

    const weatherCode = current.weather_code || 0;
    const weatherInfo = WMO_CODES[weatherCode] || { description: 'Desconocido', icon: '🌡️' };

    return {
      temp: Math.round(current.temperature_2m),
      condition: weatherInfo.description,
      humidity: current.relative_humidity_2m || 0,
      windSpeed: Math.round(current.wind_speed_10m),
      icon: weatherInfo.icon,
      willRain: current.precipitation_probability > 30,
      rainChance: current.precipitation_probability || 0
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    
    // Retornar datos por defecto en caso de error
    return {
      temp: 25,
      condition: 'Clima desconocido',
      humidity: 60,
      windSpeed: 10,
      icon: '🌡️',
      willRain: false,
      rainChance: 0
    };
  }
}

/**
 * Obtener recomendación de servicio basada en el clima
 */
export function getWeatherRecommendation(weather: WeatherData): string {
  if (weather.willRain) {
    return `⚠️ Hay ${weather.rainChance}% de probabilidad de lluvia. ¡Ahora es el momento perfecto para un lavado premium!`;
  }
  
  if (weather.humidity > 80) {
    return `💧 Humedad alta (${weather.humidity}%). Nuestro servicio de secado premium es ideal para este clima.`;
  }
  
  if (weather.windSpeed > 20) {
    return `💨 Vientos fuertes (${weather.windSpeed} km/h). Recomendamos nuestro paquete Encerado para máxima protección.`;
  }
  
  return `✨ Condiciones perfectas para un lavado. ¡Aprovecha hoy mismo!`;
}
