let nums = [3, 2, 1];


var detect = function(nums, stack, result = []) {

  if (!nums.length) result.push([...stack]);

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((val, index) => index !== i); 

    stack.push(nums[i]); 
    detect(newNums, stack, result);
    stack.pop();
  }

  return result;
}

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
  let stack = [];
  stack.push(nums[0]);

  const diffNums = nums.filter((val, index) => index !== 0);

  let result = detect(diffNums, stack);

  return result;
};

console.log(nextPermutation(nums));
