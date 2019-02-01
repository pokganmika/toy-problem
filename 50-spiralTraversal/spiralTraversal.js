/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){

  // TODO: Implement me!
  const result = [];

  const makeSpiral = function(arr) {

    if (arr.length === 0) return;
    
    const firstRow = arr.splice(0,1)
    for (let i = 0; i < firstRow.length; i++) {
      result.push(firstRow[i])
    }

    for (i = 0; i < arr.length; i ++) {
      if (arr[i] !== arr[arr.length - 1]) {
        let lastElement = arr[i].splice(arr[i].length - 1, 1)
        result.push(lastElement);
      } else if (arr[i] === arr[arr.length - 1]) {
        let lastRow = arr.splice(arr.length - 1, 1)
        result.push(lastRow[0].reverse());
      }
    }
    makeSpiral(arr);
  }
  makeSpiral(matrix);

  const re = [];
  for(let i = 0; i < result.length; i++){
    for(let j = 0; j < result[i].length; j++){
      re.push(result[i][j]);
    }
  }
  return re;
  // return result;
};
