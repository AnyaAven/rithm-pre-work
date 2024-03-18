
function sumUpDiagonals(matrix) {
  const diagNums = [];
  let rightNum = matrix[0].length - 1;
  let leftNum = 0;

  for (let i = 0; i < matrix.length; i++) {

    diagNums.push(matrix[i][leftNum++]);
    diagNums.push(matrix[i][rightNum--]);

  }

  return diagNums.reduce((sum, val) => {
    return sum += val;
  });
}

export { sumUpDiagonals };
