/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){

  var result = [''];
  var one = str.split('').sort();
  result = result.concat(one);
  
  var find = (length) => {

    if (length > one.length) {
      return result;
    } else {
      var temp = [];
      for (var i = 0; i < one.length; i++) {
        for(var j = 0 ; j < )
      }
      result = result.concat(temp);
      find(length + 1);
    }

  }

  return find(2)
}
