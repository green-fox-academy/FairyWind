'use strict';

const Garden = require('./ClassesES6');

class Playground extends Garden{
  constructor(width, length){
    super(width, length);
    this.toys = [];
  }
  
  add(toy){
    this.toys.push(toy);
    return this.toys;
  }
}


var test = new Playground(100, 200);
console.log(test.efficiency());
console.log(test.add('football'));