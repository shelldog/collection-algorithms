let s = "        -42";


let al = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '0': 0
};

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let b = 0;
  let isNeg = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue; 

    if (s[i] === '-') {
      isNeg = true;
      continue;
    }

    if (!(s[i] in al)) return 0;

    b = al[s[i]] + b * 10;
  }
  
  if (b < Math.pow(2, -31)) return Math.pow(2, -31);
  if (b > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  return isNeg ? b * -1 : b;
};

console.log(myAtoi(s));
