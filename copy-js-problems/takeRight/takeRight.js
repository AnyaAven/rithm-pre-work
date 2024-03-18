
function takeRight(items, n = 1) {

  if(n > items.length){
    return Array.from(items);
  }

  const newArr = [];

  for(let i = 1; i <= n; i++){
    const lastItem = items[items.length - i];
    newArr.push(lastItem);
  }

  return newArr.reverse();
}

export { takeRight };
