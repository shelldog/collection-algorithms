let nums = [-3, -2, -1, 0, 0, 1, 2, 3];
// nums = [-2, -1, 0, 1, 1, 2, 4, 5]
// nums = [-2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 2];
let target = 0;


var fourSum = function(nums, target) {

  let stack = [];
  
  nums.sort((a, b) => {
    return a - b;
  });


  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;


    for (let left = i + 1; left < nums.length - 2; left++) {
      if (left > i + 1 && nums[left] === nums[left - 1]) continue;

      let right = left + 1;
      let farRight = nums.length - 1;

      while (right < farRight) {
        let t = nums[i] + nums[left] + nums[right] + nums[farRight];

        if (t < target) {
          right++;
          while (nums[right] === nums[right - 1] && right < farRight) right++;
        }
        else if (t > target) {
          farRight--;
          while (nums[farRight] === nums[farRight + 1] && right < farRight) farRight--;
        } else {
          stack.push([nums[i], nums[left], nums[right], nums[farRight]]); 
          right++;
          farRight--;
          while (nums[right] === nums[right - 1] && right < farRight) right++;
          while (nums[farRight] === nums[farRight + 1] && right < farRight) farRight--;
        } 
       }

    }

  }

  return stack;
};

console.log(fourSum(nums, target));
