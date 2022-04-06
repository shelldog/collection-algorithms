console.time('start')
let hayStack = "hello";
let needle = "bba"

var strStr = function (hayStack, needle) {

  return hayStack.indexOf(needle)
}

console.log(strStr(hayStack, needle));
console.timeEnd('start')
