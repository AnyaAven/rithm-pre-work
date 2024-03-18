
function clamp(val, lowerBound, upperBound) {
  if(val >= lowerBound && val <= upperBound) return val;

  if( val < lowerBound) return lowerBound;

  if(val > upperBound) return upperBound;

}

export { clamp };
