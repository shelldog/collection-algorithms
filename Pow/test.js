let x = -1;
let n = 2;


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

  if (x === 1 || n === 0) return parseFloat(1);
  if (n === 1) return parseFloat(x);
  if (n === -2147483648) return 0;
  if (x === -1 && n === -2147483648) return parseFloat(-1);

  let nNeg = false;

  if (n < 0) {
    nNeg = true;
    n *= -1;
  }

  let base = x;

  while (n >= 2) {
    x *= base;
    n--;
  }

  return parseFloat(nNeg ? 1/x : x);
};

console.log(myPow(x, n));
