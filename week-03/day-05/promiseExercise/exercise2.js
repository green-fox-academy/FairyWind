'use strict';

var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    fulfill('FULFILLED!')
  }, 300)
  // Your solution here
});

promise.then((msg) => {
  console.log(msg);
})
// Your solution here