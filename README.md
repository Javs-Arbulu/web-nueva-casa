# 🏠 Nueva Casa - Sitio Web de la Iglesia

Un sitio web moderno y responsivo para la iglesia Nueva Casa, diseñado para conectar corazones jóvenes con la fe. Construido con React, TypeScript, Tailwind CSS y Vite.

![Nueva Casa](https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y profesional
- 📱 **Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- ⚡ **Alto Rendimiento**: Construido con Vite para carga rápida
- 🎯 **Componentes Modulares**: Arquitectura limpia y mantenible
- 🌈 **Sistema de Colores**: Paleta reutilizable y consistente
- ♿ **Accesible**: Diseño inclusivo siguiendo mejores prácticas
- 🔧 **TypeScript**: Tipado fuerte para mejor desarrollo

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de utilidades CSS
- **Vite** - Herramienta de build rápida
- **PostCSS** - Procesador de CSS

### Herramientas de Desarrollo
- **ESLint** - Linter para calidad de código
- **Prettier** - Formateador de código
- **Git** - Control de versiones

## 🚀 Instalación y Configuración

### Prerrequisitos

Asegúrate de tener instalado:
- **Node.js** (versión 18 o superior)
- **npm** o **yarn**
- **Git**

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/web-nuevacasa.git
cd web-nuevacasa
```

2. **Navegar al directorio del cliente**
```bash
cd client
```

3. **Instalar dependencias**
```bash
npm install
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
web-nuevacasa/
├── client/                 # Aplicación React
│   ├── public/            # Archivos públicos
│   ├── src/               # Código fuente
│   │   ├── components/    # Componentes React
│   │   │   └── sections/  # Secciones de la página
│   │   ├── pages/         # Páginas principales
│   │   ├── styles/        # Archivos de estilo y tema
│   │   ├── types/         # Definiciones TypeScript
│   │   └── main.tsx       # Punto de entrada
│   ├── package.json       # Dependencias del proyecto
│   ├── tailwind.config.js # Configuración de Tailwind
│   ├── vite.config.ts     # Configuración de Vite
│   └── tsconfig.json      # Configuración de TypeScript
└── README.md              # Este archivo
```

## 🎨 Sistema de Colores

El proyecto utiliza una paleta de colores consistente definida en `src/styles/colors.ts`:

### Colores Principales
- **Primary**: Purple 600 (`#9333ea`) - Color de marca principal
- **Secondary**: Cyan 500 (`#06b6d4`) - Elementos interactivos
- **Accent**: Orange 500 (`#f59e0b`) - Destacados

### Colores de Estado
- **Success**: Green 500 (`#10b981`)
- **Warning**: Yellow 500 (`#f59e0b`)
- **Error**: Red 500 (`#ef4444`)
- **Info**: Blue 500 (`#3b82f6`)

### Uso de Colores
```css
/* Variables CSS */
.mi-elemento { background: var(--color-primary); }

/* Clases utilitarias */
<div className="bg-primary text-white">
<button className="btn btn-primary">
```

## 🧩 Componentes

### Secciones Principales

1. **Header** - Navegación y logo
2. **HeroSection** - Sección principal con llamada a la acción
3. **WelcomeSection** - Bienvenida a Nueva Casa
4. **ExpectSection** - Qué puedes esperar
5. **RecentMessagesSection** - Mensajes y sermones recientes
6. **CommunitySection** - Encuentra tu comunidad
7. **TestimonialsSection** - Testimonios de miembros
8. **Footer** - Información de contacto y enlaces

### Ejemplo de Uso
```tsx
import HeroSection from '../components/sections/HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      {/* Más componentes */}
    </>
  );
}
```

## 📱 Características Responsivas

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Responsivo**: Layouts adaptativos para diferentes pantallas
- **Imágenes Optimizadas**: Carga eficiente de recursos

## 🚀 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye para producción
npm run preview      # Vista previa de build

# Linting
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Corrige errores automáticamente
```

## 📝 Buenas Prácticas

### Código Limpio
- Componentes modulares y reutilizables
- Tipado estricto con TypeScript
- Nombres descriptivos y consistentes
- Separación de responsabilidades

### Performance
- Lazy loading de componentes
- Optimización de imágenes
- CSS crítico inline
- Bundle splitting

### Accesibilidad
- Etiquetas semánticas HTML
- Navegación por teclado
- Contraste de colores adecuado
- Texto alternativo en imágenes

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- **Desarrollador Principal**: [Tu Nombre]
- **Diseño**: Basado en especificaciones de Nueva Casa

## 📞 Contacto

- **Sitio Web**: [nuevacasa.org](https://nuevacasa.org)
- **Email**: info@nuevacasa.org
- **Teléfono**: +1 (555) 123-4567

## 🔄 Changelog

### v1.0.0 (2024-10-04)
- ✨ Implementación inicial del sitio web
- 🎨 Sistema de colores reutilizable
- 📱 Diseño responsivo completo
- 🧩 Componentes modulares
- ⚡ Optimización de rendimiento

---

**¿Necesitas ayuda?** Revisa la [documentación](./docs) o contacta al equipo de desarrollo.

¡Gracias por contribuir a Nueva Casa! 🙏
