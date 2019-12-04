'use strict';
function multiPurposeFunction(action) {
  if (action) {
    console.log(action('John', 'Smith'));
    console.log(action('', 'Bond'));
  }
}

function frameFunction() {
  // Write your code here
  multiPurposeFunction(function(param1, param2){
    if(!param1){
      return param2;
    }
    return `${param1} ${param2}`;
  })


  multiPurposeFunction((param1, param2) => {
    if(!param1){
      return param2;
    }
    return `${param1} ${param2}`;
  })
}

frameFunction();