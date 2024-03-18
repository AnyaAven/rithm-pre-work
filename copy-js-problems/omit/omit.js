
function omit(obj, keys) {
  const newObj = {};

  for(const key in obj){
    if(keys.includes(key)){
      //omit
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

export { omit };
