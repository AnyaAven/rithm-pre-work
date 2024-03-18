
function hasCertainKey(arrOfObjs, key) {
  return arrOfObjs.every(obj => key in obj)
}

export { hasCertainKey };
