# Paleta de Colores - Nueva Casa

## 🎨 Paleta Principal

### Colores Primarios (Marca Nueva Casa)

- **Primary**: `#9333ea` - Purple 600 (Color principal de la marca)
- **Primary Dark**: `#7c3aed` - Purple 700 (Hover states, botones activos)
- **Primary Light**: `#a855f7` - Purple 500 (Elementos secundarios)
- **Primary 50**: `#f3e8ff` - Purple 50 (Fondos suaves)

### Colores Secundarios

- **Secondary**: `#06b6d4` - Cyan 500 (Acentos, elementos interactivos)
- **Secondary Dark**: `#0891b2` - Cyan 600 (Hover states secundarios)
- **Accent**: `#f59e0b` - Yellow 500 (Llamadas de atención, destacados)

### Colores Neutros

- **White**: `#ffffff`
- **Gray 50**: `#f9fafb` - Fondos muy claros
- **Gray 100**: `#f3f4f6` - Fondos de secciones
- **Gray 200**: `#e5e7eb` - Bordes suaves
- **Gray 300**: `#d1d5db` - Bordes normales
- **Gray 400**: `#9ca3af` - Texto secundario
- **Gray 500**: `#6b7280` - Texto terciario
- **Gray 600**: `#4b5563` - Texto normal
- **Gray 700**: `#374151` - Texto oscuro
- **Gray 800**: `#1f2937` - Texto principal
- **Gray 900**: `#111827` - Texto muy oscuro

### Colores de Estado

- **Success**: `#10b981` - Verde para éxito
- **Warning**: `#f59e0b` - Amarillo para advertencias
- **Error**: `#ef4444` - Rojo para errores
- **Info**: `#3b82f6` - Azul para información

## 🚀 Uso en CSS

### Variables CSS

Usa las variables CSS personalizadas definidas en `src/index.css`:

```css
.mi-elemento {
  background-color: var(--color-primary);
  color: var(--color-white);
}
```

### Clases Utilitarias

Usa las clases predefinidas:

```html
<div class="bg-primary text-white p-8 rounded-lg">Mi contenido</div>
```

### Gradientes Predefinidos

```css
.gradient-primary {
  background: var(--gradient-primary);
}
.gradient-hero {
  background: var(--gradient-hero);
}
.gradient-soft {
  background: var(--gradient-soft);
}
```

## 📱 Componentes de Botones

### Clases de Botones Predefinidas

- `.btn-primary` - Botón principal con gradiente
- `.btn-secondary` - Botón secundario con borde
- `.btn-outline-white` - Botón outline blanco

### Ejemplo de uso:

```html
<button class="btn btn-primary">Botón Principal</button>
<button class="btn btn-secondary">Botón Secundario</button>
```

## 🔧 Integración TypeScript

Importa los colores en componentes TypeScript:

```typescript
import { colors, cssVars } from "../styles/colors";

// Uso directo
const myStyle = {
  backgroundColor: colors.primary,
  color: colors.white,
};

// Con CSS variables
const myElement = {
  backgroundColor: cssVars.primary,
};
```

## 📋 Lista de Clases Disponibles

### Fondos

- `bg-primary`, `bg-primary-dark`, `bg-primary-light`, `bg-primary-50`
- `bg-secondary`, `bg-secondary-dark`, `bg-accent`
- `bg-white`, `bg-gray-50`, `bg-gray-100`, `bg-gray-800`, `bg-gray-900`

### Textos

- `text-primary`, `text-primary-dark`, `text-white`
- `text-gray-300`, `text-gray-600`, `text-gray-800`, `text-gray-900`

### Utilidades de Layout

- Spacing: `p-4`, `p-6`, `p-8`, `py-4`, `py-8`, `py-16`, `px-4`, `px-6`, `px-8`
- Margins: `mb-4`, `mb-6`, `mb-8`, `mb-12`
- Typography: `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`
- Weights: `font-medium`, `font-semibold`, `font-bold`

Esta paleta de colores garantiza consistencia visual en toda la aplicación y facilita el mantenimiento del código.
