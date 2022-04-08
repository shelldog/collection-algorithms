let dividend = 0;
let divisor = 1;

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

  let i = 0;
  let div = parseInt(dividend / divisor);

  if (Number.isInteger(div)) return div;
  return div;
};


console.log(divide(dividend, divisor));
