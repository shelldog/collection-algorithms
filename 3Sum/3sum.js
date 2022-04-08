let nums = [-1,0,0,1,2,-1,-4];


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  let s = [];
  
  nums.sort((a, b) => {
    return a - b;
  })

  // [-1, -1, 0, 1, 2].

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let t = nums[i] + nums[l] + nums[r];
      if (t > 0) {
        r--;
      } else if (t < 0) {
        l++;
      } else {
        s.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      }
    }
  }

  return s;
};

console.log(threeSum(nums));
