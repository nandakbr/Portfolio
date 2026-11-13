const express = require('express');
const path = require('path');
const ejs = require('ejs');
const serverless = require('serverless-http');

const app = express();

// Use path.resolve to make sure it finds the folder in the Netlify environment
// Express can accept an array of paths for views to handle different environments
app.set('views', [
    path.join(__dirname, 'views'),
    path.join(process.cwd(), 'views'),
    path.resolve(__dirname, 'views')
]);
app.set('view engine', 'ejs');

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Your Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Nanda Akbar | Portfolio' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/ptosm', (req, res) => res.render('ptosm'));
app.get('/ptosm-design-system', (req, res) => res.render('ptosm-design-system'));
app.get('/ptos-sso', (req, res) => res.render('ptos-sso'));
app.get('/unreleased-tos', (req, res) => res.render('unreleased-tos'));
app.get('/bea-cukai', (req, res) => {
    const afterGallery = [
        { title: 'Monitoring', image: '/assets/bc_after_monitoring.webp', tag: 'After' },
        { title: 'Monitoring - Tonase', image: '/assets/bc_after_monitoring_tonase.webp', tag: 'After' },
        { title: 'Transaksi', image: '/assets/bc_after_transaksi.webp', tag: 'After' },
        { title: 'Atensi P2', image: '/assets/bc_after_atensi_p2.webp', tag: 'After' },
    ];
    const beforeGallery = [
        { title: 'Monitoring BC (Before)', image: '/assets/bc_before_1.webp', tag: 'Before' },
        { title: 'Inventori Operasional (Before)', image: '/assets/bc_before_2.webp', tag: 'Before' },
        { title: 'Transaksi (Before)', image: '/assets/bc_before_3.webp', tag: 'Before' },
        { title: 'Transaksi Ops (Before)', image: '/assets/bc_before_4.webp', tag: 'Before' },
        { title: 'Atensi P2 (Before)', image: '/assets/bc_before_5.webp', tag: 'Before' },
        { title: 'Sinkron Data (Before)', image: '/assets/bc_before_6.webp', tag: 'Before' },
        { title: 'Inventori BL (Before)', image: '/assets/bc_before_7.webp', tag: 'Before' },
        { title: 'Truck Onterminal (Before)', image: '/assets/bc_before_8.webp', tag: 'Before' },
        { title: 'Histori (Before)', image: '/assets/bc_before_9.webp', tag: 'Before' },
    ];
    const allGallery = [...afterGallery, ...beforeGallery];
    const indexed = allGallery.map((item, i) => ({ ...item, i }));
    const previewIndices = [0, 1, 4, 5]; // 2 After + 2 Before, shown by default
    res.render('bea-cukai', {
        afterGallery,
        allGallery,
        // Preview = first 2 After + first 2 Before, each carrying its real
        // index into allGallery so openLightbox(i) still opens the right
        // image/thumbnail-strip position once "View All" expands.
        previewGallery: indexed.filter((item) => previewIndices.includes(item.i)),
        restGallery: indexed.filter((item) => !previewIndices.includes(item.i)),
    });
});

// PTOS-M UI Library: linked from index (UI/UX folder), opens in the iframe window
// on desktop and as a full page on mobile, same as the other case studies.
app.get('/ptosm-ui-lib', (req, res) => res.render('ptosm-ui-lib'));

// Old mobile-only packaging detail pages, superseded by the lightbox-expand
// grid (openImageExpand) now used consistently across Packaging/Social —
// redirect any bookmarked/shared links to home instead of 404ing.
app.get(['/packaging/puntang', '/packaging/gayo-red-bourbon', '/packaging/arjuna', '/packaging/blue-mountain'], (req, res) => res.redirect(301, '/'));

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Gaspol bre! Server nyala di http://localhost:${PORT}`);
    });
}
// EXPORT is key for Netlify
module.exports = app;
module.exports.handler = serverless(app);