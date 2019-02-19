"use strict";
/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */
const toFraction = (number) => {
    // union type?
    // Your code here
    const frac = (number) => {
        if (number % 1 === 0) {
            // x. 0
            return `${number.toString()}/1`;
        }
        else if (number % 1 !== 0) {
            const checkFirst = number.toString()[0];
            if (checkFirst === '0') {
                // 0. ...
                let child = '';
                let parent = '1';
                let char = number.toString();
                for (let i = 2; i < char.length; i++) {
                    child = child + char[i];
                    parent = parent + '0';
                }
                child = Number(child);
                parent = Number(parent);
                for (let i = child; i > 0; i--) {
                    if (parent % i === 0 && child % i === 0) {
                        return `${child / i}/${parent / i}`;
                    }
                }
            }
            else {
                // x. ...
                let child = '';
                let parent = '1';
                let char = number.toString();
                for (let i = 0; i < char.length; i++) {
                    if (char[i] !== '.') {
                        child = child + char[i];
                    }
                    if (i > 1) {
                        parent = parent + '0';
                    }
                }
                child = Number(child);
                parent = Number(parent);
                for (let i = parent; i > 0; i--) {
                    if (parent % i === 0 && child % i === 0) {
                        return `${child / i}/${parent / i}`;
                    }
                }
            }
        }
        return '';
    };
    if (number.toString()[0] === '-') {
        let result = '';
        const temp = frac(number);
        for (let i = 0; i < temp.length - 1; i++) {
            result = result + temp[i];
        }
        return result;
    }
    else {
        return frac(number);
    }
};
// console.log('result : ', toFraction(0.5));
// console.log('result : ', toFraction(3.0));
// console.log('result : ', toFraction(2.5));
console.log('result : ', toFraction(-1.75)); // -7/4
console.log('end');
//# sourceMappingURL=fractionConverter.js.map