// Información de contacto
export const CONTACT_INFO = {
  phone: '55 4318 0287',
  phoneLink: 'tel:5543180287',
  whatsapp: 'https://wa.me/5543180287',
  address: 'Av. Cuauhtémoc 5301, San Juan Tlalpizahuac, Ixtapaluca',
  hours: 'Todos los días hasta las 7:00 PM'
};

// Redes sociales
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com'
};

// URLs de imágenes
export const IMAGE_URLS = {
  hero: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643512244/hbDWzUPmudCth5Kh98BVHM/aquacar-hero-premium-K5Ezsg9avqdGsaEg489HDm.webp',
  promo: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643512244/hbDWzUPmudCth5Kh98BVHM/aquacar-promo-premium-VvVGqY2KhuXmpF2zmif6VE.webp',
  gallery: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663643512244/hbDWzUPmudCth5Kh98BVHM/aquacar-gallery-shine-C4WxYfK9k8GmuTmgMSnrzF.webp'
};

// Calificación
export const RATING = {
  stars: 5,
  score: 4.7,
  reviews: 183
};

// Servicios
export const SERVICES = [
  {
    icon: 'droplet',
    title: 'Lavado Profesional',
    description: 'Con hidrolavadoras de última tecnología y espuma premium'
  },
  {
    icon: 'users',
    title: 'Área de Juegos',
    description: 'Para que los niños se diviertan mientras esperan'
  },
  {
    icon: 'sofa',
    title: 'Sala de Espera',
    description: 'Cómoda y con WiFi gratuito para tu comodidad'
  },
  {
    icon: 'sparkles',
    title: 'Baños Limpios',
    description: 'Mantenimiento impecable y productos premium'
  }
];

// Paquetes con promociones
export const PACKAGES = [
  {
    name: 'Básico',
    price: '$150',
    originalPrice: '$180',
    discount: '17%',
    features: ['Lavado exterior', 'Secado', 'Aspirado básico'],
    badge: 'Perfecto para Autos Nuevos',
    popular: false
  },
  {
    name: 'Detallado',
    price: '$250',
    originalPrice: '$320',
    discount: '22%',
    features: ['Lavado completo', 'Limpieza interior', 'Secado premium', 'Aromatizante'],
    badge: '⭐ MÁS POPULAR',
    popular: true
  },
  {
    name: 'Encerado Premium',
    price: '$350',
    originalPrice: '$450',
    discount: '22%',
    features: ['Todo incluido', 'Encerado premium', 'Protección UV', 'Limpieza de llantas', 'Pulido profesional'],
    badge: '🔥 OFERTA LIMITADA',
    popular: false
  },
  {
    name: 'Aspirado Interior',
    price: '$200',
    originalPrice: '$250',
    discount: '20%',
    features: ['Aspirado profundo', 'Limpieza de tapetes', 'Desodorización', 'Protector de tela'],
    badge: 'Complemento Ideal',
    popular: false
  }
];

// Promociones especiales
export const PROMOTIONS = [
  {
    id: 1,
    title: '🎁 PROMOCIÓN DE VERANO',
    subtitle: 'Compra 2 servicios y obtén 15% de descuento',
    description: 'Válido hasta fin de mes. No acumulable con otras ofertas.',
    badge: 'VIGENTE',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    id: 2,
    title: '⚡ DESCUENTO CLIENTE FRECUENTE',
    subtitle: 'Cada 5 servicios, el siguiente es 50% OFF',
    description: 'Programa de lealtad automático. Acumula puntos en cada visita.',
    badge: 'PERMANENTE',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 3,
    title: '🚗 PACK FAMILIAR',
    subtitle: '3 autos por $599 (Ahorra $151)',
    description: 'Ideal para familias. Incluye todos los servicios básicos.',
    badge: 'NUEVO',
    color: 'from-pink-400 to-rose-500'
  }
];

// Galería mejorada
export const GALLERY_ITEMS = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop',
    after: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop&q=80',
    title: 'Mercedes Benz - Transformación Completa',
    category: 'premium',
    duration: '2.5 horas',
    service: 'Encerado Premium'
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop',
    after: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop&q=80',
    title: 'BMW X5 - Restauración Profesional',
    category: 'suv',
    duration: '3 horas',
    service: 'Detallado + Encerado'
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1494976866556-6812c9d1c72e?w=500&h=500&fit=crop',
    after: 'https://images.unsplash.com/photo-1494976866556-6812c9d1c72e?w=500&h=500&fit=crop&q=80',
    title: 'Audi A4 - Brillo Espejo',
    category: 'sedan',
    duration: '2 horas',
    service: 'Detallado'
  },
  {
    id: 4,
    before: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop',
    after: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop&q=80',
    title: 'Tesla Model 3 - Limpieza Eléctrica',
    category: 'electrico',
    duration: '1.5 horas',
    service: 'Básico'
  },
  {
    id: 5,
    before: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop',
    after: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=500&fit=crop&q=80',
    title: 'Porsche 911 - Detalle Lujo',
    category: 'deportivo',
    duration: '4 horas',
    service: 'Encerado Premium'
  },
  {
    id: 6,
    before: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop',
    after: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=500&fit=crop&q=80',
    title: 'Jeep Wrangler - Aventura Limpia',
    category: 'suv',
    duration: '2.5 horas',
    service: 'Detallado'
  }
];

// Reseñas
export const REVIEWS = [
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

// Colores de tema - Dark Tech Premium
export const THEME_COLORS = {
  primary: '#0F0F1E',
  primaryLight: '#1A1A2E',
  accent: '#00D9FF',
  accentSecondary: '#FF006E',
  accentTertiary: '#FFBE0B',
  white: '#FFFFFF',
  gray: {
    50: '#F0F0F0',
    100: '#E8E8E8',
    200: '#D1D1D1',
    300: '#B4B4B4',
    400: '#808080',
    500: '#666666',
    600: '#4D4D4D',
    700: '#333333',
    800: '#1A1A1A',
    900: '#0F0F0F'
  }
};
