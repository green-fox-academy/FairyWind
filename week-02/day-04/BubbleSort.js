'use strict';

function BubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++)
      if (arr[j] < arr[j - 1]) {
        // let temp = arr[j - 1];
        // arr[j - 1] = arr[j];
        // arr[j] = temp;
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]; // ES6 new 
      }
  }
  return arr;
}

const arr = [2, 5, 7, 9, 2, 6, 3, 8, 4, 1, 10];
console.log(BubbleSort(arr));