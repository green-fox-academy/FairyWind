'use strict';

// An attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

var codingHour = 6*5*17;
console.log('The attendee codes ' + codingHour +' hours in a semester.');
var avgHour = 52*17;
console.log("The percentage of the coding hours is " + codingHour/avgHour);