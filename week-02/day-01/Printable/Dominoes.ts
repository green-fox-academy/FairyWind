'use strict';

import {Domino} from './Domino';

function initializeDominoes() {
    const dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

const dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */
var connectSide = dominoes[0].values[1];
for (let order = 0; order < 5;) {
    for (let piece in dominoes) {
        let temp = [];
        if (dominoes[piece].values[0] === connectSide) {
            order++;
            connectSide = dominoes[piece].values[1];
            temp = dominoes[order];
            dominoes[order] = dominoes[piece];
            dominoes[piece] = temp;
            break;
        }
    }
}

console.log(dominoes.toString());

console.log(dominoes);
for (let domino of dominoes) {
    domino.printAllFields();
}