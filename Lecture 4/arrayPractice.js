//For a given array with marks of students -> [85,97,44,37,76,60] find the avearage marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let mark of marks) {
  sum += mark;
}
let avearage = sum / marks.length;
console.log(`Average marks of the entire class is = ${avearage}`);

//For a given array with prices of 5 items ->[250,645,300,900,50] all items have an offer of 10% off on them.change the array to store final price  after  applying offer.

let items = [250, 645, 300, 900, 50];

let i = 0;
for (let item of items) {
  let 
  discountedPrice = item / 10;
  item = discountedPrice;
  i++;
}
console.log(items);
