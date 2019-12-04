'use strict';

//Undefined, Null, Boolean, Number, String

function PrimitiveFields(obj){
  var field = [];
  for (let item in obj){
    if (typeof obj[item] === 'number' || typeof obj[item] === 'string' || typeof obj[item] === 'boolean' || typeof obj[item] === undefined || typeof obj[item] === null){
      field.push(item);
    }
  }
  return field;
}


// example
console.log(PrimitiveFields({ x: 1, y: true, z: [] }));
// should return
//['x','y']