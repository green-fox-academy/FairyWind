'use strict';

// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

var matrix = new Array();
var size = 5;
for (let i = 0; i < size; i++){
    matrix[i] = new Array();
    for(let j = 0; j < size; j++){
        if(i + j === size-1){
            matrix[i][j] = 1;
        }
        else{
            matrix[i][j] = 0;
        }       
    }
}
console.log(matrix);