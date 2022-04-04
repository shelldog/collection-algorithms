console.time('start');
let strs = ['dog', 'racecar', 'car'];

var longestCommonPrefix = function(strs) {
  let bW = strs[0]

  for (let i = 1; i < strs.length; i++) {

    let j = 0;
    let cT = '';
    let bT = '';
    while(true) {
      let n = strs[i][j]
      cT += n; 

      if (bW.slice(0, j + 1) !== cT) {
        bW = bT;
        break; 
      }

      bT += n;
      j++;
    }    
  }

  return bW;
}

console.log(longestCommonPrefix(strs));
console.timeEnd('start')
