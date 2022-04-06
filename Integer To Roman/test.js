let num = 1994;


let romans = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
};
let range = [1, 5, 10, 50, 100, 500, 1000];
let cases = {
  4: 'IV',
  9: 'IX',
  40: 'XL',
  90: 'XC',
  400: 'CD',
  900: 'CM'
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  
  let l = num.toString().length - 1;
  let w = '';

  while (num > 0) {
    let d = Math.floor(num / Math.pow(10, l)) * Math.pow(10, l);
    num %= Math.pow(10, l);


    if (d in cases) {
      w += cases[d];
    }
    else {
      while (d > 0) {
        let inp = 0; 
        for (let i = range.length - 1; i >= 0; i--) {
          if (d >= range[i]) {
            inp = range[i]
            break;
          } 
        }

        w += romans[inp];
        d -= inp;
      }
    } 

    l--
  }

  return w;
};

console.log(intToRoman(num));
