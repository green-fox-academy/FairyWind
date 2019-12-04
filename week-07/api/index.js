const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
//require('dotenv').config();

//const PORT = process.env.PORT;
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

const conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'reddit'
});

app.post('/api/login', (req, res) => {
  if (req.accepts('application/json')) {
    let user = req.body;
    const queryString = `SELECT * FROM reddit.user WHERE username = "${user.username}" AND password = "${user.password}"`;
    conn.query(queryString, (err, result) => {
      result = result[0];
      if (err) {
        return res.status(500).send('cannot query');
      }
      if (!result.uid) {
        return res.status(401).send('wrong username or password');
      }
      res.set('Content-Type', 'application/json');
      res.status(200).json(result.username);
    })
  } else {
    res.status(406).send('Not acceptable');
  }
});


app.post('/api/signin', (req, res) => {
  if (req.accepts('application/json')) {
    let user = req.body;
    const insertString = `INSERT INTO reddit.user (username, password) VALUES ("${user.username}","${user.password}")`;
    const queryString = `SELECT username FROM reddit.user WHERE username = "${user.username}"`;
    conn.query(insertString, (err) => {
      if (err) {
        return res.status(500).send('cannot insert');
      }
      conn.query(queryString, (err, result) => {
        if (err) {
          return res.status(500).send('cannot query');
        }
        res.set('Content-Type', 'application/json');
        res.status(200).json(result[0].username);
      })
    })
  } else {
    res.status(406).send('Not acceptable');
  }
});

app.get('/api/posts', (req, res) => {
  if (req.accepts('application/json')) {
    const queryString = `SELECT * FROM posts`;
    conn.query(queryString, (err, result) => {
      if (err) {
        return res.status(500).send('cannot query');
      }
      res.type('application/json');
      res.status(200).json(result);
    })
  } else {
    res.status(406).send('Not acceptable');
  }
});

app.post('/api/posts', (req, res) => {
  if (req.accepts('application/json') && req.is('application/json')) {
    let post = req.body;
    const insertString = `INSERT INTO posts (title, url, timestamp, score, owner, vote) VALUES ("${post.title}", "${post.url}", ${Date.now()}, 0, "${post.owner}", 0)`;
    conn.query(insertString, (err) => {
      if (err) {
        return res.status(500).send('cannot insert');
      }
      const queryString = `SELECT * FROM posts ORDER BY id DESC LIMIT 1`
      conn.query(queryString, (err, result) => {
        if (err) {
          return res.status(500).send('cannot query');
        }
        res.set('Content-Type', 'application/json');
        res.status(201).json(result);
      })
    })
  } else {
    res.status(406).send('Not acceptable');
  }
});

app.put('/api/posts/:id/:vote', (req, res) => {
  if (req.accepts('application/json')) {
    const id = req.params.id;
    const vote = req.params.vote;
    const selectString = `SELECT * FROM posts WHERE posts.id = ${id};`;
    if (vote == 'upvote') {
      const queryString = `UPDATE posts SET score = score + 1, vote = vote + 1 WHERE posts.id = ${id};`;
      conn.query(queryString, (err, result) => {
        if (err) {
          return res.status(500).send('cannot query');
        }
      })
    }
    if (vote == 'downvote') {
      const queryString = `UPDATE posts SET score = score - 1, vote = vote - 1 WHERE posts.id = ${id};`;
      conn.query(queryString, (err, result) => {
        if (err) {
          return res.status(500).send('cannot query');
        }
      })
    }
    conn.query(selectString, (err, result) => {
      if (err) {
        return res.status(500).send('cannot query');
      }
      res.set('Content-Type', 'application/json');
      res.status(200).json(result);
    })
  } else {
    res.status(406).send('Not acceptable');
  }
});

app.get('/api/posts/:id/comments', (req,res)=>{
  const pid = req.params.id;
  if (req.accepts('application/json')) {
    const queryString = `SELECT user.username, comment.*
    FROM reddit.comment, user
    where comment.uid = user.uid and pid = "${pid}"`;
    conn.query(queryString, (err, result) => {
      if (err) {
        return res.status(500).send('cannot query');
      }
      res.type('application/json');
      res.status(200).json(result);
    })
  } else {
    res.status(406).send('Not acceptable');
  }
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});