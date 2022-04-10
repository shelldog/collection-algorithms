let nums1 = [1, 3];
let nums2 = [2];


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  
  let concatonated = nums1.concat(nums2).sort((a, b) => {
    return a - b;
  });
    
  let len = concatonated.length;
  let median = 0;

  if (len === 1) return concatonated[0];

  if (len % 2 === 0) {
    let middle = parseInt(len / 2);
    let backABit = middle - 1; 

    return parseFloat((concatonated[middle] + concatonated[backABit]) / 2);
  } else {
    
    let middle = parseInt(len / 2);

    return parseFloat(concatonated[middle]);
  }
};

console.log(findMedianSortedArrays(nums1, nums2));
