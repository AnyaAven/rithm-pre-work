
function linearSearch(items, searchVal) {
  for(let i = 0; i < items.length; i ++){
    const item = items[i];
    if(item === searchVal) return i;
  }

  return -1;
}

export { linearSearch };
