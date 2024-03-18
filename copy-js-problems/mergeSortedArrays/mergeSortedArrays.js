
function mergeSortedArrays(arr1, arr2) {
  let sortedArr = [];

    while (arr1.length > 0 && arr2.length > 0) {

        if (arr1[0] < arr2[0]) {
            sortedArr.push(arr1.shift())
        } else {
            sortedArr.push(arr2.shift())
        }

    }

    sortedArr = sortedArr.concat(arr1, arr2);
    return sortedArr;
}

export { mergeSortedArrays };
