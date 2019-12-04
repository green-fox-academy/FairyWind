'use strict';

function findMax(array){
  let max = 0;
  for (let item of array){
    if (item > max){
      max = item;
    }
  }
  return max;
}

const data = [5, 1, 2, 9, 7, 3, 8];
console.log(findMax(data));