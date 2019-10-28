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
      if (j < arr.length) {
        part = i * arr[j] + reminder;
      } else {
        part = reminder;
      }
      arr[j] = part % 10;
      reminder = (part - arr[j]) / 10;
    }
  }
  return arr.reverse().join("");
}

console.log(extraLongFactorials(25));


function miniMaxSum(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum - Math.max.apply(null, arr), sum - Math.min.apply(null, arr));
}

miniMaxSum([1, 2, 3, 4, 5]);


function birthdayCakeCandles(ar) {
  var count = 0;
  var max = Math.max.apply(null, ar);
  for (let i in ar) {
    if (ar[i] === max) {
      count++;
    }
  }
  return count;
}
console.log(birthdayCakeCandles([1, 2, 3, 4]));


function kangaroo(x1, v1, x2, v2) {
  var sum1 = 0,
    sum2 = 0,
    count = 0;
  if (v1 <= v2 && x1 <= x2) {
    return 'NO';
  } else if (v1 >= v2 && x1 >= x2) {
    return 'NO';
  } else if (v1 <= v2 && x1 >= x2) {
    for (count = 0; sum2 - sum1 <= v1; count++) {
      x1 += v1;
      x2 += v2;
      sum1 = x1;
      sum2 = x2;
      if (sum1 === sum2) {
        return 'YES';
      }
      return 'NO';
    }
  } else if (v1 >= v2 && x1 <= x2) {
    for (count = 0; sum1 - sum2 <= v2; count++) {
      x1 += v1;
      x2 += v2;
      sum1 = x1;
      sum2 = x2;
      if (sum1 === sum2) {
        return 'YES';
      }
    }
    return 'NO';
  }
}



console.log(kangaroo(0, 3, 4, 2));