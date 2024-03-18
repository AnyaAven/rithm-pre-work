
function flatten(nestedArr) {
  const flatArr = [];

  for(const val of nestedArr){

    if(Array.isArray(val)){
      flatArr.push(...val);

    } else {
      flatArr.push(val);
    }

  }

  return flatArr;
}

export { flatten };
