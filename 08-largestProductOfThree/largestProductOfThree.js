/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // TODO: everything
  let arr = array;
  arr = arr.sort((a, b) => a - b);

  if (arr[arr.length - 1] < 0) {
    return arr[arr.length-3] * arr[arr.length-2] * arr[arr.length-1];
  } 
  else if (arr[1] < 0) {
    return arr[0] * arr[1] * arr[arr.length - 1];
  }  
  else {
    return arr[arr.length-3] * arr[arr.length-2] * arr[arr.length-1];
  }
};
