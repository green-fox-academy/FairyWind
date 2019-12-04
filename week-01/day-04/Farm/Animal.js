/**Create an Animal class
Every animal has a hunger and a thirst value
When creating a new animal object, these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one */
'use strict';
class Animal{
    constructor(hunger = 50, thirst = 50){
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat(){
        this.hunger--;
        return this.hunger;
    }

    drink(){
        this.thirst--;
        return this.thirst;
    }

    play(){
        this.hunger++;
        this.thirst++;
    }

}

// const fox = new Animal(10,20);
// console.log(fox.eat());
// fox.play();
// console.log(fox.hunger,fox.thirst);

module.exports = Animal;