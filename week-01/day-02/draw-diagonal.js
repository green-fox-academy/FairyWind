'use strict';

const lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i = 1; i <= lineCount; i++){
    var str = '';
    if (i === 1 || i === lineCount){
        for (let j = 1; j <= lineCount; j++){
            str += '%';
        }
        console.log(str);
    }
    else{
        var content1 = '';
        var content2 = '';
        for(let space1 = 2; space1 < i; space1++){
            content1 += ' ';
        }
        for (let space2 = lineCount - i - 1; space2 > 0; space2--){
            content2 += ' '
        }
        var content = content1+'%'+content2;
        str = '%' + content +'%';
        console.log(str);
    }   
}
