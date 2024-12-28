console.log("lets learn Arrays in javascrpt");
//Arrays in javascript
//Arrays are immutable but strings are not
let marks = [43, 65, 76, 76, 44, 77, 66, 75, 78];
marks[0] = "hello";
console.log(marks);
console.log(typeof marks);
let MarvelHeros = [
  "IronMan",
  "Hulk",
  "SpiderMan",
  "Thor",
  "CaptainAmerica",
  "AntMan",
];
console.log(MarvelHeros);
console.log(marks[0]);
console.log(MarvelHeros[5]);
console.log(MarvelHeros.length);
//print all the element of the array using loop
//Print array using for loop

for (let index = 1; index < MarvelHeros.length; index++) {
  console.log(`Element no ${index} is ${MarvelHeros[index - 1]}`);
}

//print the element of the array using for of array

for (let MarvelHero of MarvelHeros) {
  console.log(MarvelHero);
}
//Array methods
//Array's are mutable
let foodItems = ["potato", "apple", "mango", "tomato"];
console.log(foodItems);
foodItems.push("litchi", "orrange");
console.log(foodItems);
console.log(foodItems.pop());
console.log(foodItems);
//toString() method does not chnage the original array
let studentMarks = [99, 77, 88, 33, 66, 22, 66];
console.log(studentMarks.toString());
console.log(foodItems.toString());
//concat() used to concat two arrays this method also dont change the original array
console.log(foodItems.concat(marks));
//shift & unshift  used to add eliment in the begining of the array

foodItems.unshift("chips", "burger");
console.log(foodItems);
console.log(foodItems.shift());
console.log(foodItems);
//Slice() method return a piece of array
//it does not change the original array
console.log(studentMarks.slice(1, 3));
//splice() change original array (add , remove , replace)

let arrr = [1, 2, 3, 4, 5, 6, 7];
arrr.splice(2,2,"Kriss","Tony")
console.log(arrr)
