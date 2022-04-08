let digits = '23';

const Letter = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let len = digits.length;
  let arr = [];

  if (!len) return [];


  const bfs = (pos, str) => {
    if (pos === len) arr.push(str);
    else {
      let l = Letter[digits[pos]];
      for (let i = 0; i < l.length; i++) {
        bfs(pos + 1, str + l[i])
      }
    }
  }

  bfs(0, "");

  return arr;
};


console.log(letterCombinations(digits));
