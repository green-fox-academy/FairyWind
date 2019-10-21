'use strict';

import{Bird} from './Flyable'

const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);
bird.fly();