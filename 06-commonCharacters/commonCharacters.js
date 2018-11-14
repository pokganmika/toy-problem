/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(...arg) {//var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  
  var result = [];
  var arr = arg;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; i < arr[i].length; j++) {
      var trueCount = 0;
      for (var k = 0; k < arr.length; k++) {
        if (arr[k].includes(arr[i][j])) {
          trueCount++;
        } else if (trueCount === arr.length - 1) {
          result.push(arr[i][j]);
        }
      }
    }
  }
  console.log(result);
  
  //-----

  // let long;
  // let short;
  // if (string1.length > string2.length) {
  //   long = string1;
  //   short = string2;
  // } else if (string1.length < string2.length) {
  //   long = string2;
  //   short = string1;
  // } else {
  //   long = string1;
  //   short = string2;
  // }

  // var temp = [];
  // for (let i = 0; i < long.length; i++) {
  //   if (short.includes(long[i])) {
  //     temp.push(long[i])
  //   }
  // }

  // var result = temp.join('');
  // return result;

  //-----
  
  // var temp = [];
  // for (let i = 0; i < string1.length; i++) {
  //   if (string2.includes(string1[i])) {
  //     temp.push(string1[i])
  //   }
  // }

  // var result = temp.join('');
  // return result;

};

// commonCharacters('acexivou', 'aegihobu');
commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa');