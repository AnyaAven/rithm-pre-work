
function hasCertainValue(arrOfObjs, key, val) {
  return arrOfObjs.every(obj => obj[key] === val);
}

export { hasCertainValue };
