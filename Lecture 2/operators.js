// Operators in javascript
// an operator is a symbol or function that performs an action on an operand
// Used to perform some operations on data

let num1 = 5;
let num2 = 2;
// Arithmetic Operators
// 1. Addition (+)
let Addition = num1 + num2;
console.log(Addition);
// 2. Subtraction (-)
let Substraction = num1 - num2;
console.log(Substraction);
// 3. Multiplication (*)
let Multiplication = num1 * num2;
console.log(Multiplication);
// 4. Division (/)
let Division = num1 / num2;
console.log(Division);
// 5. Modulus (%)
let Modulus = num1 % num2; // will give the remainder
console.log(Modulus);
// 6. Exponentiation (**)
let Exponentiation = num1 ** num2;
console.log(Exponentiation);
//Unary operaor
// 7. Increment (Post and Pre)
// Post-increment: Increases the value AFTER returning the current value
console.log(num1++);
console.log(num1);

// Pre-increment: Increases the value BEFORE returning it
console.log(++num2);
console.log(num2);
// 8. Decrement (Post and Pre)
let num3 = 10;
let num4 = 20;
// Post-decrement: Decreases the value AFTER returning the current value
console.log(num3--);
console.log(num3);

// Pre-decrement: Decreasesy the value BEFORE returning it
console.log(--num4);
console.log(num4);

// Assignment operator
console.log((num3 += 5)); // num3 = num3 + 5
console.log((num4 -= 5)); // num4 = num4 - 5
console.log((num3 *= 5)); // num3 = num3 * 5
console.log((num4 /= 5)); // num4 = num4 / 5
console.log((num3 %= 5)); // num3 = num3 % 5
console.log((num4 **= 5)); // num4 = num4 ** 5
// Comparision operator
let data1 = 25;
let data2 = 20;
let data3 = "25";
//Equal to
console.log(data1 == data2);
console.log(data1 == data3); // to check equal to but it only check the value it will not check the datatype
// Equal to & type
console.log(data1 === data3); // it is a strict version of equal to it will check the datatype also ( eqal to & type)
// not equal to
console.log(data1 != data2);
// not equal to and type it will also check the data type
console.log(data1 !== data3);
console.log(data1 > data2);
console.log(data1 < data2);
console.log(data1 >= data2);
console.log(data1 <= data2);

// Logical operators
// Logical AND
console.log(data1>data2 && data2>data1); // it will check both the condition both condition needs to be correct then it will return true 
// Logical OR
console.log(data1>data2 || data2>data1) //it will only check only one condition if one codition is true it will return true 
// Logical NOT
console.log(!data1) //if true it will return false if false it will return true

// Conditional Statements
