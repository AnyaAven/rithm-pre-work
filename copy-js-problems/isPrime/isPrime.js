
function isPrime(num) {

  for(let i = 2; i < num; i++){
    if(num % i === 0) return false;
  }

  //be evaluating the num, we can test for NaN and that num is not 1
  return num > 1;
}

export { isPrime };
