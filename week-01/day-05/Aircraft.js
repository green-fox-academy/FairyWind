class Aircraft {
    constructor(type, ammo, maxAmmo, basicDamage) {
        this.type = type;
        this.ammo = ammo;
        this.maxAmmo = maxAmmo;
        this.basicDamage = basicDamage;
        this.allDamage = this.basicDamage * this.maxAmmo;
    }

    fight() {
        this.ammo = 0;
        return this.allDamage;
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

// class F16 extends Aircraft {
//     constructor(type = 'F16', ammo, maxAmmo = 8, basicDamage = 30) {
//         super(type, ammo, maxAmmo, basicDamage);
//     }
// }

// class F35 extends Aircraft {
//     constructor(type = 'F35', ammo, maxAmmo = 12, basicDamage = 50) {
//         super(type, ammo, maxAmmo, basicDamage);
//     }
// }

module.exports = Aircraft;
