const express = require('express');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.json());

app.post('/arrays', (req, res) => {
  let array = req.body;
  if (array) {
    if (array.what == "sum") {
      let result = 0;
      for (let i = 0; i < array.numbers.length; i++) {
        result += array.numbers[i];
      }
      res.json({
        result: result
      })
    } else if (array.what == "multiply") {
      let result = 1;
      for (let i = 0; i < array.numbers.length; i++) {
        result *= array.numbers[i];
      }
      res.json({
        result: result
      })
    } else if (array.what == "double") {
      let result = [];
      for (let i = 0; i < array.numbers.length; i++) {
        result[i] = array.numbers[i] * 2;
      }
      res.json({
        result: result
      })
    }
  } else {
    res.json({
      error: "Please provide what to do with the numbers!"
    })
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});