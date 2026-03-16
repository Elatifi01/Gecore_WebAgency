# GECORE 360 - Modern Web Agency Website

A modern, clean, and highly readable multi-page website for GECORE 360 web agency built with React, Tailwind CSS, and Framer Motion.

## 🎨 Brand Guidelines

- **Primary Colors:**
  - Green: `#6aba41`
  - Blue: `#3585b6`
- **Typography:**
  - Headings: Montserrat (Bold, Semibold)
  - Body: Roboto (Regular, Medium)
- **Gradients:** Linear gradient from Blue to Green for CTAs and accents

## ✨ Features

- **Modern UI/UX:** Clean, professional design with high readability
- **Responsive Design:** Fully responsive across all devices
- **Smooth Animations:** Subtle Framer Motion animations for professional feel
- **Multiple Pages:**
  - Home - Hero section, services preview, client logos
  - About Us - Mission, vision, team grid, company values
  - Services - Detailed service offerings with feature lists
  - Portfolio - Filterable project gallery with hover effects
  - Contact - Contact form with validation and info cards

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the repository:

   ```bash
   cd "c:\Users\Haitam\Desktop\Gecore"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
gecore-360/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with mobile menu
│   │   └── Footer.jsx       # Footer with links and social icons
│   ├── pages/
│   │   ├── Home.jsx         # Home page with hero and previews
│   │   ├── About.jsx        # About us with team and values
│   │   ├── Services.jsx     # Services grid with details
│   │   ├── Portfolio.jsx    # Filterable portfolio gallery
│   │   └── Contact.jsx      # Contact form and information
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and Tailwind
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.js           # Vite configuration
```

## 🎯 Key Technologies

- **React 18** - UI library
- **React Router 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Fast build tool and dev server

## 🎨 Design Philosophy

- **White Space:** Generous spacing for visual clarity
- **Typography Hierarchy:** Clear distinction between headings and body text
- **Subtle Animations:** Professional hover effects and scroll animations
- **High Contrast:** Ensuring readability with proper color contrasts
- **Grid Layouts:** Structured, organized content presentation

## 📝 Customization

### Colors

Edit `tailwind.config.js` to customize the brand colors:

```javascript
colors: {
  primary: {
    green: '#6aba41',
    blue: '#3585b6',
  },
}
```

### Fonts

Fonts are loaded from Google Fonts in `index.html`. To change fonts, update the Google Fonts link and `tailwind.config.js`.

### Content

All page content is in the respective page components under `src/pages/`. Edit the JSX directly to update text, images, and structure.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2026 GECORE 360. All rights reserved.

## 🤝 Support

For support or inquiries, contact: info@gecore360.com

---

Built with ❤️ by GECORE 360
