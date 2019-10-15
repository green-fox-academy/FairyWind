'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(param){
    var factorial = 1;
    for(let i = 1; i <= param; i++){
       factorial *= i;
    }
    return factorial;
}
console.log(factorio(5));