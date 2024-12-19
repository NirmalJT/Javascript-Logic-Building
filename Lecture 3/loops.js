console.log("Lets learn loop in javascript");

// FOR LOOP

//  print your name 1 to 5 or more times using loop

for (let i = 0; i <= 5; i++) {
  console.log("Nirmal Jyoti Thakuria");
}

// Calculate sum of 1 to n Number

let sum = 0;

for (let i = 0; i <= 5; i++) {
  sum = sum + i;
}

console.log("Sum is ", sum);

// Some importants thing block scope and globle scope variable
for (var j = 1; j <= 6; j++) {
  console.log("j is", j);
}

console.log(j);

// while loop
let i = 1; //initialization
while (i <= 6) {
  console.log("While loop running");
  i++; //updation condition
}

//do-while loop

do {
  console.log(
    "I am do while loop i will run atlist one time irespective of the condition"
  );
} while (i == -1);
let m = 0;
do {
  console.log("m =", m);
  m++;
} while (m <= 5);

// for of loop helps to use loop in strings and arrays
let str = "NirmalJyotiThakuria";
let size = 0;
for (let val of str) {
  console.log("val is ", val);
  size++;
}
console.log("Size of str", size);
//for in loop used in objects

let student = {
  name: "Nirmal Jyoti Thakuria",
  class: "Bsc 6th sem",
  age: 20,
  income: 0,
  haveGirlfriend: false,
};

for (let key in student) {
  console.log("key is", key, ":", "value is", student[key]);
}
