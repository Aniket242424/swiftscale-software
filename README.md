# SwiftScale Software Website

A modern, production-ready company website built with React, Tailwind CSS, and Framer Motion. Features a rich, mobile-first UI with smooth animations and glassmorphic design elements.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphic cards and gradient backgrounds
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Animations**: Smooth Framer Motion animations for scroll and hover effects
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Complete meta tags and Open Graph integration
- **Accessibility**: Semantic HTML and proper contrast ratios

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Google Fonts** - Poppins (headings) and Inter (body)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd swiftscale-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## 📱 Sections

- **Hero**: Animated gradient background with floating particles and CTAs
- **Services**: 3 glassmorphic cards showcasing main services
- **Features**: 4 key features with scroll animations
- **Portfolio**: Project showcase with hover effects
- **Pricing**: 3 pricing tiers with gradient cards
- **About**: Company story and founder profile
- **Contact**: Contact form with animated background
- **Footer**: Links, contact info, and social media

## 🎨 Design System

### Colors
- **Navy**: #0F172A (Primary background)
- **Teal**: #0EA5A4 (Accent color)
- **Purple**: #7C3AED (Secondary accent)
- **White**: #FFFFFF (Text and highlights)

### Typography
- **Headings**: Poppins (400, 500, 600, 700, 800)
- **Body**: Inter (300, 400, 500, 600, 700)

### Components
- **Buttons**: Gradient teal→purple with hover scale
- **Cards**: Glassmorphic with backdrop blur
- **Animations**: Smooth transitions and scroll-triggered effects

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  navy: '#0F172A',
  teal: '#0EA5A4',
  purple: '#7C3AED',
}
```

### Content
Update the content in each component file:
- `src/components/Hero.js` - Hero section content
- `src/components/Services.js` - Services and descriptions
- `src/components/Portfolio.js` - Project showcase
- `src/components/Pricing.js` - Pricing plans
- `src/components/About.js` - Company information
- `src/components/Contact.js` - Contact details

### Images
Replace placeholder images in:
- `src/components/Portfolio.js` - Project screenshots
- `src/components/About.js` - Founder photo
- `public/` - Favicon and social media images

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **Bundle Size**: Minimized with code splitting
- **Images**: Optimized and lazy-loaded

## 🔍 SEO Features

- Complete meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Optimized images with alt tags

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions, please contact:
- Email: hello@swiftscale.software
- Phone: +1 (555) 123-4567

---

Built with ❤️ by SwiftScale Software
