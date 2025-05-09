const fs = require('fs');



const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => res.render('index'));
app.get('/form', (req, res) => res.render('form'));
app.get('/creators', (req, res) => res.render('creators'));
app.get('/gabgab', (req, res) => res.render('gabgab'));
app.get('/oracle', (req, res) => res.render('oracle'));
app.get('/myPlaylist', (req, res) => res.render('myPlaylist'));
app.get('/statistics', (req, res) => res.render('statistics'));

app.post('/create-account', (req, res) => {
  const newAccount = {
    fullName: req.body.fullname,
    username: req.body.username,
    birthday: req.body.birthday,
    email: req.body.email,
    age: Number(req.body.age),
    musicGenre: req.body.musicgenre,
    musicArtists: req.body.musicartist
  };

  app.post('/delete-account', (req, res) => {
  const { username } = req.body;
  const filePath = path.join(__dirname, 'data', 'users.json');
  const rawData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawData);

  jsonData.accounts = jsonData.accounts.filter(account => account.username !== username);

  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

  res.redirect('/');
});


  const filePath = path.join(__dirname, 'data', 'users.json');
  const rawData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawData);

  jsonData.accounts.push(newAccount);

  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

  res.render('results', newAccount);
});



app.post('/submit', (req, res) => {
  const { fullname, username, userage, email, musicgenre, musicartist, whychoose } = req.body;
  res.render('results', { fullname, username, userage, email, musicgenre, musicartist, whychoose });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
