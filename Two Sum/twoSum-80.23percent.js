let nums = [7, 2, 13, 11, 8];
let target = 24;


var twoSum = function(nums, target) {
  let map = {};

  for (let i in nums) {
    let r = target - nums[i];

    if (!(r in map)) {
      map[nums[i]] = i
    } else {
      return [map[r], i]
    }
  }
};

console.log(twoSum(nums, target));
