let nums = [7, 2, 13, 11, 8];
let target = 24;


var twoSum = function(nums, target) {
  let map = {};

  for (let i in nums) {
    let r = target - nums[i];

    if (r in map) {
      return [map[r], i]
    } else {
      map[nums[i]] = i
    }
  }
};

console.log(twoSum(nums, target));
