const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const posts = [
  'get up',
  'work',
  'go back to bed',
];

app.get('/', (req, res) => {
  res.render('posts', { posts });
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});