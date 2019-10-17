'use strict';

const Animal = require('./animal');

/**Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal
 */

class Farm{
    constructor(slot){
        this.slot = slot;
        this.list = [];
    }
    
    breed(animal){
        if (this.slot > 0){
            this.list.push(animal);
        } 
        else{
            console.log('The slot is full.')
        } 
    }

    slaughter(){
        var minHunger = 100;
        var tip = 0;
        for (let animal in this.list){
            if(this.list[animal].hunger < minHunger){
                minHunger = this.list[animal].hunger;
                tip = animal;
            }
        }
        this.list.splice(tip, 1);
    }
}

const farm = new Farm(5);
const cow = new Animal(10, 20);
const sheep = new Animal(15, 25);
const chicken = new Animal(13, 19);
farm.list.push(cow);
farm.list.push(sheep);
farm.list.push(chicken);
console.log(farm);

const pig = new Animal(17, 23);
farm.breed(pig);
console.log(farm);

farm.slaughter();
console.log(farm);
