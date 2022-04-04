console.time('start');
let s = '(((([[[]]])' 

const o = ['(', '{', '['];
const m = {
  '(': ')',
  '{': '}',
  '[': ']'
};


const isValid = function(s) {
  const a = [];

  for (let i = 0; i < s.length; i++) {
    let cI = s[i];

    if (o.includes(cI)) a.push(cI);
    else {
      if (cI !== m[a.at(-1)]) return false;
      else a.pop();
    }
  }

  return a.length === 0 ? true : false;
};

console.log(isValid(s));
console.timeEnd('start');
