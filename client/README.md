# Boaz Farms - Modern Agriculture Website

A modern, responsive, and SEO-optimized website for Boaz Farms, a leading organic agriculture and agribusiness company in Calabar, Nigeria.

## 🚀 Features

### Modern Design & UX

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### Performance & SEO

- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap
- **Fast Loading**: Optimized images, lazy loading, and performance monitoring
- **Search Engine Friendly**: Proper heading structure, alt tags, and semantic HTML
- **Social Media Ready**: Open Graph and Twitter Card meta tags

### Animations & Interactions

- **Framer Motion**: Smooth page transitions and scroll animations
- **Scroll Animations**: Elements animate as they come into view
- **Interactive Components**: Hover effects, button animations, and loading states
- **Parallax Effects**: Subtle background animations for visual appeal

### Technical Features

- **Next.js 14**: Latest React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **TypeScript Ready**: Type-safe development (can be easily converted)
- **Component Architecture**: Modular, reusable components
- **Performance Monitoring**: Built-in performance optimizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons (Font Awesome)
- **Fonts**: Inter & Poppins (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd boazfarms/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Connect GitHub repository and deploy
- **AWS Amplify**: Connect repository and configure build settings
- **DigitalOcean App Platform**: Connect repository and deploy

## 📁 Project Structure

```
client/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout with SEO
│   ├── page.jsx           # Home page
│   ├── globals.css        # Global styles
│   └── sitemap.js         # Dynamic sitemap
├── components/            # React components
│   ├── Navbar.jsx         # Navigation with animations
│   ├── HeroSection.jsx    # Hero section with parallax
│   ├── CoreOfferings.jsx  # Services grid with animations
│   ├── Contact.jsx        # Contact form and info
│   ├── Footer.jsx         # Footer with social links
│   ├── SEO.jsx            # SEO component
│   └── PerformanceOptimizer.jsx
├── public/                # Static assets
│   ├── images/           # Optimized images
│   ├── robots.txt        # SEO robots file
│   └── favicon.ico       # Site favicon
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Colors & Branding

Update the color scheme in `tailwind.config.mjs`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
        },
      },
    },
  },
};
```

### Content Updates

- **Company Info**: Update in `components/Contact.jsx` and `components/Footer.jsx`
- **Services**: Modify the offerings array in `components/CoreOfferings.jsx`
- **Images**: Replace images in `public/images/` directory
- **SEO**: Update meta information in `app/layout.js`

### Adding New Pages

1. Create new file in `app/` directory (e.g., `app/about/page.jsx`)
2. Add route to navigation in `components/Navbar.jsx`
3. Update sitemap in `app/sitemap.js`

## 📊 SEO Features

### Meta Tags

- Title and description optimization
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Viewport and theme color

### Structured Data

- Organization schema
- Contact information
- Service listings
- Social media profiles

### Performance

- Image optimization
- Lazy loading
- Font optimization
- Bundle size optimization

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Metrics

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: WebP format with fallbacks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions:

- Email: boazpartners@gmail.com
- Phone: (+234) 8146 797 467
- Website: [boazfarms.com](https://boazfarms.org)

---

**Made with ❤️ for sustainable agriculture in Nigeria**
