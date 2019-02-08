/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  const storage = {};

  for (let i = 0; i < arr.length; i++) { 
    if (!storage[arr[i]]) {
      storage[arr[i]] = 1
    } else { 
      storage[arr[i]] += 1
      // if (storage[arr[i]] === 2) { 
      //   return arr[i]
      // }
    }
  }

  for (i = 0; i < arr.length; i++) {
    if (storage[arr[i]] === 2) return arr[i];
  }

};

// var onlyEven = evenOccurrence(['meow', 2, 1, 'meow']);
var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven);
