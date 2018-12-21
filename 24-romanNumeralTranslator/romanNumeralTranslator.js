
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var 예시 = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(로마숫자){
  // TODO: Implement me!
  // I, X, C, M / V, L, D
  if (typeof 로마숫자 !== "string") {
    return null;
  }
  let 결과값 = 0;
  // 로마숫자.forEach()
  for (let i = 0; i < 로마숫자.length; i++) {    
    if (예시[로마숫자[i]] < 예시[로마숫자[i+1]]) {
      const 임시값 = 예시[로마숫자[i+1]] - 예시[로마숫자[i]];
      결과값 += 임시값;
      i += 1;
    } else {
      결과값 += 예시[로마숫자[i]];
    }
  }
  
  return 결과값;

};


const result = translateRomanNumeral("CDXL");
console.log(result);
