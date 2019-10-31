'use strict'

let speedFlag = false;
let lollypops = Array.from(document.querySelector('.lollypops').textContent).length;
document.querySelector('.speed').textContent = lollypops / 10;
let speed = document.querySelector('.speed').textContent;
let interval = 1000 / document.querySelector('.speed').textContent;
let myInterval = window.setInterval(generateCandy, interval);

function changeSpeed() {
  lollypops = Array.from(document.querySelector('.lollypops').textContent).length;
  document.querySelector('.speed').textContent = lollypops / 10;
  if (speed !== document.querySelector('.speed').textContent) {
    speedFlag = true;
    speed = document.querySelector('.speed').textContent;
  }
}
let observer = new MutationObserver(changeSpeed);
let config = {
  childList: true,
  subtree: true
};
observer.observe(document, config);

window.setInterval(() => {
  if (speedFlag) {
    interval = 1000 / Number(document.querySelector('.speed').textContent);
    speedFlag = false;
    clearInterval(myInterval);
    myInterval = window.setInterval(generateCandy, interval)
  }
}, 1000)

function generateCandy() {
  let num = parseInt(document.querySelector('.candies').textContent);
  num++;
  document.querySelector('.candies').textContent = num;
}

let createCandy = document.querySelector('.create-candies');
createCandy.addEventListener('click', generateCandy)

let buyLollypop = document.querySelector('.buy-lollypops');
buyLollypop.addEventListener('click', () => {
  let num = parseInt(document.querySelector('.candies').textContent);
  if (num > 100) {
    document.querySelector('.lollypops').textContent += '🍭';
    num -= 100;
    document.querySelector('.candies').textContent = num;
  }
})

let candyRain = document.querySelector('.candy-machine');
candyRain.addEventListener('click', () => {
  observer.disconnect();
  speed = Number(document.querySelector('.speed').textContent);
  speed *= 10;
  document.querySelector('.speed').textContent = speed;
  interval = 1/speed;
  clearInterval(myInterval);
  window.setInterval(generateCandy, interval)
})