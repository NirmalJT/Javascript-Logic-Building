console.log("Lets learn Conditional Statement");

// Voting
// if statemet
let age = 19;
if (age >= 18) {
  console.log("You can vote");
}
if (age < 18) {
  console.log("You can not vote");
}

// if else statement

// Adult

if (age >= 18) {
  console.log("You are a adult");
} else {
  console.log("You are not adult");
}
//Even odd
let number = 16;

if (number % 2 == 0) {
  console.log(number, "is even");
} else {
  console.log("is odd");
}

// dark mode
let mode = "dark";
let color;
if (mode === "dark") {
  console.log((color = "white"));
} else {
  console.log((color = "black"));
}
// else if statement
// junior seneior middle identification

if (age <= 18) {
  console.log("Junior");
} else if (age > 60) {
  console.log("Senior");
} else {
  console.log("Middle");
}

// single line if statement
if ((mode = "dark")) console.log(mode);
// Ternary operators
// Condition ? true output :false output
age > 18 ? console.log("you can drink") : console.log("You can not drink");

// practice question 1
// To check a number is multiple of 5 or not

let number1 = prompt("Enter your number");
if (number1 === null || isNaN(number1)) {
  console.log(number1, "Enter a valid no");
} else {
  number1 = Number(number1); //conversion of string to number after taking input from promt
  if (number1 % 5 === 0) {
    console.log(number1, "is a multiple of 5");
  } else {
    console.log(number1, "is not a multiple of 5");
  }
}

// practice Question 2
// Symple Grade system using if else statement

let marks = prompt("Enter your marks");
let Grade;
if (isNaN(marks) || marks < 0 || marks > 100) {
  console.log("Please enter a valid no between 0 to 100 ");
} else {
  if (marks >= 90 && marks <= 100) {
    Grade = "A";
  } else if (marks >= 70 && marks <= 89) {
    Grade = "B";
  } else if (marks >= 60 && marks <= 69) {
    Grade = "C";
  } else if (marks >= 50 && marks <= 59) {
    Grade = "D";
  } else if (marks >= 0 && marks <= 49) {
    Grade = "F";
  }
  console.log(`You god ${marks} and your grade is ${Grade}`);
}
