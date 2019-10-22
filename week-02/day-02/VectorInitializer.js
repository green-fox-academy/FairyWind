'use strict';

function Vector(x = 0, y = 0, z = 0){
  var arr = []
  arr.push(x);
  arr.push(y);
  arr.push(z);
  return arr;
}

const vectors = [
  [1, 2, 3],
  [],
  [2, 3],
  [-1],
  [6, 7, 8, 9],
];

for (let item in vectors){
  console.log((Vector(...vectors[item])));
}


// expected result:
// [1,2,3]
// [0,0,0]
// [2,3,0]
// [-1,0,0]
// [6,7,8]