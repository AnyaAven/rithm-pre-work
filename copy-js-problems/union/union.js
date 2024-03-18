
function union(arrs) {
  const newSet = new Set();

  for(const arr of arguments){
    for(const val of arr){
      newSet.add(val);
    }
  }

  return Array.from(newSet);
}

export { union };
