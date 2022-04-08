let nums = [0, 0, 0];
nums = [1,2,4,8,16,32,64,128]
// nums = [-4, 0, 1, 2]

let target = 82;


var threeSumClosest = function(nums, target) {

  // [-4, -1, 1, 2]
  let s = [];
  let res = 0;
  let len = undefined;

  nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let t = nums[i] + nums[left] + nums[right];

      if (t > target) {
        right--;
      } else {
        left++;
      }

      let rest = Math.abs(target - t);
      if (len === undefined) len = rest;

      if (rest <= len) {
        res = t;
        len = rest;
      }
    }

  }

  return res;
};


console.log(threeSumClosest(nums, target));
