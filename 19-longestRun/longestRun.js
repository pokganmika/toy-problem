/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!

  let result = [0, 0];
  let longest = 1;
  let start = 0;
  let streak = 1;
  let current;

  for (let i = 0; i < string.length; i++) { 
    if (string[i] !== longest) {
      if (streak > longest) {
        longest = streak;
        result = [start, i - 1];
      }
      current = string[i]
      start = i;
      streak = 1;
    } else { 
      streak++
      if (streak > longest) { 
        result = [start, i];
      }
    }
  }
  return string.length > 0 ? result : null;

  //-----
  // let sorted = string.split('').sort().join() // str
  let sorted = string.split('').sort() // arr
  
  const tempObj = {};
  for (let i = 0; i < sorted.length; i++) { 
    if (sorted[i] in tempObj) { // if (tempObj[sorted[i]])
      tempObj[sorted[i]] += 1
    } else { 
      tempObj[sorted[i]] = 1
    }
  }

  // let temp;
  // for (i = 0; i < Object.keys(tempObj).length; i++) { 
  //   if ((Object.keys(tempObj)[i] < Object.keys(tempObj)[i + 1])
  //     && Object.keys(tempObj)[i + 1]) { 
  //     temp = Object.keys(tempObj)
  //   }
  // }

  // return temp;
  return tempObj
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

var temp = randomString(10);
console.log('temp check : ',temp);
var result = longestRun(temp);
console.log('result check : ', result);
