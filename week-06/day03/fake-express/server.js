const fakeExpress = require('./fake-express');
const app = fakeExpress;

const PORT = 3000;

app.get('/endpoint', (req, res) => {
  res.send('OK');
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})