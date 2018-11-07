/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here

  var temp = {};

  for(var i = 0; i < string.length; i++){
    if(!(string[i] in temp)){
      temp[string[i]] = 1;
    }
    else {
      temp[string[i]] += 1;
    }
  }

  if(Object.keys(temp).length === 1){
    return null;
  }

  for(var key in temp){
    if(temp[key] === 1){
      return key;
    }
  }


};
