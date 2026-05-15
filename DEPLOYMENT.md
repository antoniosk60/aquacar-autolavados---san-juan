# Guía de Despliegue - AQUACAR Premium Autolavados

## Despliegue en Vercel

### Requisitos Previos

Se requiere una cuenta en [Vercel](https://vercel.com), un repositorio en GitHub y Node.js 18 o superior instalado localmente.

### Pasos de Despliegue

#### 1. Preparar el Repositorio

```bash
git add .
git commit -m "Mejoras de UI/UX y optimización para Vercel"
git push origin main
```

#### 2. Conectar con Vercel

**Opción A: Usar Vercel CLI**

```bash
npm i -g vercel
vercel
```

**Opción B: Usar la interfaz web de Vercel**

1. Ve a https://vercel.com/new
2. Selecciona "Import Git Repository"
3. Busca "aquacar-autolavados"
4. Haz clic en "Import"

#### 3. Configurar Variables de Entorno

En el dashboard de Vercel, ve a Settings > Environment Variables y agrega las variables necesarias:

| Variable | Valor | Requerida |
|----------|-------|-----------|
| NODE_ENV | production | Sí |
| VITE_OPENWEATHER_API_KEY | Tu API key | No |
| VITE_GOOGLE_MAPS_API_KEY | Tu API key | No |

#### 4. Desplegar

```bash
vercel --prod
```

O simplemente haz push a main y Vercel se desplegará automáticamente.

### Verificación Post-Despliegue

Después del despliegue, verifica los siguientes puntos:

- El sitio carga correctamente desde la URL de Vercel
- La navegación entre páginas funciona sin problemas
- El widget de clima carga datos en tiempo real
- La calculadora de cotización realiza cálculos correctamente
- Los enlaces de WhatsApp abren la aplicación correctamente
- El modo oscuro se activa y desactiva sin problemas
- El diseño es responsive en dispositivos móviles

### Estructura de Build

El proyecto se compila en la siguiente estructura:

```
dist/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── vendor-*.js
│   │   ├── ui-*.js
│   │   ├── animation-*.js
│   │   ├── forms-*.js
│   │   ├── charts-*.js
│   │   ├── routing-*.js
│   │   └── index-*.css
│   └── __manus__/
│       └── debug-collector.js
└── index.js (servidor Node.js)
```

### Optimizaciones Aplicadas

El proyecto incluye varias optimizaciones para mejor performance:

**Code Splitting**: Los módulos se dividen automáticamente en chunks por funcionalidad (vendor, UI, animaciones, formularios, gráficos, enrutamiento).

**Minificación**: Terser está configurado para eliminar console logs en producción.

**Caching**: Los assets estáticos tienen headers de cache control configurados para máximo rendimiento.

**Seguridad**: Se incluyen headers de seguridad estándar (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection).

### Solución de Problemas

**Build falla con error de módulos**

Asegúrate de que `pnpm install` se ejecutó correctamente y que todas las dependencias están instaladas.

**Clima no carga**

Open-Meteo API es pública y gratuita. Verifica tu conexión a internet. Si el problema persiste, revisa la consola del navegador para errores de CORS.

**Imágenes no cargan**

Verifica que las URLs en `config/constants.ts` sean accesibles. Las imágenes están alojadas en CDN externo (Cloudfront).

**Errores de variables de entorno**

Asegúrate de que todas las variables requeridas estén configuradas en el dashboard de Vercel.

### Rollback

Si necesitas volver a una versión anterior:

1. Ve a Deployments en el dashboard de Vercel
2. Haz clic en el deployment anterior
3. Selecciona "Promote to Production"

### Monitoreo

Vercel proporciona automáticamente:

- Analytics de performance
- Logs de errores
- Métricas de Core Web Vitals
- Alertas de downtime

Accede a estas métricas en el dashboard de Vercel.

## Desarrollo Local

Para trabajar en el proyecto localmente:

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

## Notas Importantes

El proyecto usa `vite-plugin-manus-runtime` que es específico de Manus. En Vercel, esto se desactiva automáticamente en producción. Las imágenes están alojadas en CDN externo (Cloudfront); considera migrar a Vercel Blob si necesitas mejor control. El servicio de clima usa Open-Meteo API que es gratuita y no requiere API key.

## Soporte

Para problemas con Vercel, consulta la [Documentación de Vercel](https://vercel.com/docs) o la [Comunidad de Vercel](https://github.com/vercel/vercel/discussions).
