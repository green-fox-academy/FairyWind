'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var length = 10.0;
var width = 10.0;
var height = 10.0;
var surface = (length*width + length*height + width*height)*2;
var volume = length*width*height;
console.log('Surface Area: '+ surface + '\nVolume: ' + volume);