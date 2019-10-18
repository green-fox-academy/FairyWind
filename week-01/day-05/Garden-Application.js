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

class Flower extends Plant{
    constructor(type = 'Flower', color, limit = 5, absorbRate = 0.75){
        super(type, color, limit, absorbRate);
    }
}

class Tree extends Plant{
    constructor(type = 'tree', color, limit = 10, absorbRate = 0.4){
        super(type, color, limit, absorbRate);
    }
}

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
const plant = [];

const yellowFlower = new Plant('Flower', 'yellow', 5, 0.75);
plant.push(yellowFlower);
const blueFlower = new Plant('Flower', 'blue', 5, 0.75);
plant.push(blueFlower);
const purpleTree = new Plant('Tree', 'purple', 10, 0.4);
plant.push(purpleTree);
const orangeTree = new Plant('Tree', 'orange', 10, 0.4);
plant.push(orangeTree);

//plant.forEach((plants) => plants.needWater());

const garden = new Garden();
garden.addFlower(yellowFlower);
garden.addFlower(blueFlower);
garden.addTree(purpleTree);
garden.addTree(orangeTree);
garden.demonstrateGarden();
garden.watering(40);
garden.watering(70);