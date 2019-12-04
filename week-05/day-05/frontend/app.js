const express = require('express');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  if (input) {
    res.json({
      received: input,
      result: input * 2
    })
  } else {
    res.json({
      error: "Please provide an input!"
    })
  }
})

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  if (name && title) {
    res.json({
      "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
    })
  } else if (name && !title) {
    res.json({
      error: "Please provide a title!"
    })
  } else if (!name && title) {
    res.json({
      error: "Please provide a name!"
    })
  } else {
    res.json({
      error: "Please provide a name and a title!"
    })
  }
})

app.get('/appenda/:appendable', (req, res) => {
  let toAppend = req.params.appendable;
  if (toAppend) {
    res.json({
      appended: `${toAppend}a`
    })
  } else {
    res.sendStatus(404);
  }
})

app.post('/dountil/:action', (req, res) => {
  let num = {};
  num = req.body.until;
  let action = req.params.action;
  if (num) {
    if (action == 'sum') {
      let sum = 0;
      for (let i = 0; i <= num; i++) {
        sum += i;
      }
      res.json({
        result: sum
      })
    } else if (action == 'factor') {
      let factor = 1;
      for (let i = 1; i <= num; i++) {
        factor *= i;
      }
      res.json({
        result: factor
      })
    }
  } else {
    res.json({
      error: "Please provide a number!"
    })
  }

})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});