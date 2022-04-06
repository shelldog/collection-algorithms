let nums = [3, 2, 2, 3];
let val = 3

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (val === nums[i]) {
      nums.splice(nums.indexOf(val), 1);
      i--
    }
  }

  return nums
};

console.log(removeElement(nums, val));
