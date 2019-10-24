// function diagonalDifference(arr) {
//   var primaryDig = 0;
//   var secondaryDig = 0;
//   for (let i = 0; i < Math.sqrt(arr.length); i++) {
//     primaryDig += arr[i * Math.sqrt(arr.length) + i];
//     secondaryDig += arr[(Math.sqrt(arr.length) - 1) * (i + 1)]
//   }
//   return Math.abs(primaryDig - secondaryDig);
// }

// const a = [1, 2, 4, 4, 5, 6, 7, 8, 9];
// console.log(diagonalDifference(a));

function extraLongFactorials(n) {
  var arr = [1];
  var part = 0;
  var reminder = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < arr.length || reminder != 0; j++) {
      if(j < arr.length){
        part = i * arr[j] + reminder;
      }
      else{
        part = reminder;
      }
      arr[j] = part % 10;
      reminder = (part - arr[j]) / 10;
    }
  }
  return arr.reverse().join("");
}

console.log(extraLongFactorials(25));