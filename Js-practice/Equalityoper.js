// Equality (==)

// console.log(1 == 1);
// // expected output: true

// console.log('hello' == 'hello');
// // expected output: true

// console.log('1' ==  1);
// // expected output: true

// console.log(0 == false);
// // expected output: true

//Comparison with no type conversion

// console.log(1 == 1); // true
// console.log("hello" == "hello"); // true

//Comparison with type conversion

// console.log("1" == 1); // true
// console.log(1 == "1"); // true
// console.log(0 == false); // true
// console.log(0 == null); // false
// console.log(0 == undefined); // false
// console.log(0 == !!null); // true, look at Logical NOT operator
// console.log(0 == !!undefined); // true, look at Logical NOT operator
// console.log(null == undefined); // true


const number1 = new Number(3);
const number2 = new Number(3);
console.log(number1 == 3); // true
console.log(number1 == number2); // false

