const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'poll'
});


app.get('/api/poll', (req, res) => {
  const queryString = `SELECT * FROM options`;
  conn.query(queryString, (err, result) => {
    if (err) {
      return res.status(500).send('cannot query');
    }
    res.type('application/json');
    res.status(200).json({
      "question": "Where should we go for dinner?",
      result
    });
  })
});

app.post('/api/vote/:optionId', (req, res) => {
  let optionId = req.params.optionId;
  const insertString = `UPDATE options SET votes = votes + 1 WHERE id = ${optionId} `;
  conn.query(insertString, (err) => {
    if (err) {
      return res.status(500).send('cannot insert');
    }
    const queryString = `SELECT * FROM options`
    conn.query(queryString, (err, result) => {
      if (err) {
        return res.status(500).send('cannot query');
      }
      res.set('Content-Type', 'application/json');
      res.status(201).json(result);
    })
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});