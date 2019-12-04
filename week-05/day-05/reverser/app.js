const express = require('express');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.json());

app.post('/sith', (req, res) => {
  let text = req.body.text;
  const word = ['Arrgh. ', 'Uhmm. ', 'Hmmm. ', "Err. ", "Umm. "]
  if (text) {
 //   text = text.substring(0, text.length - 1);
    let sentenceArray = [];
    sentenceArray = text.split('. ');
    let textArray = [];
    for (let i = 0; i < sentenceArray.length; i++) {
      textArray[i] = sentenceArray[i].split(' ');
      let temp = '';
      for (let j = 0; j < textArray[i].length - 1; j = j + 2) {
        temp = textArray[i][j];
        textArray[i][j] = textArray[i][j + 1];
        textArray[i][j + 1] = temp;
      }
      sentenceArray[i] = textArray[i].join(' ');
      sentenceArray[i] = sentenceArray[i].toLowerCase().replace(/^\S/g, (L) => L.toUpperCase());
    }
    text = sentenceArray.join(`. ${word[Math.floor(Math.random() * 5)]}`);
    text = `${text} ${word[Math.floor(Math.random() * 5)]}${word[Math.floor(Math.random() * 5)]}`;
    res.json({
      "sith_text": text
    })
  } else {
    res.json({
      error: "Feed me some text you have to, padawan young you are. Hmmm."
    })
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});