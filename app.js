const express = require('express');
const path = require('path');
const serverless = require('serverless-http');

const app = express();

// Use path.resolve to make sure it finds the folder in the Netlify environment
const viewsPath = path.resolve(__dirname, 'views');

app.set('view engine', 'ejs');
app.set('views', viewsPath);

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Your Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Nanda Akbar | Portfolio' });
});

app.get('/work', (req, res) => {
    res.render('work', { title: 'Work Gallery' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

app.get('/ptosm', (req, res) => res.render('ptosm'));
app.get('/ptos-sso', (req, res) => res.render('ptos-sso'));

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// EXPORT is key for Netlify
module.exports = app;
module.exports.handler = serverless(app);