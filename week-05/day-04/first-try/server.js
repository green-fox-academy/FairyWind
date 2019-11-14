const express = require('express');
const PORT = 3000;
const app = express();
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile('/public/index.html', { root: __dirname });
})
app.listen(PORT, () => console.log('App is listening'));