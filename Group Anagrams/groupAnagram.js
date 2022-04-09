let strs = ["eat","tea","tan","ate","nat","bat"];
strs = [""]



const groups = {};

var splitGroups = function (strs) {
  
  for (let i = 0; i < strs.length; i++) {
    let len = strs[i].length;

    if (len in groups) {
      groups[len].push(strs[i]);
    } else {
      groups[len] = [];
      groups[len].push(strs[i]);
    }
  }
};

var recursiveGroup = function (value, result, key) {
  // the value is empty, we don't need to do shit.
  if (value.length === 0) return;
  if (value.length === 1) {
    result.push([value[0]]);
    return;
  }

  // instances.
  let stack = [];
  let boiler = [];
  let iterate = 0;

  
  // check if the first value in array is existed and also the stack.
  if (stack.length === 0) {
    for (let i = 0; i < value[0].length; i++) {
      stack.push(value[0][i]);
    }
    boiler.push(value.splice(0, 1)[0]);
  }

  // loop this.
  for (let i = 0; i < value.length; i++) {
    for (let j = 0; j < key; j++) {
      if (stack.includes(value[i][j])) {
        iterate++;
      };
    }

    if (iterate === parseInt(key)) {
      boiler.push(value.splice(i, 1)[0]);
      i--;
    }


    iterate = 0;
  }
  
  result.push(boiler);
  recursiveGroup(value, result, key);
}

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
  // instances.
  const result = [];
    
  // splitting the groups.
  splitGroups(strs); 

  // on-action.
  for ([key, value] of Object.entries(groups)) {

    // it array length is 1. => push to the result.
    if (value.length === 1) {
      result.push(value)
      continue;
    }
    recursiveGroup(value, result, key);
  }

  return result;
};

console.log(groupAnagrams(strs));
