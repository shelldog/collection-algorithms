let x = 132;

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let isNe = false;

  if (x < 0) {
    isNe = true;
    x = Math.abs(x);
  }

  let b = 0;
  
  while (x > 0) {
    b = x % 10 + b * 10;     
    x = Math.floor(x / 10);
  }

  b = isNe ? b * -1 : b;

  if (b < Math.pow(-2, 31) || b > (Math.pow(2, 31) - 1)) return 0;
  return b;
};

console.log(reverse(x));
