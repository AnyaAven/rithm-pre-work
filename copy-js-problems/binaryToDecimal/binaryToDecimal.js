
function binaryToDecimal(biNums) {
  let sum = 0;
  const biNumsOrdered = biNums.split("").reverse();

  for(let i = 0; i < biNums.length; i++){
    if(biNumsOrdered[i] === "0") continue;

    sum += Math.pow(2, i);
  }

  return sum;
}

export { binaryToDecimal };
