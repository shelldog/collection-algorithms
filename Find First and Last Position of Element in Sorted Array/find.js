let nums = [5,7,7, 7,8,8,10], target = 7;


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let len = nums.length;
  if (!len) return [-1, -1];

  let stack = [];
  let index = -1;

  for (let i = 0; i < nums.length; i++) {
    if (!stack.length && nums[i] === target) {
      index = i; 
      stack.push(nums[i]);
    } 
    else if (stack && nums[i] === target) stack.push(nums[i]);
  }

  if (index < 0) return [-1, -1];
  return [index, stack.length + index - 1];
};

console.log(searchRange(nums, target));
