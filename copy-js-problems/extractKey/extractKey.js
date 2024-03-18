
function extractKey(arrOfObjs, key) {
  return arrOfObjs.map(obj => obj[key]);
}

export { extractKey };
