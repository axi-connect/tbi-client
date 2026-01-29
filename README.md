# The Brothers Inc (TBI) - Developer Manual

> **Vision**: Desarrollar una experiencia web cinematográfica, premium y autoritaria para TBI, el estudio de música urbana líder en Bogotá. El código debe reflejar la misma calidad que la producción musical del estudio: robusto, elegante y escalable.

---

## 1. Stack Tecnológico

*   **Core Framework**: [Next.js 15+](https://nextjs.org/) (App Router).
*   **Lenguaje**: TypeScript (Estricto).
*   **Estilizado**: [Tailwind CSS v4](https://tailwindcss.com/).
*   **Iconografía**: [HeroIcons](https://heroicons.com/) (`@heroicons/react`).
*   **Fuentes**: Inter (Cuerpo/Display) y Playfair Display (Acentos/Lujo) vía `next/font`.

---

## 2. Arquitectura de Software

Seguimos una **Arquitectura Limpia (Clean Architecture)** adaptada al frontend con un enfoque de **Vertical Slices (Feature-based)**. Esto nos permite escalar funcionalidades sin acoplar código innecesariamente.

### Diagrama Arquitectónico

```mermaid
graph TD
    User[Usuario] --> View[App Router (src/app)]
    
    subgraph "src / Capas de la Aplicación"
        View --> Modules[Módulos / Features]
        View --> Shared[Shared Framework]
        
        Modules --> Components[Componentes de Módulo]
        Modules --> Hooks[Hooks Específicos]
        
        Shared --> UI[UI Kit (Atomos)]
        Shared --> Layout[Layout Global]
        Shared --> Core[Core Logic / Utils]
    end
    
    style User fill:#bf8f3b,color:#000
    style View fill:#1e1a14,stroke:#bf8f3b,color:#fff
    style Modules fill:#2e281e,stroke:#fff,color:#fff
    style Shared fill:#2e281e,stroke:#fff,color:#fff
```

### Estructura de Directorios

La estructura refleja la separación de responsabilidades:

```bash
src/
├── app/                  # ENRUTAMIENTO (App Router)
│   ├── layout.tsx        # Layout Principal (Fuentes, Metadata, Providers)
│   ├── page.tsx          # Home Page
│   └── merch/            # Ruta /merch
│       └── page.tsx
│
├── core/                 # LÓGICA DE NEGOCIO (Agnóstica a la UI)
│   ├── config/           # Constantes globales
│   ├── types/            # Definiciones de tipos compartidos
│   └── utils/            # Funciones puras
│
├── modules/              # VERTICAL SLICES (Funcionalidades)
│   ├── home/             # Módulo Home
│   │   └── components/   # Hero.tsx, Features.tsx
│   └── merch/            # Módulo Merch
│       └── components/   # MerchSection.tsx, BookingSection.tsx
│
└── shared/               # CAPA COMPARTIDA (Cross-Cutting)
    ├── components/
    │   ├── ui/           # Componentes base (Button, Input)
    │   ├── layout/       # Navbar, Footer, DynamicBackground
    │   └── features/     # Componentes complejos reutilizables (AudioPlayer)
    └── hooks/            # Hooks globales
```

---

## 3. Normas de Desarrollo

### Convenciones de Nomenclatura (Naming Conventions)

Para mantener la consistencia, aplicamos las siguientes reglas estrictas:

| Elemento | Convención | Ejemplo |
| :--- | :--- | :--- |
| **Componentes React** | `PascalCase` | `Navbar.tsx`, `HeroSection.tsx` |
| **Directorios (Módulos)** | `kebab-case` | `audio-player`, `merch-store` |
| **Directorios (Componentes)** | `PascalCase` (Si agrupan un componente complejo) | `FloatingDock/` |
| **Funciones/Hooks** | `camelCase` | `useScrollPosition`, `formatCurrency` |
| **Clases CSS** | Utility-first (Tailwind) | `flex flex-col items-center` |

> **Regla de Oro**: Los archivos que no son componentes deben separarse o usar tipología `nombre-modulo` (kebab-case).

### Idioma

*   **Código (Variables, Funciones, Comentarios técnicos)**: Inglés (`const isOpen`, `function handleSubmit`).
*   **Contenidos (Textos UI, SEO)**: Español Neutro / Colombia.

### Gestión de Iconos

Utilizamos exclusivamente **HeroIcons** para asegurar consistencia SVG y rendimiento (Zero Runtime CSS in JS).
*   ❌ No instalar librerías de fuentes de iconos pesadas (FontAwesome, Material Symbols webfonts).
*   ✅ Importar individualmente: `import { Bars3Icon } from "@heroicons/react/24/outline";`

---

## 4. Sistema de Diseño (Design System)

La estética es **Premium, Cinematográfica, Oscura y Autoritaria**.

### Paleta de Colores (`globals.css` / Tailwind Theme)

*   **Primary (Gold)**: `#bf8f3b` (Lujo, acento).
*   **Background Dark**: `#0A0A0A` (Fondo principal).
*   **Surface Dark**: `#1e1a14` (Tarjetas, secciones secundarias).
*   **Text Muted**: `#bfb29c` (Texto secundario, no usar gris genérico).

### Efectos Visuales Clave

1.  **Film Grain**: Textura de grano de película superpuesta en el `layout` para dar tacto orgánico.
2.  **Vignette**: Oscurecimiento radial en los bordes para centrar la atención.
3.  **Glassmorphism**: Uso de `backdrop-blur` y bordes semitransparentes en elementos flotantes (Navbar, Dock).

---

## 5. Workflow de Desarrollo (Cómo crear una nueva feature)

Para añadir una nueva funcionalidad (ej. "Galería de Artistas"), sigue el enfoque **Vertical Slice**:

1.  **Analizar**: ¿Es una funcionalidad aislada? -> Crea un módulo. ¿Es reutilizable? -> Crea un shared component.
2.  **Modulo**: Crea `src/modules/artists/`.
3.  **Componentes**: Crea `src/modules/artists/components/ArtistGrid.tsx`.
4.  **Página**: Crea la ruta en `src/app/artists/page.tsx` e importa el componente del módulo.
5.  **Integración**: Si necesitas componentes compartidos (Botones), impórtalos de `src/shared`.

---

> _"El código debe ser tan limpio como la arquitectura, y la experiencia tan inmersiva como la música."_ - TBI Dev Team
