const nums = [0,0,1,1,1,2,2,3,3,4];


const removeDuplicates = function(nums) {
  let left = 1;
  let right = 1;
  const len = nums.length;

  while (right < len) {
    if (nums[right] !== nums[right - 1]) {
      nums[left] = nums[right];
      console.log(nums)
      left += 1;
    }

    right += 1;
  }

  console.log(nums);
  return left;
}

console.log(removeDuplicates(nums));
