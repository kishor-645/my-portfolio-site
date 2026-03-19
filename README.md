# Kishor Vaishanav - Portfolio Website

A modern, visually stunning portfolio for a Senior Cloud DevSecOps Engineer featuring futuristic animations, glassmorphism, and interactive architecture diagrams.

![Portfolio Preview](https://via.placeholder.com/1200x630/0f172a/00f5ff?text=Kishor+Vaishanav+Portfolio)

## Features

- **Dark Theme** - Deep dark blue (#0f172a) with neon accents
- **Glassmorphism** - Beautiful glass effects throughout
- **Animated Hero** - Three.js particle background with floating tech icons
- **Interactive Architecture Diagrams** - Animated SVG diagrams with flow lines
- **Framer Motion Animations** - Smooth scroll, hover effects, staggered reveals
- **Responsive Design** - Works on all screen sizes
- **SEO Optimized** - Proper metadata and OpenGraph tags

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **Language**: TypeScript

## Sections

1. **Hero** - Full-screen intro with animated background
2. **About Me** - Storytelling with key achievements
3. **Skills** - Categorized skill grid with progress bars
4. **Architecture** - Interactive architecture diagrams
5. **Experience** - Professional timeline
6. **Projects** - Featured work showcase
7. **Metrics** - Animated counters
8. **Contact** - Contact form with social links

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/kishor-portfolio.git
cd kishor-portfolio
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t kishor-portfolio .
```

### Run Container

```bash
docker run -p 3000:3000 kishor-portfolio
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Using Docker Compose

```bash
docker-compose up --build
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css         # Global styles + Tailwind
│   ├── layout.tsx          # Root layout with fonts, metadata
│   └── page.tsx            # Home page composing all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx       # Footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with particle background
│   │   ├── About.tsx        # About me section
│   │   ├── Skills.tsx       # Skills grid
│   │   ├── Architecture.tsx # Architecture showcase
│   │   ├── Experience.tsx   # Experience timeline
│   │   ├── Projects.tsx     # Projects section
│   │   ├── Metrics.tsx      # Metrics section
│   │   └── Contact.tsx      # Contact form
│   ├── ui/
│   │   ├── Button.tsx       # Custom button component
│   │   ├── Card.tsx         # Glassmorphism card
│   │   ├── Badge.tsx        # Badge component
│   │   └── GlowBorder.tsx   # Glow border effect
│   └── animation/
│       ├── ParticleBackground.tsx  # Three.js particles
│       └── AnimatedCounter.tsx     # Number counter
├── hooks/
│   └── useScrollAnimation.ts # Custom scroll hook
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── package.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Updating Personal Information

Edit the following files to customize:

- `app/page.tsx` - Main page composition
- `app/layout.tsx` - SEO metadata (title, description, keywords)
- `components/sections/About.tsx` - About section content
- `components/sections/Experience.tsx` - Work history
- `components/sections/Projects.tsx` - Project details
- `components/sections/Contact.tsx` - Contact information

### Changing Colors

Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    DEFAULT: '#0f172a',
    // ... other shades
  },
  accent: {
    cyan: '#00f5ff',
    purple: '#7c3aed',
    green: '#22c55e',
    blue: '#3b82f6',
  }
}
```

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add to `app/page.tsx`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project first:
```bash
npm run build
```

The built files are in `.next/` and can be deployed to any static hosting service.

## License

MIT License - feel free to use this for your own portfolio!

## Contact

- **Email**: kishor.vaishanav@gmail.com
- **LinkedIn**: https://linkedin.com/in/kishorvaishanav
- **GitHub**: https://github.com/kishorvaishanav

---

Built with Next.js, Tailwind CSS & Framer Motion
