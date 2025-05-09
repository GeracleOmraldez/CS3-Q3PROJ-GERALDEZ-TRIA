const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (e.g., CSS, JS, images)
app.use(express.static('public'));

// Form handling middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Setup Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
app.get('/', (req, res) => res.render('index'));
app.get('/form', (req, res) => res.render('form'));
app.get('/creators', (req, res) => res.render('creators'));
app.get('/gabgab', (req, res) => res.render('gabgab'));
app.get('/oracle', (req, res) => res.render('oracle'));
app.get('/myPlaylist', (req, res) => res.render('myPlaylist'));
app.get('/statistics', (req, res) => res.render('statistics'));

// FORM SUBMISSION
app.post('/submit', (req, res) => {
  const { fullname, username, userage, email, musicgenre, musicartist, whychoose } = req.body;
  res.render('results', { fullname, username, userage, email, musicgenre, musicartist, whychoose });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
