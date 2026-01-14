# Nanda Akbar - Portfolio Website

A modern, responsive portfolio website built with **Node.js**, **Express.js**, and **EJS** templating engine. Features a beautiful dark mode toggle with persistent storage, smooth animations, and a fully responsive design using Tailwind CSS.

## Project Structure

```
nanda/
├── app.js                 # Express server configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
├── .gitignore           # Git ignore file
│
├── views/               # EJS templates
│   ├── index.ejs       # Home page
│   ├── work.ejs        # Work gallery page
│   ├── about.ejs       # About page
│   ├── 404.ejs         # 404 error page
│   └── layout.ejs      # Shared layout (optional)
│
├── public/             # Static files (served by Express)
│   └── assets/         # Images and media files
│       ├── Main.png
│       ├── Profile.png
│       ├── ui1.png
│       ├── ui2.png
│       ├── package1.png
│       ├── package2.png
│       ├── package3.png
│       ├── social1.png
│       ├── social2.png
│       ├── social3.png
│       ├── social4.png
│       ├── social5.png
│       ├── social6.png
│       ├── figma.png
│       ├── ai.png
│       └── ps.png
│
├── routes/             # Route handlers (optional, for scalability)
├── index.html          # Original static HTML files (can be deleted)
├── work.html
└── about.html
```

## Features

- **Express.js Server** - Fast and lightweight Node.js framework
- **EJS Templating** - Dynamic template rendering
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dark Mode** - Toggle with localStorage persistence
- **Smooth Animations** - Intersection Observer for scroll animations
- **Asset Management** - Static file serving from public directory
- **SEO Friendly** - Proper meta tags and semantic HTML

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Copy assets to public folder:**
   - Ensure all images from `assets/` are in `public/assets/`
   - The Express server is configured to serve files from the `public` directory

3. **Start the server:**

   **Development mode (with auto-reload):**
   ```bash
   npm run dev
   ```
   
   **Production mode:**
   ```bash
   npm start
   ```

4. **Access the website:**
   - Open your browser and navigate to `http://localhost:3000`

## Routes

- `/` - Home page
- `/work` - Work gallery page
- `/about` - About me page
- `/work.html` - Work page (legacy route support)
- `/about.html` - About page (legacy route support)

## Dependencies

- **express** - Web application framework
- **ejs** - Templating engine
- **tailwindcss** - CDN-based utility-first CSS framework

## Dev Dependencies

- **nodemon** - Monitor for changes and auto-restart

## Key Improvements from Static HTML

✅ **Dynamic Rendering** - Pages rendered server-side with EJS
✅ **Code Reusability** - Shared header, footer, and styles
✅ **Better Maintainability** - Centralized configuration
✅ **Route Management** - Cleaner URL structure with Express routes
✅ **Asset Organization** - Static files in dedicated public directory
✅ **Future Scalability** - Easy to add databases, APIs, and features
✅ **Environment Configuration** - Ready for environment variables

## Dark Mode

The dark mode toggle is persistent thanks to localStorage:
- Preference is saved when toggled
- Automatically restored on page load
- Works across all pages in the application

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Sizes and Performance

- Fully responsive design
- CDN-based Tailwind CSS
- Optimized image assets
- Smooth animations using CSS and JavaScript

## Future Enhancements

Possible additions when scaling:
- Add database for projects/portfolio items
- Implement contact form with email service
- Add blog functionality
- Implement SEO metadata management
- Add analytics integration
- Authentication for admin panel
- Progressive Web App (PWA) features

## Environment Variables

Create a `.env` file if needed:
```
PORT=3000
NODE_ENV=development
```

## Troubleshooting

**Issue: Assets not loading**
- Solution: Ensure `public/assets/` folder exists with all image files

**Issue: Port 3000 already in use**
- Solution: Use a different port: `PORT=3001 npm start`

**Issue: EJS template errors**
- Solution: Check file paths in templates - use `/` for absolute paths from public root

## License

© 2026 Nanda Akbar. Built with passion and precision.

## Contact

- Email: nandaakbar70@gmail.com
- LinkedIn: https://www.linkedin.com/in/nandakbr
- Instagram: https://www.instagram.com/nandakbr_/

---

**Migration completed from static HTML to Express.js + EJS**
All original design and functionality preserved. Ready for production!
