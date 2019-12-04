'use strict';

const lineCount = 7;

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
for (let i = 1; i <= Math.floor(lineCount/2)+1; i++){
    var str = '';
    for (let space = i; space < Math.floor(lineCount/2)+1; space++){
        str += ' ';
    }
    for (let j = 1; j <= i*2-1; j++){
        str += '*';
    }
    console.log(str);
}
for (let i = Math.floor(lineCount/2); i >= 1; i--){
    var str = '';
    for (let space = i; space < Math.floor(lineCount/2)+1; space++){
        str += ' ';
    }
    for (let j = i*2-1; j >= 1; j--){
        str += '*';
    }              
    console.log(str);
}