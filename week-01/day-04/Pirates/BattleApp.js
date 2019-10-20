'use strict';

const Ship = require('./PirateShip');

class BattleApp{
    constructor(ship1, ship2){
        this.ship1 = ship1;
        this.ship2 = ship2;
    }
}

const ship1 = new Ship('Black Pearl');
const ship2 = new Ship('Fly Dutchman');
ship1.fillShip();
ship2.fillShip();
ship1.showShip();
ship2.showShip();
ship1.battle(ship2);