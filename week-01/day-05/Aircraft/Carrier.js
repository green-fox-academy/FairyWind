'use strict';

const Aircraft = require('./Aircraft');

class Carrier extends Aircraft {
    constructor(ammoAmount, healthPoint) {
        super();
        this.ammoAmount = ammoAmount;
        this.healthPoint = healthPoint;
        this.aircraftStore = [];
        this.maxDamage = 0;
    }

    add(Aircraft) {
        this.aircraftStore.push(Aircraft);
    }

    fight(Carrier) {
        for (let aircraft in this.aircraftStore) {
            //    this.maxDamage += this.aircraftStore[aircraft].ammo * this.aircraftStore[aircraft].basicDamage;
            this.aircraftStore[aircraft].ammo = 0;
        }
        Carrier.healthPoint -= this.maxDamage;
    }

    getStatus() {
        for (let aircraft in this.aircraftStore) {
            this.maxDamage += this.aircraftStore[aircraft].ammo * this.aircraftStore[aircraft].basicDamage;
        }
        console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircraftStore.length}, Ammo Storage: ${this.ammoAmount}, Total damage: ${this.maxDamage}\nAircrafts:`);
        for (let aircraft in this.aircraftStore) {
            console.log(`Type ${this.aircraftStore[aircraft].type}, Ammo: ${this.aircraftStore[aircraft].ammo}, Base Damage: ${this.aircraftStore[aircraft].basicDamage}, All Damage: ${this.aircraftStore[aircraft].allDamage}`)
        }
        if (this.healthPoint <= 0) {
            console.log('It\'s dead Jim :(');
        }
    }


    fill() {
        if (this.ammoAmount <= 0) {
            throw new UserException('There is not enough ammo .');
        }
        let sum = 0;
        for (let aircraft in this.aircraftStore) {
            sum += this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
        }
        if (sum <= this.ammoAmount) {
            for (let aircraft in this.aircraftStore) {
                this.ammoAmount -= this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
                this.aircraftStore[aircraft].ammo = this.aircraftStore[aircraft].maxAmmo;
            }
        } else {
            for (let aircraft in this.aircraftStore) {
                if (this.aircraftStore[aircraft].isPriority()) {
                    this.aircraftStore[aircraft].ammo = this.aircraftStore[aircraft].maxAmmo;
                    this.ammoAmount -= this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
                    if (this.ammoAmount < 0) {
                        throw new UserException('There is not enough ammo .');
                    }
                }
            }
            for (let aircraft in this.aircraftStore) {
                this.aircraftStore[aircraft].ammo = this.aircraftStore[aircraft].maxAmmo;
                this.ammoAmount -= this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
                if (this.ammoAmount < 0) {
                    throw new UserException('There is not enough ammo .');
                }
            }
        }
    }
}

// Test input
const carrier = new Carrier(2300, 5000);

const aircraft1 = new Aircraft('F35', 12, 12, 50);
const aircraft2 = new Aircraft('F35', 12, 12, 50);
const aircraft3 = new Aircraft('F35', 12, 12, 50);
const aircraft4 = new Aircraft('F16', 8, 8, 30);
const aircraft5 = new Aircraft('F16', 8, 8, 30);

carrier.add(aircraft1);
carrier.add(aircraft2);
carrier.add(aircraft3);
carrier.add(aircraft4);
carrier.add(aircraft5);

carrier.getStatus();


const carrier2 = new Carrier(2000, 4000);
carrier.fight(carrier2);
carrier.getStatus();
carrier2.getStatus();

carrier.fill();
carrier.getStatus();
