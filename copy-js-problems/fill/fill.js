
function fill(items, fillVal) {
  for (let i = 0; i < items.length; i++) {
    items[i] = fillVal;
  }

  return items;
}

export { fill };
