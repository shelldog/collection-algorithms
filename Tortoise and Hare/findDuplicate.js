let nums = [7, 1, 3, 4, 2]

var findDuplicate = function(nums) {
  let t = nums[0];
  let h = nums[0];

  while (true) {
    t = nums[t];
    h = nums[nums[h]]

    if (t === h) break;
  }

  let p1 = nums[0];
  let p2 = t;

  while (p1 != p2) {
    p1 = nums[p1];
    p2 = nums[p2]
  }

  return p1;
}

console.log(findDuplicate(nums));
