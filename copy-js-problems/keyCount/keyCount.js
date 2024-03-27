
function keyCount(arrOfObjs) {
  const freqKeyCount = {};

  for (const obj of arrOfObjs) {

    for (const key in obj) {
      if (key in freqKeyCount) {
        freqKeyCount[key]++;
      } else {
        freqKeyCount[key] = 1;
      }
    }

  }

  return freqKeyCount;
}

export { keyCount };
