
function greatestCommonDivisor(int1, int2) {
  const facts1 = findFactors(int1).reverse();
  const facts2 = findFactors(int2).reverse();

  for (const factor of facts2) {
    const found = factorSearch(factor, facts1);

    if (found) {
      return found;
    }
  }
  return null;
}

function findFactors(num) {
  const factors = [];

  for (let divisableBy = 1; divisableBy <= num; divisableBy++) {
    if (num % divisableBy === 0) {
      factors.push(divisableBy);
    }
  }

  return factors;
}

function factorSearch(searchVal, arr) {
  for (const val of arr) {
    if (searchVal > val) return null;
    if (val === searchVal) return searchVal;
  }

  return null;
}

export { greatestCommonDivisor };
