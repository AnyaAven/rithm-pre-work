
function unzip(matrix) {

  const newMatrix = [];

  for(let y = 0; y < matrix[0].length; y++){

    const newRow = [];

    for(const row of matrix){
      newRow.push(row[y]);
    }

    newMatrix.push(newRow);
  }

  return newMatrix;
}

export { unzip };
