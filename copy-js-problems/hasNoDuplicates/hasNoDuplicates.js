
function hasNoDuplicates(nums) {
  const set = new Set(nums);

  return set.size === nums.length;
}

export { hasNoDuplicates };
