
function zip(arr) {

  const newMatrix = [];

  for(let i = 0; i < arr.length; i++){

    const newGroup = [];
    for(const arr of arguments){
      newGroup.push(arr[i]);
    }
    newMatrix.push(newGroup);
  }

  return newMatrix;
}

export { zip };
