const express = require('express');
const cors = require("cors");

require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const todos = [
  {
    "id": 1,
    "text": "Wake up",
    "done": true
  },
  {
    "id": 2,
    "text": "Do some work",
    "done": false
  }
];

app.get('/api/todos', (req, res) => {
  res.send(todos);
});

app.post('/api/todos/:id', (req, res) => {
  let requestBody = req.body;
  if (!requestBody.text) {
    res.status(400).send('text missing');
  } else {
    requestBody.done = requestBody.done ? requestBody.done : false;
    todos.push(requestBody);
    res.status(201).send(todos);
  }
});

app.delete('/api/todos/:id', (req, res) => {
  let id = req.params.id;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos.splice(i, 1);
      res.sendStatus(204);
    }
  }
  res.status(404).send('id not exist');
})

app.put('/api/todos/:id', (req, res) => {
  let id = req.params.id;
  let requestBody = req.body;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i] = requestBody;
      res.status(200).send(todos);
    }
  }
  res.status(404).send('id not exist');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});