const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = req.query.name ? req.query.name : 'Guest';
  res.render('home', { name: name });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});