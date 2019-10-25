'use strict';

let fs = require('fs')
let data = fs.readFileSync('puzzle1.txt', 'utf-8');
let puzzle = generatePuzzle(data);
var start = new Date().getTime();
let flag = false;
let stack = [];
findAnswer();
//console.log(findAnswer());
var end = new Date().getTime();
console.log(end - start);
console.log(puzzle);

function generatePuzzle(data) {
  data = data.replace(/\r\n/g, ' ').split(' ');
  for (let i = 0; i < data.length; i++) {
    if (data[i] == '_') {
      data[i] = 0;
    } else {
      data[i] = parseInt(data[i], 10);
    }
  }
  let puzzle = [];
  for (let i = 0; i < 9; i++) {
    puzzle[i] = new Array();
    for (let j = 0; j < 9; j++) {
      puzzle[i][j] = data[i * 9 + j];
    }
  }
  return puzzle;
}


function findAnswer() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9;) {
      if (puzzle[i][j] === 0 || flag) { //Current number
        flag = false;
        let possibleNum = puzzle[i][j] + 1; //Search for next number
        while (possibleNum < 10) {
          puzzle[i][j] = possibleNum;
          if (checkGrid(puzzle, i, j) == 0) { //Check valid or not
            stack.push([i, j++]);  //Save current status and go to next cell
            break;
          }
          possibleNum++;
        }
        if (possibleNum > 9) {
          puzzle[i][j] = 0;  //Reset current number
          let status = stack.pop();   //Go to last saved status
          if (!status){
            return 0;
          }
          i = status[0];  //Reset i and j
          j = status[1];
          flag = true;
        }
      } else {  //The cell already has number
        j++;
      }
    }
  }
  return 1;
}

function checkGrid(puzzle, i, j) {
  let row = {}, col = {}, subSudo = {};
  for (let k = 0; k < 9; k++) {
    let rowCurrentCell = puzzle[i][k], columnCurrentCell = puzzle[k][j]
    // Judge the row
    if (row[rowCurrentCell]) {
      return 1;
    } else {
      row[rowCurrentCell] = rowCurrentCell;
    }
    //Judge the column
    if (col[columnCurrentCell]) {
      return 2;
    } else {
      col[columnCurrentCell] = columnCurrentCell;
    }
    //Judge the nine cell sudoku
    let key = puzzle[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + Math.floor(k % 3)]
    if (subSudo[key]) {
      return 3;
    } else {
      subSudo[key] = key;
    }
  }
  return 0;
}