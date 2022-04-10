let s = "aaaabbbbcccc";
let p = "aaa*bbaa";
let strings = '';


var onSubstracting = function (pattern) {
  let isFalse = false;
  let iterate = 0;
  let len = pattern.length;

  for (let i = 0; i < len; i++) {
    

  }

  return isFalse;
};


var handlePatterns = function (p) {

  let patterns = [];
  let chars = '';

  for (let i = 0; i < p.length; i++) {
    
    if (!chars.length) {
      chars += p[i];
      continue;
    }

    if (p[i] === '*') {
      chars += p[i];
      patterns.push(chars);
      chars = '';
    }

    if (chars.at(-1) === p[i]) {
      /*
      if (p[i + 1] === '*') {
        patterns.push(chars);
        chars = '';
        chars += p[i]
      } else {
      */
        chars += p[i] 
      //}
    }
    else {
      if (chars.length) {
        patterns.push(chars); 
        chars = '';
        chars += p[i];
      }
    }
  }

  if (chars.length) {
    patterns.push(chars);
    chars = ''
  }

  return patterns;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

  // check if s and p is matching.
  if (s === p) return true;

  // if the pattern length is one. => handle different.
  if (p.length === 1) {
    if (p[0] === '.') {
      return true;
    }

    return s[0] === p[0];
  }

  strings = s;

  const patterns = handlePatterns(p);

  /*
  for (pattern of patterns) {
    const res = onSubstracting(pattern);
  }
  */

  return patterns;
};

console.log(isMatch(s, p));
