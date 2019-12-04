'use strict';

const lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

for (let i = 1; i <= lineCount; i++){
    var str = '';
    for (let space = i; space < lineCount; space++){
        str += ' ';
    }
    for (let j = 1; j <= i*2-1; j++){
        str += '*';
    }        
    console.log(str);
}
