"use strict";
// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.
const multiply = (x, y) => {
    // TODO: should return the product of x * y
    let sum = 0;
    let i = 0;
    while (i < y) {
        sum += x;
        i++;
    }
    return sum;
};
const divide = (x, y) => {
    // TODO: should return the product of x * y
    let target = x;
    let count = 0;
    while (target > 0) {
        ``;
        target -= y;
        count++;
    }
    return count;
};
const modulo = (x, y) => {
    // TODO: should return the remainder of x / y
    let target = x;
    while (target > y) {
        target -= y;
    }
    return target !== y ? target : 0;
};
// TODO: should return the remainder of x / y
console.log("multiply check : ", multiply(3, 3));
console.log("divide check : ", divide(3, 3));
console.log("modulo check : ", modulo(3, 3));
console.log("check end");
//# sourceMappingURL=implementingOperators.js.map