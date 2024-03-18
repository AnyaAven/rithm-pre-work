
function take(arr, count = 1) {
  if (count >= arr.length) return arr;

  const newArr = [];

  for(let i = 0; i < count; i++){
    newArr.push(arr[i]);
  }

  return newArr;
}

export { take };
