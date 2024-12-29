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
// Array map method