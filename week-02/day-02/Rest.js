'use strict';

function matrix(rows, columns, ...rest) {
  if (rest.length < (parseInt(rows) * parseInt(columns))) {
    return null;
  }
  var matrix = new Array(rows);
  for (let i = 0; i < rows; i++) {
    matrix[i] = new Array(columns);
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = rest[i*(columns)+j];
    }
  }
  return matrix;
}

console.log(matrix(3, 3, 1, 2, 3, 4, 5, 6, 7, 8));
console.log(matrix(2, 3, 1, 2, 3, 4, 5, 6, 7, 8));