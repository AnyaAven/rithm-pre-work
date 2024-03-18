
function zipObject(keys, vals) {
  const obj = {};

  for(let i = 0; i <keys.length; i++){
    obj[keys[i]] = vals[i];
  }

  return obj;
}

export { zipObject };
