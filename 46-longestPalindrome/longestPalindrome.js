/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

const longestPalindrome = string => {
  let resultLength = 0, result = '';

  for (let i = 0; i < string.length; i++) { 
    let ascen = string.substring(i, string.length);

    for (let j = ascen.length; j >= 0; j--) { 
      let dscen = ascen.substring(0, j);

      if (palCheck(dscen)) { 
        if (dscen.length > resultLength) { 
          result = dscen;
          resultLength = dscen.length;
        }
      }
    }
  }
  return result;
};

const palCheck = string => {
  const reverse = string.split('').reverse().join('');
  return string === reverse ? true : false;
  // return string === reverse;
}

console.log('result : ',longestPalindrome("My dad is a racecar athlete"));
