
function sumLessThan(nums, numMax) {
  const lessThan = nums.filter(v => v < numMax);

  return lessThan.reduce((sum, v) => sum + v, 0);
}

export { sumLessThan };
