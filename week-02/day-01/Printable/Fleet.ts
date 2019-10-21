'use strict';
import {Printable} from './Printable';

class Fleet implements Printable{
  things: any[];

  constructor() {
    this.things = [];
  }

  add(thing) {
    this.things.push(thing);
  }

  getThings() {
    return this.things;
  }

  printAllFields() {
    console.log(this.things);
  }
}

export {Fleet};