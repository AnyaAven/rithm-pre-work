
function upperFirst(str) {
  if (str.length === 0) return str;

  const firstLetter = str[0].toUpperCase();

  return firstLetter + str.slice(1);
}

export { upperFirst };
