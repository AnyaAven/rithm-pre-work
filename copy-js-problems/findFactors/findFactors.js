
function findFactors(num) {
  const factors = [];

  for(let divisableBy = 1; divisableBy <= num; divisableBy++){
    if(num % divisableBy === 0){
      factors.push(divisableBy);
    }
  }

  return factors;
}

export { findFactors };
