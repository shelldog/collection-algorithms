let matrix = [[1,2,3],[4,5,6],[7,8,9]];


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length;
  let cor = 0;

  // flip the image.
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > cor; j--) {
      let foo = matrix[j][i];
     
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = foo;
    }

    cor++;
  }

  // trans.
  for (let i = 0; i < len; i++) {
    
    let left = 0;
    let right = len - 1;
    while (left < right) {
      let foo = matrix[i][left];

      matrix[i][left] = matrix[i][right];
      matrix[i][right] = foo;
      
      left++;
      right--;
    }
  } 

  return matrix;
};

console.log(rotate(matrix));
