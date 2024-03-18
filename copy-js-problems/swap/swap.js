
function swap(items, idx1, idx2) {
  const first = items[idx1];
  const last = items[idx2];

  items[idx1] = last;
  items[idx2] = first;

  return items;
}

export { swap };
