
function twoArrayDifference(arr1, arr2) {
  const newArr = [];

  for (const val of arr1) {
    if (!arr2.includes(val)) {
      newArr.push(val);
    }
  }

  return newArr;
}

export { twoArrayDifference };
