'use strict';
// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

var quote = "Hofstadter\'s Law\: It you expect, even when you take into account Hofstadter\'s Law."
var index = quote.indexOf('It');
var insertWords = ' always takes longer than';
var quote = quote.slice(0, index+2)+ insertWords + quote.slice(index+2);
console.log(quote);
