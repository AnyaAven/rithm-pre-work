
function hasOnlyOddNumbers(nums) {
  return nums.every(v => v % 2 === 1);
}

export { hasOnlyOddNumbers };
