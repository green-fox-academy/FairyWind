const Plant = require('./Plant');

class Garden extends Plant{
    constructor(type, color, limit, absorbRate){
        super(type, color, limit, absorbRate);
        this.flowers = [];
        this.trees = [];
        this.counter = 0;
    }

    addFlower(Flower){
        this.flowers.push(Flower);
    }

    addTree(Tree){
        this.trees.push(Tree);
    }

    demonstrateGarden(){
        for (let flower in this.flowers){
            if(this.flowers[flower].needWater()){
                console.log(`The ${this.flowers[flower].color} ${this.flowers[flower].type} need water.`);
                this.counter++;
            }
            else{
                console.log(`The ${this.flowers[flower].color} ${this.flowers[flower].type} doesnt need water.`);
            }
        }
        for (let tree in this.trees){
            if(this.trees[tree].needWater()){
                console.log(`The ${this.trees[tree].color} ${this.trees[tree].type} need water.`);
                this.counter++;
            }
            else{
                console.log(`The ${this.trees[tree].color} ${this.trees[tree].type} doesnt need water.`);
            }
        }
    }

    watering(amount){
        console.log(`\nWatering with ${amount}`)
        for (let flower in this.flowers){
            if(this.flowers[flower].needWater()){
                this.flowers[flower].warterAmount += amount / this.counter;                
            }
        }
        for (let tree in this.trees){
            if(this.trees[tree].needWater()){
                this.trees[tree].warterAmount += amount / this.counter;
            }
        }
        this.counter = 0;
        this.demonstrateGarden();
    }
}

// Test input
// const plant = [];

const yellowFlower = new Plant('Flower', 'yellow', 5, 0.75);
const blueFlower = new Plant('Flower', 'blue', 5, 0.75);
const purpleTree = new Plant('Tree', 'purple', 10, 0.4);
const orangeTree = new Plant('Tree', 'orange', 10, 0.4);

// plant.push(yellowFlower);
// plant.push(blueFlower);
// plant.push(purpleTree);
// plant.push(orangeTree);
//plant.forEach((plants) => plants.needWater());

const garden = new Garden();
garden.addFlower(yellowFlower);
garden.addFlower(blueFlower);
garden.addTree(purpleTree);
garden.addTree(orangeTree);
garden.demonstrateGarden();
garden.watering(40);
garden.watering(70);