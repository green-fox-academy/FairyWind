'use strict';

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var a1 = 'EPAM';
function greet (param = 'friends'){
    let greeting = 'Greetings, dear ' + param;
    return greeting;
}
console.log(greet(a1));