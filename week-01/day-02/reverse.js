'use strict';

// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`

var aj1 = [3, 4, 5, 6, 7];
console.log(aj1.reverse());

var aj2 = [3, 4, 5, 6, 7];
var temp = [];
for(let i = 0; i < aj2.length; i++){
    temp[i] = aj2[aj2.length - i - 1];
}
console.log(temp);