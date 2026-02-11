# Rang & Mall Design System

A comprehensive guide to the visual language, components, and design principles powering the Rang & Mall ecosystem.

## 🎨 Color System

### Primary Palette

```css
/* Slate - Primary brand colors */
--slate-50:  #f8fafc;
--slate-100: #f1f5f9;
--slate-200: #e2e8f0;
--slate-300: #cbd5e1;
--slate-400: #94a3b8;
--slate-500: #64748b;
--slate-600: #475569;
--slate-700: #334155;
--slate-800: #1e293b;
--slate-900: #0f172a;
```

### Accent Colors

```css
/* Blue - Primary accent */
--blue-500: #3b82f6;
--blue-600: #2563eb;

/* Purple - Secondary accent */
--purple-500: #a855f7;
--purple-600: #9333ea;

/* Emerald - Success states */
--emerald-500: #10b981;
--emerald-600: #059669;

/* Red/Orange - Alerts */
--red-500: #ef4444;
--orange-500: #f97316;
```

### Gradients

```css
/* Primary Gradient */
.gradient-primary {
  background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%);
}

/* Text Gradient */
.gradient-text-primary {
  background: linear-gradient(to bottom right, #0f172a, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Accent Gradient */
.gradient-accent {
  background: linear-gradient(to right, #3b82f6, #9333ea, #ec4899);
}
```

### Color Usage Guidelines

| Use Case | Color | Example |
|----------|-------|---------|
| Primary Text | Slate-900 | Headings, important content |
| Secondary Text | Slate-600 | Body text, descriptions |
| Tertiary Text | Slate-500 | Captions, metadata |
| Interactive Elements | Slate-900 | Buttons, links |
| Borders | Slate-200 | Dividers, card borders |
| Backgrounds | Slate-50/White | Page backgrounds, cards |
| Accents | Blue-600 → Purple-600 | CTAs, highlights |

## 📝 Typography

### Font Families

```css
/* Headings */
font-family: 'Sora', 'Inter', ui-sans-serif, system-ui, sans-serif;

/* Body Text */
font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;

/* Monospace (Code) */
font-family: 'SF Mono', 'Monaco', 'Courier New', monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| H1 (Hero) | 96px (6rem) | 700-800 | 0.95 | -2% |
| H1 (Page) | 72px (4.5rem) | 700 | 1.0 | -2% |
| H2 | 60px (3.75rem) | 700 | 1.0 | -2% |
| H3 | 48px (3rem) | 700 | 1.1 | -1% |
| H4 | 36px (2.25rem) | 600 | 1.2 | -1% |
| H5 | 24px (1.5rem) | 600 | 1.3 | 0% |
| H6 | 20px (1.25rem) | 600 | 1.3 | 0% |
| Body Large | 24px (1.5rem) | 400 | 1.5 | 0% |
| Body | 18px (1.125rem) | 400 | 1.6 | 0% |
| Body Small | 16px (1rem) | 400 | 1.5 | 0% |
| Caption | 14px (0.875rem) | 500 | 1.4 | 0% |
| Label | 12px (0.75rem) | 500 | 1.3 | 2% |

### Typography Examples

```tsx
// Hero Heading
<h1 className="text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight">
  Rang & Mall
</h1>

// Section Heading
<h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-transparent">
  Our Philosophy
</h2>

// Body Text
<p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
  Your content here
</p>
```

## 🎭 Spacing System

### Scale

```css
/* Base: 4px */
--spacing-1:  4px;   /* 0.25rem */
--spacing-2:  8px;   /* 0.5rem */
--spacing-3:  12px;  /* 0.75rem */
--spacing-4:  16px;  /* 1rem */
--spacing-6:  24px;  /* 1.5rem */
--spacing-8:  32px;  /* 2rem */
--spacing-10: 40px;  /* 2.5rem */
--spacing-12: 48px;  /* 3rem */
--spacing-16: 64px;  /* 4rem */
--spacing-20: 80px;  /* 5rem */
--spacing-24: 96px;  /* 6rem */
--spacing-32: 128px; /* 8rem */
```

### Usage Guidelines

- **Component Padding**: 24px (spacing-6) to 32px (spacing-8)
- **Section Spacing**: 96px (spacing-24) to 128px (spacing-32)
- **Card Gap**: 24px (spacing-6)
- **Text Margin**: 16px (spacing-4) to 24px (spacing-6)

## 🔲 Layout

### Container

```tsx
// Max-width: 1280px
<Container className="max-w-screen-xl">
  {/* Content */}
</Container>

// Responsive padding
// Mobile: 24px
// Tablet+: 40px
```

### Grid System

```tsx
// 2 Column
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// 3 Column
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 4 Column
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
```

## 🎬 Animation Guidelines

### Timing Functions

```css
/* Fast - Micro-interactions */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

/* Medium - Content reveals */
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

/* Slow - Page transitions */
transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

/* Bounce - Playful interactions */
transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Animation Delays

Use staggered animations for lists/grids:

```tsx
// Stagger by 0.1s
{items.map((item, i) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
  >
    {item}
  </motion.div>
))}
```

### Common Animations

```tsx
// Fade In Up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
/>

// Scale In
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
/>

// Slide In Right
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
/>
```

## 🎯 Components

### Button Styles

```tsx
// Primary Button
<button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:shadow-2xl hover:-translate-y-0.5 transition-all">
  Button Text
</button>

// Secondary Button
<button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg hover:-translate-y-0.5 transition-all">
  Button Text
</button>

// Gradient Button (Special CTA)
<button className="group relative px-8 py-4 bg-slate-900 text-white rounded-xl font-medium overflow-hidden">
  <span className="relative z-10">Button Text</span>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
</button>
```

### Card Styles

```tsx
// Standard Card
<div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-slate-300 transition-all">
  {/* Content */}
</div>

// Gradient Hover Card
<div className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-2xl transition-all">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
  <div className="relative z-10">
    {/* Content */}
  </div>
</div>
```

### Badge Styles

```tsx
// Info Badge
<span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-700">
  Label
</span>

// Status Badge (with pulse)
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/60">
  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
  <span className="text-sm font-medium text-slate-700">Active</span>
</div>
```

## 🌈 Effects

### Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Gradient Overlays

```tsx
// Hover gradient overlay
<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-[0.03] transition-opacity" />
```

### Shine Effect

```tsx
// Shine on hover
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
</div>
```

### Box Shadows

```css
/* Subtle */
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);

/* Medium */
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);

/* Large */
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);

/* Extra Large */
box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);

/* Colored (for emphasis) */
box-shadow: 0 20px 25px -5px rgb(59 130 246 / 0.2);
```

## 📐 Borders & Radius

```css
/* Border Radius */
--radius-sm:  0.375rem;  /* 6px */
--radius-md:  0.5rem;    /* 8px */
--radius-lg:  0.75rem;   /* 12px */
--radius-xl:  1rem;      /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Pill shape */

/* Border Width */
--border-1: 1px;
--border-2: 2px;
--border-4: 4px;
```

## ✨ Best Practices

### Do's ✅

- Use consistent spacing from the spacing system
- Apply gradient text to headings for visual hierarchy
- Implement hover states on all interactive elements
- Use backdrop blur for layered UI elements
- Stagger animations for lists and grids
- Maintain color contrast ratios (WCAG AA minimum)
- Use semantic HTML elements

### Don'ts ❌

- Don't use more than 3 colors in a single component
- Avoid mixing animation styles (keep consistent easing)
- Don't make hover effects too aggressive (keep under 0.5s)
- Avoid using pure black (#000000)
- Don't use more than 2 font families
- Avoid centering large blocks of text
- Don't animate on scroll if it causes layout shift

## 🎨 Design Tokens

```typescript
// colors.ts
export const colors = {
  slate: {
    50: '#f8fafc',
    // ... rest of slate palette
    900: '#0f172a',
  },
  accent: {
    blue: '#2563eb',
    purple: '#9333ea',
  },
}

// spacing.ts
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
}
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First */
/* Mobile: base styles */
/* Tablet: 768px */
@media (min-width: 768px) { }

/* Desktop: 1024px */
@media (min-width: 1024px) { }

/* Large Desktop: 1280px */
@media (min-width: 1280px) { }
```

### Mobile Considerations

- Touch targets minimum 44x44px
- Reduce font sizes by 15-20% on mobile
- Stack layouts vertically
- Simplify navigation
- Optimize image sizes

---

**Maintained by the Rang & Mall Design Team** 🎨
