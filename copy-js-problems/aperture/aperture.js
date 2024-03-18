
function aperture(size, nums) {
  if (size > nums.length || size === 0) return [];

    const newArr = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const lastNum = nums[nums.length - 1];

        //create sub arrays
        const subArr = [];
        for (let j = 0; j < size; j++) {
            subArr.push(num + j);

            //if we have added our last num, we can stop
            if (num + j === lastNum) {
                newArr.push(subArr);
                return newArr;
            }
        }
        newArr.push(subArr);

    }
}

export { aperture };
