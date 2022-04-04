let s = "MCMXCIV"

const romans = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

const cases = {
  'I': ['V', 'X'],
  'X': ['L', 'C'],
  'C': ['D', 'M'] 
}

var romanToInt = function(s) {
  let sum = 0; 

  // O(n):
  for (let i = 0; i < s.length; i++) {
    let r = s[i];

    if (i + 1 < s.length) {
      // substraction cases.
      if (s[i] in cases) {
        let m = s[i + 1];

        if (cases[s[i]].includes(m)) {
          i++;
          sum += romans[s[i]] - romans[r];
        } else {
          sum += romans[r]
        }
      } else {
        sum += romans[r]
      }
    } else {
      sum += romans[r]
    }
  }    

  return sum;
}

console.log(romanToInt(s));
