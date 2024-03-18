
function firstAndLast(words) {
  return words.map(v => v[0] + v[v.length - 1]);
}

export { firstAndLast };
