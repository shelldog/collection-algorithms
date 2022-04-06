let s = "";

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

  let st = 0;
  let en = 0;

  let m = 0;

  const unique = new Set();

  while (en < s.length) {
    if (!unique.has(s[en])) {
      unique.add(s[en]);
      en++;
      m = Math.max(m, unique.size);
    } else {
      unique.delete(s[st]);
      st++;
    }
  }

  return m;
};

console.log(lengthOfLongestSubstring(s))
