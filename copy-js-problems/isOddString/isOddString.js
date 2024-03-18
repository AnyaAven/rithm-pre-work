
function isOddString(str) {
  let sum = 0;

  for(let i = 0; i < str.length; i++){
    const val = str.charCodeAt(i);
    sum += val
  }

  return sum % 2 !== 0;
}

export { isOddString };
