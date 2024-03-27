
function findInObj(arrOfObjs, key, value) {
  for (const obj of arrOfObjs) {
    if (key in obj && obj[key] === value) {
      return obj;
    }
  }

  return undefined;
}

export { findInObj };
