'use strict';

var product = {
    'Milk': 1.07,
    'Rice': 1.59,
    'Eggs': 3.14,
    'Cheese': 12.60,
    'Chicken Breasts': 9.40,
    'Apples': 2.31,
    'Tomato': 2.58,
    'Potato': 1.75,
    'Onion': 1.10
}

var bob = {
    'Milk': 3,
    'Rice': 2,
    'Eggs': 2,
    'Cheese': 1,
    'Chicken Breasts': 4,
    'Apples': 1,
    'Tomato': 2,
    'Potato': 1
}

var alice = {
    'Rice': 1,
    'Eggs': 5,
    'Chicken Breasts': 2,
    'Apples': 1,
    'Tomato': 10
}

function sumPrice(map){
    var sum = 0;
    for (let key in map){
        sum += map[key] * product[key];
    }
    return sum;
}

console.log('Bob pays: ' + sumPrice(bob));
console.log('Alice pays: ' + sumPrice(alice));

function compare(product) {
    if (bob[product] && alice[product]) {
        if (bob[product] > alice[product]) {
            console.log('Bob buys more.');
        }
        else if (bob[product] < alice[product]) {
            console.log('Alice buys more.');
        }
        else if (bob[product] = alice[product]) {
            console.log('Same.');
        }
    }
    else if (bob[product] && !alice[product]) {
        console.log('Bob buys more.');
    }
    else if (!bob[product] && alice[product]) {
        console.log('Alice buys more.');
    }
    else if (!bob[product] && !alice[product]) {
        console.log('Same.');
    }
}

compare('Rice');
compare('Potato');
// compare('Tomato');
// compare('Onion');

function compareNum(){
    if(Object.keys(bob).length > Object.keys(alice).length){
        console.log('Bob buys more products.')
    }
    else if (Object.keys(bob).length < Object.keys(alice).length){
        console.log('Alice buys more products.')
    }
    else{
        console.log('Same.')
    }
}
compareNum();


function sum(map) {
    var sum = 0;
    for (let key in map) {
        sum += map[key];
    }
    return sum
}
function comparePiece(){
    if(sum(bob) > sum(alice)){
        console.log('Bob buys more pieces.')
    }
    else if (sum(bob) < sum(alice)){
        console.log('Alice buys more pieces.')
    }
    else{
        console.log('Same.')
    }
}
comparePiece();