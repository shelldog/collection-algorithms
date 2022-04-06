let height = [1, 1];


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  let m = 0, i = 0, j = height.length - 1;

  while (i < j) {
    m = Math.max(m, Math.min(height[i], height[j]) * (j - i));
    height[i] <= height[j] ? i++ : j--;
  }
  
  return m;
};

console.log(maxArea(height));
