
function twoArrayObject(keys, vals) {
  const obj = {};

  let i = 0;
  for (const key of keys) {
    const val = (vals[i] === undefined)
      ? null
      : vals[i];

    obj[key] = val;

    i++;
  }

  return obj;
}

export { twoArrayObject };
