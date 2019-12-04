/**Create a Station and a Car classes
Station
gasAmount
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
Car
gasAmount
capacity
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100 */

'use strict';
class PetrolStation{
    constructor(gasAmount){
        this.gasAmount = gasAmount;
    }
    refill(car){
        this.gasAmount -= (car.capacity-car.gasAmount)
    }
}

class Car{
    constructor(gasAmount = 0,capacity = 100){
        this.gasAmount = gasAmount;
        this.capacity = capacity;
    }
}

const myCar = new Car(10, 100);
const station = new PetrolStation(2000);
station.refill(myCar);
console.log(station.gasAmount);