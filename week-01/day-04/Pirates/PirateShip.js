'use strict';

const Pirate = require('./pirates');

class Ship {
    constructor(name) {
        this.name = name;
        this.list = [];
        this.num = 0;
        this.captainConsumed = 0;
    }

    addPirate(pirate) {
        this.list.push(pirate)
    }

    fillShip() {
        for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
            let pirate = new Pirate('pirate' + i);
            pirate.captain = false;
            this.list.push(pirate);
        }
        const captain = new Pirate('CaptainX')
        captain.captain = true;
        this.list.push(captain);
    }

    showShip() {
        for (let pirate in this.list) {
            //    console.log(this.list[pirate]);
            if (this.list[pirate].status = 'Live') {
                this.num++;
            }
            if (this.list[pirate].captain) {
                let captainInfo = this.list[pirate];
                this.captainConsumed = captainInfo.counter;
                console.log(captainInfo.name + ': Consemed rum: ' + captainInfo.counter + '\n\tStatus: ' + captainInfo.status);
            }
        }
        console.log('Alive crew: ' + this.num);
    }

    battle(otherShip) {
        for (let pirate in this.list) {
            if (this.list[pirate].status = 'Live') {
                this.num++;
            }
            if (this.list[pirate].captain) {
                let captainInfo = this.list[pirate];
                this.captainConsumed = captainInfo.counter;
            }
        }

        if (this.num - this.captainConsumed > otherShip.num - otherShip.captainConsumed) {
            console.log(this.name + 'wins, Let\'s Party!');
            for (let pirate in this.list) {
                if (this.list[pirate].status = 'Live') {
                    this.list[pirate].counter += Math.floor(Math.random() * 10);
                }
            }
            return true;
        } else {
            console.log(otherShip.name + 'wins, Let\'s Party!');
            for (let pirate in this.list) {
                if (this.list[pirate].status = 'Live') {
                    if (Math.random < 0.5) {
                        this.list[pirate].status = 'Dead';
                        this.num--;
                    }
                }
            }
        }

    }
}

module.exports = Ship;
