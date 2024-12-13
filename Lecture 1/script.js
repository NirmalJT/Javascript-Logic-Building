// console.log("message")  used to print message in the console
console.log("Hello world");
// Variables are containers for data
// 1) Variable names are case sensitive;

// 2) “a” & “A” is different.

// 3) Only letters, digits, underscore( _ ) and $ is allowed. (not even space)

// 4) Only a letter, underscore( _ ) or $ should be 1st character.

// 5) Reserved words cannot be variable names.

// var : Variable can be re-declared & updated. A global scope variable.

var a = 4;
var a = 5; //we can re-declare var variable
a = 10; //and also we can update var variable
console.log(a);

// let : Variable cannot be re-declared but can be updated. A block scope variable.

let b = 23;
// let b=25 not allowed cause we can not redeclared it
b = 5; //but we can update it

// const : Variable cannot be re-declared or updated. A block scope variable.

const c = 44;
// const c=55; not allowed we can not re-declared const variable
//c=55; not allowed we can not update a const

// Data Types in JS
console.log(
  "Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol"
);

let number = 21;
let string = "hello";
let boolean = false;
let Undefined;
let Null = null;
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBigInt = BigInt(9007199254740991); // Maximum safe integer + 1

console.log(`${number} and ${typeof number}`);
console.log(`${number} and ${typeof string}`);
console.log(`${number} and ${typeof boolean}`);
console.log(`${Undefined} and ${typeof Undefined}`);
console.log(`${Null} and ${typeof Null}`); //null is a object
console.log(`${bigNumber} and ${typeof bigNumber}`);
console.log(`${anotherBigInt} and ${typeof anotherBigInt}`);
// symbol datatype
let uniqueKey = Symbol("key");
let anotherUniqueKey = Symbol("key");
console.log(uniqueKey === anotherUniqueKey); // Output: false

// Let‘s Practice
// Qs1. Create a const object called “product” to store information shown in the picture.

// Objects are collection of data with multiple datatypes
const Product = {
  productName: "Ball pen",
  productRating: "4",
  productPrice: "200",
  productDiscount: "5%",
};
console.log(Product["productDiscount"]);
console.log(
  `${
    Product.productDiscount
  } and ${typeof Product} and ${typeof Product.productDiscount}`
);
console.log((Product.productDiscount = "10%")); // we can updata the data inside of object

//Social media profile object data;

const profile = {
  userName: "Nirmal Jyoti Thakuria",
  isFollow: true,
  message: "Hello",
  posts: 44,
  followers: 10000,
  userBio: "Softwar Devloper",
};

// printing the whole object

console.log(Product)
console.log(profile)