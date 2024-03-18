
function hammingDistance(str1, str2) {

  if(str1.length !== str2.length) return NaN;

  let diff = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for(let i = 0; i < str1.length; i++){
    const char1 = str1[i];
    const char2 = str2[i];

    if(char1 !== char2){
      diff++
    }
  }

  return diff;
}

export { hammingDistance };
