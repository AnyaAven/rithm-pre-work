
function rangeInArray(nums, start = 0, end = nums.length - 1) {
  let sum = 0;

  if(nums.length === 0) return sum
  if(end > nums.length - 1) {
    end = nums.length - 1
  }

  console.log(nums, start, end)

  for(let i = start; i < end + 1; i++){
    sum += nums[i];
  }

  return sum;
}

export { rangeInArray };
