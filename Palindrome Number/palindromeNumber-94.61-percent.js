let x = 121;

var isPalindrome = function(x) {
  let b = 0;
  let c = x;

  while(c > 0) {
    b = b * 10 + c % 10;
    c = Math.floor(c / 10);
  }

  return b === x;
}

console.log(isPalindrome(x))
