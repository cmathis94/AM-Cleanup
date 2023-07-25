const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/assets'));
app.use(express.urlencoded({ extended: true }));
// app.use(secure);

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`On port ${port}`);
});
