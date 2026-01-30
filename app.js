const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Nanda Akbar | Portfolio' });
});

app.get('/work', (req, res) => {
    res.render('work', { title: 'Work Gallery' });
});

app.get('/work.html', (req, res) => {
    res.render('work', { title: 'Work Gallery' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/about.html', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/ptosm', (req, res) => {
    res.render('ptosm');
});

app.get('/ptos-sso', (req, res) => {
    res.render('ptos-sso');
});

// Handle 404
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
