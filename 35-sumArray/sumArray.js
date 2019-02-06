/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  let result = 0;

  if (array[array.length - 1] < 0) {
    for (let i = 0; i < array.length - 1; i++) {
      result = result + array[i]
    }
  } else if (array[array.length - 2] < 0) {
    let all = 0;
    let notAll = 0;

    for (i = 0; i < array.length; i++) {
      all = all + array[i]
    }

    for (i = 0; i < array.length - 2; i++) {
      notAll = notAll + array[i]
    }

    return all > notAll ? all : notAll

  } else {
    for (i = 0; i < array.length; i++) {
      result = result + array[i]
    }
  }

  return result;

  //-----

  // let result = 0;
  // let temp;

  // for (let i = 0; i < array.length; i++) {
  //   temp = result;
  //   result = result + array[i];

  //   return result > temp ? result : temp;
  
  // }
};

// const arr = [1,2,3];
// const result = sumArray(arr)
// console.log('result : ',result);

const arr = [4,-1,5]
const result = arr.sort().reverse()
console.log('sorted : ', result)
