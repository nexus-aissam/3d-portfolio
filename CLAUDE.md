# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server:**

```bash
npm run dev
# or
yarn dev
```

**Build for production:**

```bash
npm run build
# or
yarn build
```

**Preview production build:**

```bash
npm run preview
# or
yarn preview
```

**Type checking:**

```bash
npm run check-types
# or
yarn check-types
```

**Install dependencies:**

```bash
npm install --legacy-peer-deps
# or
yarn install --legacy-peer-deps
```

Note: Use `--legacy-peer-deps` flag during installation due to peer dependency conflicts with Three.js ecosystem packages.

## Project Architecture

This is a modern 3D portfolio website built with React, TypeScript, and Three.js. The architecture follows a component-based structure optimized for 3D graphics and smooth animations.

### Core Technologies

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **3D Graphics:** Three.js with React Three Fiber (@react-three/fiber) and Drei (@react-three/drei)
- **Styling:** Tailwind CSS with custom gradients
- **Animations:** Framer Motion for smooth transitions
- **Email Service:** EmailJS for contact form functionality
- **Routing:** React Router DOM

### Key Architecture Patterns

**Component Structure:**

- `src/components/` - Main UI components (Hero, About, Contact, etc.)
- `src/components/canvas/` - Three.js 3D components (Computers, Earth, Stars, Ball)
- `src/hoc/` - Higher-order components including SectionWrapper for consistent section styling
- `src/utils/` - Utility functions for animations and common operations

**Data Management:**

- `src/constants/index.ts` - Centralized configuration for all static data (services, technologies, experiences, projects, testimonials)
- Asset management through `src/assets/index.ts` for organized imports

**Styling System:**

- Custom Tailwind configuration with defined gradients and animations
- Utility classes in `src/utils/lib.ts` for conditional styling
- Global styles in `src/index.css`

### 3D Implementation Details

- Uses React Three Fiber as React renderer for Three.js
- Drei provides utility components and helpers for common 3D patterns
- 3D models are loaded from `/public/` directory (desktop_pc/, planet/)
- Canvas components handle 3D scenes with proper camera controls and lighting

### Environment Configuration

Requires `.env` file with EmailJS configuration:

```js
VITE_APP_SERVICE_ID=your_service_id
VITE_APP_TEMPLATE_ID=your_template_id  
VITE_APP_EMAILJS_KEY=your_public_key
VITE_APP_EMAILJS_RECIEVER=your_email@domain.com
```

### Performance Considerations

- Three.js scenes are optimized for mobile devices
- Lazy loading implemented for 3D models
- Responsive design with mobile-first approach
- Framer Motion animations are performance-optimized

### SEO Implementation

- Uses `react-helmet-async` for dynamic meta tag management
- SEO component in `src/components/seo.tsx` handles all meta tags
- Includes Open Graph, Twitter Cards, and structured data (JSON-LD)
- Default meta tags set in `index.html` with React overrides
- Optimized for backend developer keywords and professional profile

### Development Notes

- TypeScript strict mode enabled
- All components use functional components with hooks
- Consistent export pattern through index files
- 3D models require specific file structure in public directory
- Mobile responsiveness is critical due to 3D rendering performance
- SEO works with pm2 serving static dist files
