'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(param){
    var sum = 0;
    for(let i = 0; i <= param; i++){
        sum += i;
    }
    return sum;
}

console.log(sum(10));