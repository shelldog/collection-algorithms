let nums = [1, 3, 5, 6]
let target = 2;

var searchInsert = function(nums, target) {
    if (!nums.includes(target)) {
        nums.push(target);
        nums.sort(function (a, b) {
            return a - b;
        });
    }
    
    return nums.indexOf(target)
}

console.log(searchInsert(nums, target));
