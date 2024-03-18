
function filterByKey(arrOfObjs, key) {
  return arrOfObjs.filter(obj => key in obj);
}

export { filterByKey };
