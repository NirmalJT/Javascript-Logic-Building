//Qs. For a given array of numbers, print the square of each value using the forEach loop.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((val) => {
  console.log(val * val);
});

////////// other method
let calSquare = (val) => {
  console.log(val ** 2);
};

arr.forEach(calSquare);
