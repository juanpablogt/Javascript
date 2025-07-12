const string = "123";
const number = Number(string);
// console.log(number); // 123
// console.log(typeof number); // "number"

const stringDecimal = "123.45";
const numberDecimal = Number(stringDecimal);
// console.log(numberDecimal); // 123.45

// convertir binario a decimal

const binaryString = "11";
const decimalFromBinary = parseInt(binaryString,2);
console.log(decimalFromBinary);
console.log(typeof decimalFromBinary); // "number"