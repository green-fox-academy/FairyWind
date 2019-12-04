'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
var space = '';
for (let i = 1; i <= lineCount -2; i++){
    space += ' ';
}
for (let i = 1; i <= lineCount; i++){
    var str = '';
    if (i === 1 || i === lineCount){
        for (let j = 1; j <= lineCount; j++){
            str += '%';
        }
        console.log(str);
    }
    else{
        str = '%' + space +'%';
        console.log(str);
    }   
}
