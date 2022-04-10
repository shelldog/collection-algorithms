let nums = [1, 2, 3];


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, stack = [], result = []) {
  if (!nums.length) result.push([...stack]); 

  for (let i = 0; i < nums.length; i++) {
    const thisNums = nums.filter((val, index) => index !== i);

    stack.push(nums[i]);
    permute(thisNums, stack, result);
    stack.pop();
  }
 
  return result;
};

console.log(permute(nums));
