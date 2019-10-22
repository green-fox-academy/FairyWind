'use strict';

function averageNum(array){
  const length = array.length;
  var sum = 0;
  for (let i = 0; i < length; i++){
    sum += array[i];
  }
  return sum/length;
}