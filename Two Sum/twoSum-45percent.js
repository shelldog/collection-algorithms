let nums = [3, 3];
let target = 6;


let twoSum = function(nums, target) {
  let result = [];

  nums.map((item, i) => {
    let rest = target - item;
    let a = nums.slice(i + 1, nums.length);
    
    if (a.includes(rest) && result.length != 2) {
      let length = nums.length - a.length + a.indexOf(rest);
      result.push(i);
      result.push(length);
    }
  });

  return result;
};

console.log(twoSum(nums, target));
