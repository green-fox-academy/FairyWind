'use strict';

import { Thing } from './Thing';
import { Fleet } from './Fleet';

const fleet = [];

function FleetOfThings() {
    fleet.push(new Thing('Get milk'));
    fleet.push(new Thing('Remove the obstacles'));
    fleet.push(new Thing('Stand up'));
    fleet.push(new Thing('Eat lunch'));
    fleet[0].complete();
    fleet[1].complete();
    // getMilk.complete();
    // removeTheObstacles.complete();
    //     console.log(fleet);
    return fleet;
}

function print() {
    var output = '';
    for (let key in fleet) {
        //        console.log(typeof(fleet.things[key].completed));
        if (fleet[key].completed) {
            output += key + '\.\[ \] ' + fleet[key].name + '\n';
        } else {
            output += key + '\.\[x\] ' + fleet[key].name + '\n';
        }
    }
    console.log(output);
}


const test = FleetOfThings();

console.log(test);
print();

for (let todo of test) {
    todo.printAllFields();
}