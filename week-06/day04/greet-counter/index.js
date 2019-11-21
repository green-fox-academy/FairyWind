const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.set('view engine', 'ejs');

let count = 0;
app.get('/greeting', (req, res) => {
  let name = req.query.name ? req.query.name : 'Guest';
  count++;
  res.render('home', { name: name, count:count });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});