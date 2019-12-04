'use strict';
import {Printable} from './Printable'

class Domino implements Printable{
    values:  number[];
    constructor(valueA, valueB) {
      this.values = [valueA, valueB];
    }
  
    toString() {
      return `[${this.values[0]}|${this.values[1]}]`;
    }

    printAllFields(){
      console.log(this.values);
    }
  }
  
  export{Domino};