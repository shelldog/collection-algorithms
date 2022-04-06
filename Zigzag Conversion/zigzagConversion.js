let s = 'PAYPALISHIRING';
let numRows = 3;


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
  let g = numRows > 1 ? numRows - 2 : 0;
  let gap = numRows - 2;
  let ss = 0;
  let onGap = false;

  let w = '';

  for (let i = 0; i < numRows; i++) {
    ss++;
    onGap = false;

    if (i >= 1 && i <= numRows - 2) {
      let c = i;
      let r = numRows - 1 + gap - c;

      while (c < s.length && gap !== 0) {
        w += s[c] || ''; 
        if (onGap) {
          c += ss + (g - gap);
          onGap = !onGap;
        } else {
          c += r;
          onGap = !onGap;
        }
      }

      gap--;

    } else {
      let l = numRows - 1;
      let c = i;
      while (c < s.length) {
        w += s[c] || '';
        c += l + g + 1;
      } 
    }
  }

  return w;

};

console.log(convert(s, numRows));
