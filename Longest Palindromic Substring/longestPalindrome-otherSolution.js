let s = 'bb';

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

  let len = s.length;

  let res = '';
  let resLen = 0;

  for (let i = 0; i < len; i++) {
    let l = i;
    let r = i;
    while (l >= 0 && r < len && s[r] === s[l]) {
      if ((r - l + 1) > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      } 

      l--;
      r++;
    }
  }

  for (let i = 0; i < len; i++) {
    let l = i;
    let r = i + 1;
    while (l >= 0 && r < len && s[r] === s[l]) {
      if ((r - l + 1) > resLen) {
        res = s.slice(l, r + 1);
        resLen = r - l + 1;
      }
      l--;
      r++;
    }
  }


  return res;
};

console.log(longestPalindrome(s));
