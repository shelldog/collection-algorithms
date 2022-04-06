let haystack = "aaaaaa";
let needle = "bba";


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let l = needle.length;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, l + i) === needle) return i;
  }

  return -1;
};


console.log(strStr(haystack, needle));
