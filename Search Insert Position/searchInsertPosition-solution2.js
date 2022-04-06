let nums = [1, 3, 5, 6];
let target = 2;


var searchInsert = function(nums, target) { 
  let i = 0;

  while (i < nums.length) {
    if (target <= nums[i]) return i
    i++
  }
  return i;
}

console.log(searchInsert(nums, target));
