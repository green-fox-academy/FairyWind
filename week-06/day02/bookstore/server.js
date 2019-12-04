const express = require('express');
const mysql = require('mysql');

const PORT = 8080;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use('/static', express.static('static'));

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'week06'
})

app.get('/bookstore/titles', (req, res) => {
  const { title } = req.body;
  const queryString = `SELECT book_name as title FROM book_mast`

  conn.query(queryString, title, (err, result) => {
    if (err) {
      console.log('cannot query', err);
      return res.sendStatus(500);
    }
    res.render('titles', { result });
  })
})

app.get('/bookstore/fulldata', (req, res) => {
  const { title, author, category, publisher, price } = req.body;
  let queryString = `SELECT book_name as title, aut_name as author, cate_descrip as category, pub_name as publisher, book_price as price
  FROM book_mast, author, category, publisher
  where book_mast.aut_id = author.aut_id and book_mast.cate_id = category.cate_id and book_mast.pub_id = publisher.pub_id`
  let fCategory = req.query.category;
  let fPublisher = req.query.publisher;
  let fPlt = req.query.plt;
  let fPgt = req.query.pgt;
  if (fCategory) {
    queryString = `${queryString} and category.cate_descrip = "${fCategory}"`;
  }
  if (fPublisher) {
    queryString = `${queryString} and publisher.pub_name = "${fPublisher}"`;
  }
  if (fPlt) {
    queryString = `${queryString} and book_mast.book_price < ${fPlt}`;
  }
  if (fPgt) {
    queryString = `${queryString} and book_mast.book_price > ${fPgt}`;
  }
  // console.log(queryString);
  conn.query(queryString, [title, author, category, publisher, price], (err, result) => {
    if (err) {
      console.log('cannot query', err);
      return res.sendStatus(500);
    }
    res.render('fullData', { result });
  })
})



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});