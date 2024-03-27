function sameFrequency(num1, num2) {

  const str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    const originalLength = str2.length;
    str2 = str2.replace(str1[i], "");

    if (originalLength === str2.length) return false;
  }

  return true;
}

export { sameFrequency };
