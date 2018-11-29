/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {

  var min = 0;
  var max = array.length - 1;

  while (min <= max) {
    var mid = Math.floor((min + max)/2);
    if (target === array[mid]) {
      return mid;
    }
    if (array[mid] <= array[max]) { 
      if (target < array[mid] || array[max] < target) {
        max = mid - 1;
      } else {
        min = mid + 1;

      }
    } else if (array[min] <= array[mid]) { 
      if (target < array[min] || array[mid] < target) {
        min = mid + 1;
      } else {
        max = mid - 1;

      }
    }
  }

  return null;
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // [3]