let s = "+-32";


let n = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '-': '-',
  '+': '+',
  ' ': '',
}

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

  let p = [];
  let w = '';
  
  if (!(s[0] in n)) return 0; 

  for (let i = 0; i < s.length; i++) {
    if (s[i] in n) w += s[i];
    if (!(s[i] in n)) break;
  }

  let b = 0;
  let neg = false;
  console.log(w)
  w = parseInt(w);

  if (w < Math.pow(-2, 31)) return Math.pow(-2, 31);
  if (w > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  return w || 0;
};

console.log(myAtoi(s));
