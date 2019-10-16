var map = {
    'Eggs': 200,
    'Milk': 200,
    'Fish': 400,
    'Apples': 150,
    'Bread': 50,
    'Chicken': 550
};

function findMax() {
    var maxPrice = 0;
    for (let key in map) {
        if (map[key] >= maxPrice) {
            maxPrice = map[key];
        }
    }
    return maxPrice;
}
function findKey(value) {
    var key = '';
    for (let item in map) {
        if (map[item] === value) {
            key = item;
        }
    }
    return key;
}
console.log('The most expensive product: ' + findKey(findMax()));

function averagePrice() {
    var sum = 0;
    for (let key in map) {
        sum += map[key];
    }
    return sum / Object.keys(map).length
}
console.log('The average price: ' + averagePrice());

function findPriceLow(price) {
    var count = 0;
    var name = '';
    for (let key in map) {
        if (map[key] < price) {
            count++;
            name += key + ', '
        }
    }
    return [count, name];
}
console.log('There are ' + findPriceLow(300)[0] + ' products\' price is below 300.');

function certifyPrice() {
    var key = findKey(125);
    if (key != '') {
        console.log('Yes. It is: ' + key);       
    }
    else {
        console.log('No.');
    }
}
certifyPrice();

function findMin() {
    var minPrice = 10000;
    for (let key in map) {
        if (map[key] <= minPrice) {
            minPrice = map[key];
        }
    }
    return minPrice;
}
console.log('The cheapest product: ' + findKey(findMin()));

// function findBelow(price){
//     var name = '';
//     count = findPriceLow(price);
//     console.log('There are ' + count + ' products, they are ' + name);
// }
// findBelow(201);

console.log('There are ' + findPriceLow(201)[0] + ' products, they are: ' + findPriceLow(201)[1]);


function findPriceHigh(price) {
    var count = 0;
    var name = '';
    var unitPrice = '';
    for (let key in map) {
        if (map[key] > price) {
            count++;
            name += key + ', '
            unitPrice += map[key] + ', '
        }
    }
    return [count, name, unitPrice];
}
console.log('There are ' + findPriceHigh(150)[0] + ' products, they are: ' + findPriceHigh(150)[1] + 'there prices are: ' + findPriceHigh(150)[2]);
