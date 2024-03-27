
function nth(items, idx) {
  if (idx < 0) {
    idx = items.length + idx;
  }

  return items[idx];
}

export { nth };
