'use strict';

const Sharpie = require('./Sharpie');

class SharpieSet {
    constructor() {
        this.set = [];
    }

    countUsable() {
        var count = 0;
        for (let item in this.set) {
            if (this.set[item].inkAmount > 0) {
                count++;
            }
        }
        return count;
    }

    add(sharpie) {
        this.set.push(sharpie);
    }


    removeTrash() {
        for (let item in this.set) {
            if (this.set[item].inkAmount = '0') {
                this.set.splice(item,1);
            }
        }
    }
}


// function initializeSharpieSet() {
//     return [
//         const sharpie1 = new Sharpie('red', '20', '0'),
//         const sharpie2 = new Sharpie('blue', '18', '15'),
//         const sharpie3 = new Sharpie('green', '17', '0'),
//     ];
// }

const mySet = new SharpieSet();
const sharpie1 = new Sharpie('red', '20');
const sharpie2 = new Sharpie('blue', '18');
const sharpie3 = new Sharpie('green', '17');
sharpie1.inkAmount = 0;
sharpie2.inkAmount = 30;
sharpie3.inkAmount = 0;
mySet.add(sharpie1);
mySet.add(sharpie2);
mySet.add(sharpie3);
console.log(mySet.countUsable());
mySet.removeTrash();
console.log(mySet);
