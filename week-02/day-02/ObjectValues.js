'use strict';

function HighestCount(obj){
  var max = 0;
  var maxKey = '';
  for (let key of Object.keys(obj)) {
    if (obj[key] >= max){
      max = obj[key];
      maxKey = key;
    }
  }
  return maxKey;
}

const obj = { x: 1, y: 2, z: 3 };
console.log(HighestCount(obj));