'use strict';

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

var remainingSeconds = (23-currentHours)*3600 + (59-currentMinutes)*60 + (60-currentSeconds);
console.log('The remaining seconds from a day is ' + remainingSeconds + 's');