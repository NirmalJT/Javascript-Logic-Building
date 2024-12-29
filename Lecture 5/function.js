//writing funtion in js
function welcome() {
  console.log("Welcome to my code");
  console.log("We are learning js :)");
}
welcome();
// funciton with parameter
function Hello(name) {
  //parameter
  console.log(`Welcome to my home ${name}`);
}
Hello("Tony"); //argument
//function to add 2 numbers

function Sum(num1, num2) {
  //   console.log(num1 + num2);
  //local variable ->block scope
  console.log(num1);
  s = num1 + num2;
  console.log("before return");

  return s;
  console.log("after return"); //"not execute"
}
let val = Sum(4, 5);
// console.log(num1); //not defined
console.log(val);

//arrow function
//part of modern javascript

const substraction = (a, b) => {
  return a - b; 
};
const multiplication = (a, b) => {
  return a * b;
};

let sub = substraction(5, 6);
let mul = multiplication(5, 6);
console.log(`Substraction is ${sub} \n, Multiplication is ${mul}`);
