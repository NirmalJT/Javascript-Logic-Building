//For a given array with marks of students -> [85,97,44,37,76,60] find the avearage marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];

let sum = 0;
for (let mark of marks) {
  sum += mark;
}
let avearage = sum / marks.length;
console.log(`The average marks of the entire class is ${avearage}`);
//For a given array with prices of 5 items ->[250,645,300,900,50] all items have an offer of 10% off on them.change the array to store final price  after  applying offer.
//using for of loop
let prices = [250, 645, 300, 900, 50];
let index = 0;
for (let price of prices) {
  let discountedPrice = price / 10;
  console.log(discountedPrice);
  index++;
  prices[index - 1] = discountedPrice;
}
console.log(
  `The array after applying 10% discounted on the products are ${prices}`
);

//using for loop
let itemPrices = [250, 645, 300, 900, 50];

for (let i = 0; i < itemPrices.length; i++) {
  let Price10D = itemPrices[i] / 10;
  itemPrices[i] = Price10D;
}
console.log(`The array of prices after 10% discount is ${itemPrices}`);
