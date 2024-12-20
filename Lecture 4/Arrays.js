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
