
function addKeyAndValue(arrOfObjs, key, val) {
  for(const obj of arrOfObjs){
    obj[key] = val;
  }

  return arrOfObjs;
}

export { addKeyAndValue };
