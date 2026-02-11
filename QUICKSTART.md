# Quick Start Guide - Rang & Mall

Get your world-class website up and running in minutes!

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git (for version control)

## 🚀 Installation

### Step 1: Install Dependencies

```bash
cd Rang-Mall-main
npm install
```

This will install all required packages:
- Next.js 14.2.3
- React 18.2.0
- Framer Motion 12.34.0
- Lucide React 0.452.0
- Tailwind CSS 3.4.1
- TypeScript 5.3.3

### Step 2: Start Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:5555**

### Step 3: Explore the Website

Open your browser and navigate to `http://localhost:5555` to see your world-class website!

## 🎨 Key Features to Explore

### 1. **Hero Section**
- Animated floating orbs
- Gradient text effects
- Staggered content reveals
- Interactive statistics

### 2. **Ventures Grid**
- 5 venture cards with unique designs
- Hover effects with shine animations
- Gradient icon backgrounds
- Tag categorization

### 3. **Philosophy Section**
- 4 principle cards
- Icon-based visual hierarchy
- Inspirational quote
- Hover interactions

### 4. **Premium Navigation**
- Sticky header with backdrop blur
- Animated underlines
- Gradient logo
- Smooth transitions

### 5. **Comprehensive Footer**
- Multi-column layout
- Social media links
- Complete site navigation
- Responsive design

## 📁 Project Structure

```
Rang-Mall-main/
├── app/                    # Next.js app directory
│   ├── (marketing)/       # Marketing pages
│   │   ├── page.tsx      # Home page ✨
│   │   ├── ventures/     # Ventures overview
│   │   ├── careers/      # Careers page
│   │   └── governance/   # Company info
│   ├── (products)/       # Product pages
│   ├── workspace/        # Internal workspace
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles ✨
├── components/           # React components
│   ├── marketing/       # Marketing components ✨
│   ├── navigation/      # Header & Footer ✨
│   └── ui/             # UI components
└── lib/                # Utilities & data
```

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Format code (if using Prettier)
npx prettier --write .
```

## 📝 Making Changes

### Update Content

**Home Page Hero:**
Edit `/app/(marketing)/page.tsx`

**Ventures:**
Edit `/lib/ventures.ts` to modify venture data

**Company Info:**
Edit `/components/marketing/Philosophy.tsx`

### Customize Styling

**Colors:**
Edit `/app/globals.css` - modify CSS variables

**Typography:**
Change font imports in `/app/globals.css`

**Spacing:**
Adjust Tailwind classes in components

### Add New Pages

```bash
# Create new page
touch app/(marketing)/your-page/page.tsx
```

```tsx
// app/(marketing)/your-page/page.tsx
export default function YourPage() {
  return (
    <div>
      <h1>Your New Page</h1>
    </div>
  )
}
```

## 🎯 Common Tasks

### Adding a New Venture

1. Edit `/lib/ventures.ts`:
```typescript
{
  name: 'New Venture',
  description: 'Your description',
  href: '/new-venture',
  icon: YourIcon,
  gradient: 'from-blue-500 to-cyan-500',
  tags: ['Tag1', 'Tag2']
}
```

2. Create the venture page:
```bash
mkdir -p app/(products)/new-venture
touch app/(products)/new-venture/page.tsx
```

### Changing Brand Colors

Edit `/app/globals.css`:
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
  --color-accent: #your-color;
}
```

### Adding Analytics

1. Install package:
```bash
npm install @vercel/analytics
```

2. Add to layout:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 5555
npx kill-port 5555

# Or use different port
npm run dev -- -p 3000
```

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### TypeScript Errors

```bash
# Check types
npx tsc --noEmit

# Skip type checking (not recommended for production)
npm run build -- --no-type-check
```

### Animation Not Working

Ensure Framer Motion is installed:
```bash
npm install framer-motion
```

## 📚 Additional Resources

- **README.md** - Comprehensive project documentation
- **DESIGN_SYSTEM.md** - Complete design system guide
- **DEPLOYMENT.md** - Deployment instructions
- **[Next.js Docs](https://nextjs.org/docs)** - Framework documentation
- **[Tailwind CSS](https://tailwindcss.com)** - Styling reference
- **[Framer Motion](https://www.framer.com/motion)** - Animation library

## 🎉 What's Next?

1. ✅ Explore the website locally
2. ✅ Customize content and styling
3. ✅ Add your own ventures/products
4. ✅ Configure analytics
5. ✅ Deploy to production (see DEPLOYMENT.md)

## 💡 Pro Tips

- Use hot reload - changes appear instantly
- Check browser console for errors
- Test on mobile using device toolbar (F12)
- Use React DevTools for component debugging
- Commit changes regularly to Git

## 🆘 Need Help?

- Check documentation files
- Review component code for examples
- Search Next.js documentation
- Check GitHub issues

---

**Happy Building! 🚀**

Built with ❤️ by Rang & Mall
