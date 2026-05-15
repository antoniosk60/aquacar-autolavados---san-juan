# AQUACAR Premium Autolavados - Sitio Web Moderno

Sitio web profesional y moderno para AQUACAR Premium Autolavados, ubicado en San Juan Tlalpizahuac, Ixtapaluca. Construido con React, Vite, Tailwind CSS y Framer Motion.

## Características Principales

**Diseño Responsivo**: Interfaz completamente adaptable a dispositivos móviles, tablets y desktops con Tailwind CSS.

**Modo Oscuro**: Soporte completo para tema claro y oscuro con persistencia en localStorage.

**Animaciones Fluidas**: Animaciones profesionales con Framer Motion para mejor experiencia de usuario.

**Clima en Tiempo Real**: Widget de clima integrado usando Open-Meteo API (gratuita, sin API key requerida).

**Calculadora de Cotización**: Herramienta interactiva para calcular presupuestos personalizados.

**Galería de Transformaciones**: Showcase de antes y después con lightbox modal.

**Formulario de Citas**: Sistema de reserva con validación de datos usando Zod.

**Integración WhatsApp**: Botones de contacto directo vía WhatsApp.

**SEO Optimizado**: Meta tags, estructura semántica y performance optimizado.

## Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| React | 19.2.1 | Framework UI |
| Vite | 7.1.9 | Build tool y dev server |
| TypeScript | 5.6.3 | Type safety |
| Tailwind CSS | 4.1.14 | Estilos y diseño |
| Framer Motion | 12.23.22 | Animaciones |
| React Hook Form | 7.64.0 | Gestión de formularios |
| Zod | 4.1.12 | Validación de datos |
| Recharts | 2.15.4 | Gráficos (futuro) |
| Radix UI | Múltiples | Componentes accesibles |
| Wouter | 3.7.1 | Enrutamiento ligero |

## Estructura del Proyecto

```
aquacar-autolavados/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx              # Encabezado reutilizable
│   │   │   ├── Footer.tsx              # Pie de página reutilizable
│   │   │   ├── ContactSection.tsx      # Sección de contacto
│   │   │   ├── QuoteCalculator.tsx     # Calculadora de cotización
│   │   │   ├── WeatherWidget.tsx       # Widget de clima
│   │   │   ├── Map.tsx                 # Mapa interactivo
│   │   │   ├── ErrorBoundary.tsx       # Manejo de errores
│   │   │   ├── ThemeToggle.tsx         # Toggle de tema
│   │   │   ├── ProgressiveLoader.tsx   # Loader progresivo
│   │   │   ├── WaterRipple.tsx         # Efecto de ondas
│   │   │   └── ui/                     # Componentes Radix UI
│   │   ├── pages/
│   │   │   ├── Home.tsx                # Página principal
│   │   │   ├── Gallery.tsx             # Galería de fotos
│   │   │   ├── Extras.tsx              # Página de extras
│   │   │   └── NotFound.tsx            # Página 404
│   │   ├── services/
│   │   │   ├── weatherService.ts       # Servicio de clima
│   │   │   └── validationService.ts    # Validación con Zod
│   │   ├── config/
│   │   │   └── constants.ts            # Constantes centralizadas
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx        # Contexto de tema
│   │   ├── hooks/
│   │   │   ├── useComposition.ts       # Hook personalizado
│   │   │   ├── useMobile.tsx           # Detección de móvil
│   │   │   └── usePersistFn.ts         # Función persistente
│   │   ├── App.tsx                     # Componente raíz
│   │   ├── main.tsx                    # Punto de entrada
│   │   └── index.css                   # Estilos globales
│   ├── index.html                      # HTML principal
│   └── public/                         # Assets estáticos
├── server/
│   └── index.ts                        # Servidor Express
├── shared/
│   └── const.ts                        # Constantes compartidas
├── vite.config.ts                      # Configuración de Vite
├── vercel.json                         # Configuración de Vercel
├── package.json                        # Dependencias
└── DEPLOYMENT.md                       # Guía de despliegue
```

## Instalación y Desarrollo

### Requisitos Previos

Se requiere Node.js 18+ y pnpm 10+.

### Pasos de Instalación

```bash
# Clonar el repositorio
git clone https://github.com/antoniosk60/aquacar-autolavados---san-juan.git
cd aquacar-autolavados

# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# El sitio estará disponible en http://localhost:3000
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo con hot reload |
| `pnpm build` | Compila para producción |
| `pnpm preview` | Visualiza el build de producción localmente |
| `pnpm check` | Verifica tipos TypeScript |
| `pnpm format` | Formatea código con Prettier |

## Despliegue en Vercel

### Opción 1: Despliegue Automático (Recomendado)

1. Ve a [Vercel](https://vercel.com/new)
2. Haz clic en "Import Git Repository"
3. Selecciona el repositorio `aquacar-autolavados---san-juan`
4. Vercel detectará automáticamente la configuración de Vite
5. Haz clic en "Deploy"

### Opción 2: Despliegue Manual con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### Variables de Entorno (Opcional)

En el dashboard de Vercel, agrega las siguientes variables si es necesario:

```env
NODE_ENV=production
VITE_OPENWEATHER_API_KEY=your_key_here
VITE_GOOGLE_MAPS_API_KEY=your_key_here
```

Para más detalles, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

## Optimizaciones Aplicadas

**Code Splitting**: El build se divide automáticamente en chunks por funcionalidad (vendor, UI, animaciones, formularios, gráficos, enrutamiento).

**Minificación**: Terser está configurado para eliminar console logs y minimizar el código en producción.

**Caching**: Los assets estáticos tienen headers de cache control configurados para máximo rendimiento.

**Seguridad**: Se incluyen headers de seguridad estándar (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection).

**Performance**: Lazy loading de componentes, image optimization y tree-shaking de dependencias no utilizadas.

## Mejoras Recientes

**Componentes Reutilizables**: Se crearon Header, Footer y ContactSection para eliminar duplicación de código.

**Servicios Centralizados**: Implementación de servicios para clima, validación y constantes.

**Validación Mejorada**: Integración de Zod para validación robusta de formularios.

**Optimización de Build**: Code splitting automático y minificación agresiva.

**Documentación**: Guía completa de despliegue y configuración.

## Características Futuras

- Integración con backend para guardar citas
- Sistema de notificaciones por email
- Galería dinámica con más imágenes
- Blog de consejos de cuidado de autos
- Sistema de reseñas integrado
- Programa de lealtad

## Solución de Problemas

**El sitio no carga en Vercel**

Verifica que el build se completó correctamente con `pnpm build` localmente.

**Clima no aparece**

Open-Meteo API es pública y gratuita. Verifica tu conexión a internet.

**Imágenes no cargan**

Las imágenes están alojadas en CDN externo. Verifica que las URLs en `config/constants.ts` sean accesibles.

**Errores de TypeScript**

Ejecuta `pnpm check` para verificar tipos y corregir errores.

## Contribución

Para contribuir al proyecto:

1. Crea una rama con tu feature: `git checkout -b feature/mi-feature`
2. Commit tus cambios: `git commit -m 'Agregar mi feature'`
3. Push a la rama: `git push origin feature/mi-feature`
4. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT.

## Contacto

Para preguntas o sugerencias sobre el sitio web:

- **Teléfono**: 55 4318 0287
- **WhatsApp**: [Enviar mensaje](https://wa.me/5543180287)
- **Ubicación**: Av. Cuauhtémoc 5301, San Juan Tlalpizahuac, Ixtapaluca

## Créditos

Desarrollado con ❤️ para AQUACAR Premium Autolavados.

Stack moderno con React, Vite, Tailwind CSS y Framer Motion.
