
function drop(arr, removeAmt = 1) {
  if(removeAmt > arr.length) return [];

  return arr.slice(removeAmt);
}

export { drop };
