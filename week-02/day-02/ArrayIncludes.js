'use strict';

function FindAbsence(arr1, arr2) {
  var absence = [];
  for (let item in arr1) {
    if (arr2.indexOf(arr1[item]) == -1) {
      absence.push(arr1[item]);
    }
  }
  for (let item in arr2) {
    if (arr1.indexOf(arr2[item]) == -1) {
      absence.push(arr2[item]);
    }
  }
  return absence;
}

console.log(FindAbsence([1, 2, 3],[1, 2, 3, 4, 5]));
console.log(FindAbsence([1, 2, 3, 7, 8, 9],[1, 2, 3, 4, 5]));