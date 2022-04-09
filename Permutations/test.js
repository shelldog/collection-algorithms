let nums = [1, 2, 3];


var permutes = function(nums, set = [], answers = []) {

    if (!nums.length) {
      answers.push([...set])
    }
    
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.filter((n, index) => index !== i);
      set.push(nums[i])
      permuteUnique(newNums, set, answers); 
      set.pop();
    }
    
    return answers;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums, set = [], answers = []) {

    permutes(nums, set, answers);

    return answers;
};


console.log(permuteUnique(nums));
