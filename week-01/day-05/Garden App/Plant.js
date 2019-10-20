'use strict';

class Plant{
    constructor(type, color, limit, absorbRate){
        this.type = type;
        this.color = color;
        this.limit = limit;
        this.absorbRate = absorbRate;
        this.warterAmount = 0;
    }

    needWater(){
        // if (this.warterAmount <= this.limit){
        //     return true;
        // }
        // else {
        //     return false;
        // }
        return this.warterAmount <= this.limit;
    }
}

module.exports = Plant;
// class Flower extends Plant{
//     constructor(type = 'Flower', color, limit = 5, absorbRate = 0.75){
//         super(type, color, limit, absorbRate);
//     }
// }

// class Tree extends Plant{
//     constructor(type = 'tree', color, limit = 10, absorbRate = 0.4){
//         super(type, color, limit, absorbRate);
//     }
// }



