'use strict';

const Garden = require('./ClassesES5');

function Playground(width, length){
  Garden.call(this, width, length);
  this.toys = [];
}

Playground.prototype = Object.create(Garden.prototype);
Playground.prototype.constructor = Playground;

Playground.prototype.add = function(toy){
  this.toys.push(toy);
  return this.toys;
}


var test = new Playground(100, 200);
console.log(test.efficiency());
console.log(test.add('football'));