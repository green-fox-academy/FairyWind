'use strict';

function Coffee(sugar = false, milk = false){
  if (!sugar && !milk){
    return 'coffee';
  }else if (sugar && !milk){
    return 'coffee with sugar';
  }else if (!sugar && milk){
    return 'coffee with milk';
  }else {
    return 'coffee with sugar and with milk';
  }
}

console.log(Coffee(true));