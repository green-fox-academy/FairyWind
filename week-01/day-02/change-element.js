'use strict';

// - Create an array named `s` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4 with the `.map` method 
// - Print the fourth element as a test

const s = [1, 2, 3, 8, 5, 6].map((i) => i>7 ? i=4 : i);
console.log(s);
