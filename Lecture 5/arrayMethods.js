//forEach loop in javascript
//arr.forEach(callback function)
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach(function printVal(
  val // Each value at each index
) {
  console.log(val);
});
//in general the callback function inside the  forEach written as arrow function

let cities = ["pune", "delhi", "mumbai", "guwahati"];

cities.forEach((val) => {
  console.log(val.toUpperCase());
});

//The callback function inside the  forEach loop take 3 parameters one is val the second one is index at every step and the last one is array itself.
//forEach  loop only used in array not in string
cities.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});
//
//
//
//forEach loop is called  Higher order Funcion or Higher order method
//
//
//
//HOF/HOM's are function who use other function as parameter or return some other funtion as value
//
//
//
// Where there is callback function they are called HOF/HOM
//
//
// Array map method Creates a new array with the results of some operation. The value its callback returns are used to form new array
let newArr = [34, 765, 78, 954, 34];

newArr.map((val, idx, arr) => {
  console.log(val, idx, arr);
});
//it is similar like forEach but return a new array
let numbers = newArr.map((val) => {
  return val ** 2;
});
console.log(numbers);

//filter method it used to filter a array eliments based on some condition it also create a new array

let findEven = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = findEven.filter((val) => {
  return val % 2 == 0;
});
//it will create a new array of even numbers
console.log(evenNumbers);
//
//
//
//reduce method performs some operations & reduces the array to a single value it returns that single value
let num = [1, 2, 3, 4, 5, 6, 76, 7];
const output = num.reduce((previous, current) => {
  return previous + current;
});
console.log(output);
