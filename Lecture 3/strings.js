console.log("Lets learn about strings and their methods");

let str = "Nirmal Jyoti Thakuria";

console.log(str);
console.log(str.length);
console.log(str[5], str[10], str[7]);
for (let val of str) {
  console.log(val);
}
// template literals
let specialString = `This is a special string`;
console.log(typeof specialString);

let obj = {
  item: "pen",
  price: 10,
};
console.log(`The cost of ${obj.item} is ${obj.price} rupees`); //using template literals
console.log("The cost of", obj.item, "is", obj.price, "rupees");
console.log(`hello this is the use of template literals ${1 + 3 + 5 + 5}`); //string interpolation

//new line and tab space in javascript
let whoAmI =
  "Hello i \n am software\tdeveloper i know many languages and technologies";

console.log(whoAmI);
//Some methods of strings
//methods dont change the original value of the string
//strings are immutable in javascript
let useMethodinString = "Hello Here We going to use string methods ";

console.log(useMethodinString.toLowerCase());
console.log(useMethodinString.toUpperCase());
console.log(useMethodinString.trim()); //remove whitepases from starting and begining of a string
let numbers = "0123456789";
let letters = "rojhfkdjhskdfhskdhfkhdfh";
console.log(numbers.slice(0, 6)); //not gonna include the ending element or last index
console.log(numbers.slice(3));
console.log(numbers.concat(letters));
console.log("hello"+numbers + letters);
let replaceM="ReplaceMethod"
console.log(replaceM.replace("M","R"))
let stringggg="helolololo"
console.log(stringggg.replace("helolololo","hiiiiiiiii"))
console.log(stringggg.replace("lo","bo"))
console.log(stringggg.replaceAll("lo","bo"))
 console.log(stringggg.charAt(7))