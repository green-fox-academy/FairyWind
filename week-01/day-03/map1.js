'use strict';

var map = {
    97:	'a',
    98:	'b',
    99:	'c',
    65:	'A',
    66:	'B',
    67:	'C'
};
console.log(Object.keys(map));
console.log(Object.values(map));
map[68] = 'D';

var count = 0;
for (let keys in map){
    count++;
}    
console.log(count);

console.log(map[99]);

delete map[97];
console.log(map);

console.log(map.hasOwnProperty(100));

for (let keys in map){
    delete map[keys];
}
console.log(map);