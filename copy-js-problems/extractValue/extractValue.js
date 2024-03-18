
function extractValue(arrOfObjs, key) {
  return arrOfObjs.reduce((acc, obj) => {

    if(key in obj){
      acc.push(obj[key]);
    }

    return acc;
  }, []);
}

export { extractValue };
