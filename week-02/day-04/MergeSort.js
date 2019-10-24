'use strict';

function Merge(left, right) {
  var mergeArr = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      mergeArr.push(left.shift());
    } else {
      mergeArr.push(right.shift())
    }
  }
  return mergeArr.concat(left).concat(right);
}

function MergeSort(arr){
  if (arr.length === 1){
    return arr;
  }
  var mid = Math.ceil(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  return Merge(MergeSort(left), MergeSort(right));
}


const arr = [2, 5, 7, 9, 2, 6, 3, 8, 4, 1, 10];
console.log(MergeSort(arr));
