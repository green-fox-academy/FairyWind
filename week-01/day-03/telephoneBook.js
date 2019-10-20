'use strict';

var map = {
    'William A. Lathan': '405-709-1865',
    'John K. Miller': '402-247-8568',
    'Hortensia E. Foster': '606-481-6467',
    'Amanda D. Newland': '319-243-5613',
    'Brooke P. Askew': '307-687-2982'
};

console.log(map['John K. Miller']);

function findKey(value){
    for (let item in map){
        if (map[item] === value){
            console.log(item);
        }
    }
}
findKey('307-687-2982');

console.log(map.hasOwnProperty('Chris E. Myer'));
