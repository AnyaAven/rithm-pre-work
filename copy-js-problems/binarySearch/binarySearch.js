
function binarySearch(sortedArr, searchVal) {
  let min = 0;
  let max = sortedArr.length - 1;

  while(true){
    if(max < min) return -1;

    let mid = Math.floor(max - min);

    if(sortedArr[mid] === searchVal) return mid;

    if(sortedArr[mid] < searchVal) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
}

export { binarySearch };
