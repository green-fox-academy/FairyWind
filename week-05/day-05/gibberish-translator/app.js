const express = require('express');
const path = require('path');

const PORT = 8080;
const app = express();

app.use(express.json());

app.post('/translate', (req, res) => {
  let text = req.body.text;
  if (text) {
    let textArray = [];
    textArray = text.split(' ');
    for (let i = 0; i < textArray.length; i++) {
      let characterArray = [];
      characterArray = textArray[i].split('');
      for (let j = 0; j < characterArray.length; j++) {
        switch (characterArray[j]) {
          case 'a':
            characterArray[j] = 'ala';
            break;
          case 'e':
            characterArray[j] = 'ele';
            break;
          case 'i':
            characterArray[j] = 'ili';
            break;
          case 'o':
            characterArray[j] = 'olo';
            break;
          case 'u':
            characterArray[j] = 'ulu';
            break;
        }
      }
      textArray[i] = characterArray.join('');
    }
    text = textArray.join(' ');
    res.json({
      "translated": text,
      lang: "gibberish"
    })
  } else {
    res.json({
      error: "I can't translate that!"
    })
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});