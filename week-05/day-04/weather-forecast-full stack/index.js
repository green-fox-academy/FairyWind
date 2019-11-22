const express = require('express');
const mysql = require('mysql');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use('/static', express.static('static'));

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'weather'
})


app.get('/', (req, res) => {
  const { cityName, location, temp, icon } = req.body;
  const queryString = `WITH summary AS (
    SELECT cityID, temp, icon, row_number() OVER (partition by cityID order by weatherID) as ranks
    From weather)
  SELECT cityName, location, temp, icon
    FROM city, summary
    where city.cityID = summary.cityID and summary.ranks = 1`;

  conn.query(queryString, [cityName, location, temp, icon], (err, result) => {
    if (err) {
      console.log('cannot query', err);
      return res.sendStatus(500);
    }
    res.render('dashboard', { result });
  })
});

app.get('/cities/:id', (req, res) => {
  let id = req.params.id;
  const { cityName, temp, icon, message } = req.body
  const queryString = `SELECT cityName, temp, icon, message 
  FROM weather, city
  WHERE weather.cityID = city.cityID AND city.cityID = ${id};`
  conn.query(queryString, [cityName, temp, icon, message], (err, result) => {
    if (err) {
      console.log('cannot query', err);
      return res.sendStatus(500);
    }
    res.render('detailedView', { result });
  })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});