let nums = [3, 0, 3, 3];


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, stack = [], result = []) {
  let matchs = [];

  if (!nums.length) result.push([...stack]); 

  for (let i = 0; i < nums.length; i++) {
    if (!matchs.includes(nums[i])) {
      matchs.push(nums[i]);

      const thisNums = nums.filter((val, index) => index !== i);

      stack.push(nums[i]);
      permute(thisNums, stack, result);
      stack.pop();
    }
  }

  return result;
};

var permuteUnique = function(nums) {
  let res = permute(nums);

  return res;
}

console.log(permute(nums));
