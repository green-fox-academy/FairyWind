class Aircraft {
    constructor(type, ammo, maxAmmo, basicDamage) {
        this.type = type;
        this.ammo = ammo;
        this.maxAmmo = maxAmmo;
        this.basicDamage = basicDamage;
        this.allDamage = 0;
    }

    fight() {
        this.ammo = 0;
        return this.allDamage = this.basicDamage * this.maxAmmo;
    }

    refill(number) {
        if (this.ammo + number <= this.maxAmmo) {
            this.ammo += number;
            return 0;
        }
        else {
            this.ammo = this.maxAmmo;
            return number + this.ammo - this.maxAmmo;
        }
    }

    getType() {
        return `${this.type}`;
    }

    getStatus() {
        return `Type: ${this.type}, Ammo: ${this.ammo}, Base Damage: ${this.basicDamage}, All Damage: ${this.allDamage}`;
    }

    isPriority() {
        if (this.type = 'F35') {
            return true;
        }
        else{
            return false;
        }
    }
}

class F16 extends Aircraft {
    constructor(type = 'F16', ammo, maxAmmo = 8, basicDamage = 30) {
        super(type, ammo, maxAmmo, basicDamage);
    }
}

class F35 extends Aircraft {
    constructor(type = 'F35', ammo, maxAmmo = 12, basicDamage = 50) {
        super(type, ammo, maxAmmo, basicDamage);
    }
}

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

    fight(Carrier){
        for (let aircraft in this.aircraftStore) {
            this.maxDamage += this.aircraftStore[aircraft].ammo * this.aircraftStore[aircraft].basicDamage;
            this.aircraftStore[aircraft].ammo = 0;
        }
        Carrier.healthPoint -= this.maxDamage;
    }

    getStatus(){   
        console.log(`HP: ${this.healthPoint}, Aircraft count: ${this.aircraftStore.length}, Ammo Storage: ${this.ammoAmount}, Total damage: ${this.maxDamage}\nAircrafts:\n`);
        for (let aircraft in this.aircraftStore) {
            console.log(`Type ${this.aircraftStore[aircraft].type}, Ammp: ${this.aircraftStore[aircraft].ammo}, Base Damage: ${this.aircraftStore[aircraft].basicDamage}, All Damage: ${this.aircraftStore[aircraft].allDamage}`)
        }
        if (this.healthPoint = 0){
            console.log('It\'s dead Jim :(');
        }
    }


    fill() {
        if (this.ammoAmount <= 0){
            throw new UserException('There is not enough ammo .');
        }
        let sum = 0;
        for (let aircraft in this.aircraftStore) {
            sum += this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
        }
        if (sum <= this.ammoAmount) {
            for (let aircraft in this.aircraftStore) {
                this.aircraftStore[aircraft].ammo = this.aircraftStore[aircraft].maxAmmo;
                this.ammoAmount -= this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
            }
        }
        else{
            for (let aircraft in this.aircraftStore) {
                if (this.aircraftStore[aircraft].isPriority()){
                    this.aircraftStore[aircraft].ammo = this.aircraftStore[aircraft].maxAmmo;
                    this.ammoAmount -= this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
                    if (this.ammoAmount < 0){
                        throw new UserException('There is not enough ammo .');
                    }
                }
            }
            for (let aircraft in this.aircraftStore) {
                this.aircraftStore[aircraft].ammo = this.aircraftStore[aircraft].maxAmmo;
                this.ammoAmount -= this.aircraftStore[aircraft].maxAmmo - this.aircraftStore[aircraft].ammo;
                if (this.ammoAmount < 0){
                    throw new UserException('There is not enough ammo .');                    
                }
            }
        }
    }
}


// Test input
const carrier = new Carrier();

const aircraft1 = new Aircraft('F35', 12, 12, 30);
const aircraft2 = new Aircraft('F35', 12, 12, 50);
const aircraft3 = new Aircraft('F35', 12, 12, 50);
const aircraft4 = new Aircraft('F16', 8, 8, 50);
const aircraft5 = new Aircraft('F16', 8, 8, 50);

carrier.add(aircraft1);
carrier.add(aircraft2);
carrier.add(aircraft3);
carrier.add(aircraft4);
carrier.add(aircraft5);

carrier.getStatus();
