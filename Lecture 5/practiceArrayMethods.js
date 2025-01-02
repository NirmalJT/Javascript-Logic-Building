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
//Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

let marks = [
  56, 87, 90, 98, 96, 94, 93, 99, 92, 45, 64, 72, 86, 77, 55, 44, 35,
];

//Question 1
let marks_90_Student = marks.filter((val) => {
  return val > 90 || val == 90;
});
console.log(
  `The  marks of array that  more 90 or 90 is : [${marks_90_Student}]`
);
//Question 2

let n = prompt("Enter a number");
Array = [];
for (let i = 1; i <= n; i++) {
  Array[i - 1] = i;
}
alert(`Your array is ${Array}`);
//Question 2 -i)

let sum_of_marks = Array.reduce((previous, current) => {
  return previous + current;
});
alert(`The sum of all numbers in the  array  is : [${sum_of_marks}]`);
//Question 2 -ii)
let product_Of_Marks = Array.reduce((previous, current) => {
  return previous * current;
});

alert(`The product of all numbers in the  array  is : [${product_Of_Marks}]`);
