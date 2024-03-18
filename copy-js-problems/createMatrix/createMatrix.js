
function createMatrix(numCols, numRows) {
  const matrix = [];

  for (let x = 0; x < numRows; x++) {
    matrix.push(new Array(numCols).fill(0));
  }

  return matrix;
}

export { createMatrix };
