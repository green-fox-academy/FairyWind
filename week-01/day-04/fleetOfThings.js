'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

const fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
class FleetOfThings{
    main(){
        const getMilk = new Thing('Get milk');
        const removeTheObstacles = new Thing('Remove the obstacles');
        const standUp = new Thing('Stand up');
        const eatLunch = new Thing('Eat lunch');
        fleet.add(getMilk);
        fleet.add(removeTheObstacles);
        fleet.add(standUp);
        fleet.add(eatLunch);
        getMilk.complete();
        removeTheObstacles.complete();
   //     console.log(fleet);
    }

    print(){
        var output = '';
        for (let key in fleet.things){
   //        console.log(typeof(fleet.things[key].completed));
            if (fleet.things[key].completed){
                output += key +'\.\[ \] ' + fleet.things[key].name+ '\n';
            }
            else{
                output += key +'\.\[x\] ' + fleet.things[key].name + '\n';
            }
       } 
       console.log(output);
    }
}

const test = new FleetOfThings();
test.main();
test.print();